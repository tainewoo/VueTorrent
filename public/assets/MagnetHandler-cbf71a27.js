import{s as a,a6 as r}from"./index-4dcfabf7.js";import"./vue-b220ace6.js";const s={name:"MagnetHandler",mixins:[r],methods:{decodeMagnet(e){return e.startsWith("magnet:?")?e:this.decodeMagnet(decodeURIComponent(e))}},created(){const e=new RegExp("^/download=(.+?)(?:/(?=$))?$","is");let t=this.decodeMagnet(e.exec(this.$route.fullPath)[1]);this.createModal("AddModal",{initialMagnet:t}),this.$router.push({name:"dashboard"})}};var o=function(){var t=this,n=t._self._c;return n("h1",{staticClass:"text-center mt-5"},[t._v("MagnetHandler")])},d=[],l=a(s,o,d,!1,null,null,null,null);const m=l.exports;export{m as default};
