import{_ as u}from"./entry.AYb3bxoq.js";import{v as y,t as f}from"./index.yZtjpVdQ.js";import"./MDCRenderer.vb4U-y7g.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./Card.CG_WFpgt.js";const d={theme:{},async highlighter(r,s,e,h){var a,i;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return u(()=>import("./mdc-highlighter.H0MH2a9G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default(r,s,e,h));try{return await $fetch("/api/_mdc/highlight",{params:{code:r,lang:s,theme:JSON.stringify(e),options:JSON.stringify(h)}})}catch(t){if(((a=t==null?void 0:t.response)==null?void 0:a.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(i=this.highlighter)==null?void 0:i.call(this,r,s,e,h)}return Promise.resolve({tree:[{type:"text",value:r}],className:"",style:""})}};function N(r={}){const s={...d,...r};return async e=>{const h=[],a=[];y(e,i=>{var t,l;return["pre","code"].includes(i.tagName)&&!!((t=i.properties)!=null&&t.language||(l=i.properties)!=null&&l.highlights)},i=>{const t=i,l=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],g=s.highlighter(f(i),t.properties.language,s.theme,{highlights:l.filter(Boolean),meta:t.properties.meta}).then(({tree:o,className:m,style:p,inlineStyle:c})=>{var n;t.properties.className=((t.properties.className||"")+" "+m).trim(),t.properties.style=((t.properties.style||"")+" "+c).trim(),((n=t.children[0])==null?void 0:n.tagName)==="code"?t.children[0].children=o:t.children=o[0].children||o,p&&a.push(p)});h.push(g)}),h.length&&(await Promise.all(h),e.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(a.join(""))}],properties:{}}))}}const _=r=>{const s=r.split("}").filter(e=>!!e.trim()).map(e=>e.trim()+"}");return Array.from(new Set(s)).join("")},A={},x={highlight:{instance:N,options:{}}},I={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"}};export{I as highlight,x as rehypePlugins,A as remarkPlugins};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./mdc-highlighter.H0MH2a9G.js","./entry.AYb3bxoq.js","./entry.awUbQcpJ.css","./mdc-configs.-tOr16rn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
