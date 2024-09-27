"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveById = exports.approveCustomById = exports.approveStrukturOrganisasi = exports.checkType = exports.approveCustom = exports.approveIncomeCost = exports.Approve = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Approve = async (month, year, tableName, data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table(tableName)
        .where("i_period_month", month)
        .where("i_period_year", year)
        .update(data);
    return result;
};
exports.Approve = Approve;
const approveIncomeCost = async (month, year, tableName, data, code) => {
    let result;
    if (code == "INCOME_COST") {
        result = await db_config_1.default
            .withSchema("sap")
            .table(tableName)
            .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
            .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
            .update(data);
    }
    else {
        result = await db_config_1.default
            .withSchema("prasarana")
            .table(tableName)
            .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
            .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
            .update(data);
    }
    return result;
};
exports.approveIncomeCost = approveIncomeCost;
const approveCustom = async (month, year, tableName, data, codeMenu) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table(tableName)
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .where("menu", codeMenu)
        .update(data);
    return result;
};
exports.approveCustom = approveCustom;
const approveStrukturOrganisasi = async (month, year, tableName, data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table(tableName)
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .update(data);
    return result;
};
exports.approveStrukturOrganisasi = approveStrukturOrganisasi;
const checkType = async (code) => {
    let result = db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("c_type_report", code)
        .first();
    return result;
};
exports.checkType = checkType;
const approveById = async (tableName, updateData, data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table(tableName)
        .whereIn("id", data)
        .update(updateData);
    return result;
};
exports.approveById = approveById;
const approveCustomById = async (tableName, updateData, codeMenu, data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table(tableName)
        .where("menu", codeMenu)
        .whereIn("id", data)
        .update(updateData);
    return result;
};
exports.approveCustomById = approveCustomById;
