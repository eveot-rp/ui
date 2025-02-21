import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{a as o}from"./index-gq1RQqel.js";import"./index-DJO9vBfz.js";import"./index-RMzNbH_J.js";import"./colors-NuYFRpnV.js";const i=({title:s,centered:g="true",padding:v,show:b,style:n="dark",backdrop:y=!0,image:a=null,description:l,children:x,width:j,className:k,onClose:d})=>{const q=n==="dark"?"#515356":"#242629",w=n==="dark"?"#242629":"#D7D7D7";return e.jsxs("div",{className:`ev-modal ${k??""}`,"data-show":b,"data-style":n,"data-centered":g,children:[y&&e.jsx("div",{className:"ev-modal-backdrop",onClick:d}),e.jsxs("div",{className:"ev-modal-wrapper",style:{width:j,padding:v},children:[(s||l)&&e.jsxs("div",{className:"ev-modal-header",children:[e.jsxs("div",{className:"header-info-close-button",children:[e.jsxs("div",{className:"header-image-title",children:[a===void 0||a!==null&&e.jsx("div",{className:"modal-image",children:a?e.jsx("img",{src:a}):e.jsx(o,{name:"TbPhotoFilled",size:"3.4375rem",color:w})}),e.jsx("h1",{children:s})]}),d&&e.jsx("div",{className:"close-button",onClick:d,children:e.jsx(o,{name:"TbSquareXFilled",size:"1.5rem",color:q})})]}),l&&e.jsx("p",{children:l})]}),x]})]})};try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:{value:"dark"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},image:{defaultValue:{value:"null"},description:"",name:"image",required:!1,type:{name:"string | null"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"true"},description:"",name:"centered",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"Padding<string | number>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const C={component:i,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{image:{control:"text"},width:{type:"string"}}},r={args:{image:void 0,title:"Label",description:"Description",centered:!1,backdrop:!1,show:!0}},t={args:{image:void 0,title:"Label",description:"Description",centered:!0,backdrop:!0,show:!0}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: "Label",
    description: "Description",
    centered: false,
    backdrop: false,
    show: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    image: undefined,
    title: "Label",
    description: "Description",
    centered: true,
    backdrop: true,
    show: true
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const F=["Static","FullScreen"];export{t as FullScreen,r as Static,F as __namedExportsOrder,C as default};
