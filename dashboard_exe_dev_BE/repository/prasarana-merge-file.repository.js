"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSlipGaji = exports.getDataSertifikasi = exports.getDataSerahTerimaDinasan = exports.getDataMcu = exports.getDataKelambatan = exports.getDaftarHadirDinasan = exports.Activity = exports.AllMenu = exports.getUser = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Insert = async (data) => {
    let result = await db_config_1.default
        .table("t_d_activity")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const getUser = async (userId) => {
    let result = await db_config_1.default
        .table("users")
        .where('id', userId)
        .first();
    return result;
};
exports.getUser = getUser;
const AllMenu = async () => {
    // let result = {
    //   'menu':''
    // }
    // let result = await knex.raw(`select * from menu m where deleted_at is null and "path" like '%prasarana%'`);
    //   return result.rows
};
exports.AllMenu = AllMenu;
const Activity = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT 
     *
    FROM t_d_activity where d_activity_at::date between '${startOf}' and '${endOf}' order by d_activity_at desc`);
    return result.rows;
};
exports.Activity = Activity;
const getDaftarHadirDinasan = async (startOf, endOf, menu) => {
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.daftar_hadir_dinasan where period::date between '${startOf}' and '${endOf}' and menu = '${menu}' order by created_at desc`);
    return result.rows;
};
exports.getDaftarHadirDinasan = getDaftarHadirDinasan;
const getDataKelambatan = async (startOf, endOf, menu) => {
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.data_kelambatan where period::date between '${startOf}' and '${endOf}' and menu = '${menu}' order by created_at desc`);
    return result.rows;
};
exports.getDataKelambatan = getDataKelambatan;
const getDataMcu = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.mcu where tanggal_mcu::date between '${startOf}' and '${endOf}' order by created_at desc`);
    return result.rows;
};
exports.getDataMcu = getDataMcu;
const getDataSerahTerimaDinasan = async (startOf, endOf, menu) => {
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.serah_terima_dinasan where period::date between '${startOf}' and '${endOf}' and menu = '${menu}' order by created_at desc`);
    return result.rows;
};
exports.getDataSerahTerimaDinasan = getDataSerahTerimaDinasan;
const getDataSertifikasi = async (kategori) => {
    let where = kategori == '' ? '' : `where kategori = '${kategori}'`;
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.sertifikasi '${where}' order by created_at desc`);
    return result.rows;
};
exports.getDataSertifikasi = getDataSertifikasi;
const getDataSlipGaji = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT * FROM prasarana.slip_gaji where period::date between '${startOf}' and '${endOf}' order by created_at desc`);
    return result.rows;
};
exports.getDataSlipGaji = getDataSlipGaji;
