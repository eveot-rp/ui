import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as o}from"./index-M8lrpcL7.js";import"./index-RYns6xqu.js";import"./index-rDsjxskc.js";import"./colors-NuYFRpnV.js";const d=({title:s,centered:g="true",padding:v,show:b,style:n="dark",backdrop:y=!0,image:a=null,description:i,children:x,width:j,className:k,onClose:l})=>{const q=n==="dark"?"#515356":"#242629",w=n==="dark"?"#242629":"#D7D7D7";return e.jsxs("div",{className:`ev-modal ${k??""}`,"data-show":b,"data-style":n,"data-centered":g,children:[y&&e.jsx("div",{className:"ev-modal-backdrop",onClick:l}),e.jsxs("div",{className:"ev-modal-wrapper",style:{width:j,padding:v},children:[(s||i)&&e.jsxs("div",{className:"ev-modal-header",children:[e.jsxs("div",{className:"header-info-close-button",children:[e.jsxs("div",{className:"header-image-title",children:[a===void 0||a!==null&&e.jsx("div",{className:"modal-image",children:a?e.jsx("img",{src:a}):e.jsx(o,{name:"TbPhotoFilled",size:"3.4375rem",color:w})}),e.jsx("h1",{children:s})]}),l&&e.jsx("div",{className:"close-button",onClick:l,children:e.jsx(o,{name:"TbSquareXFilled",size:"1.5rem",color:q})})]}),e.jsx("p",{children:i})]}),x]})]})};try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:{value:"dark"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},image:{defaultValue:{value:"null"},description:"",name:"image",required:!1,type:{name:"string | null"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"true"},description:"",name:"centered",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"Padding<string | number>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const C={component:d,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{image:{control:"text"},width:{type:"string"}}},r={args:{image:void 0,title:"Label",description:"Description",centered:!1,backdrop:!1,show:!0}},t={args:{image:void 0,title:"Label",description:"Description",centered:!0,backdrop:!0,show:!0}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    centered: false,
    backdrop: false,
    show: true
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    centered: true,
    backdrop: true,
    show: true
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const F=["Static","FullScreen"];export{t as FullScreen,r as Static,F as __namedExportsOrder,C as default};
