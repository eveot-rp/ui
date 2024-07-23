import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./index-CS_nzw7_.js";import{T as y}from"./index-C_8QbhUp.js";import{r as m}from"./index-RYns6xqu.js";const o=({items:e,disabled:a,onChange:t,className:i,currentId:s,width:T="12.5rem",...h})=>{const[l,I]=m.useState(e[0]),p=c=>{const n=e.indexOf(l);if(n!==-1)if(c==="prev"){const u=e[(n+e.length-1)%e.length];t&&t(u.id)}else{const u=e[(n+1)%e.length];t&&t(u.id)}};return m.useEffect(()=>{const c=e.find(n=>n.id===s);I(c||e[0])},[e,s]),r.jsxs("div",{className:`ev-text-selector ${i}`,"data-disabled":a,style:{width:T},...h,children:[r.jsx(x,{name:"TbSquareArrowLeftFilled",size:"1.75rem",onClick:()=>p("prev")}),r.jsx(y,{className:"ev-text-selector-value",size:"subheading",children:l==null?void 0:l.label}),r.jsx(x,{name:"TbSquareArrowRightFilled",size:"1.75rem",onClick:()=>p("next")})]})};try{o.displayName="TextSelector",o.__docgenInfo={description:"",displayName:"TextSelector",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SelectorItem[]"}},width:{defaultValue:{value:"12.5rem"},description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},currentId:{defaultValue:null,description:"",name:"currentId",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: number) => void)"}}}}}catch{}const q={component:o,parameters:{layout:"centered"},argTypes:{width:{type:"string"}},tags:["autodocs"]},d={args:{items:[{id:352,label:"Text 1"},{id:455,label:"Text 2"},{id:643,label:"Text 3"},{id:733,label:"Text 4"}]},render:e=>{const[a,t]=m.useState(0),i=s=>{t(s)};return console.log(a),r.jsx(o,{...e,currentId:a,onChange:i})}};var f,b,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 352,
      label: 'Text 1'
    }, {
      id: 455,
      label: 'Text 2'
    }, {
      id: 643,
      label: 'Text 3'
    }, {
      id: 733,
      label: 'Text 4'
    }]
  },
  render: props => {
    const [id, setId] = useState(0);
    const onChange = (id: number) => {
      setId(id);
    };
    console.log(id);
    return <TextSelector {...props} currentId={id} onChange={onChange} />;
  }
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,q as default};
