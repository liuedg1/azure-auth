import 'dart:convert';

import 'package:flutter/material.dart';

import 'network_util.dart';

void main() {
  runApp(const MyPage());
}

class MyPage extends StatelessWidget {
  const MyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Loftily Client Artifacts Download',
      theme: ThemeData(colorScheme: const ColorScheme.light()),
      darkTheme: ThemeData(colorScheme: const ColorScheme.dark()),
      themeMode: ThemeMode.system,
      home: const DownloadPage(title: 'Loftily Client Artifacts Download'),
    );
  }
}

class DownloadPage extends StatefulWidget {
  const DownloadPage({super.key, required this.title});

  final String title;

  @override
  State<DownloadPage> createState() => _DownloadPageState();
}

class _DownloadPageState extends State<DownloadPage> {

  late Future<String> _runsFuture;

  @override
  void initState() {
    _runsFuture = getWorkflowRuns();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 4.0,
        shadowColor: const Color.fromARGB(255, 0, 0, 0),
        title: Text(widget.title, style: Theme.of(context).textTheme.titleLarge),
      ),
      body: FutureBuilder<String>(
        future: _runsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Padding(
              padding: EdgeInsets.symmetric(vertical: 40.0),
              child: Center(child: CircularProgressIndicator()),
            );
          }
          if (snapshot.hasError) {
            return Center(child: SelectableText("Error: ${snapshot.error}"));
          }

          final Map<String, dynamic> json = jsonDecode(snapshot.data!);
          final List<dynamic> allRuns = json['workflow_runs'] ?? [];
          final List<dynamic> runs = allRuns.where((run) => run['status'] == 'completed').toList();

          return ListView.builder(
            itemCount: runs.length,
            itemExtent: 70.0,
            itemBuilder: (context, index) {
              final run = runs[index];
              final displayTitle = run['display_title'] ?? 'Unnamed';
              final updateAt = (run['updated_at'] as String).replaceAll("T", " ").replaceAll("Z", "");
              final String artifactsUrl = run['artifacts_url'] ?? '';

              return ListTile(
                title: SelectableText(displayTitle),
                subtitle: SelectableText('Update at: $updateAt'),
                trailing: IconButton(
                  icon: const Icon(Icons.download),
                  onPressed: () async {
                    try {
                      final artifacts = await fetchArtifacts(artifactsUrl);
                      if (artifacts.isEmpty) return;
                      String? url = artifacts[0]['archive_download_url'];
                      if (url != null) {
                        url = url
                            .replaceAll("api.github.com/repos", "nightly.link")
                            .replaceAll("/zip", ".zip");
                        download(url);
                      }
                    } catch (e) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('Error: $e')),
                      );
                    }
                  },
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: downloadLatest,
        tooltip: 'Download latest artifact',
        child: const Icon(Icons.download),
      ),
    );
  }

  Future<void> downloadLatest() async {
    try {
      final jsonStr = await _runsFuture;
      final Map<String, dynamic> json = jsonDecode(jsonStr);
      final List<dynamic> runs = (json['workflow_runs'] ?? [])
          .where((run) => run['status'] == 'completed')
          .toList();

      if (runs.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: SelectableText('No completed runs found')),
        );
        return;
      }

      final latestRun = runs.first;
      final String artifactsUrl = latestRun['artifacts_url'] ?? '';
      final artifacts = await fetchArtifacts(artifactsUrl);

      if (artifacts.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: SelectableText('No artifacts found for latest run')),
        );
        return;
      }

      String? downloadUrl = artifacts[0]['archive_download_url'] as String?;
      if (downloadUrl != null) {
        downloadUrl = downloadUrl
            .replaceAll("api.github.com/repos", "nightly.link")
            .replaceAll("/zip", ".zip");
        download(downloadUrl);
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: SelectableText('Error: $e')),
      );
    }
  }
}
