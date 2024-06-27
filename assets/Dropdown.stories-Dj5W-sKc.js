import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";const t=({children:u,callbacks:i})=>{const[n,l]=d.useState(!1);return e.jsxs("div",{className:"ev-dropdown-legacy",onMouseLeave:()=>l(!1),children:[e.jsxs("div",{onClick:()=>l(!n),className:["ev-dropdown-legacy-box",n&&"ev-dropdown-legacy-box--show"].join(" "),children:[u,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M14.9324 6.81641H9.74075H5.06572C4.26572 6.81641 3.86572 7.78307 4.43239 8.34975L8.74908 12.6664C9.44075 13.3581 10.5657 13.3581 11.2574 12.6664L12.8991 11.0247L15.5741 8.34975C16.1324 7.78307 15.7324 6.81641 14.9324 6.81641Z",fill:"#515356"})})]}),e.jsx("div",{className:["ev-dropdown-legacy-callbacks",n&&"ev-dropdown-legacy-callbacks--show"].join(" "),children:i.map(a=>e.jsx("div",{onClick:a.callback.click,className:"ev-dropdown-legacy-callbacks--box",onMouseMove:a.callback.mouseMove,onMouseLeave:a.callback.mouseLeave,children:a.value}))})]})};t.__docgenInfo={description:"@deprecated",methods:[],displayName:"DropdownLegacy",props:{children:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},callbacks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: JSX.Element | string, callback: { mouseMove?: () => void, click?: () => void, mouseLeave?: () => void } }",signature:{properties:[{key:"value",value:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}],required:!0}},{key:"callback",value:{name:"signature",type:"object",raw:"{ mouseMove?: () => void, click?: () => void, mouseLeave?: () => void }",signature:{properties:[{key:"mouseMove",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"click",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"mouseLeave",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]},required:!0}}]}}],raw:"{ value: JSX.Element | string, callback: { mouseMove?: () => void, click?: () => void, mouseLeave?: () => void } }[]"},description:""}}};const p={title:"DropdownLegacy",component:t,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{children:"Нажмите кнопку",callbacks:[{value:"Open",callback:{click:()=>alert("Callback Click")}},{value:"Clear",callback:{mouseLeave:()=>alert("Callback Mouse Leave")}},{value:"Close",callback:{mouseMove:()=>alert("Callback Mouse Move")}}]}};var r,s,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'Нажмите кнопку',
    callbacks: [{
      value: 'Open',
      callback: {
        click: () => alert('Callback Click')
      }
    }, {
      value: 'Clear',
      callback: {
        mouseLeave: () => alert('Callback Mouse Leave')
      }
    }, {
      value: 'Close',
      callback: {
        mouseMove: () => alert('Callback Mouse Move')
      }
    }]
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["Close"];export{o as Close,g as __namedExportsOrder,p as default};
