import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./index-CS_nzw7_.js";import{r as l}from"./index-RYns6xqu.js";const d=({items:e,disabled:x,onChange:s,reset:g,className:b,currentId:i,width:h="12.5rem",...y})=>{const[r,t]=l.useState(0);console.log("main render",r);const c=n=>{e&&t(n==="prev"?(r+e.length-1)%e.length:(r+1)%e.length)};return l.useEffect(()=>{if(s){console.log("onChange render");const n=e?e[r].id:0;s(n)}},[r]),l.useEffect(()=>{console.log("reset render"),t(0)},[g]),l.useEffect(()=>{if(!e)return;console.log("currentId render");const n=e==null?void 0:e.find(_=>_.id===i),T=n?e.indexOf(n):0;t(T)},[i]),console.log("end render",r),a.jsxs("div",{className:`ev-text-selector ${b}`,"data-disabled":x,style:{width:h},...y,children:[a.jsx(u,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>c("prev")}),a.jsx("div",{className:"ev-text-selector-value",children:e[r].label}),a.jsx(u,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>c("next")})]})};try{d.displayName="TextSelector",d.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ id: number; label: string; }[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentId:{defaultValue:null,description:"",name:"currentId",required:!1,type:{name:"number"}},reset:{defaultValue:null,description:"",name:"reset",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const I={component:d,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},o={args:{items:[{id:352,label:"Text 1"},{id:455,label:"Text 2"},{id:3,label:"Text 3"}]}};var p,m,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 352,
      label: 'Text 1'
    }, {
      id: 455,
      label: 'Text 2'
    }, {
      id: 3,
      label: 'Text 3'
    }]
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,I as default};
