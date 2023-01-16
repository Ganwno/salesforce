"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{59690:function(W,$,n){n.r($),n.d($,{default:function(){return G}});var m=n(97857),c=n.n(m),h=n(15009),j=n.n(h),I=n(99289),y=n.n(I),L=n(5574),E=n.n(L),D=n(6377),i=n(92195),e=n(7075),r=n(48054),s=n(15746),o=n(67294),t=n(41687),a=n(85893),S={xl:3,md:4,sm:12,xs:12},O=function(p){var u=p.title,T=p.loading,v=p.value,R=p.prefix,Z=i.Z.useToken(),g=Z.token,d=g.colorText,B=g.colorTextSecondary;return(0,a.jsxs)("div",{className:"hay-Statistis",children:[(0,a.jsxs)(e.Z.Text,{style:{color:d,fontSize:14},children:[R,T?(0,a.jsx)(r.Z.Button,{active:!0,size:"small"}):v]}),(0,a.jsx)(e.Z.Text,{style:{color:B,fontSize:12},children:u})]})},b=function(p){var u=p.tokenPair,T=(0,t.useModel)("chain"),v=T.chain,R=T.wallet,Z=i.Z.useToken(),g=Z.token,d=g.colorText,B=g.colorTextSecondary,F=(0,o.useState)("-"),C=E()(F,2),K=C[0],x=C[1],f=(0,o.useState)(!1),l=E()(f,2),M=l[0],U=l[1];return(0,o.useEffect)(function(){y()(j()().mark(function w(){var H;return j()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!(v&&u)){P.next=7;break}return U(!0),P.next=4,(0,D.t$)(v,u);case 4:H=P.sent,x(H),U(!1);case 7:case"end":return P.stop()}},w)}))()},[u,v]),(0,o.useEffect)(function(){},[u]),u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,c()(c()({},S),{},{children:(0,a.jsx)(O,{title:"",prefix:"",value:"Mark:"})})),(0,a.jsx)(s.Z,c()(c()({},S),{},{children:(0,a.jsx)(O,{title:"24H Volume",value:"--"})})),(0,a.jsx)(s.Z,c()(c()({},S),{},{children:(0,a.jsx)(O,{title:"24H Fee",prefix:"$:"})})),(0,a.jsx)(s.Z,c()(c()({},S),{},{xl:7,md:10,children:(0,a.jsxs)("div",{className:"hay-Statistis",children:[(0,a.jsxs)(e.Z.Text,{style:{color:d,fontSize:14},children:["L $",u.totalLongSizeLabel," | ",u.longFundingRateLabel]}),(0,a.jsxs)(e.Z.Text,{style:{color:d,fontSize:14},children:["S $",u.totalShortSizeLabel," | ",u.shortFundingRateLabel]})]})})),(0,a.jsx)(s.Z,c()(c()({},S),{},{xl:4,children:(0,a.jsx)(O,{title:"Insurance Pool",prefix:"$",value:K,loading:M})}))]}):(0,a.jsx)(a.Fragment,{})},G=b},15746:function(W,$,n){var m=n(21584);$.Z=m.Z},99134:function(W,$,n){var m=n(67294);const c=(0,m.createContext)({});$.Z=c},21584:function(W,$,n){var m=n(94184),c=n.n(m),h=n(67294),j=n(53124),I=n(99134),y=n(6999),L=function(e,r){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)r.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(s[o[t]]=e[o[t]]);return s};function E(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const D=["xs","sm","md","lg","xl","xxl"],i=h.forwardRef((e,r)=>{const{getPrefixCls:s,direction:o}=h.useContext(j.E_),{gutter:t,wrap:a,supportFlexGap:S}=h.useContext(I.Z),{prefixCls:O,span:b,order:G,offset:A,push:p,pull:u,className:T,children:v,flex:R,style:Z}=e,g=L(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),d=s("col",O),[B,F]=(0,y.c)(d);let C={};D.forEach(f=>{let l={};const M=e[f];typeof M=="number"?l.span=M:typeof M=="object"&&(l=M||{}),delete g[f],C=Object.assign(Object.assign({},C),{[`${d}-${f}-${l.span}`]:l.span!==void 0,[`${d}-${f}-order-${l.order}`]:l.order||l.order===0,[`${d}-${f}-offset-${l.offset}`]:l.offset||l.offset===0,[`${d}-${f}-push-${l.push}`]:l.push||l.push===0,[`${d}-${f}-pull-${l.pull}`]:l.pull||l.pull===0,[`${d}-rtl`]:o==="rtl"})});const K=c()(d,{[`${d}-${b}`]:b!==void 0,[`${d}-order-${G}`]:G,[`${d}-offset-${A}`]:A,[`${d}-push-${p}`]:p,[`${d}-pull-${u}`]:u},T,C,F),x={};if(t&&t[0]>0){const f=t[0]/2;x.paddingLeft=f,x.paddingRight=f}if(t&&t[1]>0&&!S){const f=t[1]/2;x.paddingTop=f,x.paddingBottom=f}return R&&(x.flex=E(R),a===!1&&!x.minWidth&&(x.minWidth=0)),B(h.createElement("div",Object.assign({},g,{style:Object.assign(Object.assign({},x),Z),className:K,ref:r}),v))});$.Z=i},6999:function(W,$,n){n.d($,{V:function(){return E},c:function(){return D}});var m=n(67968),c=n(45503);const h=i=>{const{componentCls:e}=i;return{[e]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},j=i=>{const{componentCls:e}=i;return{[e]:{position:"relative",maxWidth:"100%",minHeight:1}}},I=(i,e)=>{const{componentCls:r,gridColumns:s}=i,o={};for(let t=s;t>=0;t--)t===0?(o[`${r}${e}-${t}`]={display:"none"},o[`${r}-push-${t}`]={insetInlineStart:"auto"},o[`${r}-pull-${t}`]={insetInlineEnd:"auto"},o[`${r}${e}-push-${t}`]={insetInlineStart:"auto"},o[`${r}${e}-pull-${t}`]={insetInlineEnd:"auto"},o[`${r}${e}-offset-${t}`]={marginInlineEnd:0},o[`${r}${e}-order-${t}`]={order:0}):(o[`${r}${e}-${t}`]={display:"block",flex:`0 0 ${t/s*100}%`,maxWidth:`${t/s*100}%`},o[`${r}${e}-push-${t}`]={insetInlineStart:`${t/s*100}%`},o[`${r}${e}-pull-${t}`]={insetInlineEnd:`${t/s*100}%`},o[`${r}${e}-offset-${t}`]={marginInlineStart:`${t/s*100}%`},o[`${r}${e}-order-${t}`]={order:t});return o},y=(i,e)=>I(i,e),L=(i,e,r)=>({[`@media (min-width: ${e}px)`]:Object.assign({},y(i,r))}),E=(0,m.Z)("Grid",i=>[h(i)]),D=(0,m.Z)("Grid",i=>{const e=(0,c.TS)(i,{gridColumns:24}),r={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[j(e),y(e,""),y(e,"-xs"),Object.keys(r).map(s=>L(e,r[s],s)).reduce((s,o)=>Object.assign(Object.assign({},s),o),{})]})}}]);
