if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-5e6c284c.js",revision:null},{url:"assets/AddModal-bb58f6ae.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-41ff0dca.js",revision:null},{url:"assets/ConfirmDeleteModal-675e1b88.js",revision:null},{url:"assets/ConfirmShutdownModal-f43f3b97.js",revision:null},{url:"assets/CreateCategoryDialog-f7de1d8c.js",revision:null},{url:"assets/CreateTagDialog-984450e1.js",revision:null},{url:"assets/Dashboard-200dd5c8.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-6c454567.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-02f2abaf.css",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-3a6b9952.js",revision:null},{url:"assets/Login-47a1267a.js",revision:null},{url:"assets/MagnetHandler-b4c0aff0.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-295629b4.js",revision:null},{url:"assets/RssArticles-0597ba48.js",revision:null},{url:"assets/RssArticles-e9eecac7.css",revision:null},{url:"assets/RuleForm-3ff88141.js",revision:null},{url:"assets/SearchEngine-0896b960.css",revision:null},{url:"assets/SearchEngine-40da8889.js",revision:null},{url:"assets/SearchPluginManager-226a05b5.js",revision:null},{url:"assets/Settings-0d2aa0d8.js",revision:null},{url:"assets/Settings-78bde0b4.css",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-d8ce3f49.js",revision:null},{url:"assets/ShareLimitModal-122db0c2.css",revision:null},{url:"assets/ShareLimitModal-d14d2c79.js",revision:null},{url:"assets/SpeedLimitModal-699efa8c.js",revision:null},{url:"assets/TorrentDetail-5c6fa5ec.css",revision:null},{url:"assets/TorrentDetail-ed284292.js",revision:null},{url:"assets/VCheckbox-41cae662.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-4c14ecce.js",revision:null},{url:"assets/VDataTable-87c14398.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-9b232add.js",revision:null},{url:"assets/VForm-6c2859b0.js",revision:null},{url:"assets/VTabItem-608f49ee.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTextarea-e1f68c9b.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"9aa8faa8058d9e8ad1a47a269600d936"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
