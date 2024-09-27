"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataRecapPerformanceByRelation = exports.getDataPerformanceByRelation = exports.getDataPerformByTrainNumber = exports.savePerformanceByTrainNumber = void 0;
const repository = __importStar(require("../repository/report-performance-by-train-number.repository"));
const build = __importStar(require("../helper/response.helper"));
const savePerformanceByTrainNumber = async (user_uuid, data) => {
    try {
        // check period month and year
        let period_month = data[0].i_period_month;
        let period_year = data[0].i_period_year;
        // save data
        data.forEach((el) => {
            el.i_o_static = (el.i_volume_pnp / el.i_passenger_seat);
            el.i_o_dynamic = (el.i_km_pnp / el.i_td_km);
            el.n_created_by = user_uuid;
        });
        await repository.savePerformaByTrainNumber(data, user_uuid, period_month, period_year);
        return build.response("00", "success", {});
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.savePerformanceByTrainNumber = savePerformanceByTrainNumber;
const getDataPerformByTrainNumber = async (period_date, period_month, period_year) => {
    try {
        let stringPeriod = "";
        if (period_date.length > 1) {
            stringPeriod = `d_opr BETWEEN '${period_date[0]}' AND '${period_date[1]}'`;
        }
        else if ((period_year[1] - period_year[0] > 0)) {
            for (let i = period_year[0]; i <= period_year[1]; i++) {
                if (i == period_year[0]) {
                    stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12) `;
                }
                else if (i == period_year[1]) {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]}) `;
                }
                else {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
                }
            }
        }
        else {
            stringPeriod += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) `;
        }
        // get data performance by train number
        let result = await repository.getDataPerformByTrainNumber(stringPeriod);
        return build.response("00", "success", result.rows ? result.rows : []);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataPerformByTrainNumber = getDataPerformByTrainNumber;
const getDataPerformanceByRelation = async (period_month, period_year) => {
    try {
        let stringPeriod = "";
        if ((period_year[1] - period_year[0] > 0)) {
            for (let i = period_year[0]; i <= period_year[1]; i++) {
                if (i == period_year[0]) {
                    stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12) `;
                }
                else if (i == period_year[1]) {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]}) `;
                }
                else {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
                }
            }
        }
        else {
            stringPeriod += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) `;
        }
        let resultList = [];
        let summary = [];
        let data_rows = [];
        let total_volume = 0;
        let total_km_pnp = 0;
        let total_income = 0;
        // get data performance by relation
        let result = await repository.getDataPerformanceByRelation(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        result.rows.forEach((el) => {
            total_volume += el.i_volume_pnp;
            total_km_pnp += el.i_km_pnp;
            total_income += el.i_income;
            data_rows.push(el);
        });
        summary.push({
            total_volume,
            total_km_pnp,
            total_income
        });
        resultList.push({
            summary,
            data_rows
        });
        return build.response("00", "success", resultList ? resultList : []);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataPerformanceByRelation = getDataPerformanceByRelation;
const getDataRecapPerformanceByRelation = async (period_month, period_year) => {
    try {
        let stringPeriod = "";
        if ((period_year[1] - period_year[0] > 0)) {
            for (let i = period_year[0]; i <= period_year[1]; i++) {
                if (i == period_year[0]) {
                    stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${period_month[0]} AND 12) `;
                }
                else if (i == period_year[1]) {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${period_month[1]}) `;
                }
                else {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
                }
            }
        }
        else {
            stringPeriod += `(i_period_year = ${period_year[0]} AND i_period_month BETWEEN ${period_month[0]} AND ${period_month[1]}) `;
        }
        let resultList = [];
        let summary = [];
        let data_rows = [];
        // get data recap performance by relation
        let result = await repository.getDataRecapPerformanceByRelation(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let tempResult = JSON.parse(JSON.stringify(result.rows));
        data_rows = tempResult;
        // get data recap performance by relation - total route
        let total_result = await repository.getDataRecapPerformanceByRelationTotalRoute(stringPeriod);
        total_result.rows.forEach((el) => {
            summary.push(el);
        });
        resultList.push({
            summary,
            data_rows
        });
        data_rows = [];
        // grouping station
        for (let i of result.rows) {
            if (i.c_station_start > i.c_station_end) {
                let temp = i.c_station_start;
                i.c_station_start = i.c_station_end;
                i.c_station_end = temp;
            }
        }
        result.rows = result.rows.filter((value, index, self) => index === self.findIndex((t) => (t.c_station_end === value.c_station_end && t.c_station_end === value.c_station_end)));
        for (let i of result.rows) {
            let temp = await repository.getDataRecapPerformanceByRelationOneRoute(period_month, period_year, i.c_station_start, i.c_station_end, i.c_station_end, i.c_station_start);
            temp.rows[0].c_station_start = i.c_station_start;
            temp.rows[0].c_station_end = i.c_station_end;
            data_rows.push(temp.rows[0]);
        }
        resultList.push({
            summary,
            data_rows
        });
        return build.response("00", "success", resultList ? resultList : []);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataRecapPerformanceByRelation = getDataRecapPerformanceByRelation;
