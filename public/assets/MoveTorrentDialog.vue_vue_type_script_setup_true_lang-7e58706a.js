import{d as _}from"./dayjs.min-a2bbcebe.js";import{as as q,ac as Z,g as L,K as Q,d as O,r as X,c as E,M as tt,a1 as K,a2 as A,a3 as P,m as k,W as j,Z as F,u as I,Y as et,a7 as st,an as nt,B as rt}from"./vue-449c15af.js";import{q as ot,y as it,r as at,h as ut,i as dt,s as lt,t as U,v as ht,m as mt,w as W,j as ct,x as ft}from"./index-ff5f9877.js";import"./faker-c43f92d4.js";var z={exports:{}};(function(C,D){(function(h,a){C.exports=a()})(q,function(){var h,a,w=1e3,c=6e4,S=36e5,p=864e5,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,l=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,$={years:r,months:l,days:p,hours:S,minutes:c,seconds:w,milliseconds:1,weeks:6048e5},b=function(s){return s instanceof x},u=function(s,e,t){return new x(s,t,e.$l)},o=function(s){return a.p(s)+"s"},v=function(s){return s<0},g=function(s){return v(s)?Math.ceil(s):Math.floor(s)},H=function(s){return Math.abs(s)},Y=function(s,e){return s?v(s)?{negative:!0,format:""+H(s)+e}:{negative:!1,format:""+s+e}:{negative:!1,format:""}},x=function(){function s(t,n,d){var i=this;if(this.$d={},this.$l=d,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),n)return u(t*$[o(n)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(T){i.$d[o(T)]=t[T]}),this.calMilliseconds(),this;if(typeof t=="string"){var m=t.match(y);if(m){var f=m.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=f[0],this.$d.months=f[1],this.$d.weeks=f[2],this.$d.days=f[3],this.$d.hours=f[4],this.$d.minutes=f[5],this.$d.seconds=f[6],this.calMilliseconds(),this}}return this}var e=s.prototype;return e.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(n,d){return n+(t.$d[d]||0)*$[d]},0)},e.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=g(t/r),t%=r,this.$d.months=g(t/l),t%=l,this.$d.days=g(t/p),t%=p,this.$d.hours=g(t/S),t%=S,this.$d.minutes=g(t/c),t%=c,this.$d.seconds=g(t/w),t%=w,this.$d.milliseconds=t},e.toISOString=function(){var t=Y(this.$d.years,"Y"),n=Y(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var i=Y(d,"D"),m=Y(this.$d.hours,"H"),f=Y(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3,T=Math.round(1e3*T)/1e3);var B=Y(T,"S"),J=t.negative||n.negative||i.negative||m.negative||f.negative||B.negative,R=m.format||f.format||B.format?"T":"",N=(J?"-":"")+"P"+t.format+n.format+i.format+R+m.format+f.format+B.format;return N==="P"||N==="-P"?"P0D":N},e.toJSON=function(){return this.toISOString()},e.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return n.replace(V,function(i,m){return m||String(d[i])})},e.as=function(t){return this.$ms/$[o(t)]},e.get=function(t){var n=this.$ms,d=o(t);return d==="milliseconds"?n%=1e3:n=d==="weeks"?g(n/$[d]):this.$d[d],n||0},e.add=function(t,n,d){var i;return i=n?t*$[o(n)]:b(t)?t.$ms:u(t,this).$ms,u(this.$ms+i*(d?-1:1),this)},e.subtract=function(t,n){return this.add(t,n,!0)},e.locale=function(t){var n=this.clone();return n.$l=t,n},e.clone=function(){return u(this.$ms,this)},e.humanize=function(t){return h().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},e.valueOf=function(){return this.asMilliseconds()},e.milliseconds=function(){return this.get("milliseconds")},e.asMilliseconds=function(){return this.as("milliseconds")},e.seconds=function(){return this.get("seconds")},e.asSeconds=function(){return this.as("seconds")},e.minutes=function(){return this.get("minutes")},e.asMinutes=function(){return this.as("minutes")},e.hours=function(){return this.get("hours")},e.asHours=function(){return this.as("hours")},e.days=function(){return this.get("days")},e.asDays=function(){return this.as("days")},e.weeks=function(){return this.get("weeks")},e.asWeeks=function(){return this.as("weeks")},e.months=function(){return this.get("months")},e.asMonths=function(){return this.as("months")},e.years=function(){return this.get("years")},e.asYears=function(){return this.as("years")},s}(),M=function(s,e,t){return s.add(e.years()*t,"y").add(e.months()*t,"M").add(e.days()*t,"d").add(e.hours()*t,"h").add(e.minutes()*t,"m").add(e.seconds()*t,"s").add(e.milliseconds()*t,"ms")};return function(s,e,t){h=t,a=t().$utils(),t.duration=function(i,m){var f=t.locale();return u(i,{$l:f},m)},t.isDuration=b;var n=e.prototype.add,d=e.prototype.subtract;e.prototype.add=function(i,m){return b(i)?M(this,i,1):n.bind(this)(i,m)},e.prototype.subtract=function(i,m){return b(i)?M(this,i,-1):d.bind(this)(i,m)}}})})(z);var $t=z.exports;const vt=Z($t);var G={exports:{}};(function(C,D){(function(h,a){C.exports=a()})(q,function(){return function(h,a,w){h=h||{};var c=a.prototype,S={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function p(r,l,y,$){return c.fromToBase(r,l,y,$)}w.en.relativeTime=S,c.fromToBase=function(r,l,y,$,b){for(var u,o,v,g=y.$locale().relativeTime||S,H=h.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],Y=H.length,x=0;x<Y;x+=1){var M=H[x];M.d&&(u=$?w(r).diff(y,M.d,!0):y.diff(r,M.d,!0));var s=(h.rounding||Math.round)(Math.abs(u));if(v=u>0,s<=M.r||!M.r){s<=1&&x>0&&(M=H[x-1]);var e=g[M.l];b&&(s=b(""+s)),o=typeof e=="string"?e.replace("%d",s):e(s,l,M.l,v);break}}if(l)return o;var t=v?g.future:g.past;return typeof t=="function"?t(o):t.replace("%s",o)},c.to=function(r,l){return p(r,l,this,!0)},c.from=function(r,l){return p(r,l,this)};var V=function(r){return r.$u?w.utc():w()};c.toNow=function(r){return this.to(V(this),r)},c.fromNow=function(r){return this.from(V(this),r)}}})})(G);var pt=G.exports;const yt=Z(pt);_.extend(vt);_.extend(yt);const Tt=L({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(C){const D=C,{isOpened:h}=ot(D.guid),{t:a}=Q(),w=it(),c=at(),S=O(),p=O(!1),V=X({newPath:""}),r=[u=>!!u||a("dialogs.moveTorrent.required")],l=E(()=>D.hashes.map(c.getTorrentByHash)),y=E(()=>{switch(D.mode){case"dl":return l.value[0]?.download_path;case"save":return l.value[0]?.savePath}});async function $(){await S.value?.validate(),p.value&&(await w.toggleAutoTmm(D.hashes,!1),await c.moveTorrents(D.mode,D.hashes,V.newPath),b())}const b=()=>{h.value=!1};return tt(()=>{V.newPath=y.value||""}),(u,o)=>(K(),A(ft,{modelValue:I(h),"onUpdate:modelValue":o[3]||(o[3]=v=>rt(h)?h.value=v:null)},{default:P(()=>[k(ct,null,{default:P(()=>[k(ut,null,{default:P(()=>[j(F(u.$t(`dialogs.moveTorrent.${u.mode}.title`)),1)]),_:1}),k(dt,null,{default:P(()=>[k(I(lt),{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=v=>p.value=v),ref_key:"form",ref:S,onSubmit:o[2]||(o[2]=et(()=>{},["prevent"]))},{default:P(()=>[y.value?(K(),A(U,{key:0,"model-value":y.value,disabled:"",label:u.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):st("",!0),k(U,{modelValue:V.newPath,"onUpdate:modelValue":o[0]||(o[0]=v=>V.newPath=v),rules:r,autofocus:"",label:u.$t("dialogs.moveTorrent.newPath"),onKeydown:nt($,["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),k(ht,null,{default:P(()=>[k(mt),k(W,{color:"error",onClick:b},{default:P(()=>[j(F(u.$t("common.cancel")),1)]),_:1}),k(W,{color:"accent",disabled:!p.value,onClick:$},{default:P(()=>[j(F(u.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{Tt as _};
