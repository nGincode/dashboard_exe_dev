"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.InsertHistory = exports.FindID = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default.raw(`
        SELECT 
            i_id AS id,
            REPLACE(n_line_1, 'LAPORAN ', '') AS line_1,
            n_name_1 AS name_1,
            n_position_1 AS position_1,
            i_nipp_1 AS nipp_1,	
        --    n_signature_1 AS signature_1,
            n_name_2 AS name_2,
            n_position_2 AS position_2,
        --    n_signature_2 AS signature_2,
            i_nipp_2 AS nipp_2,
            CASE 
                WHEN (n_name_2 IS NULL OR n_name_2 = '') 
                THEN true
                ELSE false
            END::BOOL AS data_sign
        FROM
            pso.t_m_report_type;
        `);
    return result.rows;
};
exports.All = All;
const FindID = async (id, dataSource) => {
    let source;
    if (dataSource == 1) {
        source = 'pso.t_m_report_type';
    }
    else {
        source = 'history.t_m_report_type';
    }
    let result = await db_config_1.default.raw(`SELECT * FROM ${source} WHERE i_id = '${id}'`);
    return result.rows;
};
exports.FindID = FindID;
const InsertHistory = async (data) => {
    let result = await db_config_1.default.withSchema("history").table("t_m_report_type").insert(data);
    return result;
};
exports.InsertHistory = InsertHistory;
const Update = async (id, data) => {
    let result = await db_config_1.default.withSchema("pso").table("t_m_report_type").where("i_id", id).update(data);
    return result;
};
exports.Update = Update;
