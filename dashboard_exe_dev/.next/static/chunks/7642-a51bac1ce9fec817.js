"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7642,4527],{60728:function(e,t,l){l.d(t,{un:function(){return u},zx:function(){return c}});var n=l(57437),i=l(2265),o=l(71538),a=l(12218),d=l(13498),r=l(46682);let s=(0,a.j)("inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-lg px-3",lg:"h-11 rounded-lg px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:l,variant:i,size:a,asChild:r=!1,...c}=e,u=r?o.g7:"button";return(0,n.jsx)(u,{className:(0,d.cn)(s({variant:i,size:a,className:l})),ref:t,...c})});c.displayName="Button";let u=e=>{let{type:t,icon:l,loading:i,label:o,style:a,className:d}=e;return(0,n.jsx)(r.ZP,{htmlType:t,type:a,icon:l,loading:i,className:d,children:o})}},71275:function(e,t,l){let n=l(2265).createContext({});t.Z=n},65188:function(e,t,l){var n=l(57437),i=l(60728),o=l(66648),a=l(42005);t.Z=e=>{var t,l;let{children:d,pathname:r,globalState:s}=e;return(0,n.jsx)(n.Fragment,{children:(0,a.Z)().cekPermission(null!==(l=null==s?void 0:null===(t=s.dataUser)||void 0===t?void 0:t.menuList)&&void 0!==l?l:[],r)&&(null==s?void 0:s.permission.indexOf("view"))!=-1?d:(0,n.jsxs)("div",{className:" flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto py-5",children:[(0,n.jsx)(o.default,{alt:"permission",height:0,width:0,quality:70,src:"/assets/illustrations/maintenance.svg",className:"w-80 md:w-[28rem] 2xl:w-[40rem] shadow-sm  object-cover"}),(0,n.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold tracking-tight text-center",children:"Not Permission"}),(0,n.jsx)("span",{className:"text-center mt-1 mb-5 text-zinc-600 dark:text-zinc-400 md:w-9/12 break-all px-10 sm:px-0",children:"It looks like the page you are looking for doesnt have permission"}),(0,n.jsx)("div",{className:"flex items-center space-x-2",children:(0,n.jsx)("a",{onClick:()=>window.location.href="/",children:(0,n.jsx)(i.zx,{variant:"outline",children:"Back to Home"})})})]})})}},30939:function(e,t,l){var n=l(57437);t.Z=e=>{var t,l,i,o,a,d,r;let{res:s,app:c,type:u,msgTrue:h,msgFalse:g,key:v}=e,{message:f,notification:p,modal:m}=c;if(s)return(null==s?void 0:s.response)?(null==s?void 0:null===(t=s.response.data)||void 0===t?void 0:t.code)=="00"?(h&&!g&&("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:null==s?void 0:s.response.data.code,type:"success",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==s?void 0:s.response.data.message]})}),!0):(g||((null==s?void 0:null===(l=s.response.data)||void 0===l?void 0:l.code)?(null==s?void 0:s.response.data.code)=="403"||("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:s.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==s?void 0:s.response.data.message]})}):("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:null==s?void 0:null===(i=s.response.data)||void 0===i?void 0:i.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==s?void 0:null===(a=s.response)||void 0===a?void 0:null===(o=a.data)||void 0===o?void 0:o.message]})})),!1):(null==s?void 0:s.code)=="00"?(h&&!g&&("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:s.code,type:"success",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",s.message]})}),!0):(g||((null==s?void 0:s.code)?"403"==s.code||("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:s.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",s.message]})}):("message"==u?f:"notification"==u?p:"modal"==u?m:f).open({key:null!=v?v:null==s?void 0:s.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==s?void 0:null===(r=s.response)||void 0===r?void 0:null===(d=r.data)||void 0===d?void 0:d.message]})})),!1)}},42005:function(e,t,l){var n=l(38472),i=l(62737),o=l.n(i),a=l(51470),d=l.n(a),r=l(9109).lW;o().extend(d()),t.Z=(e,t)=>{let l=n.Z.create({baseURL:"https://devbackend-psolrtjabodebek.kai.id/api/v1/",headers:e||{Accept:"application/json","Content-Type":"application/json"},...t});l.interceptors.request.use(e=>{let t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.headers["request-startTime"]=new Date().getTime(),e.headers["request-date"]=o()(),e},e=>Promise.reject(e)),l.interceptors.response.use(e=>{let t=new Date().getTime(),l=e.config.headers["request-startTime"];return e.headers["request-duration"]=t-l,e});let i=()=>{var e,t;let l=!!(e=localStorage.getItem("accessToken"))&&JSON.parse(new r((null==e?void 0:null===(t=e.split("."))||void 0===t?void 0:t[1]).replace(/-/g,"+").replace(/_/g,"/"),"base64").toString("ascii"));return!!l&&l.token_id},a=async()=>l.get("/user/".concat(i())).then(e=>{let t=e.data.data.role_id;return l.post("/menu/list/",{role_id:t}).then(e=>e.data)}).catch(e=>e);return{idUser:i,login:async e=>l.post("/auth/login",e).then(e=>{let{data:t}=e;return localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("refreshToken",t.data.refreshToken),sessionStorage.setItem("auth",JSON.stringify(t.data.user)),t}).catch(e=>{var t,l;return null!==(l=null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)&&void 0!==l?l:e}),get:async(e,t)=>l.get(e).then(e=>t?e:e.data).catch(e=>e),post:async(e,t,n)=>l.post(e,t,n).then(e=>e.data).catch(e=>e),menuUsers:a,menuApp:async()=>l.post("/menu/list/").then(e=>e.data).catch(e=>e),refresh_Token:async()=>{let e=localStorage.getItem("refreshToken");return!!e&&(l.interceptors.request.use(t=>(t.headers["refresh-token"]=e,t),e=>Promise.reject(e)),l.get("/auth/refresh-token").then(e=>{let{data:t}=e;return localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("refreshToken",t.data.refreshToken),t}).catch(e=>!1))},cekPermission:(e,t)=>{let l=!1,n="",i=e=>{e.submenuItems.map(e=>{e.submenuItems?(""!==n&&(n=e.submenuItems[0].path),i(e)):e.path==t.replace("/admin","")&&(l=!0)})};return null==e||e.map(o=>{o.submenuItems?(""!==n&&(n=o.submenuItems[0].path),o.submenuItems.map(e=>{e.submenuItems?(""!==n&&(n=e.submenuItems[0].path),i(e)):e.path==t.replace("/admin","")&&(l=!0)})):(""==o.path?l=!0:""!==n&&e[0].path,o.path==t.replace("/admin","")&&(l=!0))}),!!l},put:async(e,t)=>l.put(e,t).then(e=>e.data).catch(e=>e),del:async(e,t)=>(console.log("data delete",t),l.delete(e,{data:t}).then(e=>e).catch(e=>e)),menuPso:async e=>l.post("/pso/",{start:e[0],end:e[1]}).then(e=>e.data).catch(e=>e)}}},38797:function(e,t,l){l.d(t,{Gx:function(){return c},Pn:function(){return b},TM:function(){return h},Zc:function(){return f},d3:function(){return g},fD:function(){return v},hE:function(){return s},uf:function(){return u},wF:function(){return m},x4:function(){return p}});var n=l(57437),i=l(64746),o=l.n(i),a=l(97501),d=l(27824),r=l.n(d);let s=(e,t)=>{if(e.length>0){let l;let n=t||26,i=Math.ceil(e.length/n);l=[];let o=0,a=0,d=e.split(" ");for(let e=0;e<i;e++){let t="";for(let l=a;l<d.length;l++)d[a].length+o<n?0==e&&"AND"==d[a]?(l=d.length,o=0):(0==o?(t+=d[a],o+=d[a].length):(t=t+" "+d[a],o=o+1+d[a].length),a++):(l=d.length,o=0);l.push(t)}return l}return[]},c=(e,t,l)=>{let n=e;return""!==n?(n=n.toString()).replace(t,l):""},u=function(e){let t,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return arguments.length>2&&void 0!==arguments[2]&&arguments[2],e&&(t="Rp"===l?o()(e).format("$0,0"):"%"===l?o()(e).format("0,0%"):o()(e).format("0,0")),t},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return""===e||null===e?"":0==e?"-":null===t?e:t},g=e=>Object.keys(e).reduce((t,l)=>l.includes("_by")||l.includes("_at")?{...t,[l]:e[l]}:null==e[l]||0==e[l]||""==e[l]?{...t,[l]:"-"}:{...t,[l]:e[l]},{}),v=(e,t)=>{if(t=null!=t?t:26,!(e.length>t))return e;{let l=e.substring(0,t).lastIndexOf(" ");return -1!==l?e.substring(0,t-(t-l))+"\n"+e.substring(t-(t-l)):e}};new Intl.NumberFormat("id-ID",{style:"decimal",maximumFractionDigits:2});let f=e=>{var t,l,n,i,o;let{autoTable:a,doc:d,globalState:r,tableMeta:c,reportType:u,landscape:h,position:g,signType:v=null,pageSize:f,option:p,globall:b}=e,y=c.finalY;b&&(y=c);let S="l"==h?f[0]:f[1],x=(null==u?void 0:u.n_position_1)?"".concat(null!==(n=null===(t=s(null==u?void 0:u.n_position_1))||void 0===t?void 0:t.join("\n"))&&void 0!==n?n:""):"",z=(null==u?void 0:u.n_position_2)?"".concat(null!==(i=null===(l=s(null==u?void 0:u.n_position_2))||void 0===l?void 0:l.join("\n"))&&void 0!==i?i:""):"";if(null===v){let e=y,t=1+g.column,l=[],n=[];for(let e=1;e<=t;e++){let l="";e==t&&(l=x);let i={content:l,styles:{halign:"center",fontStyle:"bold",cellWidth:65}};n.push(i)}l.push(n);let i=[];for(let e=1;e<=t;e++){let e={content:"",styles:{halign:"center",fontStyle:"bold",minCellHeight:18}};i.push(e)}l.push(i);let o=[];for(let e=1;e<=t;e++){let l="";e==t&&(l=null==u?void 0:u.n_name_1);let n={content:l,styles:{halign:"center",fontStyle:"bold",cellPadding:-1}};o.push(n)}l.push(o);let r=[];for(let e=1;e<=t;e++){let l="";if(e==t){let e=(null==u?void 0:u.n_name_1.length)+4>35?35:(null==u?void 0:u.n_name_1.length)+4;for(let t=0;t<e;t++)l+="_"}let n={content:l,styles:{halign:"center",fontStyle:"bold",cellPadding:0+g.underlinePadding}};r.push(n)}l.push(r);let s=[];for(let e=1;e<=t;e++){let l="";e==t&&(l="Nipp. "+(null==u?void 0:u.i_nipp_1));let n={content:l,styles:{halign:"center",fontStyle:"bold"}};s.push(n)}l.push(s);let c=e+10+g.paddingTop;"facilityMaintenance"==p&&(c=23),a(d,{startY:c,margin:{left:g.marginLeft},theme:"plain",body:l,bodyStyles:{fontSize:m.pdf.signatureFontSize,halign:"center"},didParseCell:e=>{e.table}})}else if(2===v){let e=y;d.internal.pageSize.width;let t=[],l=[];for(let e=1;e<=8;e++){let t="";2==e&&(t=x),7==e&&(t=z);let n={content:t,styles:{halign:"center",fontStyle:"bold",cellWidth:54}};l.push(n)}t.push(l);let n=[];for(let e=1;e<=8;e++){let e={content:"",styles:{halign:"center",fontStyle:"bold",minCellHeight:20}};n.push(e)}t.push(n);let i=[];for(let e=1;e<=8;e++){let t="";2==e&&(t=null==u?void 0:u.n_name_1),7==e&&(t=null==u?void 0:u.n_name_2);let l={content:t,styles:{halign:"center",fontStyle:"bold",cellPadding:-1}};i.push(l)}t.push(i);let o=[];for(let e=1;e<=8;e++){let t="";if(2==e)for(let e=0;e<(null==u?void 0:u.n_name_1.length)+4;e++)t+="_";if(7==e)for(let e=0;e<(null==u?void 0:u.n_name_2.length)+4;e++)t+="_";let l={content:t,styles:{halign:"center",fontStyle:"bold",cellPadding:0+g.underlinePadding}};o.push(l)}t.push(o);let r=[];for(let e=1;e<=8;e++){let t="";2==e&&(t="Nipp. "+(null==u?void 0:u.i_nipp_1)),7==e&&(t="Nipp. "+(null==u?void 0:u.i_nipp_2));let l={content:t,styles:{halign:"center",fontStyle:"bold",border:"2px solid black"}};r.push(l)}t.push(r),a(d,{startY:e+10,margin:{left:-35},theme:"plain",body:t,bodyStyles:{fontSize:m.pdf.signatureFontSize},didParseCell:e=>{e.table}})}else if(1===v){let e=y;d.internal.pageSize.width;let t=[],l=[];for(let e=1;e<=5;e++){let t="";5==e&&(t=null==u?void 0:u.n_position_1);let n={content:t,styles:{halign:"center",fontStyle:"bold",cellWidth:65}};l.push(n)}t.push(l);let n=[];for(let e=1;e<=5;e++){let e={content:"",styles:{halign:"center",fontStyle:"bold",minCellHeight:20}};n.push(e)}t.push(n);let i=[];for(let e=1;e<=5;e++){let t="";5==e&&(t=null==u?void 0:u.n_name_1);let l={content:t,styles:{halign:"center",fontStyle:"bold",cellPadding:-1}};i.push(l)}t.push(i);let r=[];for(let e=1;e<=5;e++){let t="";if(5==e){let e=(null==u?void 0:u.n_name_1.length)+4>35?35:(null==u?void 0:u.n_name_1.length)+4;for(let l=0;l<e;l++)t+="_"}let l={content:t,styles:{halign:"center",fontStyle:"bold",cellPadding:0+g.underlinePadding}};r.push(l)}t.push(r);let s=[];for(let e=1;e<=5;e++){let t="";5==e&&(t="Nipp. "+(null==u?void 0:u.i_nipp_1));let l={content:t,styles:{halign:"center",fontStyle:"bold"}};s.push(l)}t.push(s),a(d,{startY:e+10,theme:"plain",body:t,bodyStyles:{fontSize:null!==(o=g.fontSize)&&void 0!==o?o:11,halign:"center"},didParseCell:e=>{e.table}})}(e=>{let t=new Date,l=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return"".concat(e).padStart(2,t)},n="".concat(l(t.getDate()),"-").concat(l(t.getMonth()+1),"-").concat(t.getFullYear()," ").concat(l(t.getHours()),":").concat(l(t.getMinutes()),":").concat(l(t.getSeconds())),i=e=>"Generated by ".concat(e," on ").concat(n),o=e.internal.getNumberOfPages();e.setTextColor(178,178,178),e.setFontSize(8);for(var a,d,s=1;s<=o;s++)e.setPage(s),e.text(i(null==r?void 0:null===(d=r.dataUser)||void 0===d?void 0:null===(a=d.user)||void 0===a?void 0:a.username)+" Page "+String(s)+" of "+String(o),e.internal.pageSize.width/2,S-8,{align:"center"})})(d)},p={web:{header:function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"100vw",o={};return(o="center"==l?{...m.web.header.fit,width:i}:e?m.web.header.one:m.web.header.more,e)?"center"==l?(0,n.jsx)("div",{className:" uppercase",children:(0,n.jsxs)("div",{style:o,children:[null==e?void 0:e.n_line_1,(null==e?void 0:e.n_line_2)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{})," ",null==e?void 0:e.n_line_2]}):null,(0,n.jsx)("br",{})," ",t]})}):(0,n.jsxs)("div",{style:o,className:" uppercase",children:[null==e?void 0:e.n_line_1,(null==e?void 0:e.n_line_2)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{})," ",null==e?void 0:e.n_line_2]}):null,(0,n.jsx)("br",{})," ",t]}):(0,n.jsxs)("div",{className:" capitalize",style:o,children:[" ",t," "]})},striped:(e,t)=>t%2==0?"even-row dark:even-row":"",legendHeader:(e,t)=>{var l,n;let i=!1;return(null===(l=Object.values(e))||void 0===l?void 0:l[0])==1&&(null===(n=Object.values(e))||void 0===n?void 0:n[1])==2&&(i=!0),i?"legendHeader dark:legendHeader":t%2==0?"even-row dark:even-row":""},headerTable:e=>e.map(e=>{let t={...e};return t.title=(0,n.jsxs)("div",{className:"text-center",style:{fontWeight:m.web.headerTable.fontWeight,fontSize:m.web.headerTable.fontSize},children:[" ",e.title]}),t.title_val=e.title,e.children&&(t.children=e.children.map(e=>{let t={...e};return t.title=(0,n.jsxs)("div",{className:"text-center",style:{fontWeight:m.web.headerTable.fontWeight,fontSize:m.web.headerTable.fontSize},children:[" ",e.title]}),t.title_val=e.title,e.children&&(t.children=e.children.map(e=>{let t={...e};return t.title=(0,n.jsxs)("div",{className:"text-center",style:{fontWeight:m.web.headerTable.fontWeight,fontSize:m.web.headerTable.fontSize},children:[" ",e.title]}),t.title_val=e.title,e.children&&(t.children=e.children.map(e=>{let t={...e};return t.title=(0,n.jsxs)("div",{className:"text-center",style:{fontWeight:m.web.headerTable.fontWeight,fontSize:m.web.headerTable.fontSize},children:[" ",e.title]}),t.title_val=e.title,e.children&&(t.children=e.children.map(e=>{let t={...e};return t.title=(0,n.jsxs)("div",{className:"text-center",style:{fontWeight:m.web.headerTable.fontWeight,fontSize:m.web.headerTable.fontSize},children:[" ",e.title]}),t.title_val=e.title,t})),t})),t})),t})),t})},pdf:e=>{let{globalState:t,reportType:l,date:n,landscape:i,pageSize:o,nameFile:d,newTable:s,dataHead:c,dataBody:u,positionSignature:h,signingType:g,headStyle:v,bodyStyle:p,signatureOff:b,columnStyles:y,didDrawCell:S,signatureAll:x,splitTableMarginBottom:z,positionSignatureNewTable:_}=e,w=!1,k=e=>{var k,P,T,C,j,N,W,H,I,Y,D,A,B,F,L,R,M,E,O,Z,q,U,G,K,J,V,$,Q,X,ee,et,el,en,ei,eo,ea,ed,er,es,ec,eu,eh,eg,ev,ef;let ep=new a.default({orientation:i?"l":"p",unit:"mm",format:o?[o.width,o.height]:"a4"}),em=null==v?void 0:v.marginLeft;(null==v?void 0:v.marginLeft)==0&&(em=12);let eb=null==v?void 0:v.marginRight;(null==v?void 0:v.marginRight)==0&&(eb=12),r()(ep,{theme:"plain",margin:{right:eb?eb-2:12,left:em?em-2:12,top:5},body:[[{content:(null==l?void 0:l.n_line_1)+"\n"+(null==l?void 0:l.n_line_2)+"\n"+n.toUpperCase(),styles:{halign:"left",fontSize:9,fontStyle:"bold"}}]]});let ey=null,eS={};(null==v?void 0:v.cellPadding)&&(eS={...eS,cellPadding:null==v?void 0:v.cellPadding}),(null==v?void 0:v.minCellHeight)&&(eS={...eS,minCellHeight:null==v?void 0:v.minCellHeight}),eS={...eS,fontSize:null!==(k=null==v?void 0:v.fontSize)&&void 0!==k?k:7};let ex={};w&&(ex={bottom:null!=z?z:35});let ez=0;r()(ep,{margin:{right:eb,left:em,...ex},startY:20,theme:"striped",headStyles:{lineWidth:.1,lineColor:[0,0,0],fillColor:[121,193,235],textColor:[0,0,0],halign:"center",valign:"middle",fontStyle:"bold",cellWidth:null==v?void 0:v.cellWidth,fontSize:null!==(P=null==p?void 0:p.fontSize)&&void 0!==P?P:m.pdf.headerTable.fontSize,...eS},bodyStyles:{lineWidth:.1,lineColor:[0,0,0],textColor:[0,0,0],fontSize:null!==(T=null==p?void 0:p.fontSize)&&void 0!==T?T:m.pdf.bodyTable.fontSize},columnStyles:{...y},head:[...c],body:[...u],didDrawCell:e=>{if("stationPerformance"==S&&0===e.column.index&&0===e.row.index&&0==ez){let t=e.cell.x,l=e.cell.y,n=t+e.cell.width,i=l+e.cell.height;ep.setLineWidth(.1),ep.line(t,l,n,i),ep.text("ST AWAL",t+14,l+3,{angle:0}),ep.text("ST AKHIR",t+1,l+6,{angle:0}),ez=1}},didParseCell:e=>{ey=e.table}});let e_=o?[o.width,o.height]:[210,297],ew=i?e_[0]:e_[1],ek=!1,eP=ey.finalY;if(x&&!b){if(ew<(null==ey?void 0:ey.finalY)+55&&!(null==h?void 0:h.nonAdj)){ek=!0;let e=ew-(null==ey?void 0:ey.finalY);eP=(null==ey?void 0:ey.finalY)+e}f({autoTable:r(),doc:ep,globalState:t,tableMeta:eP,reportType:l,landscape:i?"l":"p",position:h,pageSize:o?[o.width,o.height]:[210,297],globall:!0})}if(null==s?void 0:s.length)for(let e=0;e<s.length;e++)if(null===(C=s[e])||void 0===C?void 0:C.manual)(null===(eg=s[e])||void 0===eg?void 0:eg.manual)=="facilityMaintenance"&&(ep.addPage(),r()(ep,{startY:10,body:[[{content:"KETERANGAN :",styles:{valign:"middle",halign:"left",fontStyle:"bold"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}},{content:"",colSpan:2,styles:{halign:"center"}}],[{content:"	PH     = Perawatan Harian\n\n	P1      = Perawatan 1 (Satu) Bulanan\n\n	P3      = Perawatan 3 (Tiga) Bulanan\n\n	P6      = Perawatan 6 (Enam) Bulanan\n\n	P12    = Perawatan 12 (Dua Belas) Bulanan\n\n	P24    = Perawatan 2 (Dua) Tahunan\n\n	P48    = Perawatan 4 (Empat) Tahunan\n\n	P72    = Perawatan 6 (Enam) Tahunan\n\n	PB     = Perawatan Corrective/Perbaikan",styles:{valign:"middle",halign:"left"}}]],theme:"grid",styles:{fillColor:[255,255,255],lineWidth:0,lineColor:[0,0,0]},bodyStyles:{fillColor:[255,255,255],textColor:[0,0,0],lineColor:[0,0,0],fontSize:6},didParseCell:e=>{ey=e.table}}));else{let t={};(null===(N=s[e])||void 0===N?void 0:null===(j=N.headStyle)||void 0===j?void 0:j.cellPadding)&&(t={...t,cellPadding:null===(ea=s[e])||void 0===ea?void 0:null===(eo=ea.headStyle)||void 0===eo?void 0:eo.cellPadding});let l=0,n={};(null===(W=s[e])||void 0===W?void 0:W.didDrawCell)&&(null===(ed=s[e])||void 0===ed?void 0:ed.didDrawCell)=="stationPerformance"&&(n={didDrawCell:e=>{if(0===e.column.index&&0===e.row.index&&0===l){let t=e.cell.x,n=e.cell.y,i=t+e.cell.width,o=n+e.cell.height;ep.setLineWidth(.1),ep.line(t,n,i,o),ep.text("ST AWAL",t+14,n+3,{angle:0}),ep.text("ST AKHIR",t+1,n+6,{angle:0}),l=1}}}),t={...t,fontSize:null!==(er=null===(I=s[e])||void 0===I?void 0:null===(H=I.headStyle)||void 0===H?void 0:H.fontSize)&&void 0!==er?er:7},(null===(D=s[e])||void 0===D?void 0:null===(Y=D.headStyle)||void 0===Y?void 0:Y.minCellHeight)&&(t={...t,minCellHeight:null===(ec=s[e])||void 0===ec?void 0:null===(es=ec.headStyle)||void 0===es?void 0:es.minCellHeight});let i=null===(B=s[e])||void 0===B?void 0:null===(A=B.headStyle)||void 0===A?void 0:A.marginLeft;(null===(L=s[e])||void 0===L?void 0:null===(F=L.headStyle)||void 0===F?void 0:F.marginLeft)==0&&(i=12);let o=null===(M=s[e])||void 0===M?void 0:null===(R=M.headStyle)||void 0===R?void 0:R.marginRight;(null===(O=s[e])||void 0===O?void 0:null===(E=O.headStyle)||void 0===E?void 0:E.marginRight)==0&&(o=12),(null===(Z=s[e])||void 0===Z?void 0:Z.next)||ep.addPage(),(null===(q=s[e])||void 0===q?void 0:q.header)&&r()(ep,{startY:5,theme:"plain",margin:{right:o?o-2:10,left:i?i-2:10,top:5},didParseCell:e=>{ey=e.table},body:[[{content:s[e].header.toUpperCase(),styles:{halign:"left",fontSize:9,fontStyle:"bold"}}]]}),r()(ep,{margin:{right:o||12,left:i||12,...ex},startY:(null===(U=s[e])||void 0===U?void 0:U.next)?ey.finalY+(null===(G=s[e])||void 0===G?void 0:G.next)+3:(null===(K=s[e])||void 0===K?void 0:K.header)?ey.finalY:10,theme:(null===(J=s[e])||void 0===J?void 0:J.theme)?null===(V=s[e])||void 0===V?void 0:V.theme:"striped",columnStyles:{...null===($=s[e])||void 0===$?void 0:$.columnStyles},headStyles:{lineWidth:.1,lineColor:[0,0,0],fillColor:[121,193,235],textColor:[0,0,0],halign:"center",valign:"middle",fontStyle:"bold",fontSize:null!==(eu=null===(X=s[e])||void 0===X?void 0:null===(Q=X.headStyle)||void 0===Q?void 0:Q.fontSize)&&void 0!==eu?eu:m.pdf.bodyTable.fontSize,cellWidth:null===(et=s[e])||void 0===et?void 0:null===(ee=et.headStyle)||void 0===ee?void 0:ee.cellWidth,...t},bodyStyles:{lineWidth:(null===(el=s[e])||void 0===el?void 0:el.hideLine)?0:.1,lineColor:[0,0,0],textColor:[0,0,0],fontSize:null!==(eh=null===(ei=s[e])||void 0===ei?void 0:null===(en=ei.bodyStyle)||void 0===en?void 0:en.fontSize)&&void 0!==eh?eh:m.pdf.bodyTable.fontSize},head:[...s[e].dataHead],body:[...s[e].dataBody],...n,didParseCell:e=>{ey=e.table}})}if(eP=ey.finalY,ew<(null==ey?void 0:ey.finalY)+55&&!(null==h?void 0:h.nonAdj)){ek=!0;let e=ew-(null==ey?void 0:ey.finalY);eP=(null==ey?void 0:ey.finalY)+e}return b||f({autoTable:r(),doc:ep,globalState:t,tableMeta:eP,reportType:l,landscape:i?"l":"p",position:null!=_?_:h,signType:g,pageSize:o?[o.width,o.height]:[210,297],option:null!==(ef=null!=S?S:null==s?void 0:null===(ev=s[(null==s?void 0:s.length)-1])||void 0===ev?void 0:ev.manual)&&void 0!==ef?ef:void 0,globall:!0}),e||ep.save(d.toUpperCase()+".pdf"),ek};console.log("signatureNewPage : ",w=k(!0)),k()}},m={web:{header:{one:{fontSize:"20px",lineHeight:1.2,marginBottom:"0.75rem",fontWeight:"700"},more:{fontSize:"20px",lineHeight:1.2,marginBottom:"0.75rem",fontWeight:"700",marginTop:"0.75rem"},fit:{fontSize:"20px",lineHeight:1.2,marginBottom:"0.75rem",fontWeight:"700",display:"flex",justifyContent:"center"}},headerTable:{fontWeight:600,fontSize:"16px",padding:"10px 16px",lineHeight:1.57},bodyTable:{padding:"10px 16px",fontSize:"14px",lineHeight:1.57},bodyTotal:{padding:"10px 16px",fontSize:"14px",lineHeight:1.57,fontWeight:600}},pdf:{themeHeader:"plain",themeTable:"striped",header:{halign:"left",fontSize:9,fontStyle:"bold"},headerTable:{lineWidth:.1,lineColor:[0,0,0],fillColor:[121,193,235],textColor:[0,0,0],halign:"center",valign:"middle",fontStyle:"bold",fontSize:7},bodyTable:{lineWidth:.1,lineColor:[0,0,0],textColor:[0,0,0],fontSize:6},signatureFontSize:8},excel:{fontSizeHeader:11,fontSizeHeaderTabel:10,fontSizeTable:9,fontSizeSignature:10,bgFill:{type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}}}};function b(e,t){let[l,n]=null==e?void 0:e.split("_").map(Number),[i,o]=null==t?void 0:t.split("_").map(Number),a=[],d=e=>{let t=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(l,"-").concat(n)},r=new Date(i,l-1,1),s=new Date(o,n,0);for(;r<=s;)a.push(d(r)),r.setDate(r.getDate()+1);return a}},13498:function(e,t,l){l.d(t,{cn:function(){return o}});var n=l(44839),i=l(96164);function o(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,i.m6)((0,n.W)(t))}}}]);