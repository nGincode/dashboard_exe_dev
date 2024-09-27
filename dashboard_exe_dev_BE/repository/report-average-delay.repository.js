"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalDataTrainFrequency = exports.getDataTrainFrequency = exports.getDataSupportAverageDelay = exports.getDataRecapTrafficDelayAvgRoute = exports.getDataRecapTrafficDelayOneRoute = exports.getDataRecapTrafficDelay = exports.getDataTrafficDelay = exports.getDataAverageDelay = exports.saveAverageDelay = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const saveAverageDelay = async (data, user_uuid, period_month, period_year) => {
    let result = await db_config_1.default.transaction(async (trx) => {
        // call function postgresql
        await trx.raw(`SELECT * FROM pso.history_table('${period_month}', '${period_year}', '${user_uuid}', null, 't_d_avg_delay')`);
        // save data
        const chunkSize = 1000;
        await trx.batchInsert("pso.t_d_avg_delay", data, chunkSize);
    });
    return result;
};
exports.saveAverageDelay = saveAverageDelay;
const getDataAverageDelay = async (stringPeriod) => {
    let query = `SELECT
        i_period_month,
        i_period_year,
        d_opr,
        c_noka,
        n_train,
        c_station_start,
        c_station_end,
        i_distance,
        t_p_departure,
        t_p_arrive,
        t_p_traveling,
        t_r_departure,
        t_r_arrive,
        t_r_traveling,
        t_l_departure::varchar,
        t_l_arrive::varchar,
        t_l_traveling::varchar,
        t_percent_departure,
        t_percent_arrive,
        t_percent_traveling,
        i_avg_speed,
        approved_at,
        approved_by
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        ORDER BY i_period_year, i_period_month, d_opr, t_p_departure
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataAverageDelay = getDataAverageDelay;
const getDataTrafficDelay = async (stringPeriod) => {
    let query = `SELECT
        c_noka,
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end,
        ROUND( AVG(i_distance)::NUMERIC, 2)::FLOAT8 AS i_distance,
        '' AS t_p_hour,
        TO_CHAR(AVG(t_p_traveling), 'HH24:MI:SS') AS t_p_minute,
        '' AS t_r_hour,
        TO_CHAR(AVG(t_r_traveling), 'HH24:MI:SS') AS t_r_minute,
        TO_CHAR(AVG(t_p_arrive), 'HH24:MI:SS') AS t_p_arrive,
        TO_CHAR(AVG(t_r_arrive), 'HH24:MI:SS') AS t_r_arrive,
        ROUND(AVG(i_avg_speed)::NUMERIC, 2)::FLOAT8 AS i_avg_speed
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        GROUP by
        c_noka,
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end
        ORDER BY c_noka
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataTrafficDelay = getDataTrafficDelay;
const getDataRecapTrafficDelay = async (stringPeriod) => {
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end,
        TO_CHAR(AVG(t_p_arrive), 'HH24:MI:SS') AS t_p_arrive,
        TO_CHAR(AVG(t_r_arrive), 'HH24:MI:SS') AS t_r_arrive,
        AVG(t_l_arrive)::VARCHAR AS t_l_arrive,
        ROUND(AVG(t_percent_arrive)::NUMERIC, 2)::FLOAT8 AS t_percent_arrive,
        ROUND(AVG(i_avg_speed)::NUMERIC, 2)::FLOAT8 AS i_avg_speed
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        GROUP BY
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end
        ORDER BY c_station_start , c_station_end
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapTrafficDelay = getDataRecapTrafficDelay;
const getDataRecapTrafficDelayOneRoute = async (period_month, period_year, origin_1, destination_1, origin_2, destination_2) => {
    let stringPeriod = "";
    if ((period_year[1] - period_year[0] > 0)) {
        for (let i = period_year[0]; i <= period_year[1]; i++) {
            if (i == period_year[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12 AND (c_station_start = '${origin_1}' AND c_station_end = '${destination_1}')) `;
            }
            else if (i == period_year[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]} AND (c_station_start = '${origin_1}' AND c_station_end = '${destination_1}')) `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) AND (c_station_start = '${origin_1}' AND c_station_end = '${destination_1}') `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) AND (c_station_start = '${origin_1}' AND c_station_end = '${destination_1}') `;
    }
    let stringPeriodEnd = "";
    if ((period_year[1] - period_year[0] > 0)) {
        for (let i = period_year[0]; i <= period_year[1]; i++) {
            if (i == period_year[0]) {
                stringPeriodEnd += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12 AND (c_station_start = '${origin_2}' AND c_station_end = '${destination_2}')) `;
            }
            else if (i == period_year[1]) {
                stringPeriodEnd += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]} AND (c_station_start = '${origin_2}' AND c_station_end = '${destination_2}')) `;
            }
            else {
                stringPeriodEnd += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) AND (c_station_start = '${origin_2}' AND c_station_end = '${destination_2}') `;
            }
        }
    }
    else {
        stringPeriodEnd += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) AND (c_station_start = '${origin_2}' AND c_station_end = '${destination_2}') `;
    }
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        TO_CHAR(AVG(t_p_arrive), 'HH24:MI:SS') AS t_p_arrive,
        TO_CHAR(AVG(t_r_arrive), 'HH24:MI:SS') AS t_r_arrive,
        AVG(t_l_arrive)::VARCHAR AS t_l_arrive,
        ROUND(AVG(t_percent_arrive)::NUMERIC, 2)::FLOAT8 AS t_percent_arrive,
        ROUND(AVG(i_avg_speed)::NUMERIC, 2)::FLOAT8 AS i_avg_speed
        FROM pso.t_d_avg_delay
        WHERE
        ${stringPeriod}
        OR
        ${stringPeriodEnd}
        --GROUP BY
        --i_period_month,
        --i_period_year
        --ORDER BY i_period_year, i_period_month
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapTrafficDelayOneRoute = getDataRecapTrafficDelayOneRoute;
const getDataRecapTrafficDelayAvgRoute = async (stringPeriod) => {
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        'Total' AS c_station_start,
        'Route' AS c_station_end,
        TO_CHAR(AVG(t_p_arrive), 'HH24:MI:SS') AS t_p_arrive,
        TO_CHAR(AVG(t_r_arrive), 'HH24:MI:SS') AS t_r_arrive,
        AVG(t_l_arrive)::VARCHAR AS t_l_arrive,
        ROUND(AVG(t_percent_arrive)::NUMERIC, 2)::FLOAT8 AS t_percent_arrive,
        ROUND(AVG(i_avg_speed)::NUMERIC, 2)::FLOAT8 AS i_avg_speed
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        --GROUP BY
        --i_period_month,
        --i_period_year
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapTrafficDelayAvgRoute = getDataRecapTrafficDelayAvgRoute;
const getDataSupportAverageDelay = async (period_month, period_year) => {
    let stringPeriod = "";
    if ((period_year[1] - period_year[0] > 0)) {
        for (let i = period_year[0]; i <= period_year[1]; i++) {
            if (i == period_year[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12) AND t_percent_arrive > 0 `;
            }
            else if (i == period_year[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]}) AND t_percent_arrive > 0 `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) AND t_percent_arrive > 0 `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) AND t_percent_arrive > 0 `;
    }
    let query = `SELECT
        i_period_month,
        i_period_year,
        d_opr,
        n_train,
        c_noka,
        TO_CHAR(AVG(t_r_departure), 'HH24:MI:SS') AS t_r_departure,
        TO_CHAR(AVG(t_r_arrive), 'HH24:MI:SS') AS t_r_arrive,
        TO_CHAR(AVG(t_r_traveling), 'HH24:MI:SS') AS t_r_traveling
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        GROUP BY
        i_period_month,
        i_period_year,
        d_opr,
        n_train,
        c_noka
        ORDER BY i_period_year, i_period_month, d_opr
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataSupportAverageDelay = getDataSupportAverageDelay;
const getDataTrainFrequency = async (stringPeriod) => {
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end,
        COUNT(t_p_departure) AS program,
        COUNT(t_r_departure) AS realization
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
        GROUP BY
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end
        ORDER BY program
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataTrainFrequency = getDataTrainFrequency;
const getTotalDataTrainFrequency = async (stringPeriod) => {
    let query = `SELECT
        COUNT(t_p_departure) AS program,
        COUNT(t_r_departure) AS realization
        FROM pso.t_d_avg_delay
        WHERE ${stringPeriod}
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getTotalDataTrainFrequency = getTotalDataTrainFrequency;
