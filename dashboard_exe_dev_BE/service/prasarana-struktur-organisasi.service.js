"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutasiMove = exports.dataDelete = exports.Insert = exports.All = void 0;
const repository = __importStar(require("../repository/prasarana-struktur-organisasi.repository"));
const service = __importStar(require("../service/activity.service"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
// const Insert = async (req: Request) => {
//   let response;
//   try {
//     let {data } = req.body;
//     for(let cek of data){
//       let startOf = moment(String(cek.period), "YYYY-MM-DD")
//       .startOf("M")
//       .format("YYYY-MM-DD");
//       let endof = moment(String(cek.period), "YYYY-MM-DD")
//       .endOf("M")
//       .format("YYYY-MM-DD");
//       let cekData  = await repository.CheckUserExist(startOf,endof,cek.jabatan,cek.nip);
//       if (cekData.length > 0) {
//         return (response = build.response("400", "some data already exist !", {}));
//       }
//     }
//     await repository.Insert(data);
//     response = build.response("00", "success", {});
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, {});
//   }
//   return response;
// };
// const All = async (req: Request) => {
//   let response 
//   try {
//     let dso = await repository.All(); // dari tabel struktur organisasi
//     let drp = await repository.AllSo(); // dari tabel report
//     let List = [];
//     for (let dt1 of drp) {
//       if (dt1.path === "#" && dt1.parent_id === null) {
//         let drp1 = await repository.subSo(dt1.id);
//         for (let dt2 of drp1) {
//           if (dt2.path === "$") {
//             let drp2 = await repository.subSo(dt2.id);
//             for (let dt3 of drp2) {
//               let action = await repository.Allid(dt3.name);
//               dt3.user = action; // Menambahkan informasi user ke dt3
//             }
//             dt2.sub_org_length = drp2.length;
//             dt2.sub_org = drp2;
//           } else {
//             let action = await repository.Allid(dt2.name);
//             dt2.user = action; // Menambahkan informasi user ke dt2
//           }
//         }
//         dt1.sub_org_length = drp1.length;
//         dt1.sub_org = drp1;
//         List.push(dt1);
//       }
//     }
//     response = build.response("00", "success", List);
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, []);
//   }
//   return response;
// };
// const All = async (req: Request) => {
//   let response 
//   try {
//     let { date } = req.query;
//     let dateMoment = moment(String(date), "YYYY-MM-DD");
//     let startOfLast = dateMoment.clone().startOf("month");
//     let endofLast = dateMoment.clone().endOf("month");
//     let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
//     let endof = dateMoment.endOf("M").format("YYYY-MM-DD");
//   let startOfLastMonth = startOfLast.clone().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
//   let endOfLastMonth = endofLast.clone().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
//     let List:any = []; 
//     let CheckUser = await repository.CheckUser(startOf,endof); // dari tabel report
//     if (CheckUser.length > 0) {      
//       let Master = await repository.AllNewMaster(); // dari tabel report
//       const loopMasterInfy:any = async (val:any) =>{
//         let data  = [] 
//         for(let MasterM of val){  
//           let SubMaster = await repository.AllNewSubMaster(MasterM.id);  
//           let User = await repository.Alluser(MasterM.n_name,startOf,endof); // dari tabel report
//           let LastUser = await repository.AllCompareuser(MasterM.n_name,startOfLastMonth,endOfLastMonth); // dari tabel report
//           let dataUser = []
//           for(let user1 of User){
//             let sertifikasi = await repository.Allsertifikasi(user1.nip); // dari tabel report
//             for(let serLoop of sertifikasi){
//               serLoop.nama = user1.nama
//             }
//             let mcu = await repository.Allmcu(user1.nip); // dari tabel report
//             for(let mcuLoop of mcu){
//               mcuLoop.nama = user1.nama
//             }
//             dataUser.push({...user1,sub_sertifikasi:sertifikasi, sub_mcu:mcu})
//           }
//            data.push({...MasterM, sub_org: await loopMasterInfy(SubMaster), sub_user:dataUser, mutasi:{sebelumnya:LastUser, sekarang:User}});
//         }
//         return data
//       }
//       List.push(await loopMasterInfy(Master)) 
//     }
//     response = build.response("00", "success", List);
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, []);
//   }
//   return response;
// };
const dataDelete = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let startOf = (0, moment_1.default)(String(date), "YYYY-MM-DD")
            .startOf("M")
            .format("YYYY-MM-DD");
        let endof = (0, moment_1.default)(String(date), "YYYY-MM-DD")
            .endOf("M")
            .format("YYYY-MM-DD");
        let result;
        let CheckUser = await repository.CheckUser(startOf, endof);
        if (CheckUser.length > 0) {
            result = await repository.Trx(parseInt((0, moment_1.default)(startOf).format('MM')), parseInt((0, moment_1.default)(endof).format('YYYY')), req.userId, 'STRUKTUR_ORGANISASI');
        }
        req.body.menu = 'Struktur Organisasi';
        req.body.description = 'Delete Data Struktur Organisasi';
        req.body.j_old_data = CheckUser;
        // req.body.j_new_data = dataUpdate
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.dataDelete = dataDelete;
const All = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let dateMoment = (0, moment_1.default)(String(date), "YYYY-MM-DD");
        let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endof = dateMoment.endOf("M").format("YYYY-MM-DD");
        let List = [];
        let Master = await repository.AllNewMaster(startOf, endof); // dari tabel sturktur organisasi tes
        const loopMasterInfy = async (val) => {
            let data = [];
            for (let MasterM of val) {
                let SubMaster = await repository.AllNewSubMaster(MasterM.id);
                let SubMasters = SubMaster[0];
                let sertifikasi = [];
                let mcu = [];
                let slipgaji = [];
                let kategori = [];
                if (SubMasters?.nipp) {
                    kategori = await repository.getAllKategori(SubMasters?.id_kategori);
                    MasterM.divisi = kategori?.kategori;
                    MasterM.sub_divisi = kategori?.sub_kategori;
                    MasterM.unit = kategori?.sub_kategori_sub;
                    MasterM.description = kategori?.description;
                    sertifikasi = await repository.Allsertifikasi(SubMasters?.nipp);
                    for (let serti of sertifikasi) {
                        // let result2 = await repository.getAllKategori(serti?.kategori);
                        serti.tanggal_berlaku = (0, moment_1.default)(serti.tanggal_berlaku).format("YYYY-MM-DD");
                        serti.status = serti.tanggal_berlaku > (0, moment_1.default)().format("YYYY-MM-DD") ? "Aktif" : "Nonaktif";
                        // serti.kategori = result2[0] ? result2[0] : {}
                    }
                    mcu = await repository.Allmcu(SubMasters?.nipp);
                    slipgaji = await repository.Allslipgaji(SubMasters?.nipp);
                }
                if (MasterM?.nipp) {
                    kategori = await repository.getAllKategori(MasterM?.id_kategori);
                    MasterM.divisi = kategori?.kategori;
                    MasterM.sub_divisi = kategori?.sub_kategori;
                    MasterM.unit = kategori?.sub_kategori_sub;
                    MasterM.description = kategori?.description;
                    sertifikasi = await repository.Allsertifikasi(MasterM?.nipp);
                    for (let serti of sertifikasi) {
                        let result2 = await repository.getAllKategori(serti?.kategori);
                        serti.tanggal_berlaku = (0, moment_1.default)(serti.tanggal_berlaku).format("YYYY-MM-DD");
                        serti.status = serti.tanggal_berlaku > (0, moment_1.default)().format("YYYY-MM-DD") ? "Aktif" : "Nonaktif";
                        // serti.kategori = result2[0] ? result2[0] : {}
                    }
                    mcu = await repository.Allmcu(MasterM?.nipp);
                    slipgaji = await repository.Allslipgaji(MasterM?.nipp);
                }
                data.push({ ...MasterM, sertifikasi: sertifikasi, mcu: mcu, slipgaji: slipgaji, sub_org: await loopMasterInfy(SubMaster) });
            }
            return data;
        };
        List.push(await loopMasterInfy(Master));
        response = build.response("00", "success", List);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Insert = async (req) => {
    let response;
    let result;
    try {
        let { data, periode } = req.body;
        if (data.length <= 0) {
            return (response = build.response("400", "Data tidak ada", {}));
        }
        let dateMoment = (0, moment_1.default)(String(periode), "YYYY-MM-DD");
        let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endOf = dateMoment.endOf("M").format("YYYY-MM-DD");
        // const divisiWithNullParent: Record<string, number> = {};
        for (const employee of data) {
            let cekKategori = await repository.getAllKategori(employee.id_kategori);
            if (cekKategori.length <= 0) {
                return (response = build.response("400", "Kode kategori tidak sesuai", cekKategori));
            }
            // if (employee.parent_id === null) {
            //   if (divisiWithNullParent[employee.divisi]) {
            //     divisiWithNullParent[employee.divisi]++;
            //   } else {
            //     divisiWithNullParent[employee.divisi] = 1;
            //   }
            //   if (divisiWithNullParent[employee.divisi] > 1) {
            //     // More than one employee with null parent_id in the same divisi
            //     return (response = build.response("400", "Kepala divisi tidak boleh sama", {}));
            //   }
            // }
        }
        let CheckDataPeriod = await repository.CheckDataPeriod(startOf, endOf);
        if (CheckDataPeriod.length >= 0) {
            result = await repository.Trx(parseInt((0, moment_1.default)(startOf).format('MM')), parseInt((0, moment_1.default)(endOf).format('YYYY')), req.userId, 'struktur_organisasi');
        }
        // let period = '2024-02-02'
        // let data  =  [
        //   {  
        //     divisi:'Oprasi Prasarana',
        //     sub:[
        //       {
        //         name:'Fembi',
        //         jabatan:'Manager Makanan'
        //       },
        //       {
        //         name:'ali',
        //         jabatan:'Manager Minuman',
        //         sub:[
        //           {
        //             divisi:'Kitchen',
        //             sub:[ 
        //               {
        //                 name: 'xxx',
        //                 jabatan:'kepala',
        //                 sub:[
        //                   {
        //                     divisi:'staf',
        //                     sub:[
        //                       {
        //                         name:'qwe',
        //                         jabatan: 'staf'
        //                       }
        //                     ]
        //                   }
        //                 ]
        //               }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ]
        // let dataPost :any  =[];
        // let idLast:any =null
        // const infinytyId  = (val:any) =>{
        //   let i_id  = randomUUID()
        //   dataPost.push({
        //     name:val.name || null,
        //     nipp:val.nipp || null,
        //     divisi:val.divisi || null,
        //     jabatan:val.jabatan || null,
        //     parent_id:idLast,
        //     id:i_id,
        //     period:val.period || null
        //   })
        //   if(val?.sub.length) { 
        //     idLast  = i_id
        //     val.sub.map((mp:any)=>infinytyId(mp) )
        //   }
        // }
        // data.map((mp:any)  => infinytyId(mp))
        const hasil = await repository.Insert(data);
        if (!hasil) {
            return (response = build.response("400", "Try upload again", {}));
        }
        req.body.menu = 'Struktur Organisasi Slip Gaji';
        req.body.description = 'Insert Struktur Organisasi';
        // req.body.j_old_data = data
        req.body.j_new_data = data;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const MutasiMove = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let dateMoment = (0, moment_1.default)(String(date), "YYYY-MM-DD");
        // Bulan sekarang
        let startOfCurrentMonth = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endOfCurrentMonth = dateMoment.endOf("M").format("YYYY-MM-DD");
        // Bulan lalu
        let startOfPreviousMonth = dateMoment.subtract(1, 'months').startOf("M").format("YYYY-MM-DD");
        let endOfPreviousMonth = dateMoment.endOf("M").format("YYYY-MM-DD");
        let GetLastPeriod = await repository.GetLastPeriod(startOfPreviousMonth, endOfPreviousMonth, 'no');
        let GetNowPeriod = await repository.GetNowPeriod(startOfCurrentMonth, endOfCurrentMonth, 'no');
        const output = {
            data_mutasi_lama: [],
            data_mutasi_baru: [],
            data_in: [],
            data_out: []
        };
        let DataMutasiLama = [];
        let DataMutasiBaru = [];
        let In = [];
        let out = [];
        if (GetNowPeriod?.length > 0) {
            for (let GetNowPeriod1 of GetNowPeriod) {
                let GetLastPeriodIn = await repository.GetLastPeriod(startOfPreviousMonth, endOfPreviousMonth, GetNowPeriod1?.nipp);
                if (GetLastPeriodIn.length === 0) {
                    In.push({ ...GetNowPeriod1 });
                }
            }
        }
        if (GetLastPeriod?.length > 0) {
            for (let GetLastPeriod1 of GetLastPeriod) {
                let GetNowPeriodOut = await repository.GetNowPeriod(startOfCurrentMonth, endOfCurrentMonth, GetLastPeriod1?.nipp);
                if (GetNowPeriodOut.length === 0) {
                    out.push({ ...GetLastPeriod1 });
                }
                else {
                    let currentPeriod = GetNowPeriodOut[0];
                    if (GetLastPeriod1?.divisi != currentPeriod?.divisi || GetLastPeriod1?.jabatan != currentPeriod?.jabatan) {
                        DataMutasiBaru.push({ ...currentPeriod });
                        DataMutasiLama.push({ ...GetLastPeriod1 });
                    }
                }
            }
        }
        output.data_mutasi_lama = DataMutasiLama;
        output.data_mutasi_baru = DataMutasiBaru;
        output.data_in = In;
        output.data_out = out;
        response = build.response("00", "success", output);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.MutasiMove = MutasiMove;
