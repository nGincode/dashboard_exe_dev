"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTable = exports.Update = exports.Delete = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("i_status_active", 1);
    return result;
};
exports.All = All;
const Insert = async (data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const Find = async (code) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("c_type_report", code)
        .first();
    return result;
};
exports.Find = Find;
const Update = async (id, data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("i_id", id)
        .update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id, data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_m_report_type")
        .where("i_id", id)
        .update(data);
    return result;
};
exports.Delete = Delete;
const checkTable = async (tableName) => {
    let result = await db_config_1.default
        .table("information_schema.tables")
        .where("table_schema", "pso")
        .where("table_name", tableName)
        .first();
    return result;
};
exports.checkTable = checkTable;
