"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataRecapPerformanceByRelationOneRoute = exports.getDataRecapPerformanceByRelationTotalRoute = exports.getDataRecapPerformanceByRelation = exports.getDataPerformanceByRelation = exports.getDataPerformByTrainNumber = exports.savePerformaByTrainNumber = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const savePerformaByTrainNumber = async (data, user_uuid, period_month, period_year) => {
    let result = await db_config_1.default.transaction(async (trx) => {
        // call function postgresql
        await trx.raw(`SELECT * FROM pso.history_table('${period_month}', '${period_year}', '${user_uuid}', null, 't_d_perform_by_train_number')`);
        // save data
        const chunkSize = 1000;
        await trx.batchInsert("pso.t_d_perform_by_train_number", data, chunkSize);
    });
    return result;
};
exports.savePerformaByTrainNumber = savePerformaByTrainNumber;
const getDataPerformByTrainNumber = async (stringPeriod) => {
    let query = `SELECT
        i_period_month,
        i_period_year,
        d_opr,
        c_noka,
        t_departure,
        c_station_start,
        c_station_end,
        i_distance,
        i_fare,
        i_daily_frequency,
        i_train_frequency,
        i_passenger_seat,
        i_td_km,
        i_volume_pnp,
        ROUND(i_km_pnp) AS i_km_pnp,
        i_income,
        ROUND(i_o_static*100) AS i_o_static,
        ROUND(i_o_dynamic*100) AS i_o_dynamic,
        approved_at,
        approved_by
        FROM pso.t_d_perform_by_train_number
        WHERE ${stringPeriod}
        ORDER BY i_period_year, i_period_month, d_opr, t_departure
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataPerformByTrainNumber = getDataPerformByTrainNumber;
const getDataPerformanceByRelation = async (stringPeriod) => {
    let query = `SELECT
        c_noka,
        t_departure,
        c_station_start,
        c_station_end,
        ROUND(AVG(i_distance)::NUMERIC, 2)::FLOAT8 AS i_distance,
        AVG(i_fare) AS i_fare,
        SUM(i_daily_frequency) AS i_train_frequency,
        SUM(i_passenger_seat) AS i_passenger_seat,
        SUM(i_td_km) AS i_td_km,
        SUM(i_volume_pnp) AS i_volume_pnp,
        ROUND(SUM(i_km_pnp)) AS i_km_pnp,
        SUM(i_income) AS i_income,
        ROUND(AVG(i_o_static)*100) AS i_o_static,
        ROUND(AVG(i_o_dynamic)*100) AS i_o_dynamic
        FROM pso.t_d_perform_by_train_number
        WHERE ${stringPeriod}
        GROUP BY
        c_noka,
        t_departure,
        c_station_start,
        c_station_end
        ORDER BY t_departure ASC
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataPerformanceByRelation = getDataPerformanceByRelation;
const getDataRecapPerformanceByRelation = async (stringPeriod) => {
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end,
        ROUND(AVG(i_distance)::NUMERIC, 2)::FLOAT8 AS i_distance,
        SUM(i_daily_frequency) as i_train_frequency,
        SUM(i_passenger_seat) AS i_passenger_seat,
        SUM(i_td_km) AS i_td_km,
        SUM(i_volume_pnp) AS i_volume_pnp,
        ROUND(SUM(i_km_pnp)) AS i_km_pnp,
        SUM(i_income) AS i_income,
        ROUND(AVG(i_o_static)*100) AS i_o_static,
        ROUND(AVG(i_o_dynamic)*100) AS i_o_dynamic
        FROM pso.t_d_perform_by_train_number
        WHERE ${stringPeriod}
        GROUP BY
        --i_period_month,
        --i_period_year,
        c_station_start,
        c_station_end
        ORDER BY c_station_start, c_station_end
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapPerformanceByRelation = getDataRecapPerformanceByRelation;
const getDataRecapPerformanceByRelationTotalRoute = async (stringPeriod) => {
    let query = `SELECT
        --i_period_month,
        --i_period_year,
        'Total' AS c_station_start,
        'Route' AS c_station_end,
        SUM(i_daily_frequency) AS i_train_frequency,
        SUM(i_passenger_seat) AS i_passenger_seat,
        SUM(i_td_km) AS i_td_km,
        SUM(i_volume_pnp) AS i_volume_pnp,
        ROUND(SUM(i_km_pnp)) AS i_km_pnp,
        SUM(i_income) AS i_income,
        ROUND(AVG(i_o_static)*100) AS i_o_static,
        ROUND(AVG(i_o_dynamic)*100) AS i_o_dynamic
        FROM pso.t_d_perform_by_train_number
        WHERE ${stringPeriod}
        --GROUP BY
        --i_period_month,
        --i_period_year
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapPerformanceByRelationTotalRoute = getDataRecapPerformanceByRelationTotalRoute;
const getDataRecapPerformanceByRelationOneRoute = async (period_month, period_year, origin_1, destination_1, origin_2, destination_2) => {
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
        ROUND(AVG(i_distance)::NUMERIC, 2)::FLOAT8 AS i_distance,
        SUM(i_daily_frequency) AS i_train_frequency,
        SUM(i_passenger_seat) AS i_passenger_seat,
        SUM(i_td_km) AS i_td_km,
        SUM(i_volume_pnp) AS i_volume_pnp,
        ROUND(SUM(i_km_pnp)) AS i_km_pnp,
        SUM(i_income) AS i_income,
        ROUND(AVG(i_o_static)*100) AS i_o_static,
        ROUND(AVG(i_o_dynamic)*100) AS i_o_dynamic
        FROM pso.t_d_perform_by_train_number
        WHERE
        ${stringPeriod}
        OR
        ${stringPeriodEnd}
        --GROUP BY
        --i_period_month,
        --i_period_year
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataRecapPerformanceByRelationOneRoute = getDataRecapPerformanceByRelationOneRoute;
