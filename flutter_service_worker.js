'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ac036608c5c402f92926505d0f0ab0e4",
".git/config": "04dd3299c45644a9f8a59f6d17dc05ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5ba1b841218dde0c3b5d75e09287d5e1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "33bd2dcaba0085a4c1766d74aaeb0497",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61f84b0006fd796b495e7fb170439564",
".git/logs/refs/heads/gh-pages": "1303ab0c8198bb4c8bb983bd71c0eb29",
".git/logs/refs/heads/main": "5297129666ab7251e2194c526372a78f",
".git/logs/refs/remotes/origin/gh-pages": "ced84c43a668bf1d8c8d79f84c337c1b",
".git/logs/refs/remotes/origin/main": "9077c3e818408ea34b0b2714a4dd5368",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/db8272c5d9169a8058470f0301743b74f3a37d": "3f2d2ab55a98a823dfa5e655a5a95876",
".git/objects/19/a6f15d005de679a6f366e22f0bf18c2f7e5555": "d6e8e1789f3a5bfa3607537c39677518",
".git/objects/1e/10dbb80616dac85a65382555c58503c28af22e": "78286de6df494c9df044a0bfe35509bf",
".git/objects/21/937688c22ce5e115d72931750867309f7ad57a": "5df8b3e1a723da5f32c1a87acf79c10e",
".git/objects/24/b6ce9a53fd8586b2a2cf162c90cd694af660ca": "7922be3cde17f1285687bb5cad68d4aa",
".git/objects/2d/4e4ab82fb3327de0adf4367b1716cc6b0a9009": "f3de28ffee9aff2a82554b59158dea80",
".git/objects/31/81d764acc59564b0e43fa6c070e3f334294955": "4a6fac2e84597e6dd789d7c4d1bd60b2",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/0dd364f8f33825d2a24ab520ba321ccb269a81": "f37a9291e09fb1cff65c592eac62402d",
".git/objects/4c/3ce6944067c22505314d44fce363e316ee94b8": "220a81807aa492b6ee2d044c0dc4ac85",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/a855a36dd7217869002eb6c26c20f05b8d605b": "43fd1d63a5297eeb9a129126611ece26",
".git/objects/51/5487231e019326c66e2b29bf06d63ecdca59e5": "6ef5b3ea1fd96ae66341c05df88d9565",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/9a4526431ced0699d66ff1d634bdaa2b45233f": "09e64a2c2613cb7c7c128c43785b5985",
".git/objects/5f/1c6890a8170dcaa81f5d1eb0c064e2a4bd72d5": "430b64ea06e120615dcc99b0446f7bb0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/21ce28e9345670b43c99e86ed0926dd2e95384": "e3acba5ae4442c327640bc1300638855",
".git/objects/66/b0d96f7daa9dd6c77178fc6bbe06c796d53914": "9e2fd8e0f42d4e9da1f165142eeee678",
".git/objects/67/ad285ed3c9e1d7dbf40e862d7ead0740028844": "cb48c6cc0ce9006f5297daff25025a8f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/572e109b09c938ef8f18310a5680ab1dab1d9e": "9a55c178ed88fe828aa916a41347c7e2",
".git/objects/74/6b30b0bbe412f46cefb479ffe957e2ee4cd39f": "77adcdcf9bab6254dd2bc220cb140394",
".git/objects/74/c6fe13a2431fd95b4f4bca85f142b520638f1d": "337f01dddc6a0f8142df63659ee3528c",
".git/objects/7f/c92f6d0592a53cd7c00a2fa8524735c531a498": "cc12d5f7df220c7cc7c4f79086b20ef8",
".git/objects/80/fa8dbeed0448cc133dae404ae22541e9bba6cd": "c5ab40339f39151c1164fad291986411",
".git/objects/83/2862e359ed545ee4873fd8a38b235df78b9e2e": "3c53402c098315b16723cd593e664b69",
".git/objects/84/0ef453f0c9c7ab1474d9327eacda021c6331a9": "23c4161c0779e97c57d40cb709a35942",
".git/objects/85/599cb9c99bb2b5aef228cb88b90abecc14d3f2": "7aeccc040348d93a0e2feebf897ed307",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dc1ef0718aff818b6f0830a22dd0f25f9f1aa2": "81f8056acfa0634100ce049754218952",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8d/27d16b904bf99390de8b6cbfc164a5002c438f": "0a809c49a71463ffbc19ff94d854e067",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/9d/43a4b86ac3bdb515c5cb38e9d1a40ca0829016": "210cfe7419eaacabd0d0565dee1fb263",
".git/objects/a2/db56e1046f8e26c99c01f5dace66682da8cea0": "08cf65813ddd58e2a005009d9bb0fe2a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/18843d49d3ccead3a5a9a9b6d275142ee5c577": "8f5c1f6b9fe2a2cce2f9968fd5c019fc",
".git/objects/b2/70d99364b4ae72bd1cb5bbb4de870cb0b159ae": "791f2370d1b96980de26a328d3a29036",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cd500460367078812a2ef2b32c1356a28af90c": "838114453efa269dbdda365987c01d46",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/64bedd3aa3c978c430b57e48c4351f278a5d0a": "685ccb266eb6451211f0573e1eedeacd",
".git/objects/c2/b0be69f228c0f30f3615f164455816a1d037b2": "9e96a5b11ebe60c83133a5fd1fb5f9a4",
".git/objects/c4/cea75c7ee138d1a6ccde29ec413d8b214b04ec": "9781e77a3a489453cf75ea3b4181d4e6",
".git/objects/cc/1dac21823fafffae2ea5b0c904d77092237173": "cfb4ebadfd2efcdf1b0cd1701393624f",
".git/objects/cd/6656bb23a721c79ae15a25ee0a7054cafb761b": "060ad4bdcae3f6461fbefa5b267b04f1",
".git/objects/ce/e50bd7fa98ce4c39b850dcc1ecf7cf527427d6": "c0062d2cdb81379550f619c7fbe823d7",
".git/objects/d0/edb3b8594e3fe364181c5b983d259321d09607": "f2ecb93debb5fc74a3b2a6be8631dceb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3c8b79847fcdb5d82f77096df14af506f858ec": "fc14e30385c418701b4aaaf6d54f45fb",
".git/objects/d5/daf54d84848c583b1b36efe8cafd9258c4ff8c": "6622f4d63c6220131f103719a29c4de7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/43f340d228380d0809b446083dfc066e5de60a": "5017d083e1bac03da9e48edb5c70a5b7",
".git/objects/d8/7e9c4ee762a3e581ed05985c3931ad880f24bc": "5179d311d16c2b74ae4140680d4c413a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/19854b3da05e6d23b64e44456a983aa32f6c40": "0b6e78dd0cab674fb198da46d233058e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/4b7eb166ba6393874632960a6c494d051ca56b": "6c87beba12be0f8288c42eae0e0361e8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/237d407c1d57e603c32023c50b96fa7040c70f": "227a58c1874cc9ffb415d911c64fbd7f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/3a89d52c0f8bc95c0b74dc2c5e1646610b2bf8": "6295ef8d9eacd3fe82288e74c4a03f3c",
".git/ORIG_HEAD": "98d13e0839e763541bca40228ee8a6be",
".git/refs/heads/gh-pages": "57c2f05cf74419570eb10ba4fbd57f7b",
".git/refs/heads/main": "67905e517304d0dc42955dd0950c7b01",
".git/refs/remotes/origin/gh-pages": "57c2f05cf74419570eb10ba4fbd57f7b",
".git/refs/remotes/origin/main": "67905e517304d0dc42955dd0950c7b01",
".idea/misc.xml": "31af864ab2ee6a2625d2dcfeeb433d8f",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "7cbb9dde74583c0e7ce5c6e303a42746",
".well-known/microsoft-identity-association.json": "96fd749b491a2ff72081a7a7cd3a14fd",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "19837a4181b4d2d07de85adb69a43824",
"assets/NOTICES": "403c2b03e395557796e5c6a49f0227ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7c83546281534adcd4ece5b0596486f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "786b7e0d35b619661cda885b4f52111d",
"/": "786b7e0d35b619661cda885b4f52111d",
"main.dart.js": "edaebc2bc47eee959da9c64b2e4ef439",
"manifest.json": "1e78eb1c3593fe4af81909fd47019531",
"README.md": "9be3946a0688d2fc9f1dbf9b96d69043",
"version.json": "e44ecc1c899d19aaab0ee68f5034a691"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
