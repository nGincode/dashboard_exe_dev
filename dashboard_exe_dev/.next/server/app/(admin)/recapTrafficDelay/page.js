(()=>{var e={};e.id=8392,e.ids=[8392],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4072:e=>{"use strict";e.exports=require("rimraf")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},22057:e=>{"use strict";e.exports=require("constants")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},80740:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>b,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>s}),t(23672),t(20461),t(24513),t(57198),t(12742),t(39614),t(26083),t(19644),t(96560);var l=t(23191),a=t(88716),o=t(37922),n=t.n(o),i=t(95231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(r,d);let s=["",{children:["(admin)",{children:["recapTrafficDelay",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,23672)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\recapTrafficDelay\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,20461)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\layout.tsx"],error:[()=>Promise.resolve().then(t.bind(t,24513)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\error.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,57198)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,12742)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,39614)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\layout.tsx"],error:[()=>Promise.resolve().then(t.bind(t,26083)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\error.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,19644)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,96560)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\not-found.tsx"]}],c=["D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\recapTrafficDelay\\page.tsx"],p="/(admin)/recapTrafficDelay/page",b={require:t,loadChunk:()=>Promise.resolve()},h=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(admin)/recapTrafficDelay/page",pathname:"/recapTrafficDelay",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:s}})},33483:(e,r,t)=>{Promise.resolve().then(t.bind(t,38496))},38496:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>M});var l=t(10326),a=t(17577),o=t.n(a),n=t(35047),i=t(88295),d=t.n(i),s=t(34626),c=t(82650),p=t(20341),b=t(46821);t(44624);var h=t(95425),m=t(97194);t(52279);var g=t(87296);let _=(e,r,t,l,a,o,n)=>{if(!e||0===e.length)return;new g.default({format:"legal",orientation:"landscape"}).internal.pageSize.width,a.headerColumn,a.reportColumn,a.periodeColumn,r.toUpperCase();let i=[],s=[];e.length,e?.map((e,t)=>{if(0==t){let t=new Date(e?.summary[0]?.d_opr),a=d()(t);d()(a).format("DD MMMM YYYY"),e.data_rows?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),s=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":m.Gx(e.t_percent_arrive,".",",")+"%",p=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",",")),b=[{content:"Rata - Rata Lintas "+e.c_station_start+"-"+e.c_station_end+" "+r,colSpan:9,styles:{halign:"center"}},{content:o,styles:{halign:"center"}},{content:n,styles:{halign:"center"}},{content:s,styles:{halign:"center"}},{content:c,styles:{halign:"center"}},{content:p,styles:{halign:"center"}}];i.push(b)}),e.summary?.map((e,t)=>{let a=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),o=d()(a);d()(o).format("MMMM YYYY");let n=m.TM(e.t_p_arrive),s=m.TM(e.t_r_arrive),c=m.TM(e.t_l_arrive),p=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":m.Gx(e.t_percent_arrive,".",",")+"%",b=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",",")),h=[{content:"TOTAL RATA - RATA LINTAS "+r.toUpperCase(),colSpan:9,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:n,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:s,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:c,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:p,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:b,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}}];i.push(h)})}if(1==t){let t=new Date(e?.summary[0]?.d_opr),a=d()(t);d()(a).format("DD MMMM YYYY"),e.data_rows?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),i=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":m.Gx(e.t_percent_arrive,".",",")+"%",p=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",",")),b=[{content:"Rata - Rata Lintas "+e.c_station_start+"-"+e.c_station_end+" "+r,colSpan:9,styles:{halign:"center"}},{content:o,styles:{halign:"center"}},{content:n,styles:{halign:"center"}},{content:i,styles:{halign:"center"}},{content:c,styles:{halign:"center"}},{content:p,styles:{halign:"center"}}];s.push(b)}),e.summary?.map((e,t)=>{let a=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),o=d()(a);d()(o).format("MMMM YYYY");let n=m.TM(e.t_p_arrive),i=m.TM(e.t_r_arrive),c=m.TM(e.t_l_arrive),p=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":m.Gx(e.t_percent_arrive,".",",")+"%",b=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",",")),h=[{content:"TOTAL RATA - RATA LINTAS "+r.toUpperCase(),colSpan:9,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:n,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:i,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:c,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:p,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}},{content:b,bold:!0,styles:{halign:"center",fontStyle:"bold",fillColor:l[1]}}];s.push(h)})}}),m.x4.pdf({globalState:n,reportType:t,date:a.periodeColumn+r.toUpperCase(),positionSignature:{column:2,underlinePadding:-2,paddingTop:-1,marginLeft:80,fontSize:8},headStyle:{cellPadding:1,marginLeft:40},dataHead:[[{content:"NO",rowSpan:2,styles:{halign:"center",cellWidth:8}},{content:"NAMA KERETA API",rowSpan:2,styles:{halign:"center",cellWidth:28}},{content:"LINTAS",colSpan:2,styles:{halign:"center"}},{content:"JARAK \n (KM)",rowSpan:2,styles:{halign:"center",cellWidth:14}},{content:"WAKTU TEMPUH \n (PROGRAM)",colSpan:2,styles:{halign:"center"}},{content:"WAKTU TEMPUH \n (REALISASI)",colSpan:2,styles:{halign:"center"}},{content:"KA DATANG",colSpan:2,styles:{halign:"center"}},{content:"KELAMBATAN KA",colSpan:2,styles:{halign:"center"}},{content:"KECEPATAN \n (RATA-RATA/JAM)",rowSpan:2,styles:{halign:"center",cellWidth:30}}],[{content:"ASAL",styles:{halign:"center",cellWidth:10}},{content:"TUJUAN",styles:{halign:"center",cellWidth:14}},{content:"JAM",styles:{halign:"center",cellWidth:10}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"JAM",styles:{halign:"center",cellWidth:10}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"PROGRAM",styles:{halign:"center",cellWidth:18}},{content:"REALISASI",styles:{halign:"center",cellWidth:18}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"(%)",styles:{halign:"center",cellWidth:10}}]],dataBody:i,newTable:[{headStyle:{cellPadding:1,marginLeft:40,marginTop:12},next:!0,dataHead:[[{content:"NO",rowSpan:2,styles:{halign:"center",cellWidth:8}},{content:"NAMA KERETA API",rowSpan:2,styles:{halign:"center",cellWidth:28}},{content:"LINTAS",colSpan:2,styles:{halign:"center"}},{content:"JARAK \n (KM)",rowSpan:2,styles:{halign:"center",cellWidth:14}},{content:"WAKTU TEMPUH \n (PROGRAM)",colSpan:2,styles:{halign:"center"}},{content:"WAKTU TEMPUH \n (REALISASI)",colSpan:2,styles:{halign:"center"}},{content:"KA DATANG",colSpan:2,styles:{halign:"center"}},{content:"KELAMBATAN KA",colSpan:2,styles:{halign:"center"}},{content:"KECEPATAN \n (RATA-RATA/JAM)",rowSpan:2,styles:{halign:"center",cellWidth:30}}],[{content:"ASAL",styles:{halign:"center",cellWidth:10}},{content:"TUJUAN",styles:{halign:"center",cellWidth:14}},{content:"JAM",styles:{halign:"center",cellWidth:10}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"JAM",styles:{halign:"center",cellWidth:10}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"PROGRAM",styles:{halign:"center",cellWidth:18}},{content:"REALISASI",styles:{halign:"center",cellWidth:18}},{content:"MENIT",styles:{halign:"center",cellWidth:16}},{content:"(%)",styles:{halign:"center",cellWidth:10}}]],dataBody:s}],nameFile:"REKAP KELAMBATAN LINTAS "+r.toUpperCase()+".pdf",landscape:!0})};var x=t(30735),u=t.n(x);let C=(e,r,t,l,a)=>{if(!e||0===e.length)return;let o=new(u()).Workbook,n="calibri";o.creator="NUTECH",o.lastModifiedBy="LRT",o.created=new Date,o.modified=new Date,o.lastPrinted=new Date;let i=l[0][0],s=l[0][1],c=l[0][2],p=l[1][0],b=l[1][1],h=l[1][2];function g(e,r,t,l){return"column"==l?"FF"+(e<<16|r<<8|t).toString(16).toUpperCase().padStart(6,"0"):"total"==l?"FF"+(e<<16|r<<8|t).toString(16).toUpperCase().padStart(6,"0"):void 0}g(i,s,c,"column");let _=g(p,b,h,"total"),x=g(l[2][0],l[2][1],l[2][2],"total"),C=o.addWorksheet();C.getCell("A1").value=a.headerColumn,C.mergeCells("A1:N1"),C.getCell("A1").font={size:11,bold:!0,name:n},C.getCell("A2").value=a.reportColumn,C.mergeCells("A2:N2"),C.getCell("A2").font={size:11,bold:!0,name:n},C.getCell("A3").value=a.periodeColumn+""+r.toUpperCase(),C.getCell("A3").font={size:11,bold:!0,name:n};let M=["A","B","C","E","F","H","I","J","L","N"];for(let e=0;e<M.length;e++){let r=M[e]+"5";C.getCell(r).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(r).font={size:10,name:n,bold:!0,color:{argb:l[3][0]}},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:x}}}let A=["C","D","F","G","H","I","J","K","L","M"];for(let e=0;e<A.length;e++){let r=A[e]+"6";C.getCell(r).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(r).font={size:10,name:n,bold:!0,color:{argb:l[3][0]}},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:x}}}C.getCell("A5").value="NO",C.mergeCells("A5:A6"),C.getCell("B5").value="NAMA KERETA API",C.mergeCells("B5:B6"),C.getCell("C5").value="LINTAS",C.mergeCells("C5:D5"),C.getCell("C6").value="ASAL",C.getCell("D6").value="TUJUAN",C.getCell("E5").value="JARAK \n(KM)",C.mergeCells("E5:E6"),C.getCell("F5").value="WAKTU TEMPUH \n (PROGRAM)",C.mergeCells("F5:G5"),C.getCell("F6").value="JAM",C.getCell("G6").value="MENIT",C.getCell("H5").value="WAKTU TEMPUH \n (REALISASI)",C.mergeCells("H5:I5"),C.getCell("H6").value="JAM",C.getCell("I6").value="MENIT",C.getCell("J5").value="KA DATANG",C.mergeCells("J5:K5"),C.getCell("J6").value="PROGRAM",C.getCell("K6").value="REALISASI",C.getCell("L5").value="KELAMBATAN KA",C.mergeCells("L5:M5"),C.getCell("L6").value="MENIT",C.getCell("M6").value="(%)",C.getCell("N5").value="KECEPATAN \n (RATA-RATA/JAM)",C.mergeCells("N5:N6");let v={};for(let e of M){v[e]=0;for(let r=5;r<=6;r++){let t=C.getCell(`${e}${r}`).value;t&&t.toString().length>v[e]&&(v[e]=t.toString().length)}}for(let e of M)C.getColumn(e).width=v[e]+2;for(let e of M){let r=C.getColumn(e);("F"===e||"G"===e||"H"===e||"I"===e)&&(r.width=10),"N"===e&&(r.width=18),"E"===e&&(r.width=7)}let T=["J","K"],f=20/T.length;for(let e of(T.forEach(e=>{C.getColumn(e).width=f}),[5,6]))C.getRow(e).height=30;let N=e=>{let r=1,t="";for(let l=e.length-1;l>=0;l--){let a=e.toUpperCase().charCodeAt(l);if((a+=r)>90?(a=65,r=1):r=0,t=String.fromCharCode(a)+t,!r){t=e.substring(0,l)+t;break}}return r&&(t="A"+t),t},y=7,w=6;e.length,e?.map((e,t)=>{0==t&&(e.data_rows?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),i=m.TM(e.t_r_arrive),s=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":e.t_percent_arrive+"%",p=m.TM(e.i_avg_speed);"-"!==p&&(p=parseFloat(p));let b=["Rata-Rata Lintas "+e.c_station_start+"-"+e.c_station_end+" "+r,o,i,s,c,p],h="I";w+=1,b.map((e,r)=>{if(0==r){let r="A"+w;C.getCell(r).value=e,C.mergeCells("A"+w+":I"+w),C.getCell("A"+w+":L"+w).alignment={horizontal:"center",vertical:"middle"},C.getCell("A"+w+":N"+w).font={size:9,name:n},C.getCell("N"+w).numFmt="0.00"}else{let r=h+w;C.getCell(r).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).font={size:9,name:n},C.getCell(r).value=e}C.getCell("N"+w).numFmt="0.00",h=N(h)})}),e.summary?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),i=m.TM(e.t_r_arrive),s=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":e.t_percent_arrive+"%",p=m.TM(e.i_avg_speed);"-"!==p&&(p=parseFloat(p));let b=["RATA-RATA LINTAS "+r.toUpperCase(),o,i,s,c,p],h="I";w+=1,b.map((e,r)=>{if(0==r){let r="A"+w;C.getCell(r).value=e,C.mergeCells("A"+w+":I"+w),C.getCell("A"+w+":L"+w).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:_}},C.getCell(r).font={size:9,bold:!0,name:n},C.getCell("N"+w).numFmt="0.00"}else{let r=h+w;C.getCell(r).value=e,C.getCell(r).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:_}},C.getCell(r).font={size:9,bold:!0,name:n},C.getCell("N"+w).numFmt="0.00"}h=N(h)})}),y+=1)}),w+=1;for(let e=0;e<M.length;e++){let r=M[e]+(w+1);C.getCell(r).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(r).font={size:10,name:n,bold:!0,color:{argb:l[3][0]}},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:x}}}for(let e=0;e<A.length;e++){let r=A[e]+(w+2);C.getCell(r).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(r).font={size:10,name:n,bold:!0,color:{argb:l[3][0]}},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:x}}}for(let e of(C.getCell(`A${w+1}`).value="NO",C.mergeCells(`A${w+1}:A${w+2}`),C.getCell(`B${w+1}`).value="NAMA KERETA API",C.mergeCells(`B${w+1}:B${w+2}`),C.getCell(`C${w+1}`).value="LINTAS",C.mergeCells(`C${w+1}:D${w+1}`),C.getCell(`C${w+2}`).value="ASAL",C.getCell(`D${w+2}`).value="TUJUAN",C.getCell(`E${w+1}`).value="JARAK \n(KM)",C.mergeCells(`E${w+1}:E${w+2}`),C.getCell(`F${w+1}`).value="WAKTU TEMPUH \n (PROGRAM)",C.mergeCells(`F${w+1}:G${w+1}`),C.getCell(`F${w+2}`).value="JAM",C.getCell(`G${w+2}`).value="MENIT",C.getCell(`H${w+1}`).value="WAKTU TEMPUH \n (REALISASI)",C.mergeCells(`H${w+1}:I${w+1}`),C.getCell(`H${w+2}`).value="JAM",C.getCell(`I${w+2}`).value="MENIT",C.getCell(`J${w+1}`).value="KA DATANG",C.mergeCells(`J${w+1}:K${w+1}`),C.getCell(`J${w+2}`).value="PROGRAM",C.getCell(`K${w+2}`).value="REALISASI",C.getCell(`L${w+1}`).value="KELAMBATAN KA",C.mergeCells(`L${w+1}:M${w+1}`),C.getCell(`L${w+2}`).value="MENIT",C.getCell(`M${w+2}`).value="(%)",C.getCell(`N${w+1}`).value="KECEPATAN \n (RATA-RATA/JAM)",C.mergeCells(`N${w+1}:N${w+2}`),M)){v[e]=0;for(let r=5;r<=6;r++){let t=C.getCell(`${e}${r}`).value;t&&t.toString().length>v[e]&&(v[e]=t.toString().length)}}for(let e of M)C.getColumn(e).width=v[e]+2;for(let e of M){let r=C.getColumn(e);("F"===e||"G"===e||"H"===e||"I"===e)&&(r.width=10),"N"===e&&(r.width=18),"E"===e&&(r.width=7)}let k=20/T.length;for(let e of(T.forEach(e=>{C.getColumn(e).width=k}),[w+1,w+2]))C.getRow(e).height=30;w+=2,e?.map((e,t)=>{1==t&&(e.data_rows?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),i=m.TM(e.t_r_arrive),s=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":e.t_percent_arrive+"%",p=m.TM(e.i_avg_speed);"-"!=p&&(p=parseFloat(p));let b=["Rata-Rata Lintas "+e.c_station_start+"-"+e.c_station_end+" "+r,o,i,s,c,p],h="I";w+=1,b.map((e,r)=>{if(0==r){let r="A"+w;C.getCell(r).value=e,C.mergeCells("A"+w+":I"+w),C.getCell("A"+w+":L"+w).alignment={horizontal:"center",vertical:"middle"},C.getCell("A"+w+":N"+w).font={size:9,name:n},C.getCell("N"+w).numFmt="0.00"}else{let r=h+w;C.getCell(r).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).font={size:9,name:n},C.getCell(r).value=e}C.getCell("N"+w).numFmt="0.00",h=N(h)})}),e.summary?.map((e,t)=>{let l=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(l);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),i=m.TM(e.t_r_arrive),s=m.TM(e.t_l_arrive),c=""===e.t_percent_arrive?"":0===e.t_percent_arrive?"-":e.t_percent_arrive+"%",p=m.TM(e.i_avg_speed);"-"!=p&&(p=parseFloat(p));let b=["RATA-RATA LINTAS "+r.toUpperCase(),o,i,s,c,p],h="I";w+=1,b.map((e,r)=>{if(0==r){let r="A"+w;C.getCell(r).value=e,C.mergeCells("A"+w+":I"+w),C.getCell("A"+w+":L"+w).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:_}},C.getCell(r).font={size:9,bold:!0,name:n},C.getCell("N"+w).numFmt="0.00"}else{let r=h+w;C.getCell(r).value=e,C.getCell(r).alignment={horizontal:"center",vertical:"middle"},C.getCell(r).fill={type:"pattern",pattern:"solid",fgColor:{argb:_}},C.getCell(r).font={size:9,bold:!0,name:n},C.getCell("N"+w).numFmt="0.00"}h=N(h)})}),y+=1)});var j={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}};return C.eachRow({includeEmpty:!0},function(e){e._number>4&&e.eachCell({includeEmpty:!0},function(e){e.border=j})}),C.getCell(`M${w+3}`).value=t?.n_position_1,C.getCell(`M${w+7}`).value=t?.n_name_1,C.getCell(`M${w+8}`).value="Nipp. "+t?.i_nipp_1,C.getCell(`M${w+3}`).font={size:10,name:n,bold:!0},C.getCell(`M${w+7}`).font={size:10,name:n,bold:!0,underline:!0},C.getCell(`M${w+8}`).font={size:10,name:n,bold:!0},C.getCell(`M${w+3}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(`M${w+7}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},C.getCell(`M${w+8}`).alignment={horizontal:"center",vertical:"middle"},C.mergeCells(`M${w+3} : N${w+3}`),C.mergeCells(`M${w+7} : N${w+7}`),C.mergeCells(`M${w+8} : N${w+8}`),o.xlsx.writeBuffer().then(e=>{let t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l=window.URL.createObjectURL(t),a=document.createElement("a");document.body.appendChild(a),a.setAttribute("style","display: none"),a.href=l,a.download="REKAP KELAMBATAN LINTAS "+r.toUpperCase()+".xlsx",a.click(),window.URL.revokeObjectURL(l),a.remove()})};function M(){let e=(0,a.useContext)(p.Z),r=(0,n.usePathname)(),t=s.Z.useApp(),[i,g]=(0,a.useState)([null,null]),[x,u]=(0,a.useState)(null),[M,A]=(0,a.useState)(),[v,T]=(0,a.useState)([]),[f,N]=(0,a.useState)(null),[y,w]=(0,a.useState)(!1),[k,j]=(0,a.useState)([1,"month"]),[S,E]=(0,a.useState)(0),R=[[219,215,215],[255,255,255],[121,193,235],["000000"]],I=e?.dataUser?.user?.username,P={headerColumn:M?.n_line_1,reportColumn:M?.n_line_2,periodeColumn:M?.n_line_4,periodeColumn2:"Tahun  ",dateColumn:x},L=(r,t,l,a)=>{if("pdf"==r)_(t,l,a,R,P,I,e);else{if("excel"!=r)return"";C(t,l,a,R,P)}},{message:U,notification:$,modal:K}=t,[Y,D]=(0,a.useState)(!1),H=async e=>{D(!0);let r=async()=>{try{return"pdf"==e?L("pdf",f,x,M):L("excel",f,x,M),!0}catch(e){return console.log(e),!1}};setTimeout(async()=>{await r()?setTimeout(()=>{U.open({type:"success",content:l.jsx("span",{className:" capitalize",children:"Export Success"})}),D(!1)},1e3):setTimeout(()=>{U.open({type:"error",content:l.jsx("span",{className:" capitalize",children:"Export Invalid"})}),D(!1)},1e3)},500)};return l.jsx(h.Z,{pathname:r,globalState:e,children:(0,l.jsxs)(b.Z,{type:k[1],loadingExport:Y,childrenInput:(0,l.jsxs)("div",{className:"flex flex-col ml-2",children:[l.jsx("span",{id:"subject",className:"mb-5 mt-3  text-[14px]",children:"Tipe"}),l.jsx(c.default,{disabled:Y,placeholder:"Select Filter",onChange:e=>{E(S+1);let r="",t=0;"month"==e?(r="month",t=1):"triwulan"==e?(r="triwulan",t=2):(r="year",t=4),j([t,r])},defaultValue:"Per Bulan",className:"max-md:w-full",options:[{value:"month",label:"Per Bulan"},{value:"triwulan",label:"Per Triwulan"},{value:"year",label:"Per Tahun"}]})]}),onDelete:()=>N(void 0),downloadPdf:()=>H("pdf"),downloadExcel:()=>H("excel"),data:f,loading:y,dateChange:e=>g(e),onChangeTri:S,children:[m.x4.web.header(M,`${P.periodeColumn+x}`),(0,l.jsxs)("div",{className:"overflow-x-auto",children:[(0,l.jsxs)("table",{className:"w-full mb-5 table-auto border-collapse border border-solid dark:border-white border-black",style:{whiteSpace:"nowrap"},children:[(0,l.jsxs)("thead",{className:"dark:bg-black bg-tbl-header uppercase",style:m.wF.web.headerTable,children:[(0,l.jsxs)("tr",{children:[l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black ",rowSpan:2,children:"No"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:"Nama Kereta Api"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"Lintas"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:"Jarak"}),l.jsx("p",{children:" (Km)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:" Waktu Tempuh"}),l.jsx("p",{children:" (Program)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:" Waktu Tempuh"}),l.jsx("p",{children:" (Realisasi)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"KA Datang"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"Kelambatan KA"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:"Kecepatan"}),l.jsx("p",{children:" (Rata-rata/Jam)"})]})})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",style:{height:"10px"},children:"Asal"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Tujuan"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Jam"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Jam"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Program"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Realisasi"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"%"})]})]}),l.jsx("tbody",{style:m.wF.web.bodyTable,children:f?.map((e,r)=>{if(f.length,0==r)return l.jsxs(o().Fragment,{children:[e.data_rows?.map((e,r)=>{let t=r%2==0?"even-row dark:even-row":"",a=new Date(e.i_period_year+"-"+e.i_period_month+"-01");d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),i=m.TM(e.t_l_arrive),s="-"===m.TM(e.t_percent_arrive)?"-":""===m.TM(e.t_percent_arrive)?m.TM(""):m.TM(e.t_percent_arrive,m.Gx(e.t_percent_arrive,".",","))+"%",c=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",","));return l.jsxs("tr",{className:`text-center ${t}`,children:[l.jsxs("td",{colSpan:9,className:"px-3 border border-solid dark:border-white border-black",children:["Rata - Rata Lintas ",e.c_station_start,"-",e.c_station_end," ",x]}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:o}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:n}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:i}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:s}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:c})]},r)}),e.summary?.map((e,r)=>{let t=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(t);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),i=m.TM(e.t_l_arrive),s="-"===m.TM(e.t_percent_arrive)?"-":""===m.TM(e.t_percent_arrive)?m.TM(""):m.TM(e.t_percent_arrive,m.Gx(e.t_percent_arrive,".",","))+"%",c=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",","));return l.jsxs("tr",{className:"text-center font-bold dark:bg-black bg-tbl-footer",style:m.wF.web.bodyTotal,children:[l.jsxs("td",{colSpan:9,className:"px-3 border border-solid dark:border-white border-black uppercase",children:["Rata - Rata Lintas ",x]}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:o}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:n}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:i}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:s}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:c})]},`summary_${r}`)})]},r)})})]}),(0,l.jsxs)("table",{className:"w-full mb-5 table-auto border-collapse border border-solid dark:border-white border-black",style:{whiteSpace:"nowrap"},children:[(0,l.jsxs)("thead",{className:"dark:bg-black bg-tbl-header uppercase",style:m.wF.web.headerTable,children:[(0,l.jsxs)("tr",{children:[l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black ",rowSpan:2,children:"No"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:"Nama Kereta Api"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"Lintas"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:"Jarak"}),l.jsx("p",{children:" (Km)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:" Waktu Tempuh"}),l.jsx("p",{children:" (Program)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:" Waktu Tempuh"}),l.jsx("p",{children:" (Realisasi)"})]})}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"KA Datang"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",colSpan:2,children:"Kelambatan KA"}),l.jsx("th",{className:" px-3 border border-solid dark:border-white border-black",rowSpan:2,children:(0,l.jsxs)("div",{style:{lineHeight:1,padding:3},children:[l.jsx("p",{children:"Kecepatan"}),l.jsx("p",{children:" (Rata-rata/Jam)"})]})})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",style:{height:"10px"},children:"Asal"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Tujuan"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Jam"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Jam"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Program"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Realisasi"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"Menit"}),l.jsx("th",{className:"px-3 border border-solid dark:border-white border-black",children:"%"})]})]}),l.jsx("tbody",{style:m.wF.web.bodyTable,children:f?.map((e,r)=>{let t=f.length;if(1==r)return l.jsxs(o().Fragment,{children:[e.data_rows?.map((e,r)=>{let t=r%2==0?"even-row dark:even-row":"",a=new Date(e.i_period_year+"-"+e.i_period_month+"-01");d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),i=m.TM(e.t_l_arrive),s="-"===m.TM(e.t_percent_arrive)?"-":""===m.TM(e.t_percent_arrive)?m.TM(""):m.TM(e.t_percent_arrive,m.Gx(e.t_percent_arrive,".",","))+"%",c=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",","));return l.jsxs("tr",{className:`text-center ${t}`,children:[l.jsxs("td",{colSpan:9,className:"px-3 border border-solid dark:border-white border-black",children:["Rata - Rata Lintas ",e.c_station_start,"-",e.c_station_end," ",x]}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:o}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:n}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:i}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:s}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:c})]},r)}),e.summary?.map((e,r)=>{let t=new Date(e.i_period_year+"-"+e.i_period_month+"-01"),a=d()(t);d()(a).format("MMMM YYYY");let o=m.TM(e.t_p_arrive),n=m.TM(e.t_r_arrive),i=m.TM(e.t_l_arrive),s="-"===m.TM(e.t_percent_arrive)?"-":""===m.TM(e.t_percent_arrive)?m.TM(""):m.TM(e.t_percent_arrive,m.Gx(e.t_percent_arrive,".",","))+"%",c=m.TM(e.i_avg_speed,m.Gx(e.i_avg_speed,".",","));return l.jsxs("tr",{className:"text-center font-bold dark:bg-black bg-tbl-footer",style:m.wF.web.bodyTotal,children:[l.jsxs("td",{colSpan:9,className:"px-3 border border-solid dark:border-white border-black uppercase",children:["Rata - Rata Lintas ",x]}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:o}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:n}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:i}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:s}),l.jsx("td",{className:"px-3 border border-solid dark:border-white border-black",children:c})]},`summary_${r}`)}),r+1!=t&&l.jsx("td",{className:"p-4 border border-solid dark:border-white border-black bg-tbl-row",colSpan:14})]},r)})})]})]})]})})}},23672:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var l=t(68570);let a=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\recapTrafficDelay\page.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\recapTrafficDelay\page.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),l=r.X(0,[3023,9400,385,1862,7296,2653,678,2207,8809,3627,9899,7194,6821],()=>t(80740));module.exports=l})();