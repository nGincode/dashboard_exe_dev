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
exports.Find = exports.Insert = exports.All = void 0;
const repository = __importStar(require("../repository/prasarana-kategori.repository"));
const service = __importStar(require("./activity.service"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
// const dataDelete = async (req: Request) => {
//   let response;
//   try {
//     let { date } = req.query;
//     let startOf = moment(String(date), "YYYY-MM-DD")
//       .startOf("M")
//       .format("YYYY-MM-DD");
//     let endof = moment(String(date), "YYYY-MM-DD")
//       .endOf("M")
//       .format("YYYY-MM-DD");
//       let result;
//       let CheckUser = await repository.CheckUser(startOf,endof);
//       if (CheckUser.length > 0) {
//         result = await repository.Trx(
//           parseInt(moment(startOf).format('MM')),
//           parseInt(moment(endof).format('YYYY')),
//           req.userId,
//           'STRUKTUR_ORGANISASI'
//         );
//       }
//       req.body.menu = 'Struktur Organisasi' 
//       req.body.description = 'Delete Data Struktur Organisasi' 
//       req.body.j_old_data = CheckUser
//       // req.body.j_new_data = dataUpdate
//       await service.InsertActivity(req);  
//       response = build.response("00", "success", {})
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, {});
//   }
//   return response;
// };
const All = async (req) => {
    let response;
    try {
        // let { nipp } = req.query;
        // let dateMoment = moment(String(date), "YYYY-MM-DD");
        // let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        // let endof = dateMoment.endOf("M").format("YYYY-MM-DD");
        let List = await repository.All();
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
const Find = async (req) => {
    let response;
    try {
        let { nipp } = req.query;
        console.log(nipp);
        let data = await repository.Find(nipp);
        response = build.response("00", "success", data);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
