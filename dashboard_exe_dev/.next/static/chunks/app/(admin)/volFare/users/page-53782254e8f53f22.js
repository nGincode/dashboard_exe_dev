(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5522,4527],{61704:function(e,t,a){Promise.resolve().then(a.bind(a,73240))},73240:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(57437),s=a(2265),i=a(42005),r=a(16463),o=a(68348),l=a(30939),d=a(71275),u=a(65188),c=a(18658);function h(){var e,t,a,h,m;let p="Users",f=o.Z.useApp(),v=(0,r.usePathname)(),g=(0,s.useContext)(d.Z),[b,x]=(0,s.useState)(!1),[k,y]=(0,s.useState)([]),[_,z]=(0,s.useState)([]);(0,s.useEffect)(()=>{x(!0),(async()=>{let e=await (0,i.Z)().get("user"),t=await (0,i.Z)().get("role");(0,l.Z)({res:e,app:f})&&(0,l.Z)({res:t,app:f})?(y(e.data),z(t.data)):(z([]),y([])),x(!1)})()},[v,g,f]);let S=[{title:"Avatar",key:"avatar",type:"avatar",name:"avatar",width:80},{title:"id",key:"id",hidden:!0},{title:"Username",key:"username",type:"text",name:"username",placeholder:"Username",search:!0,sort:!0,rules:[{required:!0}],export:!0,disabledEdit:!0},{title:"NIK",key:"nik",type:"number",name:"nik",placeholder:"NIK",search:!0,sort:!0,rules:[{required:!0}],export:!0,disabledEdit:!0},{title:"Email",key:"email",type:"email",name:"email",placeholder:"Email",search:!0,sort:!0,rules:[{required:!0,type:"email"}],export:!0,disabledEdit:!0,ellipsis:!0},{title:"Full Name",key:"fullname",type:"text",name:"fullname",placeholder:"Full Name",search:!0,sort:!0,rules:[{required:!0}],export:!0,ellipsis:!0},{title:"Jabatan",key:"jabatan",type:"text",name:"jabatan",placeholder:"Jabatan",search:!0,sort:!0,rules:[{required:!0}],export:!0},{title:"Role",key:"role_id",name:"role_id",type:"select",sort:!0,search:!0,rules:[{required:!0}],tableHidden:!0,select:{type:"search",data:[..._.map(e=>({value:e.id,label:e.name}))]}},{title:"Role",key:"role_name",name:"role_id",inputHidden:!0,sort:!0,search:!0,export:!0},{title:"Password",key:"password",name:"password",type:"password",tableHidden:!0,editHidden:!0}],$={rowSelection:!0,action:{create:(null==g?void 0:null===(e=g.permission)||void 0===e?void 0:e.indexOf("create"))!==-1?"user/insert":void 0,delete:(null==g?void 0:null===(t=g.permission)||void 0===t?void 0:t.indexOf("delete"))!==-1?"user/delete":void 0,edit:(null==g?void 0:null===(a=g.permission)||void 0===a?void 0:a.indexOf("update"))!==-1?"user/update":void 0,change_password:!0},export:{excel:(null==g?void 0:null===(h=g.permission)||void 0===h?void 0:h.indexOf("export excel"))!==-1&&{subject:"Data "+p},pdf:(null==g?void 0:null===(m=g.permission)||void 0===m?void 0:m.indexOf("export pdf"))!==-1&&{subject:"Data "+p}}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.Z,{pathname:v,globalState:g,children:(0,n.jsx)(c.Z,{loadFirst:b,urlData:"/user",type:$,columnData:S,fetch:k,modalTitle:p})})})}},60728:function(e,t,a){"use strict";a.d(t,{un:function(){return c},zx:function(){return u}});var n=a(57437),s=a(2265),i=a(71538),r=a(12218),o=a(13498),l=a(46682);let d=(0,r.j)("inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-lg px-3",lg:"h-11 rounded-lg px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:a,variant:s,size:r,asChild:l=!1,...u}=e,c=l?i.g7:"button";return(0,n.jsx)(c,{className:(0,o.cn)(d({variant:s,size:r,className:a})),ref:t,...u})});u.displayName="Button";let c=e=>{let{type:t,icon:a,loading:s,label:i,style:r,className:o}=e;return(0,n.jsx)(l.ZP,{htmlType:t,type:r,icon:a,loading:s,className:o,children:i})}},71275:function(e,t,a){"use strict";let n=a(2265).createContext({});t.Z=n},65188:function(e,t,a){"use strict";var n=a(57437),s=a(60728),i=a(66648),r=a(42005);t.Z=e=>{var t,a;let{children:o,pathname:l,globalState:d}=e;return(0,n.jsx)(n.Fragment,{children:(0,r.Z)().cekPermission(null!==(a=null==d?void 0:null===(t=d.dataUser)||void 0===t?void 0:t.menuList)&&void 0!==a?a:[],l)&&(null==d?void 0:d.permission.indexOf("view"))!=-1?o:(0,n.jsxs)("div",{className:" flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto py-5",children:[(0,n.jsx)(i.default,{alt:"permission",height:0,width:0,quality:70,src:"/assets/illustrations/maintenance.svg",className:"w-80 md:w-[28rem] 2xl:w-[40rem] shadow-sm  object-cover"}),(0,n.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold tracking-tight text-center",children:"Not Permission"}),(0,n.jsx)("span",{className:"text-center mt-1 mb-5 text-zinc-600 dark:text-zinc-400 md:w-9/12 break-all px-10 sm:px-0",children:"It looks like the page you are looking for doesnt have permission"}),(0,n.jsx)("div",{className:"flex items-center space-x-2",children:(0,n.jsx)("a",{onClick:()=>window.location.href="/",children:(0,n.jsx)(s.zx,{variant:"outline",children:"Back to Home"})})})]})})}},30939:function(e,t,a){"use strict";var n=a(57437);t.Z=e=>{var t,a,s,i,r,o,l;let{res:d,app:u,type:c,msgTrue:h,msgFalse:m,key:p}=e,{message:f,notification:v,modal:g}=u;if(d)return(null==d?void 0:d.response)?(null==d?void 0:null===(t=d.response.data)||void 0===t?void 0:t.code)=="00"?(h&&!m&&("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:null==d?void 0:d.response.data.code,type:"success",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==d?void 0:d.response.data.message]})}),!0):(m||((null==d?void 0:null===(a=d.response.data)||void 0===a?void 0:a.code)?(null==d?void 0:d.response.data.code)=="403"||("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:d.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==d?void 0:d.response.data.message]})}):("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:null==d?void 0:null===(s=d.response.data)||void 0===s?void 0:s.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==d?void 0:null===(r=d.response)||void 0===r?void 0:null===(i=r.data)||void 0===i?void 0:i.message]})})),!1):(null==d?void 0:d.code)=="00"?(h&&!m&&("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:d.code,type:"success",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",d.message]})}),!0):(m||((null==d?void 0:d.code)?"403"==d.code||("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:d.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",d.message]})}):("message"==c?f:"notification"==c?v:"modal"==c?g:f).open({key:null!=p?p:null==d?void 0:d.code,type:"error",content:(0,n.jsxs)("span",{className:" capitalize",children:[" ",null==d?void 0:null===(l=d.response)||void 0===l?void 0:null===(o=l.data)||void 0===o?void 0:o.message]})})),!1)}},42005:function(e,t,a){"use strict";var n=a(38472),s=a(62737),i=a.n(s),r=a(51470),o=a.n(r),l=a(9109).lW;i().extend(o()),t.Z=(e,t)=>{let a=n.Z.create({baseURL:"http://devbackend-psolrtjabodebek.kai.id/api/v1/",headers:e||{Accept:"application/json","Content-Type":"application/json"},...t});a.interceptors.request.use(e=>{let t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.headers["request-startTime"]=new Date().getTime(),e.headers["request-date"]=i()(),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>{let t=new Date().getTime(),a=e.config.headers["request-startTime"];return e.headers["request-duration"]=t-a,e});let s=()=>{var e,t;let a=!!(e=localStorage.getItem("accessToken"))&&JSON.parse(new l((null==e?void 0:null===(t=e.split("."))||void 0===t?void 0:t[1]).replace(/-/g,"+").replace(/_/g,"/"),"base64").toString("ascii"));return!!a&&a.token_id},r=async()=>a.get("/user/".concat(s())).then(e=>{let t=e.data.data.role_id;return a.post("/menu/list/",{role_id:t}).then(e=>e.data)}).catch(e=>e);return{idUser:s,login:async e=>a.post("/auth/login",e).then(e=>{let{data:t}=e;return localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("refreshToken",t.data.refreshToken),sessionStorage.setItem("auth",JSON.stringify(t.data.user)),t}).catch(e=>{var t,a;return null!==(a=null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)&&void 0!==a?a:e}),get:async(e,t)=>a.get(e).then(e=>t?e:e.data).catch(e=>e),post:async(e,t,n)=>a.post(e,t,n).then(e=>e.data).catch(e=>e),menuUsers:r,menuApp:async()=>a.post("/menu/list/").then(e=>e.data).catch(e=>e),refresh_Token:async()=>{let e=localStorage.getItem("refreshToken");return!!e&&(a.interceptors.request.use(t=>(t.headers["refresh-token"]=e,t),e=>Promise.reject(e)),a.get("/auth/refresh-token").then(e=>{let{data:t}=e;return localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("refreshToken",t.data.refreshToken),t}).catch(e=>!1))},cekPermission:(e,t)=>{let a=!1,n="",s=e=>{e.submenuItems.map(e=>{e.submenuItems?(""!==n&&(n=e.submenuItems[0].path),s(e)):e.path==t.replace("/admin","")&&(a=!0)})};return null==e||e.map(i=>{i.submenuItems?(""!==n&&(n=i.submenuItems[0].path),i.submenuItems.map(e=>{e.submenuItems?(""!==n&&(n=e.submenuItems[0].path),s(e)):e.path==t.replace("/admin","")&&(a=!0)})):(""==i.path?a=!0:""!==n&&e[0].path,i.path==t.replace("/admin","")&&(a=!0))}),!!a},put:async(e,t)=>a.put(e,t).then(e=>e.data).catch(e=>e),del:async(e,t)=>(console.log("data delete",t),a.delete(e,{data:t}).then(e=>e).catch(e=>e)),menuPso:async e=>a.post("/pso/",{start:e[0],end:e[1]}).then(e=>e.data).catch(e=>e)}}},13498:function(e,t,a){"use strict";a.d(t,{cn:function(){return i}});var n=a(44839),s=a(96164);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,n.W)(t))}},65799:function(e,t,a){var n;n=function(e){"use strict";var t={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(e){return e+"."}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t},e.exports=n(a(62737))},8558:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(n,s,i){var r=s.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new s(t)},r.utc=function(t){var a=i(this.toDate(),{locale:this.$L,utc:!0});return t?a.add(this.utcOffset(),e):a},r.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=r.parse;r.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var l=r.init;r.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var d=r.utcOffset;r.utcOffset=function(n,s){var i=this.$utils().u;if(i(n))return this.$u?0:i(this.$offset)?d.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var s=(""+n[0]).match(a)||["-",0,0],i=s[0],r=60*+s[1]+ +s[2];return 0===r?0:"+"===i?r:-r}(n)))return this;var r=16>=Math.abs(n)?60*n:n,o=this;if(s)return o.$offset=r,o.$u=0===n,o;if(0!==n){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(r+l,e)).$offset=r,o.$x.$localOffset=l}else o=this.utc();return o};var u=r.format;r.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,t)},r.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var c=r.toDate;r.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var h=r.diff;r.diff=function(e,t,a){if(e&&this.$u===e.$u)return h.call(this,e,t,a);var n=this.local(),s=i(e).local();return h.call(n,s,t,a)}}},e.exports=t()}},function(e){e.O(0,[2505,3113,1866,9929,3033,8173,9141,2470,3919,8348,2100,4309,5053,5458,2034,9155,7824,428,8421,8028,4052,5325,6487,8378,2755,7149,3454,9689,252,1289,45,6910,7159,3021,8658,2971,7023,1744],function(){return e(e.s=61704)}),_N_E=e.O()}]);