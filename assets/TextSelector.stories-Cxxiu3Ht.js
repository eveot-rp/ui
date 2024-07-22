import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as f}from"./index-CS_nzw7_.js";import{r as l}from"./index-RYns6xqu.js";const o=({items:e,disabled:g,onChange:i,reset:y,className:h,currentId:c,width:T="12.5rem",..._})=>{const[t,n]=l.useState(0),u=r=>{e&&n(r==="prev"?(t+e.length-1)%e.length:(t+1)%e.length)};l.useEffect(()=>{if(i){const r=e?e[t].id:0;i(r)}},[t]),l.useEffect(()=>{n(0)},[y]),l.useEffect(()=>{const r=e==null?void 0:e.find(v=>v.id===c),s=r?e==null?void 0:e.indexOf(r):0;n(s||0)},[c]);const p=e==null?void 0:e.find((r,s)=>s===t);return p?a.jsxs("div",{className:`ev-text-selector ${h}`,"data-disabled":g,style:{width:T},..._,children:[a.jsx(f,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>u("prev")}),a.jsx("div",{className:"ev-text-selector-value",children:p.label}),a.jsx(f,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>u("next")})]}):null};try{o.displayName="TextSelector",o.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"{ id: number; label: string; }[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentId:{defaultValue:null,description:"",name:"currentId",required:!1,type:{name:"number"}},reset:{defaultValue:null,description:"",name:"reset",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const j={component:o,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},d={args:{items:[{id:352,label:"Text 1"},{id:455,label:"Text 2"},{id:3,label:"Text 3"}]}};var m,x,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const E=["Default"];export{d as Default,E as __namedExportsOrder,j as default};
