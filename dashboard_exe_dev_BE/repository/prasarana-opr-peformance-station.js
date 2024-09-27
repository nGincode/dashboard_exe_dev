"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByYear = exports.getTriwulanDetailFile = exports.getTriwulan = exports.updateDetailFile = exports.saveDetailFile = exports.getDetailFile = exports.updateFile = exports.Trx = exports.findByDate = exports.Delete = exports.Find = exports.Insert = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (date) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .where("period", date);
    return result;
};
exports.All = All;
const Insert = async (data) => {
    let result = await db_config_1.default.withSchema("prasarana").table("income_cost").insert(data);
    return result;
};
exports.Insert = Insert;
const Delete = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .where("id", id)
        .del();
    return result;
};
exports.Delete = Delete;
const Find = async (id) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .where("id", id)
        .first();
    return result;
};
exports.Find = Find;
const findByDate = async (date) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .where("period", date)
        .first();
    return result;
};
exports.findByDate = findByDate;
const Trx = async (month, year, userID, data) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, 'income_cost')`);
            await trx.withSchema("prasarana").table("income_cost").insert(data);
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
        .table("income_cost")
        .where("id", id)
        .update(data);
    return result;
};
exports.updateFile = updateFile;
const getDetailFile = async (code) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost_file")
        .where("code", code)
        .first();
    return result;
};
exports.getDetailFile = getDetailFile;
const saveDetailFile = async (data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost_file")
        .insert(data);
    return result;
};
exports.saveDetailFile = saveDetailFile;
const updateDetailFile = async (code, data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost_file")
        .where("code", code)
        .update(data);
    return result;
};
exports.updateDetailFile = updateDetailFile;
const getTriwulan = async (date) => {
    // console.log(date);
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .whereIn("period", date)
        .orderBy("period");
    // .whereRaw(`IN EXTRACT(MONTH FROM period::date) = ?`, [date]);
    return result;
};
exports.getTriwulan = getTriwulan;
const getTriwulanDetailFile = async (date) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost_file")
        .whereIn("code", date)
        .orderBy("code");
    // .whereRaw(`IN EXTRACT(MONTH FROM period::date) = ?`, [date]);
    return result;
};
exports.getTriwulanDetailFile = getTriwulanDetailFile;
const getDataByYear = async (year) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("income_cost")
        .whereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .orderBy("period", "asc");
    return result;
};
exports.getDataByYear = getDataByYear;
