"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckDashMaintenance = exports.checkApprovalDashMaintenance = exports.checkApprovalPraIncomeCost = exports.checkApprovalIncomeCost = exports.checkApproval = exports.checkFormat = exports.checkPraIncomeCost = exports.checkIncomeCost = exports.checkType = exports.Check = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const moment_1 = __importDefault(require("moment"));
const Check = async (table, month, year, schema) => {
    let result;
    let dateMonthYear = year + '-' + month + '-01';
    let startOf = (0, moment_1.default)(String(dateMonthYear), "YYYY-MM-DD")
        .startOf("M")
        .format("YYYY-MM-DD");
    let endof = (0, moment_1.default)(String(dateMonthYear), "YYYY-MM-DD")
        .endOf("M")
        .format("YYYY-MM-DD");
    if (schema == 'prasarana') {
        result = db_config_1.default
            .withSchema(schema)
            .table(table)
            .whereBetween('period', [startOf, endof])
            .first();
    }
    else {
        result = db_config_1.default
            .withSchema('pso')
            .table(table)
            .where("i_period_month", month)
            .where("i_period_year", year)
            .first();
    }
    return result;
};
exports.Check = Check;
const checkType = async (code) => {
    let result = db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("c_type_report", code)
        .first();
    return result;
};
exports.checkType = checkType;
const checkIncomeCost = (month, year) => {
    let result = db_config_1.default
        .withSchema("sap")
        .table("income_cost")
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .first();
    return result;
};
exports.checkIncomeCost = checkIncomeCost;
const checkPraIncomeCost = (month, year) => {
    let result = db_config_1.default
        .withSchema("prasarana")
        .table("pra_income_cost")
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .first();
    return result;
};
exports.checkPraIncomeCost = checkPraIncomeCost;
const CheckDashMaintenance = async (table, month, year, schema = 'prasarana') => {
    let result = db_config_1.default
        .withSchema(schema)
        .table(table)
        .where("period_month", month)
        .where("period_year", year)
        .first();
    return result;
};
exports.CheckDashMaintenance = CheckDashMaintenance;
const checkFormat = async (code) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .select("n_keyword as keyword", "n_header_column as header_column")
        .where("c_type_report", code)
        .first();
    return result;
};
exports.checkFormat = checkFormat;
const checkApproval = async (month, year, tableName, schema) => {
    let result;
    let dateMonthYear = year + '-' + month + '-01';
    let startOf = (0, moment_1.default)(String(dateMonthYear), "YYYY-MM-DD")
        .startOf("M")
        .format("YYYY-MM-DD");
    let endof = (0, moment_1.default)(String(dateMonthYear), "YYYY-MM-DD")
        .endOf("M")
        .format("YYYY-MM-DD");
    if (schema == 'prasarana') {
        result = false;
        // result = await knex
        // .withSchema(schema)
        // .table(tableName)
        // .whereBetween('period', [startOf, endof])
        // // .where("i_status_active", 4)
        // // .orWhereNot("approved_at", null)
        // .first();
    }
    else {
        result = await db_config_1.default
            .withSchema('pso')
            .table(tableName)
            .where("i_period_month", month)
            .where("i_period_year", year)
            .where("i_status_active", 4)
            // .orWhereNot("approved_at", null)
            .first();
    }
    // console.log(result);
    return result;
};
exports.checkApproval = checkApproval;
const checkApprovalIncomeCost = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("sap")
        .table("income_cost")
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .andWhereNot("approved_at", null)
        .first();
    return result;
};
exports.checkApprovalIncomeCost = checkApprovalIncomeCost;
const checkApprovalPraIncomeCost = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("pra_income_cost")
        .whereRaw(`EXTRACT(MONTH FROM period::date) = ?`, [month])
        .andWhereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .andWhereNot("approved_at", null)
        .first();
    return result;
};
exports.checkApprovalPraIncomeCost = checkApprovalPraIncomeCost;
const checkApprovalDashMaintenance = async (month, year, tableName, schema = 'pso') => {
    let result = await db_config_1.default
        .withSchema(schema)
        .table(tableName)
        .where("period_month", month)
        .where("period_year", year)
        .where("i_status_active", 4)
        .first();
    return result;
};
exports.checkApprovalDashMaintenance = checkApprovalDashMaintenance;
