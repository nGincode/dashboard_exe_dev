"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckFileBatch = exports.InsertHistory = exports.Delete = exports.FindUpdate = exports.Update = exports.Find = exports.CheckFile = exports.Insert = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default.raw(`
      SELECT 
      slip_gaji.nipp,
      struktur_organisasi.name,
      struktur_organisasi.period as period_so,
      slip_gaji.period,
      slip_gaji.id,
      slip_gaji.tanggal_slip::date,
      slip_gaji.filename as file,
      slip_gaji.nominal
      FROM prasarana.slip_gaji
      left join prasarana.struktur_organisasi on struktur_organisasi.nipp = slip_gaji.nipp
      and DATE_TRUNC('month', struktur_organisasi.period) = DATE_TRUNC('month', slip_gaji.period)
      order by slip_gaji.created_at desc
    `);
    return result.rows;
};
exports.All = All;
const Insert = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("prasarana").table("slip_gaji").insert(data);
    return result;
};
exports.Insert = Insert;
const InsertHistory = async (data) => {
    let result;
    result = await db_config_1.default.withSchema("history").table("pra_slip_gaji").insert(data);
    return result;
};
exports.InsertHistory = InsertHistory;
const Find = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("slip_gaji")
        .whereIn("id", id);
    return result;
};
exports.Find = Find;
const FindUpdate = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("slip_gaji")
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
    let result = await db_config_1.default.withSchema("prasarana").table("slip_gaji").where("id", id).del();
    return result;
};
exports.Delete = Delete;
const CheckFile = async (code) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      id
      FROM prasarana.slip_gaji
      WHERE filename = '${code}'
      and filename != ' '
    `);
    return result.rows;
};
exports.CheckFile = CheckFile;
const CheckFileBatch = async (nipp, period) => {
    let result = await db_config_1.default.raw(`
      SELECT 
      *
      FROM prasarana.slip_gaji
      WHERE period::date = '${period}'
      and nipp = '${nipp}'
      limit 1
    `);
    return result.rows;
};
exports.CheckFileBatch = CheckFileBatch;
const Update = async (data, id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("slip_gaji")
        .where("id", id)
        .update(data);
    return result;
};
exports.Update = Update;
