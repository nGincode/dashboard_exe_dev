(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{56551:function(e,t,l){Promise.resolve().then(l.bind(l,24858))},24858:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return w}});var r=l(57437),n=l(71275),o=l(2265),a=l(16463),i=l(62737),d=l.n(i),s=l(68348),c=l(42005),b=l(38797),m=l(65188),p=l(41105),h=l(30939),g=l(61438),u=l.n(g);let _=(e,t,l,r,n)=>{if(!e||0===e.length)return;let o=new(u()).Workbook,a="calibri";function i(e,t,l,r){return"column"==r?"FF"+(e<<16|t<<8|l).toString(16).toUpperCase().padStart(6,"0"):"total"==r?"FF"+(e<<16|t<<8|l).toString(16).toUpperCase().padStart(6,"0"):void 0}o.creator="NUTECH",o.lastModifiedBy="LRT",o.created=new Date,o.modified=new Date,o.lastPrinted=new Date,i(r[0][0],r[0][1],r[0][2],"column");let s=i(r[1][0],r[1][1],r[1][2],"total"),c=i(r[2][0],r[2][1],r[2][2],"total"),m=o.addWorksheet();m.getCell("A1").value=n.headerColumn,m.mergeCells("A1:O1"),m.getCell("A1").font={size:11,bold:!0,name:a},m.getCell("A2").value=n.reportColumn,m.mergeCells("A2:O2"),m.getCell("A2").font={size:11,bold:!0,name:a},d()((null==e?void 0:e[0].i_period_year)+"-"+(null==e?void 0:e[0].i_period_month)+"-1","YYYY-M-D").format("MMMM YYYY"),m.getCell("A3").value=n.periodeColumn+t.toUpperCase(),m.mergeCells("A3:O3"),m.getCell("A3").font={size:11,bold:!0,name:a};let p=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];for(let e=0;e<p.length;e++){let t=p[e]+"5";m.getCell(t).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.getCell(t).font={size:10,name:a,bold:!0,color:{argb:r[3][0]}},m.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:c}}}let h=["N","O"];for(let e=0;e<h.length;e++){let t=h[e]+"6";m.getCell(t).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.getCell(t).font={size:10,name:a,bold:!0,color:{argb:r[3][0]}},m.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:c}}}m.getCell("A5").value="NO",m.mergeCells("A5:A6"),m.getCell("B5").value="NO KA GAPEKA",m.mergeCells("B5:B6"),m.getCell("C5").value="JAM BERANGKAT",m.mergeCells("C5:C6"),m.getCell("D5").value="ASAL",m.mergeCells("D5:D6"),m.getCell("E5").value="TUJUAN",m.mergeCells("E5:E6"),m.getCell("F5").value="JARAK (KM) \n GAPEKA",m.mergeCells("F5:F6"),m.getCell("G5").value="TARIF \n (RP/PNP)",m.mergeCells("G5:G6"),m.getCell("H5").value="FREK KA",m.mergeCells("H5:H6"),m.getCell("I5").value="TEMPAT DUDUK \n PENUMPANG",m.mergeCells("I5:I6"),m.getCell("J5").value="TD-KM",m.mergeCells("J5:J6"),m.getCell("K5").value="VOLUME PNP",m.mergeCells("K5:K6"),m.getCell("L5").value="KM - PNP",m.mergeCells("L5:L6"),m.getCell("M5").value="PENDAPATAN",m.mergeCells("M5:M6"),m.getCell("N5").value="OKUPANSI",m.mergeCells("N5:O5"),m.getCell("N6").value="STATIS",m.getCell("O6").value="DINAMIS";let g={};for(let e of p){g[e]=0;for(let t=5;t<=6;t++){let l=m.getCell("".concat(e).concat(t)).value;l&&l.toString().length>g[e]&&(g[e]=l.toString().length)}}for(let e of p)m.getColumn(e).width=g[e]+2;for(let e of p){let t=m.getColumn(e);("F"===e||"G"===e)&&(t.width=13),"I"===e&&(t.width=15),"J"===e&&(t.width=10)}let _=e=>{let t=1,l="";for(let r=e.length-1;r>=0;r--){let n=e.toUpperCase().charCodeAt(r);if((n+=t)>90?(n=65,t=1):t=0,l=String.fromCharCode(n)+l,!t){l=e.substring(0,r)+l;break}}return t&&(l="A"+l),l},C=7,f=7;null==e||e.map((e,t)=>{var l,n;let o="A";if(0==t)for(let e=0;e<15;e++)m.getCell(o+7).value=e+1,m.getCell(o+7).font={bold:!0},m.getCell(o+7).alignment={horizontal:"center",vertical:"middle"},m.getCell(o+7).fill={type:"pattern",pattern:"solid",fgColor:{argb:c}},m.getCell(o+7).font={size:10,name:a,bold:!0,color:{argb:r[3][0]}},o=_(o);null===(l=e.data_rows)||void 0===l||l.map((e,t)=>{let l=(0,b.TM)(e.c_noka),r=(0,b.TM)(e.t_departure),n=(0,b.TM)(e.c_station_start),o=(0,b.TM)(e.c_station_end),i=(0,b.TM)(e.i_fare),d=(0,b.TM)(e.i_train_frequency),s=(0,b.TM)(e.i_passenger_seat),c=(0,b.TM)(e.i_td_km),p=(0,b.TM)(e.i_volume_pnp),h=(0,b.TM)(e.i_km_pnp),g=(0,b.TM)(e.i_income),u=""===e.i_o_static?"":0===e.i_o_static?"-":e.i_o_static+"%",C=""===e.i_o_dynamic?"":0===e.i_o_dynamic?"-":e.i_o_dynamic+"%",w=[t+=1,l,r,n,o,(0,b.TM)(e.i_distance),i,d,s,c,p,h,g,u,C],M="A",y="H",k=1;f+=1,w.map(e=>{let t=M+f;m.getCell(t).value=e,m.getCell(t).alignment={horizontal:"center",vertical:"middle"},m.getCell("M:"+f).alignment={horizontal:"right",vertical:"middle"},m.getCell("G:"+f).alignment={horizontal:"right",vertical:"middle"},m.getCell(t).font={size:9,name:a},m.getCell("G:"+f).numFmt="#,##0_);(#,##0)",7!==k&&(m.getCell(y+f).numFmt="#,##0_);(#,##0)",y=_(y),k+=1),M=_(M)})}),null===(n=e.summary)||void 0===n||n.map((e,t)=>{let l=(0,b.TM)(e.total_volume),r=(0,b.TM)(e.total_km_pnp),n=(0,b.TM)(e.total_income),o="J",i="K",d=1;f+=1,["TOTAL",l,r,n,"",""].map((e,t)=>{if(0==t){let t="A"+f;m.getCell(t).value=e,m.mergeCells("A"+f+":J"+f),m.getCell("A"+f+":L"+f).alignment={horizontal:"center",vertical:"middle"},m.getCell(t).font={size:9,name:a,bold:!0},m.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:s}}}else{let t=o+f;m.getCell(t).value=e,m.getCell(t).fill={type:"pattern",pattern:"solid",fgColor:{argb:s}},m.getCell(t).alignment={horizontal:"center",vertical:"middle"},m.getCell("M:"+f).alignment={horizontal:"right",vertical:"middle"},m.getCell(t).font={size:9,name:a,bold:!0},4!==d&&(m.getCell(i+f).numFmt="#,##0_);(#,##0)",i=_(i),d+=1)}o=_(o)})}),C+=1});var w={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}};m.eachRow({includeEmpty:!0},function(e){e._number>3&&e.eachCell({includeEmpty:!0},function(e){e.border=w})}),m.getRow(f+2);let M=null==l?void 0:l.n_position_1.split(" "),y=" ",k=" ";for(let e=0;e<M.length;e++)e<=3?y+=" ".concat(M[e]):k+=" ".concat(M[e]);let v=m.rowCount+1;return m.addRow(["",y]).font={name:"calibri",bold:!0},m.getCell("B".concat(v)).alignment={vertical:"middle",horizontal:"center"},m.mergeCells("B".concat(v,":D").concat(v)),m.getCell("B".concat(v)).font={size:10,name:a,bold:!0},v=m.rowCount+1,m.addRow(["",k]).font={name:"calibri",bold:!0},m.getCell("B".concat(v)).alignment={vertical:"middle",horizontal:"center"},m.mergeCells("B".concat(v,":D").concat(v)),m.getCell("B".concat(v)).font={size:10,name:a,bold:!0},m.getCell("B".concat(f+8)).value=null==l?void 0:l.n_name_1,m.getCell("B".concat(f+8)).font={size:10,name:a,bold:!0,underline:!0},m.getCell("B".concat(f+8)).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.mergeCells("B".concat(f+8," : D").concat(f+8)),m.getCell("B".concat(f+9)).value="Nipp. "+(null==l?void 0:l.i_nipp_2),m.getCell("B".concat(f+9)).font={size:10,name:a,bold:!0},m.getCell("B".concat(f+9)).alignment={horizontal:"center",vertical:"middle"},m.mergeCells("B".concat(f+9," : D").concat(f+9)),m.getCell("M".concat(f+3)).value=null==l?void 0:l.n_position_2,m.getCell("M".concat(f+3)).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.mergeCells("M".concat(f+3," : O").concat(f+3)),m.getCell("M".concat(f+3)).font={size:10,name:a,bold:!0},m.getCell("M".concat(f+3)).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.getCell("M".concat(f+8)).value=null==l?void 0:l.n_name_2,m.getCell("M".concat(f+8)).font={size:10,name:a,bold:!0,underline:!0},m.getCell("M".concat(f+8)).alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.mergeCells("M".concat(f+8," : O").concat(f+8)),m.getCell("M".concat(f+9)).value="Nipp. "+(null==l?void 0:l.i_nipp_1),m.getCell("M".concat(f+9)).font={size:10,name:a,bold:!0},m.getCell("M".concat(f+9)).alignment={horizontal:"center",vertical:"middle"},m.mergeCells("M".concat(f+9," : O").concat(f+9)),o.xlsx.writeBuffer().then(e=>{let l=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),r=window.URL.createObjectURL(l),n=document.createElement("a");document.body.appendChild(n),n.setAttribute("style","display: none"),n.href=r,n.download="KINERJA PERELASI "+t.toUpperCase()+".xlsx",n.click(),window.URL.revokeObjectURL(r),n.remove()})};var C=l(97501);let f=(e,t,l,r,n,o,a)=>{if(!e||0===e.length)return;new C.default({format:"legal",orientation:"landscape"}).internal.pageSize.width;let i=n.dateColumn.split(" ");i[0],i[1],n.headerColumn,n.reportColumn,n.periodeColumn,t.toUpperCase();let s=[];null==e||e.map((e,t)=>{e.data_rows.map((e,t)=>{let l=(0,b.TM)(e.c_noka),r=(0,b.TM)(e.t_departure),n=(0,b.TM)(e.c_station_start),o=(0,b.TM)(e.c_station_end),a=(0,b.TM)(e.i_fare,(0,b.uf)(e.i_fare)),i=(0,b.TM)(e.i_train_frequency,(0,b.uf)(e.i_train_frequency)),c=(0,b.TM)(e.i_passenger_seat,(0,b.uf)(e.i_passenger_seat)),m=(0,b.TM)(e.i_td_km,(0,b.uf)(e.i_td_km)),p=(0,b.TM)(e.i_volume_pnp,(0,b.uf)(e.i_volume_pnp)),h=(0,b.TM)(e.i_km_pnp,(0,b.uf)(e.i_km_pnp)),g=(0,b.TM)(e.i_income,(0,b.uf)(e.i_income)),u=""===(0,b.TM)(e.i_o_static)?"":"-"===(0,b.TM)(e.i_o_static)?"-":e.i_o_static+"%",_=""===(0,b.TM)(e.i_o_dynamic)?"":"-"===(0,b.TM)(e.i_o_dynamic)?"-":e.i_o_dynamic+"%",C=(0,b.TM)(e.i_distance,(0,b.Gx)(e.i_distance,".",",")),f=new Date(null==e?void 0:e.d_opr),w=d()(f);d()(w).format("DD/MM/YYYY");let M=[{content:t+=1,styles:{halign:"center"}},{content:l,styles:{halign:"center"}},{content:r,styles:{halign:"center"}},{content:n,styles:{halign:"center"}},{content:o,styles:{halign:"center"}},{content:C,styles:{halign:"center"}},{content:a,styles:{halign:"right"}},{content:i,styles:{halign:"center"}},{content:c,styles:{halign:"center"}},{content:m,styles:{halign:"center"}},{content:p,styles:{halign:"center"}},{content:h,styles:{halign:"center"}},{content:g,styles:{halign:"right"}},{content:u,styles:{halign:"center"}},{content:_,styles:{halign:"center"}}];s.push(M)}),e.summary.map((e,t)=>{let l=(0,b.TM)(e.total_volume,(0,b.uf)(e.total_volume)),n=(0,b.TM)(e.total_km_pnp,(0,b.uf)(e.total_km_pnp)),o=(0,b.TM)(e.total_income,(0,b.uf)(e.total_income)),a=[{content:"TOTAL",colSpan:10,styles:{halign:"center",fillColor:r[1],fontStyle:"bold"}},{content:l,styles:{halign:"center",fillColor:r[1],fontStyle:"bold"}},{content:n,styles:{halign:"center",fillColor:r[1],fontStyle:"bold"}},{content:o,styles:{halign:"right",fillColor:r[1],fontStyle:"bold"}},{content:"",styles:{halign:"center",fillColor:r[1],fontStyle:"bold"}},{content:"",styles:{halign:"center",fillColor:r[1],fontStyle:"bold"}}];s.push(a)})}),b.x4.pdf({globalState:a,reportType:l,date:n.periodeColumn+t.toUpperCase(),positionSignature:{column:2,underlinePadding:-2,paddingTop:-1,marginLeft:5,fontSize:8},headStyle:{cellPadding:1},dataHead:[[{content:"NO",rowSpan:2,styles:{halign:"center"}},{content:"NO KA GAPEKA",rowSpan:2,styles:{halign:"center",cellWidth:23}},{content:"JAM BERANGKAT",rowSpan:2,styles:{halign:"center"}},{content:"ASAL",rowSpan:2,styles:{halign:"center"}},{content:"TUJUAN",rowSpan:2,styles:{halign:"center"}},{content:"JARAK (KM) \n GAPEKA",rowSpan:2,styles:{halign:"center"}},{content:"TARIF \n (RP/PNP)",rowSpan:2,styles:{halign:"center"}},{content:"FREK KA",rowSpan:2,styles:{halign:"center"}},{content:"TEMPAT DUDUK \n PENUMPANG",rowSpan:2,styles:{halign:"center",cellWidth:25}},{content:"TD - KM",rowSpan:2,styles:{halign:"center"}},{content:"VOLUME PNP",rowSpan:2,styles:{halign:"center"}},{content:"KM - PNP",rowSpan:2,styles:{halign:"center"}},{content:"PENDAPATAN",rowSpan:2,styles:{halign:"center"}},{content:"OKUPASI",colSpan:2,styles:{halign:"center"}}],[{content:"STATIS",styles:{halign:"center"}},{content:"DINAMIS",styles:{halign:"center"}}],[{content:"1",styles:{halign:"center"}},{content:"2",styles:{halign:"center"}},{content:"3",styles:{halign:"center"}},{content:"4",styles:{halign:"center"}},{content:"5",styles:{halign:"center"}},{content:"6",styles:{halign:"center"}},{content:"7",styles:{halign:"center"}},{content:"8",styles:{halign:"center"}},{content:"9",styles:{halign:"center"}},{content:"10",styles:{halign:"center"}},{content:"11",styles:{halign:"center"}},{content:"12",styles:{halign:"center"}},{content:"13",styles:{halign:"center"}},{content:"14",styles:{halign:"center"}},{content:"15",styles:{halign:"center"}},{content:"16",styles:{halign:"center"}}]],dataBody:s,nameFile:"KINERJA PERELASI "+t.toUpperCase(),landscape:!0,pageSize:{width:215.9,height:355.6},signingType:2})};function w(){var e,t;let l=(0,o.useContext)(n.Z),i=(0,a.usePathname)(),g=s.Z.useApp(),{message:u,notification:C,modal:w}=g,[M,y]=(0,o.useState)([null,null]),[k,v]=(0,o.useState)(null),[T,x]=(0,o.useState)(),[N,A]=(0,o.useState)(null),[S,j]=(0,o.useState)(!1),P=null==l?void 0:null===(t=l.dataUser)||void 0===t?void 0:null===(e=t.user)||void 0===e?void 0:e.username,E=[[254,249,195],[255,255,255],[121,193,235],["000000"]],z={headerColumn:null==T?void 0:T.n_line_1,reportColumn:null==T?void 0:T.n_line_2,periodeColumn:null==T?void 0:T.n_line_4,periodeColumn2:"Tahun  ",dateColumn:k};(0,o.useEffect)(()=>{if(null!=M){let e=d()(M[0]),t=d()(M[1]),l=d()(e).format("MMMM YYYY"),r=d()(t).format("MMMM YYYY");v((l==r?l:l+" - "+r).toUpperCase())}let e=async()=>{let e=d()(M[0]).format("MM"),t=d()(M[0]).format("YYYY"),l=d()(M[1]).format("MM"),r=d()(M[1]).format("YYYY"),n=await (0,c.Z)().get("report-type/PERFORMANCE_BY_RELATION"),o=await (0,c.Z)().get("report/performance-by-relation?period_month="+e+"_"+l+"&period_year="+t+"_"+r);(0,h.Z)({res:o,app:g})&&A(o.data),(0,h.Z)({res:n,app:g})&&x(null==n?void 0:n.data),j(!1)};M&&"Invalid Date"!==d()(M[0]).format("YYYY-MM-DD")&&"Invalid Date"!==d()(M[1]).format("YYYY-MM-DD")?(j(!0),e()):A(null)},[M,g]);let Y=(e,t,r,n)=>{if("pdf"==e)f(t,r,n,E,z,P,l);else{if("excel"!=e)return"";_(t,r,n,E,z)}},[K,D]=(0,o.useState)(!1),U=async e=>{D(!0);let t=async()=>{try{return"pdf"==e?Y("pdf",N,k,T):Y("excel",N,k,T),!0}catch(e){return console.log(e),!1}};setTimeout(async()=>{await t()?setTimeout(()=>{u.open({type:"success",content:(0,r.jsx)("span",{className:" capitalize",children:"Export Success"})}),D(!1)},1e3):setTimeout(()=>{u.open({type:"error",content:(0,r.jsx)("span",{className:" capitalize",children:"Export Invalid"})}),D(!1)},1e3)},500)};return(0,r.jsx)(m.Z,{pathname:i,globalState:l,children:(0,r.jsxs)(p.Z,{loadingExport:K,downloadPdf:()=>U("pdf"),downloadExcel:()=>U("excel"),data:N,loading:S,type:"rangemonth",dateChange:e=>y(e),children:[b.x4.web.header(T,"".concat(z.periodeColumn+k)),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full mb-5 table-auto border-collapse border border-solid dark:border-white border-black uppercase",style:{whiteSpace:"nowrap"},children:[(0,r.jsxs)("thead",{className:"dark:bg-black bg-tbl-header",style:b.wF.web.headerTable,children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black ",rowSpan:2,children:"No"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"No KA Gapeka"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Jam Berangkat"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Asal"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Tujuan"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:(0,r.jsxs)("div",{style:{lineHeight:1,padding:3},children:[(0,r.jsx)("p",{children:"Jarak (KM)"}),(0,r.jsx)("p",{children:" Gapeka"})]})}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:(0,r.jsxs)("div",{style:{lineHeight:1,padding:3},children:[(0,r.jsx)("p",{children:" Tarif"}),(0,r.jsx)("p",{children:"  (Rp/PNP)"})]})}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Frek KA"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:(0,r.jsxs)("div",{style:{lineHeight:1,padding:3},children:[(0,r.jsx)("p",{children:" Tempat Duduk"}),(0,r.jsx)("p",{children:" Penumpang"})]})}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"TD - KM"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Volume PNP"}),(0,r.jsx)("th",{className:" p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"KM - PNP"}),(0,r.jsx)("th",{className:"p-2 border border-solid dark:border-white border-black",rowSpan:2,children:"Pendapatan"}),(0,r.jsx)("th",{className:"p-2 border border-solid dark:border-white border-black",colSpan:2,children:"Okupansi"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"p-2 border border-solid dark:border-white border-black",children:"Statis"}),(0,r.jsx)("th",{className:"p-2 border border-solid dark:border-white border-black",children:"Dinamis"})]}),(0,r.jsx)("tr",{children:(()=>{let e=[];for(let t=0;t<15;t++)e.push((0,r.jsx)("td",{className:"border border-solid dark:border-white border-black text-center font-bold",children:t+1},t));return e})()})]}),(0,r.jsx)("tbody",{style:b.wF.web.bodyTable,children:null==N?void 0:N.map((e,t)=>{var l,n,a;let i=new Date(null==e?void 0:null===(l=e.summary[0])||void 0===l?void 0:l.d_opr);return d()(i),(0,r.jsxs)(o.Fragment,{children:[null===(n=e.data_rows)||void 0===n?void 0:n.map((e,t)=>{let l=t%2==0?"even-row dark:even-row":"";return(0,r.jsxs)("tr",{className:"text-center ".concat(l),children:[(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:t+1}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.c_noka)}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.t_departure)}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.c_station_start)}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.c_station_end)}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_distance,(0,b.Gx)(e.i_distance,".",","))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black text-right",children:(0,b.TM)(e.i_fare,(0,b.uf)(e.i_fare))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_train_frequency,(0,b.uf)(e.i_train_frequency))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_passenger_seat,(0,b.uf)(e.i_passenger_seat))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_td_km,(0,b.uf)(e.i_td_km))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_volume_pnp,(0,b.uf)(e.i_volume_pnp))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.i_km_pnp,(0,b.uf)(e.i_km_pnp))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black text-right",children:(0,b.TM)(e.i_income,(0,b.uf)(e.i_income))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:"-"===(0,b.TM)(e.i_o_static)?"-":""===(0,b.TM)(e.i_o_static)?(0,b.TM)(""):(0,b.TM)(e.i_o_static)+"%"}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:"-"===(0,b.TM)(e.i_o_dynamic)?"-":""===(0,b.TM)(e.i_o_dynamic)?(0,b.TM)(""):(0,b.TM)(e.i_o_dynamic)+"%"})]},t)}),null===(a=e.summary)||void 0===a?void 0:a.map((e,t)=>(0,r.jsxs)("tr",{className:"text-center font-bold dark:bg-black bg-tbl-footer",style:b.wF.web.bodyTotal,children:[(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",colSpan:10,children:"TOTAL"}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.total_volume,(0,b.uf)(e.total_volume))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black",children:(0,b.TM)(e.total_km_pnp,(0,b.uf)(e.total_km_pnp))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black text-right",children:(0,b.TM)(e.total_income,(0,b.uf)(e.total_income))}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black"}),(0,r.jsx)("td",{className:"p-2 border border-solid dark:border-white border-black"})]},"summary_".concat(t)))]},t)})})]})})]})})}}},function(e){e.O(0,[2505,3113,8173,9141,2470,3919,8348,2100,4309,5053,5458,2034,9155,7824,4746,5141,7642,1105,2971,7023,1744],function(){return e(e.s=56551)}),_N_E=e.O()}]);