import{u as q}from"./ArrayPagination-67e7d626.js";import{ao as H,u as K,ap as t,ab as X,A as b,p as Z,B as f,w as J,q as d,X as S,C as Q,W as c,L as F,am as Y,an as ee,_ as te}from"./index-3d292dc4.js";import"./faker-dcfab09f.js";import{d as le,$ as ae,_ as se,e as v,c as y,L as oe,I as ne,a0 as i,a4 as I,j as e,a2 as a,a8 as O,Z as m,u as n,a1 as _,B as w,a6 as L,F as x,a5 as ue,a3 as ie,V as C}from"./vue-41465b3a.js";import{d as re}from"./dayjs.min-35912dac.js";import"./vuetify-7c124399.js";const de={class:"pa-3"},me={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},pe={class:"d-flex justify-end"},ce=le({__name:"Logs",setup(ge){const $=ae(),{t:p}=se(),V=H(),U=K(),j=v([{title:p("logs.filters.sortBy.id"),value:"id"},{title:p("logs.filters.sortBy.type"),value:"type"},{title:p("logs.filters.sortBy.message"),value:"message"},{title:p("logs.filters.sortBy.timestamp"),value:"timestamp"}]),h=v([{title:t[t.NORMAL],value:t.NORMAL},{title:t[t.INFO],value:t.INFO},{title:t[t.WARNING],value:t.WARNING},{title:t[t.CRITICAL],value:t.CRITICAL}]),u=v([t.NORMAL,t.INFO,t.WARNING,t.CRITICAL]),N=v(["id"]),E=y(()=>V.logs),B=y(()=>E.value.filter(l=>u.value.includes(l.type))),T=y(()=>u.value.length>0),k=y(()=>u.value.length===h.value.length),{paginatedResults:M,currentPage:r,pageCount:g}=q(B,30),A=()=>{$.push({name:"dashboard"})},W=l=>`logtype-${t[l?.type]?.toLowerCase()}`,G=l=>t[l.type],P=l=>re(l.timestamp*1e3).format(U.dateFormat),z=()=>{k.value?u.value=[]:u.value=h.value.map(l=>l.value)},R=l=>{l.key==="Escape"&&A()};return oe(()=>{document.addEventListener("keydown",R),X(()=>V.fetchLogs(),15e3),V.fetchLogs(-1)}),ne(()=>{document.removeEventListener("keydown",R)}),(l,o)=>(i(),I("div",de,[e(b,{"no-gutters":"",align:"center",justify:"center"},{default:a(()=>[e(f,null,{default:a(()=>[O("h1",me,m(n(p)("logs.title")),1)]),_:1}),e(f,null,{default:a(()=>[O("div",pe,[e(J,{icon:"mdi-close",variant:"plain",onClick:A})])]),_:1})]),_:1}),e(Z,null,{default:a(()=>[e(d,null,{default:a(()=>[e(b,null,{default:a(()=>[e(f,{cols:"6"},{default:a(()=>[e(S,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=s=>u.value=s),items:h.value,label:l.$t("logs.filters.type"),"hide-details":"",multiple:"",chips:""},{"prepend-item":a(()=>[e(d,{title:l.$t("common.selectAll"),onClick:z},{prepend:a(()=>[e(Q,{indeterminate:T.value&&!k.value,"model-value":T.value},null,8,["indeterminate","model-value"])]),_:1},8,["title"]),e(c)]),_:1},8,["modelValue","items","label"])]),_:1}),e(f,{cols:"6"},{default:a(()=>[e(S,{modelValue:N.value,"onUpdate:modelValue":o[1]||(o[1]=s=>N.value=s),items:j.value,label:l.$t("logs.filters.sortBy.label"),"hide-details":"",multiple:"",chips:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})]),_:1}),e(c,{class:"my-3",thickness:"5"}),n(g)>1?(i(),_(d,{key:0},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[2]||(o[2]=s=>w(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):L("",!0),e(c),(i(!0),I(x,null,ue(n(M),(s,D)=>(i(),I(x,null,[D>0?(i(),_(c,{key:0})):L("",!0),e(d,{class:ie(W(s))},{default:a(()=>[e(Y,null,{default:a(()=>[C(m(s.id)+") "+m(s.message),1)]),_:2},1024),e(ee,null,{default:a(()=>[C(m(G(s))+" | "+m(P(s)),1)]),_:2},1024)]),_:2},1032,["class"])],64))),256)),B.value.length===0?(i(),_(d,{key:1},{default:a(()=>[C(m(l.$t("logs.emptyLogList")),1)]),_:1})):L("",!0),e(c),n(g)>1?(i(),_(d,{key:2},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[3]||(o[3]=s=>w(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):L("",!0)]),_:1})]))}});const he=te(ce,[["__scopeId","data-v-569a7d95"]]);export{he as default};