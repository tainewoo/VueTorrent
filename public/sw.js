if(!self.define){let s,o={};const l=(l,e)=>(l=new URL(l+".js",e).href,o[l]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=o,document.head.appendChild(s)}else s=l,importScripts(l),o()})).then((()=>{let s=o[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(e,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let r={};const a=s=>l(s,n),t={module:{uri:n},exports:r,require:a};o[n]=Promise.all(e.map((s=>t[s]||a(s)))).then((s=>(i(...s),r)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-1f7221f2.js",revision:null},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-6aa41dbc.js",revision:null},{url:"assets/ConfirmDeleteModal-52cd7960.js",revision:null},{url:"assets/ConfirmShutdownModal-5bab06de.js",revision:null},{url:"assets/CreateNewCategoryDialog-753eb9fa.js",revision:null},{url:"assets/CreateNewTagDialog-47bbbc35.js",revision:null},{url:"assets/Dashboard-8f71d4f6.js",revision:null},{url:"assets/Dashboard-be52ce27.css",revision:null},{url:"assets/FeedForm-4c62ee6c.js",revision:null},{url:"assets/FullScreenModal-b7264cb2.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-44c9f94b.js",revision:null},{url:"assets/index-c9bc623b.css",revision:null},{url:"assets/index-ffe23009.js",revision:null},{url:"assets/Login-b7e5db23.js",revision:null},{url:"assets/Logs-b4ae3406.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/MagnetHandler-d489405a.js",revision:null},{url:"assets/Modal-f5e0cc6c.js",revision:null},{url:"assets/RenameTorrentFileModal-1229ed02.js",revision:null},{url:"assets/RenameTorrentModal-6332bb6b.js",revision:null},{url:"assets/roboto-latin-100-12823d58.woff2",revision:null},{url:"assets/roboto-latin-100-c4ead4de.woff",revision:null},{url:"assets/roboto-latin-100italic-26c91ea4.woff2",revision:null},{url:"assets/roboto-latin-100italic-5a3a9840.woff",revision:null},{url:"assets/roboto-latin-300-29f6da0a.woff2",revision:null},{url:"assets/roboto-latin-300-76b05400.woff",revision:null},{url:"assets/roboto-latin-300italic-0be0ae6e.woff",revision:null},{url:"assets/roboto-latin-300italic-9e02524e.woff2",revision:null},{url:"assets/roboto-latin-400-48c3fa6f.woff2",revision:null},{url:"assets/roboto-latin-400-c1dc87f9.woff",revision:null},{url:"assets/roboto-latin-400italic-401e6c25.woff2",revision:null},{url:"assets/roboto-latin-400italic-80815efe.woff",revision:null},{url:"assets/roboto-latin-500-24369e1b.woff2",revision:null},{url:"assets/roboto-latin-500-ba98f991.woff",revision:null},{url:"assets/roboto-latin-500italic-6f2974a3.woff",revision:null},{url:"assets/roboto-latin-500italic-8688b620.woff2",revision:null},{url:"assets/roboto-latin-700-806ea46c.woff",revision:null},{url:"assets/roboto-latin-700-b4d07892.woff2",revision:null},{url:"assets/roboto-latin-700italic-5cc2e477.woff2",revision:null},{url:"assets/roboto-latin-700italic-eec14260.woff",revision:null},{url:"assets/roboto-latin-900-e8586f9d.woff",revision:null},{url:"assets/roboto-latin-900-edcdf3f6.woff2",revision:null},{url:"assets/roboto-latin-900italic-6a80d9cb.woff",revision:null},{url:"assets/roboto-latin-900italic-95e60b93.woff2",revision:null},{url:"assets/roboto-mono-latin-100-5865fbd9.woff2",revision:null},{url:"assets/roboto-mono-latin-100-c3cc63b5.woff",revision:null},{url:"assets/roboto-mono-latin-100italic-4257f6ea.woff",revision:null},{url:"assets/roboto-mono-latin-100italic-68808fcc.woff2",revision:null},{url:"assets/roboto-mono-latin-200-8986be16.woff2",revision:null},{url:"assets/roboto-mono-latin-200-a4c796b2.woff",revision:null},{url:"assets/roboto-mono-latin-200italic-763de028.woff2",revision:null},{url:"assets/roboto-mono-latin-200italic-daee63d8.woff",revision:null},{url:"assets/roboto-mono-latin-300-238cd9e4.woff",revision:null},{url:"assets/roboto-mono-latin-300-82c1ccab.woff2",revision:null},{url:"assets/roboto-mono-latin-300italic-c22b392c.woff2",revision:null},{url:"assets/roboto-mono-latin-300italic-e9dcb51c.woff",revision:null},{url:"assets/roboto-mono-latin-400-2dfc0e86.woff",revision:null},{url:"assets/roboto-mono-latin-400-e1fd013a.woff2",revision:null},{url:"assets/roboto-mono-latin-400italic-68b1c71d.woff2",revision:null},{url:"assets/roboto-mono-latin-400italic-6b7eccaf.woff",revision:null},{url:"assets/roboto-mono-latin-500-34e45e19.woff2",revision:null},{url:"assets/roboto-mono-latin-500-eaf1ad25.woff",revision:null},{url:"assets/roboto-mono-latin-500italic-c8ab2daa.woff2",revision:null},{url:"assets/roboto-mono-latin-500italic-fd7832bf.woff",revision:null},{url:"assets/roboto-mono-latin-600-4828d4a5.woff",revision:null},{url:"assets/roboto-mono-latin-600-61018f4d.woff2",revision:null},{url:"assets/roboto-mono-latin-600italic-8800f1c9.woff",revision:null},{url:"assets/roboto-mono-latin-600italic-c464aa55.woff2",revision:null},{url:"assets/roboto-mono-latin-700-44a99279.woff2",revision:null},{url:"assets/roboto-mono-latin-700-8545fddd.woff",revision:null},{url:"assets/roboto-mono-latin-700italic-208cd5c0.woff2",revision:null},{url:"assets/roboto-mono-latin-700italic-84c8f09b.woff",revision:null},{url:"assets/RssArticles-2f4f5f45.js",revision:null},{url:"assets/RssArticles-fc2a926c.css",revision:null},{url:"assets/RuleForm-9d9d85fe.js",revision:null},{url:"assets/SearchEngine-75292b59.css",revision:null},{url:"assets/SearchEngine-d0e8b692.js",revision:null},{url:"assets/SearchPluginManager-28840e68.js",revision:null},{url:"assets/Settings-1581d381.js",revision:null},{url:"assets/Settings-68c411f4.css",revision:null},{url:"assets/ShareLimitInput-206a974e.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitModal-24549ae6.js",revision:null},{url:"assets/ShareLimitModal-cbfc4684.css",revision:null},{url:"assets/SpeedLimitModal-0a3d0f7c.js",revision:null},{url:"assets/TorrentDetail-0e00f2dd.css",revision:null},{url:"assets/TorrentDetail-e3e16f46.js",revision:null},{url:"assets/VCheckbox-04f4914f.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-20657d24.js",revision:null},{url:"assets/VDataTable-51e08cf7.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-9fede875.js",revision:null},{url:"assets/VForm-68414474.js",revision:null},{url:"assets/VTab-6d2ee3b7.css",revision:null},{url:"assets/VTab-beb2444c.js",revision:null},{url:"assets/VTabItem-edc14fee.js",revision:null},{url:"assets/VTextarea-64b487a8.css",revision:null},{url:"assets/VTextarea-f68dae76.js",revision:null},{url:"assets/vue-b220ace6.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"8397b67348374c6b719c83a8a0c9d60b"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
