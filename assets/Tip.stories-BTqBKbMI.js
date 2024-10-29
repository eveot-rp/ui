import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const n=({tip:o,text:s,mode:f="default"})=>e.jsxs("div",{className:["ev-tip-legacy",`ev-tip-mode--${f}`].join(" "),children:[e.jsx("p",{children:s[0]}),e.jsx("div",{children:o}),s[1]&&e.jsx("p",{children:s[1]})]});try{n.displayName="TipLegacy",n.__docgenInfo={description:"",displayName:"TipLegacy",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string[]"}},tip:{defaultValue:null,description:"",name:"tip",required:!0,type:{name:"string | Element"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"grey"'}]}}}}}catch{}const v={title:"TipLegacy",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{mode:"default",text:["Нажмите"],tip:"Enter"}},t={args:{mode:"primary",text:["Нажмите","для продолжения"],tip:"Enter"}},a={args:{mode:"grey",text:["Нажмите"],tip:"Enter"}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    text: ['Нажмите'],
    tip: 'Enter'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    mode: 'primary',
    text: ['Нажмите', 'для продолжения'],
    tip: 'Enter'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,y,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mode: 'grey',
    text: ['Нажмите'],
    tip: 'Enter'
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const E=["Default","Primary","Grey"];export{r as Default,a as Grey,t as Primary,E as __namedExportsOrder,v as default};
