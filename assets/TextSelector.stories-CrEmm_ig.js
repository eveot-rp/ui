import{j as n}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./index-CS_nzw7_.js";import{r as l}from"./index-RYns6xqu.js";const i=({items:e,disabled:b,onChange:o,reset:g,className:y,value:d,width:h="12.5rem",...T})=>{const[t,r]=l.useState(d||0),c=a=>{e&&r(a==="prev"?(t+e.length-1)%e.length:(t+1)%e.length)};l.useEffect(()=>{if(o){const a=e?e[t].id:0;o(a)}},[t]),l.useEffect(()=>{r(0)},[g]),l.useEffect(()=>{r(d||0)},[d]);const u=e==null?void 0:e.find((a,_)=>_===t);return u?n.jsxs("div",{className:`ev-text-selector ${y}`,"data-disabled":b,style:{width:h},...T,children:[n.jsx(m,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>c("prev")}),n.jsx("div",{className:"ev-text-selector-value",children:u.label}),n.jsx(m,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>c("next")})]}):null};try{i.displayName="TextSelector",i.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"{ id: number; label: string; }[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},reset:{defaultValue:null,description:"",name:"reset",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const j={component:i,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},s={args:{items:[{id:"1",label:"Text 1"},{id:"2",label:"Text 2"},{id:"3",label:"Text 3"}]}};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Text 1'
    }, {
      id: '2',
      label: 'Text 2'
    }, {
      id: '3',
      label: 'Text 3'
    }]
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,j as default};
