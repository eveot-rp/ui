import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./index-CS_nzw7_.js";import{T as _}from"./index-C_8QbhUp.js";import{r as m}from"./index-RYns6xqu.js";const d=({items:e,disabled:b,onChange:i,className:g,currentId:T,width:h="12.5rem",...y})=>{const o=e.findIndex(s=>s.id===T),r=o!==-1?o:0,[t,l]=m.useState(r),c=s=>{l(s==="prev"?(t+e.length-1)%e.length:(t+1)%e.length),i&&i(e[t].id)};return m.useEffect(()=>{r!==t&&e[r]&&l(r)},[r]),a.jsxs("div",{className:`ev-text-selector ${g}`,"data-disabled":b,style:{width:h},...y,children:[a.jsx(u,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>c("prev")}),a.jsx(_,{className:"ev-text-selector-value",size:"subheading",children:e[t]&&e[t].label}),a.jsx(u,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>c("next")})]})};try{d.displayName="TextSelector",d.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ id: number; label: string; }[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentId:{defaultValue:null,description:"",name:"currentId",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const j={component:d,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},n={args:{items:[{id:352,label:"Text 1"},{id:455,label:"Text 2"},{id:3,label:"Text 3"}]}};var p,x,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,j as default};
