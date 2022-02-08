(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6886:function(n,r,e){"use strict";e.d(r,{ZP:function(){return v}});var t=e(3366),i=e(7462),o=e(7294),a=e(6010),s=e(5408),c=e(9707),u=e(7192),l=e(1496),p=e(7623);var g=o.createContext(),d=e(8979);function m(n){return(0,d.Z)("MuiGrid",n)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,e(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...x.map((n=>`grid-xs-${n}`)),...x.map((n=>`grid-sm-${n}`)),...x.map((n=>`grid-md-${n}`)),...x.map((n=>`grid-lg-${n}`)),...x.map((n=>`grid-xl-${n}`))]),S=e(5893);const w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function $(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function h(n,r,e={}){if(!r||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:t,sm:i,md:o,lg:a,xl:s}=n;return[Number(t)>0&&(e[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(e[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(e[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(e[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(e[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const b=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{container:e,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:l,xs:p,zeroMinWidth:g}=n.ownerState;return[r.root,e&&r.container,i&&r.item,g&&r.zeroMinWidth,...h(c,e,r),"row"!==t&&r[`direction-xs-${String(t)}`],"wrap"!==u&&r[`wrap-xs-${String(u)}`],!1!==p&&r[`grid-xs-${String(p)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==l&&r[`grid-xl-${String(l)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:r}){const e=(0,s.P$)({values:r.direction,breakpoints:n.breakpoints.values});return(0,s.k9)({theme:n},e,(n=>{const r={flexDirection:n};return 0===n.indexOf("column")&&(r[`& > .${f.item}`]={maxWidth:"none"}),r}))}),(function({theme:n,ownerState:r}){const{container:e,rowSpacing:t}=r;let i={};if(e&&0!==t){const r=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},r,(r=>{const e=n.spacing(r);return"0px"!==e?{marginTop:`-${$(e)}`,[`& > .${f.item}`]:{paddingTop:$(e)}}:{}}))}return i}),(function({theme:n,ownerState:r}){const{container:e,columnSpacing:t}=r;let i={};if(e&&0!==t){const r=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},r,(r=>{const e=n.spacing(r);return"0px"!==e?{width:`calc(100% + ${$(e)})`,marginLeft:`-${$(e)}`,[`& > .${f.item}`]:{paddingLeft:$(e)}}:{}}))}return i}),(function({theme:n,ownerState:r}){let e;return n.breakpoints.keys.reduce(((t,o)=>{let a={};if(r[o]&&(e=r[o]),!e)return t;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return t;const l=Math.round(e/u*1e8)/1e6+"%";let p={};if(r.container&&r.item&&0!==r.columnSpacing){const e=n.spacing(r.columnSpacing);if("0px"!==e){const n=`calc(${l} + ${$(e)})`;p={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===n.breakpoints.values[o]?Object.assign(t,a):t[n.breakpoints.up(o)]=a,t}),{})}));var v=o.forwardRef((function(n,r){const e=(0,p.Z)({props:n,name:"MuiGrid"}),s=(0,c.Z)(e),{className:l,columns:d,columnSpacing:x,component:f="div",container:$=!1,direction:v="row",item:k=!1,lg:j=!1,md:N=!1,rowSpacing:W,sm:Z=!1,spacing:M=0,wrap:P="wrap",xl:_=!1,xs:y=!1,zeroMinWidth:z=!1}=s,G=(0,t.Z)(s,w),B=W||M,A=x||M,C=o.useContext(g),E=d||C||12,O=(0,i.Z)({},s,{columns:E,container:$,direction:v,item:k,lg:j,md:N,sm:Z,rowSpacing:B,columnSpacing:A,wrap:P,xl:_,xs:y,zeroMinWidth:z}),T=(n=>{const{classes:r,container:e,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:p,xs:g,zeroMinWidth:d}=n,x={root:["root",e&&"container",i&&"item",d&&"zeroMinWidth",...h(c,e),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==g&&`grid-xs-${String(g)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==p&&`grid-xl-${String(p)}`]};return(0,u.Z)(x,m,r)})(O);return R=(0,S.jsx)(b,(0,i.Z)({ownerState:O,className:(0,a.Z)(T.root,l),as:f,ref:r},G)),12!==E?(0,S.jsx)(g.Provider,{value:E,children:R}):R;var R}))},8961:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e(6075)}])},6075:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return u}});var t=e(5893),i=e(6886),o=e(3321),a=e(9008),s=e(7294),c=e(1717);function u(){var n=(0,s.useState)(null),r=n[0],e=n[1],u=s.useRef();return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"About"}),(0,t.jsx)("meta",{property:"og:title",content:"About"},"title"),(0,t.jsx)("meta",{name:"description",content:"A short blurb about me"})]}),(0,t.jsxs)(i.ZP,{container:!0,sx:{margin:2},children:[(0,t.jsx)(i.ZP,{container:!0,sx:{justifyContent:"flex-end"},children:(0,t.jsx)(o.Z,{variant:"outlined",href:"/resume.pdf",rel:"noopener noreferrer",target:"_blank",children:"Open in new tab"})}),(0,t.jsx)(i.ZP,{children:(0,t.jsx)("div",{ref:u,children:(0,t.jsx)(c.BB,{file:"/resume.pdf",renderMode:"svg",onLoadSuccess:function(n){var r=n.numPages;return e(r)},children:Array.apply(null,Array(r)).map((function(n,r){return r+1})).map((function(n){return(0,t.jsx)(c.T3,{scale:2,pageNumber:n,children:(0,t.jsxs)("p",{children:["Page ",n," of ",r]})},n)}))})})})]})]})}}},function(n){n.O(0,[774,888,179],(function(){return r=8961,n(n.s=r);var r}));var r=n.O();_N_E=r}]);