"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (month, year) => {
    let query = `SELECT
    'LRT Jabodebek' AS train_name,
    CONCAT(c_station_start, '-CSW-', c_station_end) AS station,
    COUNT(t_p_departure)*740 AS contract,
    COUNT(t_r_departure)*740 AS realization,
    COUNT(t_r_departure)*740-COUNT(t_p_departure)*740 AS difference
    FROM pso.t_d_avg_delay
    WHERE i_period_month = ?
    AND i_period_year = ?
    AND i_status_active = 1
    GROUP BY
    c_station_start,
    c_station_end
    `;
    let result = await db_config_1.default.raw(query, [month, year]);
    return result.rows;
};
exports.All = All;
