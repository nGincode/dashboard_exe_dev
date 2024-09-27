"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByCodeInsert = exports.FindByCodeUpdate = exports.InsertHistory = exports.getDataByYear = exports.getTriwulanDetailFile = exports.getTriwulan = exports.updateDetailFile = exports.saveDetailFile = exports.getDetailFile = exports.updateFile = exports.Trx = exports.findByDate = exports.Delete = exports.Find = exports.Insert = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (start_at, end_at, menu_at) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("period", start_at)
        // .where("period", ">=", start_at)
        // .where("period", "<=",end_at)
        .where("menu", menu_at)
        .orderBy("created_at", "asc");
    return result;
};
exports.All = All;
const Insert = async (data) => {
    let result = await db_config_1.default.withSchema("prasarana").table("serah_terima_dinasan").insert(data);
    return result;
};
exports.Insert = Insert;
const InsertHistory = async (data) => {
    let result = await db_config_1.default.withSchema("history").table("serah_terima_dinasan").insert(data);
    return result;
};
exports.InsertHistory = InsertHistory;
const Delete = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("id", id)
        .del();
    return result;
};
exports.Delete = Delete;
const Find = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("id", id)
        .first();
    return result;
};
exports.Find = Find;
const findByDate = async (date) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("period", date)
        .first();
    return result;
};
exports.findByDate = findByDate;
const FindByCodeInsert = async (code, menu_at) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("code", code)
        .where("menu", menu_at)
        .first();
    return result;
};
exports.FindByCodeInsert = FindByCodeInsert;
const FindByCodeUpdate = async (codeold, codenew, menu_at) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .whereNot('code', codeold)
        .where("code", codenew)
        .where("menu", menu_at)
        .first();
    return result;
};
exports.FindByCodeUpdate = FindByCodeUpdate;
const Trx = async (month, year, userID, menu) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, '${menu}')`);
            await trx.commit();
            result = 1;
        }
        catch (error) {
            await trx.rollback();
            result = error;
        }
    });
    return result;
};
exports.Trx = Trx;
const updateFile = async (data, id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("id", id)
        .update(data);
    return result;
};
exports.updateFile = updateFile;
const getDetailFile = async (code, menu, period) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("code", code)
        .where("menu", menu)
        .where("period", period)
        .first();
    return result;
};
exports.getDetailFile = getDetailFile;
const saveDetailFile = async (data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .insert(data);
    return result;
};
exports.saveDetailFile = saveDetailFile;
const updateDetailFile = async (code, menu, data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("code", code)
        .where("menu", menu)
        .update(data);
    return result;
};
exports.updateDetailFile = updateDetailFile;
const getTriwulan = async (date, menu) => {
    // console.log(date);
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("menu", menu)
        .whereIn("period", date)
        .orderBy("period");
    // .whereRaw(`IN EXTRACT(MONTH FROM period::date) = ?`, [date]);
    return result;
};
exports.getTriwulan = getTriwulan;
const getTriwulanDetailFile = async (date, menu) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("menu", menu)
        .whereIn("code", date)
        .orderBy("code");
    // .whereRaw(`IN EXTRACT(MONTH FROM period::date) = ?`, [date]);
    return result;
};
exports.getTriwulanDetailFile = getTriwulanDetailFile;
const getDataByYear = async (year, menu) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("serah_terima_dinasan")
        .where("menu", menu)
        .whereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .orderBy("period", "asc");
    return result;
};
exports.getDataByYear = getDataByYear;
