"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllKategori = exports.getAllSertifikasi = exports.getAllStrukturOrganisasi = exports.CheckFileBatch = exports.InsertHistory = exports.Delete = exports.FindUpdate = exports.Update = exports.Find = exports.CheckFile = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
// const All = async () => {
//     let result = await knex.raw(`
//       SELECT 
//       sertifikasi.nipp,
//       struktur_organisasi.name,
//       struktur_organisasi.jabatan,
//       sertifikasi.period,
//       sertifikasi.id,
//       sertifikasi.kodefikasi_sertifikat,
//       sertifikasi.tanggal_berlaku::date,
//       sertifikasi.bidang,
//       sertifikasi.filename as file,
//       sertifikasi.kategori
//       FROM prasarana.sertifikasi
//       left join prasarana.struktur_organisasi on struktur_organisasi.nipp = sertifikasi.nipp
//       order by sertifikasi.tanggal_berlaku desc
//     `);
//   return result.rows;
// };
const getAllSertifikasi = async () => {
    let result = await db_config_1.default.raw(`
    SELECT 
    *
    FROM prasarana.sertifikasi
    order by sertifikasi.tanggal_berlaku desc
  `);
    return result.rows;
};
exports.getAllSertifikasi = getAllSertifikasi;
const getAllStrukturOrganisasi = async (nipp) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    so.*,
    k.kategori, k.sub_kategori, k.sub_kategori_sub, k.description
    FROM prasarana.struktur_organisasi so
    left join prasarana.kategori k on k.id_kategori = so.id_kategori and k.b_active is true
    where nipp = '${nipp}'
    order by so.period desc
    limit 1
  `);
    return result.rows;
};
exports.getAllStrukturOrganisasi = getAllStrukturOrganisasi;
const getAllKategori = async (id) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    id,kategori, sub_kategori, sub_kategori_sub
    FROM prasarana.kategori
    where id = '${id}'
    order by kategori.kategori desc
    limit 1
  `);
    return result.rows;
};
exports.getAllKategori = getAllKategori;
const Insert = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("prasarana").table("sertifikasi").insert(data);
    return result;
};
exports.Insert = Insert;
const InsertHistory = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("history").table("pra_sertifikasi").insert(data);
    return result;
};
exports.InsertHistory = InsertHistory;
const Find = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("sertifikasi")
        .whereIn("id", id);
    return result;
};
exports.Find = Find;
const FindUpdate = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("sertifikasi")
        .where("id", id)
        .first();
    return result;
};
exports.FindUpdate = FindUpdate;
// const Delete = async (id: any, data: any) => {
//   let result = await knex.table("menu").whereIn("id", id).update(data);
//   return result;
// };
const Delete = async (id) => {
    let result = await db_config_1.default.withSchema("prasarana").table("sertifikasi").where("id", id).del();
    return result;
};
exports.Delete = Delete;
const CheckFile = async (code) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      id
      FROM prasarana.sertifikasi
      WHERE kodefikasi_sertifikat = '${code}'
      and kodefikasi_sertifikat != ' '
    `);
    return result.rows;
};
exports.CheckFile = CheckFile;
const CheckFileBatch = async (nipp, tanggal_berlaku) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      *
      FROM prasarana.sertifikasi
      WHERE tanggal_berlaku::date = '${tanggal_berlaku}'
      and nipp = '${nipp}'
      limit 1
    `);
    return result.rows;
};
exports.CheckFileBatch = CheckFileBatch;
const Update = async (data, id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("sertifikasi")
        .where("id", id)
        .update(data);
    return result;
};
exports.Update = Update;
