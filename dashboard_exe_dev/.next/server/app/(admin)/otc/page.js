(()=>{var e={};e.id=5735,e.ids=[5735],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4072:e=>{"use strict";e.exports=require("rimraf")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},22057:e=>{"use strict";e.exports=require("constants")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},56502:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),a(54704),a(20461),a(24513),a(57198),a(12742),a(39614),a(26083),a(19644),a(96560);var l=a(23191),r=a(88716),n=a(37922),o=a.n(n),i=a(95231),s={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>i[e]);a.d(t,s);let d=["",{children:["(admin)",{children:["otc",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,54704)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\otc\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,20461)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\layout.tsx"],error:[()=>Promise.resolve().then(a.bind(a,24513)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\error.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,57198)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,12742)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,39614)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\layout.tsx"],error:[()=>Promise.resolve().then(a.bind(a,26083)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\error.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,19644)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,96560)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\not-found.tsx"]}],c=["D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\otc\\page.tsx"],m="/(admin)/otc/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new l.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(admin)/otc/page",pathname:"/otc",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},27407:(e,t,a)=>{Promise.resolve().then(a.bind(a,52210))},52210:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var l=a(10326),r=a(17577),n=a(35047),o=a(34626),i=a(82650),s=a(37619),d=a(88295),c=a.n(d);a(52279);var m=a(20341),u=a(95425);a(55675);var p=a(62989),g=a.n(p);let h=a(30735);c().locale("id");let _=a(8534);c().extend(_),c().extend(g());let f=e=>{let t=1,a="";for(let l=e.length-1;l>=0;l--){let r=e.toUpperCase().charCodeAt(l);if((r+=t)>90?(r=65,t=1):t=0,a=String.fromCharCode(r)+a,!t){a=e.substring(0,l)+a;break}}return t&&(a="A"+a),a},C=(e,t,a,l,r,n,o,i)=>{let s="ABCDEFGHIJKLMNOPQRSTUVWXYZ",d=new h.Workbook,m=d.addWorksheet(),u=6;d.creator="NUTECH",d.lastModifiedBy="LRT",d.created=new Date,d.modified=new Date,d.lastPrinted=new Date,m.getCell("A1").value=t?.n_line_1,m.getCell("A2").value=t?.n_line_2,m.mergeCells("A3:F3"),m.getCell("A3").value=1==i?"PERIODE : "+c()(e).format("MMMM YYYY").toUpperCase():2==i?"PERIODE : "+c()(e).format("MMMM YYYY").toUpperCase()+" S/D "+c()(e).add(2,"month").format("MMMM YYYY").toUpperCase():"PERIODE : TAHUN "+c()(e).format("YYYY"),m.getCell("A5").value="NO",m.getCell("B5").value="TRAINSET",m.getCell("C5").value="JUMLAH HARI",m.getCell("D5").value="JUMLAH OTC/HARI",m.getCell("E5").value="FREKUENSI PEMBERSIHAN/HARI",m.getCell("F5").value="JUMLAH KINERJA OTC",m.getCell("A5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.getCell("B5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.getCell("C5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.getCell("D5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.getCell("E5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.getCell("F5").fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"},bgColor:{argb:"79c1eb"}},m.columns=[{key:"no",width:5},{key:"i_trainset",width:11},{key:"i_total_day",width:13.71},{key:"i_total_day_otc",width:18},{key:"i_total_freq_day_otc",width:19.29},{key:"jumlah_kinerja_otc",width:19}],m.getColumn("A").key="no",m.getColumn("B").key="i_trainset",m.getColumn("C").key="i_total_day",m.getColumn("D").key="i_total_day_otc",m.getColumn("E").key="i_total_freq_day_otc",m.getColumn("F").key="jumlah_kinerja_otc";for(let e=0;e<l.length;e++){let t="B";m.getCell("A"+u).value=e+1,e%2==0&&(m.getCell("A"+u).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"},bgColor:{argb:"f5f5f5"}});for(let a=0;a<Object.keys(l[e]).length;a++)m.getCell(t+u).value=l[e][Object.keys(l[e])[a]]?l[e][Object.keys(l[e])[a]]:"-","number"==typeof l[e][Object.keys(l[e])[a]]&&(m.getCell(t+u).numFmt="#,##0"),e%2==0&&(m.getCell(t+u).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"},bgColor:{argb:"f5f5f5"}}),t=f(t);m.getRow(u).font={size:9,name:"Calibri"},m.getRow(u).alignment={horizontal:"center",vertical:"middle"},u++}let p=m.lastRow._number+1,g=m.lastColumn._number-1;m.mergeCells(`A${p}:B${p}`),m.getCell(`A${p}`).value=n,m.getCell(`A${p}`).alignment={horizontal:"center",vertical:"middle"},m.getRow(`${p}`).font={size:9,bold:!0,name:"Calibri"},m.mergeCells(`A1:${s.charAt(g)}1`),m.getRow(1).font={size:11,bold:!0,name:"Calibri"},m.mergeCells(`A2:${s.charAt(g)}2`),o.map((e,t)=>{m.getCell(`${s.charAt(g-(o.length-(t+1)))}${p}`).value=0==o[t]?"-":o[t],m.getCell(`${s.charAt(g-(o.length-(t+1)))}${p}`).numFmt="#,##0",m.getCell(`${s.charAt(g-(o.length-(t+1)))}${p}`).alignment={horizontal:"center",vertical:"middle"}}),m.getColumn(1).alignment={horizontal:"center"},m.getColumn(2).alignment={horizontal:"left"},m.getRow(1).alignment={horizontal:"left",vertical:"middle",wrapText:!0},m.getRow(2).alignment={horizontal:"left"},m.getRow(2).font={name:"Calibri",bold:!0},m.getRow(3).alignment={horizontal:"left"},m.getRow(3).font={name:"Calibri",bold:!0},m.getRow(5).font={size:10,name:"Calibri",bold:!0},m.getRow(5).height=30,m.getRow(5).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.getCell(`A${p}`).alignment={horizontal:"center",vertical:"middle"};for(let e=5;e<=m.rowCount;e++)for(let t=1;t<=g+1;t++)m.getCell(e,t).border={top:{style:"thin",color:{argb:"000000"}},left:{style:"thin",color:{argb:"000000"}},bottom:{style:"thin",color:{argb:"000000"}},right:{style:"thin",color:{argb:"000000"}}};let _=(t?.n_position_1).split("AND");return m.getCell(`${s.charAt(g-1)}${p+3}`).value=_[0]?_[0]:t?.n_position_1,m.getCell(`${s.charAt(g-1)}${p+4}`).value=_[1]?"AND "+_[1]:"",m.getCell(`${s.charAt(g-1)}${p+8}`).value=t.n_name_1,m.getCell(`${s.charAt(g-1)}${p+9}`).value="Nipp. "+t.i_nipp_1,m.getRow(p+3).font={size:10,name:"Calibri"},m.getRow(p+4).font={size:10,name:"Calibri"},m.getRow(p+8).font={size:10,name:"Calibri"},m.getRow(p+9).font={size:10,name:"Calibri"},m.mergeCells(`${s.charAt(g-1)}${p+3}:${s.charAt(g)}${p+3}`),m.mergeCells(`${s.charAt(g-1)}${p+4}:${s.charAt(g)}${p+4}`),m.mergeCells(`${s.charAt(g-1)}${p+8}:${s.charAt(g)}${p+8}`),m.mergeCells(`${s.charAt(g-1)}${p+9}:${s.charAt(g)}${p+9}`),m.getCell(`${s.charAt(g-1)}${p+3}`).font={size:10,bold:!0,name:"Calibri"},m.getCell(`${s.charAt(g-1)}${p+4}`).font={size:10,bold:!0,name:"Calibri"},m.getCell(`${s.charAt(g-1)}${p+8}`).font={size:10,bold:!0,name:"Calibri",underline:!0},m.getCell(`${s.charAt(g-1)}${p+9}`).font={size:10,bold:!0,name:"Calibri"},m.getCell(`${s.charAt(g-1)}${p+3}`).alignment={horizontal:"center"},m.getCell(`${s.charAt(g-1)}${p+4}`).alignment={horizontal:"center"},m.getCell(`${s.charAt(g-1)}${p+8}`).alignment={horizontal:"center"},m.getCell(`${s.charAt(g-1)}${p+9}`).alignment={horizontal:"center"},d.xlsx.writeBuffer().then(e=>{let t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),a=window.URL.createObjectURL(t),l=document.createElement("a");document.body.appendChild(l),l.setAttribute("style","display: none"),l.href=a,l.download=r+".xlsx",l.click(),window.URL.revokeObjectURL(a),l.remove()})};var b=a(87296),x=a(32653),y=a.n(x),A=a(56317),M=a.n(A),E=a(97194);let v=(e,t,a,l,r,n,o,i,s,d)=>{let c=new b.default;c.setFontSize(11),c.setFont("calibri","bold");let m=[];l.map((e,t)=>{m.push(Object.values(l[t]))});let u=null;y()(c,{startY:10,theme:"plain",margin:{right:25,left:25},bodyStyles:{fontSize:9},body:[[{content:t.n_line_1.toUpperCase(),styles:{halign:"left",fontSize:9,fontStyle:"bold",cellPadding:0}}],[{content:t.n_line_2.toUpperCase(),styles:{halign:"left",fontSize:9,fontStyle:"bold",cellPadding:0}}],[{content:t.n_line_4.toUpperCase()+" : "+e,styles:{halign:"left",fontSize:9,fontStyle:"bold",cellPadding:0}}]]});let p=[];a.map(e=>{void 0!==e.title_val&&p.push(e.title_val)}),y()(c,{startY:23,theme:"striped",margin:{right:25,left:25},headStyles:{lineWidth:.2,lineColor:[0,0,0],fillColor:[121,193,235],textColor:[0,0,0],halign:"center",valign:"middle",fontSize:8},bodyStyles:{lineWidth:.2,lineColor:[0,0,0],fontSize:7},head:[p],body:[...l?.map((e,t)=>[t+1,e.trainset,e.jumlah_hari?e.jumlah_hari:"-",e.jumlah_otc_hari?e.jumlah_otc_hari:"-",e.frekuensi_pembersihan_hari?e.frekuensi_pembersihan_hari:"-",e.jumlah_kinerja_otc?e.jumlah_kinerja_otc:"-"]),[{content:n,colSpan:2,fontStyle:"bold"},...o.map((e,t)=>[0==o[t]?"-":M()(o[t]).format("0,0")])]],columnStyles:{0:{halign:"center"},1:{halign:"left"},2:{halign:"center"},3:{halign:"center"},4:{halign:"center",cellWidth:36},5:{halign:"center"}},didParseCell:function(e){u=e.table;var t=e.table.body;"body"===e.section&&e.row.index===t.length-1&&(e.cell.styles.fontStyle="bold"),e.cell&&"head"===e.cell.section&&(e.cell.raw,e.cell.styles.halign="center")}}),t.n_position_1.split("AND"),c.lastAutoTable.finalY,(0,E.Zc)({autoTable:y(),doc:c,globalState:s,tableMeta:u,reportType:t,landscape:"p",pageSize:[210,297],position:{column:2,underlinePadding:-1,paddingTop:-2,marginLeft:-5}}),c.save(r+".pdf")};a(44624);var R=a(46821);function w(){let e=(0,r.useContext)(m.Z),t=(0,n.usePathname)(),{message:a,notification:d,modal:p}=o.Z.useApp(),[g,h]=(0,r.useState)(null),[_,f]=(0,r.useState)([]),[b,x]=(0,r.useState)([]),[y,A]=(0,r.useState)(!1),[M,w]=(0,r.useState)(0),[T,Y]=(0,r.useState)(0),j=new Intl.NumberFormat("id-ID",{style:"decimal",maximumFractionDigits:2}),[N,$]=(0,r.useState)([1,"rangepicker"]),I=[{title:"NO",key:"no",dataIndex:"no",render:(e,t,a)=>a+1,align:"center",width:"3%"},{title:"TRAINSET",key:"i_trainset",type:"i_trainset",name:"i_trainset",dataIndex:"i_trainset",align:"left"},{title:"JUMLAH HARI",key:"i_total_day",type:"i_total_day",name:"i_total_day",dataIndex:"i_total_day",align:"center",render:e=>0==e?"-":j.format(e)},{title:"JUMLAH OTC/HARI",key:"i_total_day_otc",type:"i_total_day_otc",name:"i_total_day_otc",dataIndex:"i_total_day_otc",align:"center",render:e=>0==e?"-":j.format(e)},{title:"FREKUENSI PEMBERSIHAN/HARI",align:"center",width:"23%",key:"i_total_freq_day_otc",type:"i_total_freq_day_otc",name:"i_total_freq_day_otc",dataIndex:"i_total_freq_day_otc",render:e=>0==e?"-":j.format(e)},{title:"JUMLAH KINERJA OTC",align:"center",key:"jumlah_kinerja_otc",type:"jumlah_kinerja_otc",name:"jumlah_kinerja_otc",dataIndex:"jumlah_kinerja_otc",render:e=>0==e?"-":j.format(e)}],P=(t,a,l,r,n)=>{let o=c()(t).format("MMMM/YYYY"),i=o.split("/"),s="";1==N[0]?(o=c()(t).format("MMMM YYYY").toUpperCase(),s=a.n_line_1+" "+i[0].toUpperCase()+" "+i[1]):(o=2==N[0]?c()(t).format("MMMM YYYY").toUpperCase()+" S/D "+c()(t).add(2,"month").format("MMMM YYYY").toUpperCase():"TAHUN "+c()(t).format("YYYY"),s=a.n_line_1+" "+o);let d=[],m=[],u=0,p=0,g=0,h=0;Object.keys(r).forEach(e=>{m.push({trainset:r[e].i_trainset,jumlah_hari:r[e].i_total_day,jumlah_otc_hari:r[e].i_total_day_otc,frekuensi_pembersihan_hari:r[e].i_total_freq_day_otc,jumlah_kinerja_otc:r[e].jumlah_kinerja_otc}),u+=r[e].i_total_day,p+=r[e].i_total_day_otc,g+=r[e].i_total_freq_day_otc,h+=r[e].jumlah_kinerja_otc}),d.push(u),d.push(p),d.push(g),d.push(h),"excel"==n?C(t,a,l,m,s,"TOTAL",d,N[0]):"pdf"==n&&v(o,a,l,m,s,"TOTAL",d,e?.dataUser?.user.fullname,e,N[0])},[U,k]=(0,r.useState)(!1),S=async e=>{k(!0);let t=async()=>{try{return"pdf"==e?P(g,_,E.x4.web.headerTable(I),b,"pdf"):P(g,_,E.x4.web.headerTable(I),b,"excel"),!0}catch(e){return!1}};setTimeout(async()=>{await t()?setTimeout(()=>{a.open({type:"success",content:l.jsx("span",{className:" capitalize",children:"Export Success"})}),k(!1)},1e3):setTimeout(()=>{a.open({type:"error",content:l.jsx("span",{className:" capitalize",children:"Export Invalid"})}),k(!1)},1e3)},500)};return l.jsx(u.Z,{pathname:t,globalState:e,children:l.jsx(R.Z,{type:1==N[0]?"month":2==N[0]?"triwulan":"year",className:" flex justify-center",loadingExport:U,childrenInput:(0,l.jsxs)("div",{className:"flex flex-col max-md:w-full ml-2",children:[l.jsx("span",{id:"subject",className:"mb-5 mt-3  text-[14px]",children:"Tipe"}),l.jsx(i.default,{disabled:U,placeholder:"Select Filter",onChange:e=>{Y(T+1),x([]);let t="",a=0;"rangepicker"==e?(t="rangepicker",a=1):"triwulan"==e?(t="month",a=2):(t="year",a=3),$([a,t])},defaultValue:"Per Bulan",className:"max-md:w-full",options:[{value:"rangepicker",label:"Per Bulan"},{value:"triwulan",label:"Per Triwulan"},{value:"year",label:"Per Tahun"}]})]}),data:b,loading:y,dateChange:e=>{e&&h(c()(e).format("YYYY-MM"))},downloadPdf:()=>S("pdf"),downloadExcel:()=>S("excel"),codeDelete:1==N[0]?"OTC":"",onDelete:()=>{w(M+1)},onChangeTri:T,children:(0,l.jsxs)("div",{className:" w-[830px]",children:[E.x4.web.header(_,1==N[0]?"PERIODE : "+c()(g).format("MMMM YYYY"):2==N[0]?"PERIODE : "+c()(g).format("MMMM YYYY")+" S/D "+c()(g).add(2,"month").format("MMMM YYYY"):"PERIODE : TAHUN "+c()(g).format("YYYY")),l.jsx(s.Z,{rowClassName:E.x4.web.striped,bordered:!0,className:"",rowKey:"i_id",columns:E.x4.web.headerTable(I),dataSource:b,pagination:!1,summary:e=>{let t=0,a=0,r=0,n=0;return e.forEach(({i_total_day:e,i_total_day_otc:l,i_total_freq_day_otc:o,jumlah_kinerja_otc:i})=>{t+=e,a+=l,r+=o,n+=i}),l.jsx(l.Fragment,{children:(0,l.jsxs)(s.Z.Summary.Row,{children:[l.jsx(s.Z.Summary.Cell,{index:0,className:"font-bold",colSpan:2,align:"center",children:"TOTAL"}),l.jsx(s.Z.Summary.Cell,{index:1,className:"font-bold",align:"center",children:0==t?"-":j.format(t)}),l.jsx(s.Z.Summary.Cell,{index:2,className:"font-bold",align:"center",children:0==a?"-":j.format(a)}),l.jsx(s.Z.Summary.Cell,{index:3,className:"font-bold",align:"center",children:0==r?"-":j.format(r)}),l.jsx(s.Z.Summary.Cell,{index:4,className:"font-bold",align:"center",children:0==n?"-":j.format(n)})]})})}})]})})})}},54704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var l=a(68570);let r=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\otc\page.tsx`),{__esModule:n,$$typeof:o}=r;r.default;let i=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\otc\page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),l=t.X(0,[3023,9400,385,1862,7296,2653,1063,961,462,124,7619,678,2207,8809,3627,9899,7194,6821],()=>a(56502));module.exports=l})();