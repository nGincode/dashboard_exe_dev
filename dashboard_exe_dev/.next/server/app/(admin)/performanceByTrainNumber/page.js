(()=>{var e={};e.id=6859,e.ids=[6859],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4072:e=>{"use strict";e.exports=require("rimraf")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},22057:e=>{"use strict";e.exports=require("constants")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},77687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>r.a,__next_app__:()=>_,originalPathname:()=>u,pages:()=>c,routeModule:()=>g,tree:()=>d}),n(81115),n(20461),n(24513),n(57198),n(12742),n(39614),n(26083),n(19644),n(96560);var l=n(23191),i=n(88716),a=n(37922),r=n.n(a),s=n(95231),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);n.d(t,o);let d=["",{children:["(admin)",{children:["performanceByTrainNumber",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,81115)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\performanceByTrainNumber\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,20461)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\layout.tsx"],error:[()=>Promise.resolve().then(n.bind(n,24513)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\error.tsx"],loading:[()=>Promise.resolve().then(n.bind(n,57198)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,12742)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,39614)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\layout.tsx"],error:[()=>Promise.resolve().then(n.bind(n,26083)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\error.tsx"],loading:[()=>Promise.resolve().then(n.bind(n,19644)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,96560)),"D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\not-found.tsx"]}],c=["D:\\FEMBI NUR ILHAM\\NUTECH\\PROJECT\\dashboard_executive_cms\\app\\(admin)\\performanceByTrainNumber\\page.tsx"],u="/(admin)/performanceByTrainNumber/page",_={require:n,loadChunk:()=>Promise.resolve()},g=new l.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(admin)/performanceByTrainNumber/page",pathname:"/performanceByTrainNumber",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},33193:(e,t,n)=>{Promise.resolve().then(n.bind(n,11387))},11387:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var l=n(10326),i=n(17577),a=n(35047),r=n(34626),s=n(37619),o=n(88295),d=n.n(o),c=n(58690),u=n.n(c),_=n(95425),g=n(46821),h=n(20341);n(44624);var p=n(97194);n(52279);var m=n(87296);let f=(e,t,n,l,i,a,r)=>{if(!e||0===e.length)return;new m.default({format:"legal",orientation:"landscape"}).internal.pageSize.width;let s=i.dateColumn.split(" ");s[0],s[1],i.headerColumn,i.reportColumn,i.periodeColumn,t.toUpperCase();let o=[];e?.map((e,t)=>{let n="";if(e.d_opr){let t=new Date(e?.d_opr),l=d()(t);n=d()(l).format("DD/MM/YYYY")}let l=p.TM(e.c_noka),i=p.TM(e.t_departure),a=p.TM(e.c_station_start),r=p.TM(e.c_station_end),s=p.TM(e.i_fare,p.uf(e.i_fare)),c=p.TM(e.i_train_frequency,p.uf(e.i_train_frequency)),u=p.TM(e.i_passenger_seat,p.uf(e.i_passenger_seat)),_=p.TM(e.i_td_km,p.uf(e.i_td_km)),g=p.TM(e.i_volume_pnp,p.uf(e.i_volume_pnp)),h=p.TM(e.i_km_pnp,p.uf(e.i_km_pnp)),m=p.TM(e.i_income,p.uf(e.i_income)),f=""===p.TM(e.i_o_static)?"":"-"===p.TM(e.i_o_static)?"-":e.i_o_static+"%",b=""===p.TM(e.i_o_dynamic)?"":"-"===p.TM(e.i_o_dynamic)?"-":e.i_o_dynamic+"%",y=[{content:t+=1,styles:{halign:"center"}},{content:l,styles:{halign:"center"}},{content:n,styles:{halign:"center"}},{content:i,styles:{halign:"center"}},{content:a,styles:{halign:"center"}},{content:r,styles:{halign:"center"}},{content:p.TM(e.i_distance,p.Gx(e.i_distance,".",",")),styles:{halign:"center"}},{content:s,styles:{halign:"right"}},{content:p.TM(e.i_daily_frequency,p.uf(e.i_daily_frequency)),styles:{halign:"center"}},{content:c,styles:{halign:"center"}},{content:u,styles:{halign:"center"}},{content:_,styles:{halign:"center"}},{content:g,styles:{halign:"center"}},{content:h,styles:{halign:"center"}},{content:m,styles:{halign:"right"}},{content:f,styles:{halign:"center"}},{content:b,styles:{halign:"center"}}];o.push(y)}),p.x4.pdf({globalState:r,reportType:n,date:i.periodeColumn+t.toUpperCase(),positionSignature:{column:2,underlinePadding:-2,paddingTop:-1,marginLeft:5,fontSize:8},dataHead:[[{content:"NO",rowSpan:2,styles:{halign:"center"}},{content:"NO KA GAPEKA",rowSpan:2,styles:{halign:"center"}},{content:"TANGGAL",rowSpan:2,styles:{halign:"center"}},{content:"JAM BERANGKAT",rowSpan:2,styles:{halign:"center"}},{content:"RELASI",colSpan:2,styles:{halign:"center"}},{content:"JARAK (KM) \n GAPEKA",rowSpan:2,styles:{halign:"center"}},{content:"TARIF \n (RP/PNP)",rowSpan:2,styles:{halign:"center"}},{content:"FREK HARIAN",rowSpan:2,styles:{halign:"center"}},{content:"FREK KA",rowSpan:2,styles:{halign:"center"}},{content:"TEMPAT DUDUK \n PENUMPANG",rowSpan:2,styles:{halign:"center"}},{content:"TD - KM",rowSpan:2,styles:{halign:"center"}},{content:"VOLUME PNP",rowSpan:2,styles:{halign:"center"}},{content:"KM - PNP",rowSpan:2,styles:{halign:"center"}},{content:"PENDAPATAN",rowSpan:2,styles:{halign:"center"}},{content:"OKUPASI",colSpan:2,styles:{halign:"center"}}],[{content:"ASAL",styles:{halign:"center"}},{content:"TUJUAN",styles:{halign:"center"}},{content:"STATIS",styles:{halign:"center"}},{content:"DINAMIS",styles:{halign:"center"}}],[{content:"1",styles:{halign:"center"}},{content:"2",styles:{halign:"center"}},{content:"3",styles:{halign:"center"}},{content:"4",styles:{halign:"center"}},{content:"5",styles:{halign:"center"}},{content:"6",styles:{halign:"center"}},{content:"7",styles:{halign:"center"}},{content:"8",styles:{halign:"center"}},{content:"9",styles:{halign:"center"}},{content:"10",styles:{halign:"center"}},{content:"11",styles:{halign:"center"}},{content:"12",styles:{halign:"center"}},{content:"13",styles:{halign:"center"}},{content:"14",styles:{halign:"center"}},{content:"15",styles:{halign:"center"}},{content:"16",styles:{halign:"center"}},{content:"17",styles:{halign:"center"}}]],dataBody:o,nameFile:"KINERJA PER NO KA "+t.toUpperCase(),landscape:!0,pageSize:{width:215.9,height:355.6},signingType:2})};var b=n(30735),y=n.n(b);let T=(e,t,n,l,i)=>{if(!e||0===e.length)return;let a=new(y()).Workbook,r="calibri";a.creator="NUTECH",a.lastModifiedBy="LRT",a.created=new Date,a.modified=new Date,a.lastPrinted=new Date;let s=l[0][0],o=l[0][1],c=l[0][2],u=l[1][0],_=l[1][0],g=l[1][0];function h(e,t,n,l){return"column"==l?"FF"+(e<<16|t<<8|n).toString(16).toUpperCase().padStart(6,"0"):"total"==l?"FF"+(e<<16|t<<8|n).toString(16).toUpperCase().padStart(6,"0"):void 0}h(s,o,c,"column"),h(u,_,g,"total");let m=h(l[2][0],l[2][1],l[2][2],"total"),f=a.addWorksheet();f.getCell("A1").value=i.headerColumn,f.mergeCells("A1:O1"),f.getCell("A1").font={size:11,bold:!0,name:r},f.getCell("A2").value=i.reportColumn,f.mergeCells("A2:O2"),f.getCell("A2").font={size:11,bold:!0,name:r},d()(e?.[0].i_period_year+"-"+e?.[0].i_period_month+"-1","YYYY-M-D").format("MMMM YYYY"),f.getCell("A3").value=i.periodeColumn+t.toUpperCase(),f.mergeCells("A3:O3"),f.getCell("A3").font={size:11,bold:!0,name:r};let b=["A","B","C","D","E","G","H","I","J","K","L","M","N","O","P","Q"];for(let e=0;e<b.length;e++){let t=b[e]+"5";f.getCell(t).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.getCell(t).font={size:10,name:r,bold:!0,color:{argb:l[3][0]}},f.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:m}}}let T=["E","F","P","Q"];for(let e=0;e<T.length;e++){let t=T[e]+"6";f.getCell(t).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.getCell(t).font={size:10,name:r,bold:!0,color:{argb:l[3][0]}},f.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:m}}}f.getCell("A5").value="NO",f.mergeCells("A5:A6"),f.getCell("B5").value="NO KA GAPEKA",f.mergeCells("B5:B6"),f.getCell("C5").value="TANGGAL",f.mergeCells("C5:C6"),f.getCell("D5").value="JAM BERANGKAT",f.mergeCells("D5:D6"),f.getCell("E5").value="RELASI",f.mergeCells("E5:F5"),f.getCell("E6").value="ASAL",f.getCell("F6").value="TUJUAN",f.getCell("G5").value="JARAK (KM) \n GAPEKA",f.mergeCells("G5:G6"),f.getCell("H5").value="TARIF \n (RP/PNP)",f.mergeCells("H5:H6"),f.getCell("I5").value="FREK HARIAN",f.mergeCells("I5:I6"),f.getCell("J5").value="FREK KA",f.mergeCells("J5:J6"),f.getCell("K5").value="TEMPAT DUDUK \n PENUMPANG",f.mergeCells("K5:K6"),f.getCell("L5").value="TD-KM",f.mergeCells("L5:L6"),f.getCell("M5").value="VOLUME PNP",f.mergeCells("M5:M6"),f.getCell("N5").value="KM - PNP",f.mergeCells("N5:N6"),f.getCell("O5").value="PENDAPATAN",f.mergeCells("O5:O6"),f.getCell("P5").value="OKUPANSI",f.mergeCells("P5:Q5"),f.getCell("P6").value="STATIS",f.getCell("Q6").value="DINAMIS";let v={};for(let e of b){v[e]=0;for(let t=5;t<=6;t++){let n=f.getCell(`${e}${t}`).value;n&&n.toString().length>v[e]&&(v[e]=n.toString().length)}}for(let e of b)f.getColumn(e).width=v[e]+2;for(let e of b){let t=f.getColumn(e);("G"===e||"H"===e)&&(t.width=13),"K"===e&&(t.width=15)}let w=e=>{let t=1,n="";for(let l=e.length-1;l>=0;l--){let i=e.toUpperCase().charCodeAt(l);if((i+=t)>90?(i=65,t=1):t=0,n=String.fromCharCode(i)+n,!t){n=e.substring(0,l)+n;break}}return t&&(n="A"+n),n},x=7,C=7;e?.map((e,t)=>{let n="A";if(0==t)for(let e=0;e<17;e++)f.getCell(n+7).value=e+1,f.getCell(n+7).font={bold:!0},f.getCell(n+7).alignment={horizontal:"center",vertical:"middle"},f.getCell(n+7).fill={type:"pattern",pattern:"solid",fgColor:{argb:m}},f.getCell(n+7).font={size:10,name:r,bold:!0,color:{argb:l[3][0]}},n=w(n);let i=p.TM(e.c_noka),a="";if(e.d_opr){let t=new Date(e?.d_opr),n=d()(t);a=d()(n).format("DD/MM/YYYY")}let s=p.TM(e.t_departure),o=p.TM(e.c_station_start),c=p.TM(e.c_station_end),u=p.TM(e.i_fare),_=p.TM(e.i_train_frequency),g=p.TM(e.i_passenger_seat),h=p.TM(e.i_td_km),b=p.TM(e.i_volume_pnp),y=p.TM(e.i_km_pnp),T=p.TM(e.i_income),v=""===e.i_o_static?"":0===e.i_o_static?"-":e.i_o_static+"%",S=""===e.i_o_dynamic?"":0===e.i_o_dynamic?"-":e.i_o_dynamic+"%",A=[t+=1,i,a,s,o,c,p.TM(e.i_distance),u,p.TM(e.i_daily_frequency),_,g,h,b,y,T,v,S],M="A",N="I",z=1;C+=1,A.map(e=>{let t=M+C;f.getCell(t).value=e,f.getCell(t).alignment={horizontal:"center",vertical:"middle"},f.getCell("H:"+C).alignment={horizontal:"right",vertical:"middle"},f.getCell("O:"+C).alignment={horizontal:"right",vertical:"middle"},f.getCell(t).font={size:9,name:r},M=w(M),f.getCell("H:"+C).numFmt="#,##0_);(#,##0)",8!==z&&(f.getCell(N+C).numFmt="#,##0_);(#,##0)",N=w(N),z+=1)}),x+=1});var S={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}};f.eachRow({includeEmpty:!0},function(e){e._number>3&&e.eachCell({includeEmpty:!0},function(e){e.border=S})}),f.getRow(C+2);let A=n?.n_position_1.split(" "),M=" ",N=" ";for(let e=0;e<A.length;e++)e<=3?M+=` ${A[e]}`:N+=` ${A[e]}`;let z=f.rowCount+1;return f.addRow(["",M]).font={name:"calibri",bold:!0},f.getCell(`B${z}`).alignment={vertical:"middle",horizontal:"center"},f.mergeCells(`B${z}:D${z}`),f.getCell(`B${z}`).font={size:10,name:r,bold:!0},z=f.rowCount+1,f.addRow(["",N]).font={name:"calibri",bold:!0},f.getCell(`B${z}`).alignment={vertical:"middle",horizontal:"center"},f.mergeCells(`B${z}:D${z}`),f.getCell(`B${z}`).font={size:10,name:r,bold:!0},f.getCell(`B${C+8}`).value=n?.n_name_1,f.getCell(`B${C+8}`).font={size:10,name:r,bold:!0,underline:!0},f.getCell(`B${C+8}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.mergeCells(`B${C+8} : D${C+8}`),f.getCell(`B${C+9}`).value="Nipp. "+n?.i_nipp_2,f.getCell(`B${C+9}`).font={size:10,name:r,bold:!0},f.getCell(`B${C+9}`).alignment={horizontal:"center",vertical:"middle"},f.mergeCells(`B${C+9} : D${C+9}`),f.getCell(`O${C+3}`).value=n?.n_position_2,f.getCell(`O${C+3}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.mergeCells(`O${C+3} : P${C+3}`),f.getCell(`O${C+3}`).font={size:10,name:r,bold:!0},f.getCell(`O${C+3}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.getCell(`O${C+8}`).value=n?.n_name_2,f.getCell(`O${C+8}`).font={size:10,name:r,bold:!0,underline:!0},f.getCell(`O${C+8}`).alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.mergeCells(`O${C+8} : P${C+8}`),f.getCell(`O${C+9}`).value="Nipp. "+n?.i_nipp_1,f.getCell(`O${C+9}`).font={size:10,name:r,bold:!0},f.getCell(`O${C+9}`).alignment={horizontal:"center",vertical:"middle"},f.mergeCells(`O${C+9} : P${C+9}`),a.xlsx.writeBuffer().then(e=>{let n=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l=window.URL.createObjectURL(n),i=document.createElement("a");document.body.appendChild(i),i.setAttribute("style","display: none"),i.href=l,i.download="KINERJA PER NO KA "+t.toUpperCase()+".xlsx",i.click(),window.URL.revokeObjectURL(l),i.remove()})};function v(){let e=(0,i.useContext)(h.Z),t=(0,a.usePathname)(),{message:n,notification:o,modal:c}=r.Z.useApp(),[m,b]=(0,i.useState)(50),[y,v]=(0,i.useState)([null,null]),[w,x]=(0,i.useState)(null),[C,S]=(0,i.useState)(),[A,M]=(0,i.useState)(null),[N,z]=(0,i.useState)(!1),j=[[254,249,195],[255,255,255],[121,193,235],["000000"]],P=e?.dataUser?.user?.username,E={headerColumn:C?.n_line_1,reportColumn:C?.n_line_2,periodeColumn:C?.n_line_4,periodeColumn2:"Tahun  ",dateColumn:w},O=(t,n,l,i)=>{if("pdf"==t)f(n,l,i,j,E,P,e);else{if("excel"!=t)return"";T(n,l,i,j,E)}},F=[{title:"NO",dataIndex:"no",key:"no",align:"center",width:"3%",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-28",children:"NO KA GAPEKA"}),dataIndex:"c_noka",key:"c_noka",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:"TANGGAL",dataIndex:"date",key:"date",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-28",children:"JAM BERANGKAT"}),dataIndex:"t_departure",key:"t_departure",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:"RELASI",children:[{title:l.jsx("div",{className:"w-16",children:"ASAL"}),dataIndex:"c_station_start",key:"c_station_start",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-16",children:"TUJUAN"}),dataIndex:"c_station_end",key:"c_station_end",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}}]},{title:l.jsx("div",{className:"w-20",children:"JARAK (KM)\n GAPEKA"}),dataIndex:"i_distance",key:"i_distance",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:"TARIF (RP/PNP)",dataIndex:"i_fare",key:"i_fare",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-20",children:"FREK HARIAN"}),dataIndex:"i_daily_frequency",key:"i_daily_frequency",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-16",children:"FREK KA"}),dataIndex:"i_train_frequency",key:"i_train_frequency",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-28",children:"TEMPAT DUDUK \nPENUMPANG"}),dataIndex:"i_passenger_seat",key:"i_passenger_seat",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-16",children:"TD - KM"}),dataIndex:"i_td_km",key:"i_td_km",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-20",children:"VOLUME PNP"}),dataIndex:"i_volume_pnp",key:"i_volume_pnp",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-16",children:"KM - PNP"}),dataIndex:"i_km_pnp",key:"i_km_pnp",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:"PENDAPATAN",dataIndex:"i_income",key:"i_income",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:"OKUPANSI",children:[{title:l.jsx("div",{className:"w-16",children:"STATIS"}),dataIndex:"i_o_static",key:"i_o_static",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}},{title:l.jsx("div",{className:"w-16",children:"DINAMIS"}),dataIndex:"i_o_dynamic",key:"i_o_dynamic",align:"center",render:(e,t,n)=>{let i=!1;return(Object.values(t)?.[0]==1&&Object.values(t)?.[1]==2&&(i=!0),i)?l.jsx("div",{style:{fontWeight:p.wF.web.headerTable.fontWeight,fontSize:p.wF.web.headerTable.fontSize},children:e}):l.jsx("div",{style:{fontSize:p.wF.web.bodyTable.fontSize},children:e})}}]}],[I,R]=(0,i.useState)(!1),U=async e=>{R(!0);let t=async()=>{try{return"pdf"==e?O("pdf",A,w,C):O("excel",A,w,C),!0}catch(e){return console.log(e),!1}};setTimeout(async()=>{await t()?setTimeout(()=>{n.open({type:"success",content:l.jsx("span",{className:" capitalize",children:"Export Success"})}),R(!1)},1e3):setTimeout(()=>{n.open({type:"error",content:l.jsx("span",{className:" capitalize",children:"Export Invalid"})}),R(!1)},1e3)},1500)};return l.jsx(_.Z,{pathname:t,globalState:e,children:(0,l.jsxs)(g.Z,{loadingExport:I,downloadPdf:()=>U("pdf"),downloadExcel:()=>U("excel"),codeDelete:"PERFORMANCE_BY_TRAIN_NUMBER",onDelete:()=>M(void 0),data:A,type:"rangepicker",loading:N,dateChange:e=>v(e),children:[p.x4.web.header(C,`${E.periodeColumn+w}`),l.jsx(s.Z,{bordered:!0,rowClassName:p.x4.web.legendHeader,columns:p.x4.web.headerTable(F),pagination:{pageSizeOptions:u().uniq(["10","20","50","100",String(A?.length-1)].map(e=>{if(Number(e)<=A?.length-1)return e}).filter(e=>e)),showSizeChanger:!0,pageSize:m,onChange(e,t){b(t)}},scroll:{x:1300},dataSource:A?[{no:1,c_noka:2,date:3,t_departure:4,c_station_start:5,c_station_end:6,i_distance:7,i_fare:8,i_daily_frequency:9,i_train_frequency:10,i_passenger_seat:11,i_td_km:12,i_volume_pnp:13,i_km_pnp:14,i_income:15,i_o_static:16,i_o_dynamic:17,key:0},...A?.map((e,t)=>{let n="";if(e.d_opr){let t=new Date(e?.d_opr),l=d()(t);n=d()(l).format("DD/MM/YYYY")}let i=p.TM(e.c_noka),a=p.TM(e.t_departure),r=p.TM(e.c_station_start),s=p.TM(e.c_station_end),o=p.TM(e.i_distance,p.Gx(e.i_distance,".",",")),c=p.TM(e.i_fare,p.uf(e.i_fare,"Rp",".")),u=p.TM(e.i_daily_frequency,p.uf(e.i_daily_frequency)),_=p.TM(e.i_train_frequency,p.uf(e.i_train_frequency)),g=p.TM(e.i_passenger_seat,p.uf(e.i_passenger_seat)),h=p.TM(e.i_td_km,p.uf(e.i_td_km)),m=p.TM(e.i_volume_pnp,p.uf(e.i_volume_pnp)),f=p.TM(e.i_km_pnp,p.uf(e.i_km_pnp)),b=p.TM(e.i_income,p.uf(e.i_income)),y="-"===p.TM(e.i_o_static)?"-":""===p.TM(e.i_o_static)?p.TM(""):p.TM(e.i_o_static)+"%",T="-"===p.TM(e.i_o_dynamic)?"-":""===p.TM(e.i_o_dynamic)?p.TM(""):p.TM(e.i_o_dynamic)+"%",v={...e};return v.no=t+1,v.c_noka=i,v.date=n,v.t_departure=a,v.c_station_start=r,v.c_station_end=s,v.i_distance=o,v.i_fare=c,v.i_daily_frequency=u,v.i_train_frequency=_,v.i_passenger_seat=g,v.i_td_km=h,v.i_volume_pnp=m,v.i_km_pnp=f,v.i_income=l.jsx("div",{className:"text-right",children:b}),v.i_o_static=y,v.i_o_dynamic=T,v.key=t+1,v})]:[]})]})})}},81115:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>r,__esModule:()=>a,default:()=>s});var l=n(68570);let i=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\performanceByTrainNumber\page.tsx`),{__esModule:a,$$typeof:r}=i;i.default;let s=(0,l.createProxy)(String.raw`D:\FEMBI NUR ILHAM\NUTECH\PROJECT\dashboard_executive_cms\app\(admin)\performanceByTrainNumber\page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),l=t.X(0,[3023,9400,385,1862,7296,2653,1063,961,462,124,7619,678,2207,8809,8690,3627,9899,7194,6821],()=>n(77687));module.exports=l})();