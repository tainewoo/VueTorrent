import{av as s,v as r,aR as n}from"./index-00pJUZFm.js";import{g as u,aa as i,$ as m,M as p}from"./vue-EkRptf2M.js";import"./vuetify-FD_HUlNY.js";const g=u({__name:"MagnetHandler",setup(d){const a=i(),o=m();return p(async()=>{const e=decodeURIComponent(a.params.url);if(e.startsWith("magnet:")){const t=s();t.isFirstInit=!1,t.pushTorrentToQueue(e),r().createDialog(n,{})}await o.push({name:"dashboard"})}),()=>{}}});export{g as default};