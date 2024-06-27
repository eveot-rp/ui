import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const d=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"5.05556",fill:"#027EF6"}),e.jsx("path",{d:"M7.76612 11.933L11.0164 15.1833",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16.4337 9.76611L11.0165 15.1833",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"5.05556",stroke:"#027EF6"})]});d.__docgenInfo={description:"@deprecated",methods:[],displayName:"IconCheckbox"};const l=({isActive:p=!1,onClick:h,children:u})=>e.jsxs("label",{className:"ev-checkbox-legacy",onClick:h,children:[e.jsx("div",{className:["ev-checkbox--box",p&&"ev-checkbox--box_active"].join(" "),children:e.jsx(d,{})}),e.jsx("span",{children:u})]});l.__docgenInfo={description:"@deprecated",methods:[],displayName:"CheckboxLegacy",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const g={title:"CheckboxLegacy",component:l,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isActive:!0,children:"Content",onClick:()=>console.log("click")}},t={args:{isActive:!1,children:"Content",onClick:()=>console.log("click")}};var s,r,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isActive: true,
    children: 'Content',
    onClick: () => console.log('click')
  }
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isActive: false,
    children: 'Content',
    onClick: () => console.log('click')
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const k=["IsActive","IsDeactivated"];export{o as IsActive,t as IsDeactivated,k as __namedExportsOrder,g as default};
