(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9969,1105],{79641:function(e,t,a){Promise.resolve().then(a.bind(a,7812))},7812:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var l=a(57437),n=a(2265),r=a(16463),o=a(68348),s=a(72100),i=a(38378),d=a(42005),c=a(71275),m=a(65188),u=a(41105),f=a(62737),h=a.n(f),p=a(61438),x=a.n(p);a(65799);var g=a(38797);let b=a(8558);h().extend(b),h().locale("id");let w=async(e,t,a,l,n,r,o,s,i,d)=>{let c=new(x()).Workbook,m=c.addWorksheet(i),u=g.wF.excel.fontSizeHeader,f=g.wF.excel.fontSizeHeaderTabel,h=g.wF.excel.fontSizeTable,p=g.wF.excel.fontSizeSignature;g.wF.excel.bgFill,m.addRow([a.n_line_1]).eachCell(e=>{e.font={size:u,bold:!0,name:"calibri"},e.alignment={wrapText:!0}}),m.mergeCells("A1:F1"),m.getColumn("A").width=5,m.getColumn("B").width=12,m.getColumn("C").width=10,m.getColumn("D").width=15,m.getColumn("E").width=15,m.getColumn("F").width=17,m.addRow([a.n_line_2]).font={name:"calibri",bold:!0,size:u},m.mergeCells("A2:E2");let b=m.addRow([d]),w=m.rowCount;m.getCell("B".concat(w)).numFmt="MMMM YYYYY",m.getCell("B".concat(w)).alignment={horizontal:"left",vertical:"middle"},b.eachCell(e=>{e.font={size:u,name:"calibri",bold:!0}}),m.addRow([""]);let Y=m.addRow(["NO","TRAINSET","JUMLAH\nHARI","JUMLAH\nWALKA/KA","FREKUENSI\nWALKA/HARI","JUMLAH\nWALKA/BULAN"]);w=m.rowCount,m.getRow(5).height=35,Y.eachCell(e=>{e.border={top:{style:"thin"},bottom:{style:"thin"},left:{style:"thin"},right:{style:"thin"}},e.style.fill={type:"pattern",pattern:"solid",fgColor:{argb:"79c1eb"}}}),Y.font={size:f,name:"calibri",bold:!0},Y.alignment={horizontal:"center",vertical:"middle",wrapText:!0},e.map((e,t)=>{let a=m.addRow([t+1,"-"==e.i_trainset?0:e.i_trainset,"-"==e.i_total_day?0:e.i_total_day,"-"==e.i_total_ka?0:e.i_total_ka,"-"==e.i_freq_ka?0:e.i_freq_ka,"-"==e.i_per_bulan?0:e.i_per_bulan]);w=m.rowCount,m.getCell("A".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.getCell("B".concat(w)).alignment={horizontal:"left",vertical:"middle"},m.getCell("C".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.getCell("D".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.getCell("E".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.getCell("F".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.getCell("C"+w).numFmt='0;-0;"-";@',m.getCell("D"+w).numFmt='0;-0;"-";@',m.getCell("E"+w).numFmt='0;-0;"-";@',m.getCell("F"+w).numFmt='0;-0;"-";@',a.eachCell(e=>{e.border={top:{style:"thin"},bottom:{style:"thin"},left:{style:"thin"},right:{style:"thin"}},e.font={size:h,name:"calibri"}}),t%2!=0&&(m.getCell("A".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}},m.getCell("B".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}},m.getCell("C".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}},m.getCell("D".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}},m.getCell("E".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}},m.getCell("F".concat(t+6)).fill={type:"pattern",pattern:"solid",fgColor:{argb:"f5f5f5"}})});let y=m.addRow(["TOTAL","",new Intl.NumberFormat("de-DE").format(l),new Intl.NumberFormat("de-DE").format(n),new Intl.NumberFormat("de-DE").format(r),new Intl.NumberFormat("de-DE").format(o)]);w=m.rowCount,m.mergeCells("A".concat(w,":B").concat(w)),y.eachCell(e=>{e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},e.font={size:h,name:"calibri",bold:!0},e.alignment={horizontal:"center",vertical:"middle"}}),m.getCell("C"+w).numFmt='0;-0;"-";@',m.getCell("D"+w).numFmt='0;-0;"-";@',m.getCell("E"+w).numFmt='0;-0;"-";@',m.getCell("F"+w).numFmt='0;-0;"-";@',m.addRow([""]),m.addRow([""]),m.addRow(["","","","",a.n_position_1]).font={size:p,name:"calibri",bold:!0},w=m.rowCount,m.getCell("E".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.mergeCells("E".concat(w,":F").concat(w)),m.addRow([""]),m.addRow([""]),m.addRow([""]),m.addRow(["","","","",a.n_name_1]).font={size:p,name:"calibri",bold:!0,underline:!0},w=m.rowCount,m.mergeCells("E".concat(w,":F").concat(w)),m.getCell("E".concat(w)).alignment={horizontal:"center",vertical:"middle"},m.addRow(["","","","","Nipp. "+a.i_nipp_1]).font={size:p,name:"calibri",bold:!0},w=m.rowCount,m.mergeCells("E".concat(w,":F").concat(w)),m.getCell("E".concat(w)).alignment={horizontal:"center",vertical:"middle"};let v=new Blob([await c.xlsx.writeBuffer()],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),N=window.URL.createObjectURL(v),C=document.createElement("a");C.href=N,C.download=s,document.body.appendChild(C),C.click(),document.body.removeChild(C),window.URL.revokeObjectURL(N)};var Y=a(30939);let y=[{title:"NO",dataIndex:"key",key:"key",align:"center",className:"w-[30px]",render:e=>(0,l.jsx)("a",{children:e})},{title:"TRAINSET",dataIndex:"i_trainset",key:"i_trainset",align:"left",className:"w-[100px]",render:e=>(0,l.jsx)("a",{children:e})},{title:"JUMLAH\nHARI",dataIndex:"i_total_day",key:"i_total_day",align:"center",className:"w-[60px]",render:e=>(0,l.jsx)("a",{children:e})},{title:"JUMLAH\nWALKA/KA",dataIndex:"i_total_ka",key:"i_total_ka",align:"center",className:"w-[90px]",render:e=>(0,l.jsx)("a",{children:e})},{title:"FREQUENCY\nWALKA/HARI",key:"i_freq_ka",dataIndex:"i_freq_ka",align:"center",className:"w-[90px]",render:e=>(0,l.jsx)("a",{children:e})},{title:"JUMLAH\nWALKA/BULAN",key:"i_per_bulan",dataIndex:"i_per_bulan",align:"center",className:"w-[100px]",render:e=>(0,l.jsx)("a",{children:e})}];function v(){let e=(0,n.useContext)(c.Z),t=(0,r.usePathname)(),a=o.Z.useApp(),{message:f,notification:p,modal:x}=a,[b,v]=(0,n.useState)(),[N,C]=(0,n.useState)([]),[j,M]=(0,n.useState)(!1),[_,D]=(0,n.useState)(0),[k,S]=(0,n.useState)(0),[I,A]=(0,n.useState)(0),[E,F]=(0,n.useState)(0),[T,Z]=(0,n.useState)(),[O,U]=(0,n.useState)(0),[R,z]=(0,n.useState)(null),[$,L]=(0,n.useState)("bulan"),[H,P]=(0,n.useState)(""),[B,W]=(0,n.useState)(0);(0,n.useEffect)(()=>{let e=async()=>{let e="";if("bulan"==$)P("PERIODE : "+h()(b).format("MMMM YYYY")),e="start_date="+h()(b).format("YYYY-MM-DD")+"&end_date="+h()(b).format("YYYY-MM-DD");else if("triwulan"==$)P("PERIODE : "+h()(b).format("MMMM YYYY")+" S/D "+h()(b).add(2,"months").format("MMMM YYYY")),e="start_date="+h()(b).format("YYYY-MM-DD")+"&end_date="+h()(b).add(2,"months").format("YYYY-MM-DD");else if("tahun"==$){let t=h()(b).format("YYYY");h()(b).add(1,"years").format("YYYY"),P("PERIODE : TAHUN "+h()("01-01-"+t).format("YYYY")),e="start_date="+h()("01-01-"+t).format("YYYY-MM-DD")+"&end_date="+h()("12-31-"+t).format("YYYY-MM-DD")}let t=await (0,d.Z)().get("report/polsuska/?"+e);if((0,Y.Z)({res:t,app:a})){let e=0,a=0,l=0,n=0,r=0;t.data.map(t=>{e=Number(e)+Number(t.i_total_day),a=Number(a)+Number(t.i_total_ka),l=Number(l)+Number(t.i_freq_ka),r++,t.key=r,t.i_per_bulan=t.i_total_day*t.i_freq_ka,n+=t.i_per_bulan,0===t.i_total_day&&(t.i_total_day="-"),0===t.i_total_ka&&(t.i_total_ka="-"),0===t.i_freq_ka&&(t.i_freq_ka="-"),0===t.i_per_bulan&&(t.i_per_bulan="-")}),Z(h()(b).format("MM/DD/YYYY")),D(e),S(a),A(l),F(n),C(t.data)}else C([]),D(0),S(0),A(0),F(0),Z("");let l=await (0,d.Z)().get("report-type/POLSUSKA");(0,Y.Z)({res:l,app:a})&&z(l.data),M(!1)};b&&"Invalid Date"!==h()(b).format("YYYY-MM-DD")?(console.log("dataForm",b),M(!0),e()):C([])},[b,O,a]);let[K,q]=(0,n.useState)(!1),J=t=>{q(!0);let a=async()=>{try{return"pdf"==t?g.x4.pdf({globalState:e,reportType:R,headStyle:{cellPadding:1,marginLeft:45,marginRight:10},date:H,landscape:!1,nameFile:"Polsuska ".concat(H),columnStyles:{0:{cellWidth:10},1:{cellWidth:18},2:{cellWidth:16},3:{cellWidth:24},4:{cellWidth:26},5:{cellWidth:26}},dataHead:[["NO.","TRAINSET","JUMLAH\nHARI","JUMLAH\nWALKA/KA","FREQUENCY\nWALKA/HARI","JUMLAH\nWALKA / BULAN"]],dataBody:[...N.map((e,t)=>[{content:t+1,styles:{halign:"center"}},{content:e.i_trainset,styles:{halign:"left"}},{content:e.i_total_day,styles:{halign:"center"}},{content:e.i_total_ka,styles:{halign:"center"}},{content:e.i_freq_ka,styles:{halign:"center"}},{content:e.i_per_bulan,styles:{halign:"center"}}]),[{content:"Total",colSpan:2,styles:{halign:"center",fontStyle:"bold"}},{content:new Intl.NumberFormat("de-DE").format(_),styles:{halign:"center",fontStyle:"bold"}},{content:new Intl.NumberFormat("de-DE").format(k),styles:{halign:"center",fontStyle:"bold"}},{content:new Intl.NumberFormat("de-DE").format(I),styles:{halign:"center",fontStyle:"bold"}},{content:new Intl.NumberFormat("de-DE").format(E),styles:{halign:"center",fontStyle:"bold"}}]],positionSignature:{column:2,underlinePadding:-2,paddingTop:-2,marginLeft:-15,fontSize:8}}):w(N,T,R,_,k,I,E,"Polsuska ".concat(H,".xlsx"),"Report",H),!0}catch(e){return!1}};setTimeout(async()=>{await a()?setTimeout(()=>{f.open({type:"success",content:(0,l.jsx)("span",{className:" capitalize",children:"Export Success"})}),q(!1)},1e3):setTimeout(()=>{f.open({type:"error",content:(0,l.jsx)("span",{className:" capitalize",children:"Export Invalid"})}),q(!1)},1e3)},500)};return(0,l.jsx)(m.Z,{pathname:t,globalState:e,children:(0,l.jsx)(u.Z,{type:"triwulan"==$?"triwulan":"tahun"==$?"year":"month",className:" flex justify-center",data:N,loadingExport:K,childrenInput:(0,l.jsxs)("div",{className:"flex flex-col max-md:w-full ml-2",children:[(0,l.jsx)("span",{id:"subject",className:"mb-5 mt-3  text-[14px]",children:"Tipe"}),(0,l.jsx)(s.default,{disabled:K,placeholder:"Select Filter",onChange:e=>{W(B+1),v(null),L(e)},defaultValue:"Per Bulan",className:"max-md:w-full",options:[{value:"bulan",label:"Per Bulan"},{value:"triwulan",label:"Per Triwulan"},{value:"tahun",label:"Per Tahun"}]})]}),onChangeTri:B,loading:j,dateChange:e=>v(e),downloadPdf:()=>J("pdf"),downloadExcel:()=>J("excel"),codeDelete:"bulan"==$?"POLSUSKA":"",onDelete:()=>{U(O+1)},children:(0,l.jsxs)("div",{className:"w-full xl:w-auto",children:[g.x4.web.header(R,H),(0,l.jsx)(i.Z,{bordered:!0,className:" w-560px]",rowClassName:g.x4.web.striped,columns:g.x4.web.headerTable(y),dataSource:N,scroll:{x:540},pagination:!1,summary:e=>(0,l.jsxs)(i.Z.Summary.Row,{className:"font-bold",children:[(0,l.jsx)(i.Z.Summary.Cell,{index:0,colSpan:2,align:"center",children:(0,l.jsx)("a",{children:"Total"})}),(0,l.jsx)(i.Z.Summary.Cell,{index:1,align:"center",children:(0,l.jsxs)("a",{children:[" ",new Intl.NumberFormat("de-DE").format(_)," "]})}),(0,l.jsx)(i.Z.Summary.Cell,{index:1,align:"center",children:(0,l.jsxs)("a",{children:[" ",new Intl.NumberFormat("de-DE").format(k)," "]})}),(0,l.jsx)(i.Z.Summary.Cell,{index:1,align:"center",children:(0,l.jsxs)("a",{children:[" ",new Intl.NumberFormat("de-DE").format(I)," "]})}),(0,l.jsx)(i.Z.Summary.Cell,{index:1,align:"center",children:(0,l.jsxs)("a",{children:[" ",new Intl.NumberFormat("de-DE").format(E)," "]})})]})})]})})})}},57608:function(e,t,a){"use strict";a.d(t,{Ol:function(){return s},SZ:function(){return d},Zb:function(){return o},aY:function(){return c},ll:function(){return i}});var l=a(57437),n=a(2265),r=a(13498);let o=n.forwardRef((e,t)=>{let{className:a,classNameFalse:n,...o}=e;return(0,l.jsx)("div",{ref:t,className:n?a:(0,r.cn)("rounded-2xl my-2 border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",a),...o})});o.displayName="Card",n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("div",{ref:t,className:(0,r.cn)("rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50",a),...n})}).displayName="Card900";let s=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 px-6 py-3  rounded-t-2xl  bg-white dark:bg-black",a),...n})});s.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("h3",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",a),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-zinc-500 dark:text-zinc-400 ",a),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-5 bg-white dark:bg-black rounded-b-2xl",a),...n})});c.displayName="CardContent",n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,l.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",a),...n})}).displayName="CardFooter"},41105:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var l=a(57437),n=a(2265),r=a(16463),o=a(68348),s=a(62586),i=a(46682),d=a(62575),c=a(85169),m=a(62737),u=a.n(m);a(65799);var f=a(71275),h=a(57608),p=a(16584),x=a(32034),g=a(23288),b=a(85313),w=a(90696),Y=a(9707),y=a(66407),v=a(63843),N=a(99945),C=a(73717),j=e=>{let{downloadFalse:t,loadingExport:a,trueApprave:r,downloadPdf:s,downloadExcel:d,title:c,onDelete:m,falseDelete:u,date:h,approve:p,onApprove:j,onUnapprove:M,loadingDisable:_}=e,D=(0,n.useContext)(f.Z),[k,S]=(0,n.useState)([]),[I,A]=(0,n.useState)([]),{message:E,notification:F,modal:T}=o.Z.useApp(),{confirm:Z}=T;return(0,n.useEffect)(()=>{var e,a,n,o,i;let f=[],x=[];(null==D?void 0:null===(e=D.permission)||void 0===e?void 0:e.indexOf("export excel"))!==-1&&d&&!t&&f.push({key:"excel",label:(0,l.jsx)("a",{className:"w-full text-left",onClick:d,children:"Excel"}),icon:(0,l.jsx)(b.Z,{style:{color:"green"}}),className:"h-10"}),(null==D?void 0:null===(a=D.permission)||void 0===a?void 0:a.indexOf("export pdf"))!==-1&&s&&!t&&f.push({key:"pdf",label:(0,l.jsx)("a",{className:"w-full text-left",onClick:s,children:"PDF"}),icon:(0,l.jsx)(w.Z,{style:{color:"red"}}),className:"h-10"}),(null==D?void 0:null===(n=D.permission)||void 0===n?void 0:n.indexOf("delete"))===-1||u||x.push({key:"delete",label:(0,l.jsx)("a",{className:"w-full text-left",onClick:()=>{Z({title:"Delete data?",icon:(0,l.jsx)(Y.Z,{}),content:"Are you sure want to delete this ".concat(c," data in ").concat(h," ?"),okText:"Yes",okType:"danger",cancelText:"No",onOk(){m(!0)}})},children:"Delete"}),icon:(0,l.jsx)(Y.Z,{style:{color:"red"}}),className:"h-10"}),h&&(p?(null==D?void 0:null===(i=D.permission)||void 0===i?void 0:i.indexOf("unapprove"))!==-1&&r&&x.push({key:"unapprove",label:(0,l.jsx)("a",{className:"w-full text-left",onClick:()=>{Z({title:"Unapprove data?",icon:(0,l.jsx)(v.Z,{}),content:"Are you sure want to Unapprove this ".concat(c," data in ").concat(h," ?"),okText:"Yes",okType:"danger",cancelText:"No",onOk(){M(!0)}})},children:"Unapprove"}),icon:(0,l.jsx)(v.Z,{style:{color:"red"}}),className:"h-10"}):(null==D?void 0:null===(o=D.permission)||void 0===o?void 0:o.indexOf("approve"))!==-1&&r&&x.push({key:"approve",label:(0,l.jsx)("a",{className:"w-full text-left",onClick:()=>{Z({title:"Approve data?",icon:(0,l.jsx)(y.Z,{style:{color:"green"}}),content:"Are you sure want to Approve this ".concat(c," data in ").concat(h," ?"),okText:"Yes",cancelText:"No",onOk(){j(!0)}})},children:"Approve"}),icon:(0,l.jsx)(y.Z,{style:{color:"green"}}),className:"h-10"})),S(f),A(x)},[Z,t,r,u,D,c,h,m,s,d,p,j,M]),(0,l.jsxs)(l.Fragment,{children:[I.length?(0,l.jsx)("div",{className:"",children:(0,l.jsx)(x.Z,{className:"md:mt-12 float-right mr-4",disabled:a,menu:{items:I},children:(0,l.jsx)(i.ZP,{children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(N.Z,{})," Opsi"]})})})}):null,k.length?(0,l.jsx)("div",{className:"",children:(0,l.jsx)(x.Z,{className:"md:mt-12 float-right",disabled:!!a||!!_,menu:{items:k},children:(0,l.jsx)(i.ZP,{loading:a,children:(0,l.jsxs)(g.Z,{children:[a?"":(0,l.jsx)(C.Z,{})," Export"]})})})}):null]})},M=a(42005),_=a(30939),D=a(95053),k=a(72100);let{RangePicker:S}=D.default;var I=e=>{let{disabled:t,className:a,onDateSelect:r,widthDate:o,enableSelect:s,onDistanceSelect:i,typeDatePicker:d,showTime:c,loadingDisable:m,allowClear:f,onChangeTri:h,disabledDate:p}=e,[x,g]=(0,n.useState)([]),[b,w]=(0,n.useState)(""),[Y,y]=(0,n.useState)(""),[v,N]=(0,n.useState)(0),[C,j]=(0,n.useState)(null),[_,I]=(0,n.useState)(0),[A,E]=(0,n.useState)(null),[F,T]=(0,n.useState)(null),[Z,O]=(0,n.useState)([null,null]);(0,n.useEffect)(()=>{r(b)},[b]),(0,n.useEffect)(()=>{T(null),E(null),j(null)},[h]),(0,n.useEffect)(()=>{(async()=>{let e=await (0,M.Z)().get("/distance/"),t=null==e?void 0:e.data;if(void 0!==t){let e=[];e.push({value:"",label:"All Data"}),t.map((t,a)=>e.push({value:t.distance,label:t.distance})),g(e)}})()},[]);let U=(e,t)=>{if(null==e?void 0:e[0]){let a=parseInt(u()(e[0]).format("DD")),l=parseInt(u()(e[0]).format("MM")),n=parseInt(u()(e[0]).format("YYYY")),o=parseInt(u()(e[0]).format("HH")),s=parseInt(u()(e[0]).format("mm")),i=parseInt(u()(e[0]).format("ss")),d=parseInt(u()(e[1]).format("DD")),c=parseInt(u()(e[1]).format("MM")),m=parseInt(u()(e[1]).format("YYYY")),f=parseInt(u()(e[1]).format("hh")),h=parseInt(u()(e[1]).format("mm")),p=parseInt(u()(e[1]).format("ss"));w({...b,dateFrom:a,monthFrom:l,yearFrom:n,hourFrom:o,minuteFrom:s,secondFrom:i,dateUntil:d,monthUntil:c,yearUntil:m,hourUntil:f,minuteUntil:h,secondUntil:p,dateStrings:t}),r(b,Y,v,C,_)}else r(void 0)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col border-none mb-7 mt-2 ml-1",children:[(0,l.jsx)("span",{id:"subject",className:"mb-5 mt-1 text-[14px] font-bold",children:"Periode"}),(0,l.jsxs)("div",{className:"flex flex-wrap",children:[""===d?(0,l.jsx)(S,{allowClear:f,disabled:!!t||!!m,allowEmpty:[!0,!1],className:"".concat(a," mb-3 lg:mr-3"),showTime:c,onChange:U,disabledDate:p}):"rangemonth"===d?(0,l.jsx)(S,{picker:"month",disabled:!!t||!!m,className:"".concat(a," mb-3 lg:mr-3 sm:w-32"),onChange:U,disabledDate:p}):"triwulan"===d?(0,l.jsx)(S,{picker:"month",placeholder:["Start month","End month"],allowEmpty:[!0,!0],allowClear:!0,value:[F?u()(F,"YYYY-MM"):null,A?u()(A,"YYYY-MM"):null],disabled:[!!t||!!m,!0],onChange:(e,t)=>{if(null==e?void 0:e[0]){let a=parseInt(u()(e[0]).format("DD")),l=parseInt(u()(e[0]).format("MM")),n=parseInt(u()(e[0]).format("YYYY")),o=parseInt(u()(e[0]).format("HH")),s=parseInt(u()(e[0]).format("mm")),i=parseInt(u()(e[0]).format("ss")),d=parseInt(u()(e[0]).add(2,"month").format("DD")),c=parseInt(u()(e[0]).add(2,"month").format("MM")),m=parseInt(u()(e[0]).add(2,"month").format("YYYY")),f=parseInt(u()(e[0]).add(2,"month").format("hh")),h=parseInt(u()(e[0]).add(2,"month").format("mm")),p=parseInt(u()(e[0]).add(2,"month").format("ss")),x=u()(e[0]).locale("id").format("MMMM"),g=parseInt(u()(e[0]).format("M")),M=parseInt(u()(e[0]).format("YYYY")),D=parseInt(u()(e[0]).format("DD"));T(u()(null==e?void 0:e[0]).format("YYYY-MM-DD")),E(u()(null==e?void 0:e[0]).add(2,"month").format("YYYY-MM-DD")),y(x),N(g),j(M),I(D),w({...b,dateFrom:a,monthFrom:l,yearFrom:n,hourFrom:o,minuteFrom:s,secondFrom:i,dateUntil:d,monthUntil:c,yearUntil:m,hourUntil:f,minuteUntil:h,secondUntil:p,month:g,monthNumber:g,year:M,day:D,dateStrings:t}),r(b,Y,v,C,_)}else T(null),E(null),r(void 0)},disabledDate:p}):"rangepicker"===d?(0,l.jsx)(S,{allowClear:f,disabled:!!t||!!m,allowEmpty:[!0,!1],className:"".concat(a," mb-3 lg:mr-3"),showTime:c,onChange:U,disabledDate:p}):"year"===d?(0,l.jsx)(D.default,{disabled:!!t||!!m,className:"".concat(a," mb-3 lg:mr-3 sm:w-[500px] w-96"),value:C?u()(C,"YYYY"):null,onChange:(e,t)=>{if(null===e)j(null),r(C);else{let a=u()(e).locale("id").format("MMMM"),l=parseInt(u()(e).format("M")),n=parseInt(u()(e).format("YYYY")),o=parseInt(u()(e).format("DD"));y(a),N(l),j(t),I(o),w({...b,month:a,monthNumber:l,year:n,day:o}),r(b,Y,v,C,_)}},allowClear:!0,format:"YYYY",picker:"year",disabledDate:p}):(0,l.jsx)(D.default,{disabled:!!t||!!m,className:"".concat(a," mb-3 lg:mr-3 sm:w-[500px] w-96"),onChange:(e,t)=>{let a=u()(e).locale("id").format("MMMM"),l=parseInt(u()(e).format("M")),n=parseInt(u()(e).format("YYYY")),o=parseInt(u()(e).format("DD"));y(a),N(l),j(n),I(o),w({...b,month:a,monthNumber:l,year:n,day:o}),r(b,Y,v,C,_)},picker:d||"month",disabledDate:p}),(0,l.jsx)(k.default,{disabled:!!t||!!m,showSearch:!0,defaultValue:"",className:"".concat(null!=s?s:"hidden"," sm:ml-2 md:w-32 sm-w-32 "),onChange:e=>{i&&i(e)},placeholder:"Select Distance",filterOption:(e,t)=>((null==t?void 0:t.label)||"").toLowerCase().includes((null!=e?e:"").toLowerCase()),options:x.map((e,t)=>({value:e.value,label:"".concat(e.label)}))})]})]})})},A=a(86658);function E(e){let{className:t,loadingBottom:a,loadingExport:m,childrenInput:x,enableSelect:g,onDistanceSelect:b,typeLoading:w,type:Y,codeDelete:y,onDelete:v,downloadPdf:N,downloadExcel:C,loading:D,dateChange:k,children:S,data:E,loadingDisable:F,showTime:T,allowClear:Z,warning:O,showModalWarn:U,onApprove:R,onChangeTri:z,disabledDate:$,downloadFalse:L,emptyFalse:H,noTheme:P,codeMenu:B}=e;(0,n.useContext)(f.Z);let[W,K]=(0,n.useState)(),[q,J]=(0,n.useState)(),[Q,V]=(0,n.useState)(),G=o.Z.useApp(),{message:X}=G;(0,r.usePathname)(),(0,n.useEffect)(()=>{var e,t;V((null==E?void 0:null===(e=E[0])||void 0===e?void 0:e.approved_at)=="-"?null:null==E?void 0:null===(t=E[0])||void 0===t?void 0:t.approved_at)},[E]),(0,n.useEffect)(()=>{K(m)},[m,X]),(0,n.useEffect)(()=>{J(void 0)},[z]);let ee=async()=>{X.open({key:"approve_report",type:"loading",content:"Approveing...",duration:0});let e=await (0,M.Z)().post("report/approve",{code:y,codeMenu:null!=B?B:null,month:2==q.length?Number(u()(q[0]).format("MM")):Number(u()(q).format("MM")),year:2==q.length?Number(u()(q[0]).format("YYYY")):Number(u()(q).format("YYYY"))});(0,_.Z)({res:e,app:G,msgTrue:!0,key:"approve_report"})&&(V(new Date),R(!0))},et=async()=>{X.open({key:"unapprove_report",type:"loading",content:"Unapproveing...",duration:0});let e=await (0,M.Z)().post("report/unapprove",{code:y,codeMenu:null!=B?B:null,month:2==q.length?Number(u()(q[0]).format("MM")):Number(u()(q).format("MM")),year:2==q.length?Number(u()(q[0]).format("YYYY")):Number(u()(q).format("YYYY"))});(0,_.Z)({res:e,app:G,msgTrue:!0,key:"unapprove_report"})&&(V(null),R(!1))},ea=async()=>{X.open({key:"delete_report",type:"loading",content:"Deleting...",duration:0});let e=await (0,M.Z)().post("report/delete",{code:y,codeMenu:null!=B?B:null,month:2==q.length?Number(u()(q[0]).format("MM")):Number(u()(q).format("MM")),year:2==q.length?Number(u()(q[0]).format("YYYY")):Number(u()(q).format("YYYY"))});(0,_.Z)({res:e,app:G,msgTrue:!0,key:"delete_report"})&&v(!0)},{systemTheme:el,theme:en}=(0,c.F)();return(0,l.jsx)(s.ZP,{theme:P?void 0:{components:{Table:"dark"===en?{borderColor:"#fff",headerBorderRadius:0,cellPaddingBlock:5}:"system"===en&&"dark"===el?{borderColor:"#fff",headerBorderRadius:0,cellPaddingBlock:5}:{headerBg:"#79c1eb",borderColor:"#000",headerBorderRadius:0,cellPaddingBlock:5}}},componentSize:"large",children:(0,l.jsxs)(h.Zb,{className:"border-none p-7 w-full shadow-md",children:[(0,l.jsxs)("div",{className:x?"flex flex-wrap mb-6":"flex flex-wrap mb-6 justify-between",children:[(0,l.jsx)(I,{allowClear:Z,onDistanceSelect:null!=b?b:void 0,enableSelect:g,disabled:w?D:null!=W&&W,typeDatePicker:"rangepicker"===Y?"":"triwulan"===Y?"triwulan":void 0===Y?"month":Y,disabledDate:$,className:x?"":"rangepicker"==Y?"w-full lg:w-2/3 xl:w-3/4":"w-full md:w-3/4 lg:w-2/4",onDateSelect:e=>{""===e||isNaN(null==e?void 0:e.monthNumber)?(null==e?void 0:e.dateStrings)?(k(e.dateStrings),J(e.dateStrings)):(k(void 0),J(void 0)):"rangepicker"===Y?(null==e?void 0:e.dateStrings)&&(k(e.dateStrings),J(e.dateStrings)):(k(u()(e.year+"-"+e.monthNumber+"-01").format("YYYY-MM-DD")),J(u()(e.year+"-"+e.monthNumber+"-01").format("YYYY-MM-DD")))},loadingDisable:F,showTime:T,onChangeTri:z}),x,null!=E&&!!E.length&&q&&!D&&(0,l.jsxs)("div",{className:x?"flex flex-row md:justify-end w-full sm:justify-start md:-mt-32 mt-3 ml-1":"flex flex-row",children:[O&&(0,l.jsx)(i.ZP,{className:"w-6 md:my-12 mr-2",onClick:()=>{U(!0)},icon:(0,l.jsx)(A.Z,{style:{fontSize:"25px",color:"#ebde34"}})}),(0,l.jsx)(j,{loadingExport:W,trueApprave:y,approve:Q,onApprove:ee,onUnapprove:et,onDelete:ea,falseDelete:!y,title:null==y?void 0:y.toLowerCase().replaceAll("_"," "),downloadFalse:L,date:"rangemonth"==Y?(null==q?void 0:q[0])===(null==q?void 0:q[1])&&"".concat(u()(q[0]).format("YYYY MMMM")):"".concat(u()(q).format("YYYY MMMM")),downloadPdf:N,downloadExcel:C,loadingDisable:F})]})]}),q&&(0,l.jsx)(l.Fragment,{children:D?(0,l.jsx)(p.Z,{className:"-mt-6"}):(0,l.jsx)("div",{className:" md:-mt-6 overflow-auto w-full",children:(null==E?void 0:E.length)||H?(0,l.jsx)("div",{className:t,children:S}):(0,l.jsx)(d.Z,{})})}),a]})})}u().locale("id")},5454:function(e,t,a){"use strict";a.d(t,{O:function(){return r}});var l=a(57437),n=a(13498);function r(e){let{className:t,...a}=e;return(0,l.jsx)("div",{className:(0,n.cn)("animate-pulse rounded-lg bg-zinc-300 dark:bg-zinc-800",t),...a})}},16584:function(e,t,a){"use strict";var l=a(57437),n=a(5454);t.Z=e=>{let{className:t}=e;return(0,l.jsx)("div",{className:"flex flex-col w-full  ".concat(t),children:(0,l.jsxs)("div",{className:"bg-white dark:bg-zinc-950 p-6 rounded-2xl",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)(n.O,{className:"h-8 md:w-40"}),(0,l.jsx)(n.O,{className:"h-6 md:w-96"})]}),(0,l.jsx)(n.O,{className:"h-10 w-36 rounded-2xl"})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center w-full mt-6 mb-4",children:[(0,l.jsxs)("div",{className:"space-x-2 flex",children:[(0,l.jsx)(n.O,{className:"h-6 md:w-64"}),(0,l.jsx)(n.O,{className:"h-6 w-28"})]}),(0,l.jsx)(n.O,{className:"h-6 w-28 rounded-2xl"})]}),(0,l.jsxs)("div",{className:"space-y-3",children:[(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"}),(0,l.jsx)(n.O,{className:"h-6 w-full"})]})]})]})})}},8558:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(l,n,r){var o=n.prototype;r.utc=function(e){var t={date:e,utc:!0,args:arguments};return new n(t)},o.utc=function(t){var a=r(this.toDate(),{locale:this.$L,utc:!0});return t?a.add(this.utcOffset(),e):a},o.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var s=o.parse;o.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),s.call(this,e)};var i=o.init;o.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else i.call(this)};var d=o.utcOffset;o.utcOffset=function(l,n){var r=this.$utils().u;if(r(l))return this.$u?0:r(this.$offset)?d.call(this):this.$offset;if("string"==typeof l&&null===(l=function(e){void 0===e&&(e="");var l=e.match(t);if(!l)return null;var n=(""+l[0]).match(a)||["-",0,0],r=n[0],o=60*+n[1]+ +n[2];return 0===o?0:"+"===r?o:-o}(l)))return this;var o=16>=Math.abs(l)?60*l:l,s=this;if(n)return s.$offset=o,s.$u=0===l,s;if(0!==l){var i=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(o+i,e)).$offset=o,s.$x.$localOffset=i}else s=this.utc();return s};var c=o.format;o.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},o.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var m=o.toDate;o.toDate=function(e){return"s"===e&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var u=o.diff;o.diff=function(e,t,a){if(e&&this.$u===e.$u)return u.call(this,e,t,a);var l=this.local(),n=r(e).local();return u.call(l,n,t,a)}}},e.exports=t()}},function(e){e.O(0,[2505,3113,8173,9141,2470,3919,8348,2100,4309,5053,5458,2034,9155,7824,428,8421,8028,4052,5325,6487,8378,4746,5141,7642,2971,7023,1744],function(){return e(e.s=79641)}),_N_E=e.O()}]);