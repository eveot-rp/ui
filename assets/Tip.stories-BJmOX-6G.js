import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const g=({tip:y,text:s,mode:f="default"})=>e.jsxs("div",{className:["ev-tip-legacy",`ev-tip-mode--${f}`].join(" "),children:[e.jsx("p",{children:s[0]}),e.jsx("div",{children:y}),s[1]&&e.jsx("p",{children:s[1]})]});g.__docgenInfo={description:"@deprecated",methods:[],displayName:"TipLegacy",props:{text:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tip:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},mode:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'grey'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const v={title:"TipLegacy",component:g,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{mode:"default",text:["Нажмите"],tip:"Enter"}},t={args:{mode:"primary",text:["Нажмите","для продолжения"],tip:"Enter"}},a={args:{mode:"grey",text:["Нажмите"],tip:"Enter"}};var n,u,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    text: ['Нажмите'],
    tip: 'Enter'
  }
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'primary',
    text: ['Нажмите', 'для продолжения'],
    tip: 'Enter'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'grey',
    text: ['Нажмите'],
    tip: 'Enter'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const j=["Default","Primary","Grey"];export{r as Default,a as Grey,t as Primary,j as __namedExportsOrder,v as default};
