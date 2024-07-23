import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./index-CS_nzw7_.js";import{T as y}from"./index-C_8QbhUp.js";import{r as d}from"./index-RYns6xqu.js";const i=({items:e,disabled:f,onChange:o,className:b,currentId:g,width:T="12.5rem",...h})=>{const r=e.findIndex(s=>s.id===g),[t,l]=d.useState(0),c=s=>{l(s==="prev"?(t+e.length-1)%e.length:(t+1)%e.length)};return d.useEffect(()=>{o&&o(e[t].id)},[t]),d.useEffect(()=>{r!==t&&e[r]&&l(r)},[r]),a.jsxs("div",{className:`ev-text-selector ${b}`,"data-disabled":f,style:{width:T},...h,children:[a.jsx(u,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>c("prev")}),a.jsx(y,{className:"ev-text-selector-value",size:"subheading",children:e[t]&&e[t].label}),a.jsx(u,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>c("next")})]})};try{i.displayName="TextSelector",i.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ id: number; label: string; }[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentId:{defaultValue:null,description:"",name:"currentId",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const q={component:i,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},n={args:{items:[{id:352,label:"Text 1"},{id:455,label:"Text 2"},{id:3,label:"Text 3"}]}};var m,p,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,q as default};
