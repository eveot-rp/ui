import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as p}from"./index-M8lrpcL7.js";import{r as f}from"./index-RYns6xqu.js";import"./index-rDsjxskc.js";import"./colors-NuYFRpnV.js";const r=[[28,31,33],[39,42,44],[49,46,44],[53,38,28],[75,50,31],[92,59,36],[109,76,53],[107,80,59],[118,92,69],[127,104,78],[153,129,93],[167,147,105],[175,156,112],[187,160,99],[214,185,123],[218,195,142],[159,127,89],[132,80,57],[104,43,31],[97,18,12],[100,15,10],[124,20,15],[160,46,25],[182,75,40],[162,80,47],[170,78,43],[98,98,98],[128,128,128],[170,170,170],[197,197,197],[70,57,85],[90,63,107],[118,60,118],[237,116,227],[235,75,147],[242,153,188],[4,149,158],[2,95,134],[2,57,116],[63,161,106],[33,124,97],[24,92,85],[182,192,52],[112,169,11],[67,157,19],[220,184,87],[229,177,3],[230,145,2],[242,136,49],[251,128,87],[226,139,88],[209,89,60],[206,49,32],[173,9,3],[136,3,2],[31,24,20],[41,31,25],[46,34,27],[55,41,30],[46,34,24],[35,27,21],[2,2,2],[112,108,102],[157,122,80]],d=({perSwitch:n=6,disabled:x,onChange:l,className:_,currentIndex:u,...C})=>{const[a,c]=f.useState(0),m=o=>{let e;o==="prev"?e=(a-1+r.length)%r.length:e=(a+1)%r.length,c(e),l&&l(e)},i=(a-Math.floor(n/2)+r.length)%r.length,b=Array.from({length:n},(o,e)=>{const S=(i+e)%r.length;return r[S]});f.useEffect(()=>{c(u||0)},[u]);const y=o=>{const e=(i+o)%r.length;c(e),l&&l(e)};return t.jsxs("div",{className:`ev-color-selector ${_??""}`,"data-disabled":x,...C,children:[t.jsx(p,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>m("prev")}),t.jsx("div",{className:"ev-color-selector-colors",children:b.map((o,e)=>t.jsx("div",{onClick:()=>y(e),style:{backgroundColor:`rgb(${o.join(", ")})`},className:`ev-components--color-switcher_value ${a===(i+e)%r.length&&"ev-components--color-switcher_value--active"}`},e))}),t.jsx(p,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>m("next")})]})};try{d.displayName="ColorSelector",d.__docgenInfo={description:"",displayName:"ColorSelector",props:{perSwitch:{defaultValue:{value:"6"},description:"",name:"perSwitch",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const V={component:d,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{}};var g,h,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,V as default};
