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
exports.AllMenu = exports.AllFile = exports.InsertActivity = void 0;
const repository = __importStar(require("../repository/prasarana-merge-file.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const InsertActivity = async (req) => {
    let response;
    try {
        let { menu, description, j_new_data = [], j_old_data = [] } = req.body;
        let dateMoment = (0, moment_1.default)().format("YYYY-MM-DD");
        const getUser = await repository.getUser(req.userId);
        let dataObject = {
            user_id: req?.userId,
            menu: menu,
            username: getUser?.username,
            fullname: getUser?.fullname,
            n_created_by: getUser?.username,
            description: description,
            j_new_data: JSON.stringify(j_new_data),
            j_old_data: JSON.stringify(j_old_data)
        };
        const hasil = await repository.Insert(dataObject);
        response = true;
    }
    catch (error) {
        response = false;
    }
    return response;
};
exports.InsertActivity = InsertActivity;
const AllFile = async (req) => {
    let response;
    try {
        let { date, data } = req.query;
        let dateMoment = (0, moment_1.default)(String(date), "YYYY-MM-DD");
        let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endOf = dateMoment.endOf("M").format("YYYY-MM-DD");
        let typeMenu = '';
        let filename = [];
        // let result = await repository.Activity(startOf,endOf);
        if (typeMenu == 'daftar_hadir_dinasan') {
            let result = await repository.getDaftarHadirDinasan(startOf, endOf, '');
            for (let res1 of result) {
                filename.push(res1.file);
            }
        }
        if (typeMenu == 'data_kelambatan') {
            let result1 = await repository.getDataKelambatan(startOf, endOf, '');
            for (let res2 of result1) {
                filename.push(res2.file);
            }
        }
        if (typeMenu == 'mcu') {
            let result2 = await repository.getDataMcu(startOf, endOf);
            for (let res3 of result2) {
                filename.push(res3.filename);
            }
        }
        if (typeMenu == 'serah_terima_dinasan') {
            let result3 = await repository.getDataSerahTerimaDinasan(startOf, endOf, '');
            for (let res4 of result3) {
                filename.push(res4.file);
            }
        }
        if (typeMenu == 'sertifikasi') {
            let result4 = await repository.getDataSertifikasi('');
            for (let res5 of result4) {
                filename.push(res5.filename);
            }
        }
        if (typeMenu == 'slip_gaji') {
            let result5 = await repository.getDataSlipGaji(startOf, endOf);
            for (let res6 of result5) {
                filename.push(res6.filename);
            }
        }
        let result = await repository.Activity(startOf, endOf);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.AllFile = AllFile;
const AllMenu = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let menuArr = [
            { menu: 'KINERJA OPRASI/OCC/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAOPRASI_OCC_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA OPRASI/STATION/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAOPRASI_STATION_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PERAWATAN/CIVIL WORK/TRACK BRIDGE/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_CIVILWORK_TRACKBRIDGE_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PERAWATAN/CIVIL WORK/BUILDING/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_CIVILWORK_BUILDING_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PERAWATAN/RAILWAYS/THIRD RAIL/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_RAILWAYS_THIRDRAIL_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PERAWATAN/RAILWAYS/SINYAL/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_RAILWAYS_SINYAL_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/CIVIL WORK/TRACK BRIDGE/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_CIVILWORK_TRACKBRIDGE_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/CIVIL WORK/BUILDING/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_CIVILWORK_BUILDING_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/RAILWAYS/THIRD RAIL/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_RAILWAYS_THIRDRAIL_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/RAILWAYS/SINYAL/DAFTAR HADIR DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_RAILWAYS_SINYAL_DAFTARHADIRDINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA OPRASI/OCC/SERAH TERIMA DINASAN', code: 'PRASARANA_KINERJAOPRASI_OCC_SERAHTERIMADINASAN', db: 'serah_terima_dinasan' },
            { menu: 'KINERJA OPRASI/STATION/SERAH TERIMA DINASAN', code: 'PRASARANA_KINERJAOPRASI_STATION_SERAHTERIMADINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA OPRASI/STATION/SERAH TERIMA DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_RAILWAYS_THIRDRAIL_SERAHTERIMADINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PERAWATAN/RAILWAYS/SINYAL/SERAH TERIMA DINASAN', code: 'PRASARANA_KINERJAPERAWATAN_RAILWAYS_SINYAL_SERAHTERIMADINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/RAILWAYS/THIRD RAIL/SERAHTERIMA DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_RAILWAYS_THIRDRAIL_SERAHTERIMADINASAN', db: 'daftar_hadir_dinasan' },
            { menu: 'KINERJA PEMERIKSAAN/RAILWAYS/SINYAL/SERAH TERIMA DINASAN', code: 'PRASARANA_KINERJAPEMERIKSAAN_RAILWAYS_SINYAL_SERAHTERIMADINASAN', db: 'daftar_hadir_dinasan' },
        ];
        let dateMoment = (0, moment_1.default)(String(date), "YYYY-MM-DD");
        let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endOf = dateMoment.endOf("M").format("YYYY-MM-DD");
        // let result = await repository.AllMenu();
        response = build.response("00", "success", menuArr);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.AllMenu = AllMenu;
