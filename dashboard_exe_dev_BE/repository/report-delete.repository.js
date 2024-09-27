"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trx = exports.checkType = exports.deleteIncomeCost = exports.Delete = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Delete = async (table, month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table(table)
        .where("i_period_month", month)
        .where("i_period_year", year)
        .del();
    return result;
};
exports.Delete = Delete;
const deleteIncomeCost = async (table, month, year) => {
    let result = await db_config_1.default
        .withSchema("sap")
        .table(table)
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .del();
    return result;
};
exports.deleteIncomeCost = deleteIncomeCost;
const checkType = async (code) => {
    let result = db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("c_type_report", code)
        .first();
    return result;
};
exports.checkType = checkType;
const Trx = async (month, year, userID, tableName) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', null, '${userID}', '${tableName}')`);
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
