import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as u}from"./index-RYns6xqu.js";const c=({children:s,callbacks:i})=>{const[o,n]=u.useState(!1);return e.jsxs("div",{className:"ev-dropdown-legacy",onMouseLeave:()=>n(!1),children:[e.jsxs("div",{onClick:()=>n(!o),className:["ev-dropdown-legacy-box",o&&"ev-dropdown-legacy-box--show"].join(" "),children:[s,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M14.9324 6.81641H9.74075H5.06572C4.26572 6.81641 3.86572 7.78307 4.43239 8.34975L8.74908 12.6664C9.44075 13.3581 10.5657 13.3581 11.2574 12.6664L12.8991 11.0247L15.5741 8.34975C16.1324 7.78307 15.7324 6.81641 14.9324 6.81641Z",fill:"#515356"})})]}),e.jsx("div",{className:["ev-dropdown-legacy-callbacks",o&&"ev-dropdown-legacy-callbacks--show"].join(" "),children:i.map(a=>e.jsx("div",{onClick:a.callback.click,className:"ev-dropdown-legacy-callbacks--box",onMouseMove:a.callback.mouseMove,onMouseLeave:a.callback.mouseLeave,children:a.value}))})]})};try{c.displayName="DropdownLegacy",c.__docgenInfo={description:"",displayName:"DropdownLegacy",props:{callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"{ value: string | Element; callback: { mouseMove?: (() => void) | undefined; click?: (() => void) | undefined; mouseLeave?: (() => void) | undefined; }; }[]"}}}}}catch{}const m={title:"DropdownLegacy",component:c,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{children:"Нажмите кнопку",callbacks:[{value:"Open",callback:{click:()=>alert("Callback Click")}},{value:"Clear",callback:{mouseLeave:()=>alert("Callback Mouse Leave")}},{value:"Close",callback:{mouseMove:()=>alert("Callback Mouse Move")}}]}};var r,d,t;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(d=l.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const k=["Close"];export{l as Close,k as __namedExportsOrder,m as default};
