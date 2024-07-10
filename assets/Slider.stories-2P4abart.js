import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";const s=({label:t,value:a=0,min:e=0,max:r,step:p,style:m="dark",disabled:f,onChange:u})=>{const v={"--track-width":`${c.useCallback(()=>{if(!r)return a;const y=Math.max(r,e),g=a-e,b=y-e,h=g/b*100;return Math.min(Math.max(h,0),100)},[a,r,e])()}%`};return n.jsxs("div",{className:"ev-slider",style:v,"data-style":m,children:[n.jsx("input",{type:"range",value:a,min:e,max:r,step:p,readOnly:!u,onChange:u,disabled:f}),n.jsx("p",{children:t})]})};try{s.displayName="Slider",s.__docgenInfo={description:"",displayName:"Slider",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},style:{defaultValue:{value:"dark"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const q={component:s,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{label:"Label",value:30},render:t=>{const[a,e]=c.useState(0);return n.jsx(s,{...t,value:a,onChange:r=>e(Number(r.currentTarget.value))})}};var d,o,i;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    value: 30
  },
  render: props => {
    const [value, setValue] = useState(0);
    return <Slider {...props} value={value} onChange={event => setValue(Number(event.currentTarget.value))} />;
  }
}`,...(i=(o=l.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,q as default};
