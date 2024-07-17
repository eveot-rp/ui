import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./index-Do_tCzp9.js";import"./index-RYns6xqu.js";const i=({title:l,centered:h="true",padding:b,show:v,style:t="dark",backdrop:y=!0,image:a=null,description:o,children:x,width:j,className:k,onClose:n})=>{const q=t==="dark"?"#515356":"#242629",N=t==="dark"?"#242629":"#D7D7D7";return e.jsxs("div",{className:`ev-modal ${k}`,"data-show":v,"data-style":t,"data-centered":h,children:[y&&e.jsx("div",{className:"ev-modal-backdrop",onClick:n}),e.jsxs("div",{className:"ev-modal-wrapper",style:{width:j,padding:b},children:[(l||o)&&e.jsxs("div",{className:"ev-modal-header",children:[e.jsxs("div",{className:"header-info-close-button",children:[e.jsxs("div",{className:"header-image-title",children:[a===void 0||a!==null&&e.jsx("div",{className:"modal-image",children:a?e.jsx("img",{src:a}):e.jsx(d,{name:"TbPhotoFilled",size:"3.4375rem",color:N})}),e.jsx("h1",{children:l})]}),n&&e.jsx("div",{className:"close-button",onClick:n,children:e.jsx(d,{name:"TbSquareXFilled",size:"1.5rem",color:q})})]}),e.jsx("p",{children:o})]}),x]})]})};try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:{value:"dark"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},image:{defaultValue:{value:"null"},description:"",name:"image",required:!1,type:{name:"string | null"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"true"},description:"",name:"centered",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"Padding<string | number>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const D={component:i,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{image:{control:"text"},width:{type:"string"}}},r={args:{image:void 0,title:"Label",description:"Description",absolute:!1,backdrop:!1,show:!0}},s={args:{image:void 0,title:"Label",description:"Description",absolute:!0,backdrop:!0,show:!0}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    absolute: false,
    backdrop: false,
    show: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    absolute: true,
    backdrop: true,
    show: true
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const S=["Static","FullScreen"];export{s as FullScreen,r as Static,S as __namedExportsOrder,D as default};
