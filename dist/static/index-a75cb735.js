import{_ as a,h as n,i as e,o as s,am as t,b as r,y as d,a as i,j as o,k as c}from"./index-5a19c571.js";const p={class:"app-container center"};const u=a({},[["render",function(a,r){const d=t;return s(),n("div",p,[e(d,{description:"Admin 权限可见"})])}],["__scopeId","data-v-5a78679f"]]),m={class:"app-container center"};const f=a({},[["render",function(a,r){const d=t;return s(),n("div",m,[e(d,{description:"Editor 权限可见"})])}],["__scopeId","data-v-f3d24ef0"]]),l=r({__name:"index",setup(a){const n=d(),e=i("admin");return n.roles.includes("admin")||(e.value="editor"),(a,n)=>(s(),o(c("admin"===e.value?u:f)))}});export{l as default};
