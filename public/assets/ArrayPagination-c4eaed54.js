import{as as f}from"./index-8553dfd9.js";import{c as d,J as t}from"./vue-41465b3a.js";function h(a,e,o=1){const{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:c,isLastPage:i,next:g,prev:l}=f({total:()=>t(a).length,page:o,pageSize:()=>t(e)===-1?t(a).length:t(e)}),p=d(()=>{const s=(n.value-1)*t(e),P=s+r.value;return t(a).slice(s,P)});return{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:c,isLastPage:i,next:g,prev:l,paginatedResults:p}}export{h as u};