"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMcu = exports.getAllStrukturOrganisasi = exports.CheckFileBatch = exports.InsertHistory = exports.Delete = exports.FindUpdate = exports.Update = exports.Find = exports.CheckFile = exports.Insert = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default.raw(`
      SELECT 
      mcu.nipp,
      struktur_organisasi.name,
      struktur_organisasi.jabatan,
      mcu.period,
      mcu.id,
      mcu.tanggal_mcu::date,
      mcu.filename as file,
      mcu.created_at
      FROM prasarana.mcu
      left join prasarana.struktur_organisasi on struktur_organisasi.nipp = mcu.nipp
      and DATE_TRUNC('month', struktur_organisasi.period) = DATE_TRUNC('month', mcu.period)
      order by mcu.created_at desc
    `);
    return result.rows;
};
exports.All = All;
const Find = async (id) => {
    // console.log(id);
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("mcu")
        .whereIn("id", id);
    return result;
};
exports.Find = Find;
const FindUpdate = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("mcu")
        .where("id", id)
        .first();
    return result;
};
exports.FindUpdate = FindUpdate;
const Insert = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("prasarana").table("mcu").insert(data);
    return result;
};
exports.Insert = Insert;
const CheckFile = async (code) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      id
      FROM prasarana.mcu
      WHERE filename = '${code}'
      and filename != ' '
    `);
    return result.rows;
};
exports.CheckFile = CheckFile;
const CheckFileBatch = async (nipp, tanggal_mcu) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      id
      FROM prasarana.mcu
      WHERE nipp = '${nipp}'
      and tanggal_mcu::date = '${tanggal_mcu}'
      limit 1
    `);
    return result.rows;
};
exports.CheckFileBatch = CheckFileBatch;
const InsertHistory = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("history").table("pra_mcu").insert(data);
    return result;
};
exports.InsertHistory = InsertHistory;
const Update = async (data, id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("mcu")
        .where("id", id)
        .update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id) => {
    let result = await db_config_1.default.withSchema("prasarana").table("mcu").where("id", id).del();
    return result;
};
exports.Delete = Delete;
const getAllStrukturOrganisasi = async (nipp) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    *
    FROM prasarana.struktur_organisasi
    where nipp = '${nipp}'
    order by struktur_organisasi.period desc
    limit 1
  `);
    return result.rows;
};
exports.getAllStrukturOrganisasi = getAllStrukturOrganisasi;
const getAllMcu = async () => {
    let result = await db_config_1.default.raw(`
    SELECT 
    *
    FROM prasarana.mcu
    order by mcu.tanggal_mcu desc
  `);
    return result.rows;
};
exports.getAllMcu = getAllMcu;
