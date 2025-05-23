import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:url_launcher/url_launcher.dart';

Future<String> getWorkflowRuns() async {
  final httpPackageUrl = Uri.https(
    'api.github.com',
    '/repos/liuedg1/LoftilyClient/actions/runs',
    {'per_page': '15'},
  );
  final httpPackageInfo = await http.read(httpPackageUrl);
  return httpPackageInfo;
}

Future<List<dynamic>> fetchArtifacts(String artifactsUrl) async {
  final uri = Uri.parse(artifactsUrl);
  final response = await http.get(uri);
  if (response.statusCode == 200) {
    final Map<String, dynamic> json = jsonDecode(response.body);
    return json['artifacts'] ?? [];
  } else {
    throw Exception('Failed to load artifacts ${response.statusCode}');
  }
}

void download(String url) async {
  final Uri uri = Uri.parse(url);
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  } else {
    throw 'Could not launch $url';
  }
}