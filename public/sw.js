if(!self.define){let s,e={};const o=(o,l)=>(o=new URL(o+".js",l).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let i={};const a=s=>o(s,n),t={module:{uri:n},exports:i,require:a};e[n]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(r(...s),i)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/ArrayPagination-239ec36a.js",revision:null},{url:"assets/Dashboard-3e6bc9ee.css",revision:null},{url:"assets/Dashboard-72685607.js",revision:null},{url:"assets/dayjs.min-a47071b1.js",revision:null},{url:"assets/index-25e95c11.js",revision:null},{url:"assets/index-c62ed6a2.js",revision:null},{url:"assets/index-fbe6e0e5.css",revision:null},{url:"assets/Login-b085a7e6.js",revision:null},{url:"assets/Logs-0c034e14.js",revision:null},{url:"assets/Logs-81bba6a1.css",revision:null},{url:"assets/MagnetHandler-28af1a3f.js",revision:null},{url:"assets/materialdesignicons-webfont-28c8f97f.woff",revision:null},{url:"assets/materialdesignicons-webfont-31010194.woff2",revision:null},{url:"assets/MoveTorrentDialog.vue_vue_type_script_setup_true_lang-c4732cfc.js",revision:null},{url:"assets/PasswordField.vue_vue_type_script_setup_true_lang-5259ff16.js",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-adba67d2.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-0a32035a.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-greek-400-normal-076b9dc1.woff",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-latin-400-normal-a9fdbefa.woff",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-c2b94086.woff",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-52f28cb4.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-654b02dc.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-970cd84c.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-aa28d99c.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-122802d0.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-8457a849.woff",revision:null},{url:"assets/roboto-mono-latin-400-normal-32c8a74a.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-4940016c.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-93b6c99d.woff2",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-bb99bbb3.woff",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-4039566f.woff2",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-5e6499a6.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-d2390f1a.woff",revision:null},{url:"assets/rss-83d8ed9e.js",revision:null},{url:"assets/RssArticles-0e593aca.css",revision:null},{url:"assets/RssArticles-3041bf72.js",revision:null},{url:"assets/SearchEngine-f4e78393.js",revision:null},{url:"assets/Settings-2991a047.js",revision:null},{url:"assets/Settings-77ebc46f.css",revision:null},{url:"assets/TorrentDetail-9b38ea6e.css",revision:null},{url:"assets/TorrentDetail-f5da230a.js",revision:null},{url:"assets/vue-aae79161.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"4c871c93abb4f77c3820b5f6cb020f35"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
