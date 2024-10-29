import{j as i}from"./jsx-runtime-DEdD30eg.js";import{C as o}from"./colors-NuYFRpnV.js";import"./index-RYns6xqu.js";const a=({size:c="md",background:e={color:"b500",colorHover:"b400",colorActive:"p500",colorDisabled:"b500"},radio:l={color:"b300",colorHover:"b200",colorActive:"b000",colorDisabled:"b300"},toggle:d,disabled:v,onToggle:b,className:m,...p})=>i.jsx("div",{className:`ev-switch ${m??""}`,"data-size":c,"data-toggle":d,"data-disabled":v,onClick:b,style:{"--backColor":e.color in o?o[e.color]:e.color,"--backColorHover":e.colorHover in o?o[e.colorHover]:e.colorHover,"--backColorActive":e.colorActive in o?o[e.colorActive]:e.colorActive,"--backColorDisabled":e.colorDisabled in o?o[e.colorDisabled]:e.colorDisabled,"--radioColor":l.color in o?o[l.color]:l.color,"--radioColorHover":l.colorHover in o?o[l.colorHover]:l.colorHover,"--radioColorActive":l.colorActive in o?o[l.colorActive]:l.colorActive,"--radioColorDisabled":l.colorDisabled in o?o[l.colorDisabled]:l.colorDisabled},...p,children:i.jsx("div",{className:"ev-switch-radio"})});try{a.displayName="Switch",a.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},radio:{defaultValue:{value:`{
    color: "b300",
    colorHover: "b200",
    colorActive: "b000",
    colorDisabled: "b300",
  }`},description:"",name:"radio",required:!1,type:{name:"{ color: VariableColors; colorHover: VariableColors; colorActive: VariableColors; colorDisabled: VariableColors; }"}},background:{defaultValue:{value:`{
    color: "b500",
    colorHover: "b400",
    colorActive: "p500",
    colorDisabled: "b500",
  }`},description:"",name:"background",required:!1,type:{name:"{ color: VariableColors; colorHover: VariableColors; colorActive: VariableColors; colorDisabled: VariableColors; }"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const A={component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{}};var s,t,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const D=["Preview"];export{r as Preview,D as __namedExportsOrder,A as default};
