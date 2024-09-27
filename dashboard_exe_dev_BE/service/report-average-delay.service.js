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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataTrainFrequency = exports.getDataSupportAverageDelay = exports.getDataRecapTrafficDelay = exports.getDataTrafficDelay = exports.getDataAverageDelay = exports.saveAverageDelay = void 0;
const repository = __importStar(require("../repository/report-average-delay.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const saveAverageDelay = async (user_uuid, data) => {
    try {
        // check period month and year
        let period_month = data[0].i_period_month;
        let period_year = data[0].i_period_year;
        // save data
        let baseDate = "1970-01-01";
        data.forEach((el) => {
            // process t_p_traveling
            let start = (0, moment_1.default)(baseDate + ' ' + el.t_p_departure);
            let end = (0, moment_1.default)(baseDate + ' ' + el.t_p_arrive);
            let diff = end.diff(start);
            let final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
            el.t_p_traveling = final;
            // process t_r_traveling
            start = (0, moment_1.default)(baseDate + ' ' + el.t_r_departure);
            end = (0, moment_1.default)(baseDate + ' ' + el.t_r_arrive);
            diff = end.diff(start);
            final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
            el.t_r_traveling = final;
            // process t_l_departure
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_departure);
            end = (0, moment_1.default)(baseDate + ' ' + el.t_r_departure);
            let t_l_departure_final = null;
            if (start > end) {
                let diff = start.diff(end);
                t_l_departure_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_departure = '-' + t_l_departure_final;
            }
            else {
                let diff = end.diff(start);
                t_l_departure_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_departure = t_l_departure_final;
            }
            // process t_l_arrive
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_arrive);
            end = (0, moment_1.default)(baseDate + ' ' + el.t_r_arrive);
            let t_l_arrive_final = null;
            if (start > end) {
                let diff = start.diff(end);
                t_l_arrive_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_arrive = '-' + t_l_arrive_final;
            }
            else {
                let diff = end.diff(start);
                t_l_arrive_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_arrive = t_l_arrive_final;
            }
            // process t_l_traveling
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_traveling);
            end = (0, moment_1.default)(baseDate + ' ' + el.t_r_traveling);
            let t_l_traveling_final = null;
            if (start > end) {
                let diff = start.diff(end);
                t_l_traveling_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_traveling = '-' + t_l_traveling_final;
            }
            else {
                let diff = end.diff(start);
                t_l_traveling_final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_traveling = t_l_traveling_final;
            }
            // process t_percent_departure
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_traveling);
            end = (0, moment_1.default)(baseDate + ' ' + t_l_departure_final);
            let compare_start = (0, moment_1.default)(baseDate + ' ' + el.t_p_departure);
            let comapre_end = (0, moment_1.default)(baseDate + ' ' + el.t_r_departure);
            let start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
            let end_second = end.second() + (end.minute() * 60) + (end.hour() * 3600);
            if (compare_start > comapre_end) {
                let devide = end_second / start_second;
                el.t_percent_departure = Math.round(devide * 100) * -1;
            }
            else {
                let devide = end_second / start_second;
                el.t_percent_departure = Math.round(devide * 100);
            }
            // process t_percent_arrive
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_traveling);
            end = (0, moment_1.default)(baseDate + ' ' + t_l_arrive_final);
            compare_start = (0, moment_1.default)(baseDate + ' ' + el.t_p_arrive);
            comapre_end = (0, moment_1.default)(baseDate + ' ' + el.t_r_arrive);
            start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
            end_second = end.second() + (end.minute() * 60) + (end.hour() * 3600);
            if (compare_start > comapre_end) {
                let devide = end_second / start_second;
                el.t_percent_arrive = Math.round(devide * 100) * -1;
            }
            else {
                let devide = end_second / start_second;
                el.t_percent_arrive = Math.round(devide * 100);
            }
            // process t_percent_traveling
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_traveling);
            end = (0, moment_1.default)(baseDate + ' ' + t_l_traveling_final);
            compare_start = (0, moment_1.default)(baseDate + ' ' + el.t_p_traveling);
            comapre_end = (0, moment_1.default)(baseDate + ' ' + el.t_r_traveling);
            start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
            end_second = end.second() + (end.minute() * 60) + (end.hour() * 3600);
            if (compare_start > comapre_end) {
                let devide = end_second / start_second;
                el.t_percent_traveling = Math.round(devide * 100) * -1;
            }
            else {
                let devide = end_second / start_second;
                el.t_percent_traveling = Math.round(devide * 100);
            }
            // process i_avg_speed
            try {
                el.i_distance = Number(el.i_distance.replace(/,/g, '.'));
            }
            catch (error) {
            }
            let t_r_traveling = (0, moment_1.default)(baseDate + ' ' + el.t_r_traveling);
            let t_r_traveling_second = t_r_traveling.second() + (t_r_traveling.minute() * 60) + (t_r_traveling.hour() * 3600);
            let res = el.i_distance / (t_r_traveling_second / 3600);
            el.i_avg_speed = Math.round(res * 100) / 100;
            el.n_created_by = user_uuid;
        });
        await repository.saveAverageDelay(data, user_uuid, period_month, period_year);
        return build.response("00", "success", {});
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.saveAverageDelay = saveAverageDelay;
const getDataAverageDelay = async (period_date, period_month, period_year) => {
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
        let result = await repository.getDataAverageDelay(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let resultList = [];
        let d_opr = result.rows[0].d_opr;
        let summary = [];
        let data_rows = [];
        let total_t_l_departure = 0;
        let total_t_l_arrive = 0;
        let total_t_l_traveling = 0;
        let total_t_percent_departure = 0;
        let total_t_percent_arrive = 0;
        let total_t_percent_traveling = 0;
        let total_i_avg_speed = 0;
        let count = 0;
        for (let el of result.rows) {
            if (JSON.stringify(d_opr) != JSON.stringify(el.d_opr)) {
                total_t_l_departure = total_t_l_departure / count;
                total_t_l_arrive = total_t_l_arrive / count;
                total_t_l_traveling = total_t_l_traveling / count;
                total_t_percent_departure = Math.round(total_t_percent_departure / count);
                total_t_percent_arrive = Math.round(total_t_percent_arrive / count);
                total_t_percent_traveling = Math.round(total_t_percent_traveling / count);
                total_i_avg_speed = Math.round(total_i_avg_speed / count * 100) / 100;
                summary.push({
                    d_opr,
                    'total_t_l_departure': await convertIntToInterval(total_t_l_departure),
                    'total_t_l_arrive': await convertIntToInterval(total_t_l_arrive),
                    'total_t_l_traveling': await convertIntToInterval(total_t_l_traveling),
                    total_t_percent_departure,
                    total_t_percent_arrive,
                    total_t_percent_traveling,
                    'total_i_avg_speed': total_i_avg_speed.toFixed(2)
                });
                resultList.push({
                    summary,
                    data_rows,
                    "approved_at": data_rows[0].approved_at,
                    "approved_by": data_rows[0].approved_by
                });
                summary = [];
                data_rows = [];
                total_t_l_departure = 0;
                total_t_l_arrive = 0;
                total_t_l_traveling = 0;
                total_t_percent_departure = 0;
                total_t_percent_arrive = 0;
                total_t_percent_traveling = 0;
                total_i_avg_speed = 0;
                count = 0;
                d_opr = el.d_opr;
            }
            total_t_l_departure += await convertIntervalToInt(el.t_l_departure);
            total_t_l_arrive += await convertIntervalToInt(el.t_l_arrive);
            total_t_l_traveling += await convertIntervalToInt(el.t_l_traveling);
            total_t_percent_departure += el.t_percent_departure;
            total_t_percent_arrive += el.t_percent_arrive;
            total_t_percent_traveling += el.t_percent_traveling;
            total_i_avg_speed += el.i_avg_speed;
            // process avg_speed
            el.i_avg_speed = el.i_avg_speed.toFixed(2);
            data_rows.push(el);
            count++;
        }
        ;
        total_t_l_departure = total_t_l_departure / count;
        total_t_l_arrive = total_t_l_arrive / count;
        total_t_l_traveling = total_t_l_traveling / count;
        total_t_percent_departure = Math.round(total_t_percent_departure / count);
        total_t_percent_arrive = Math.round(total_t_percent_arrive / count);
        total_t_percent_traveling = Math.round(total_t_percent_traveling / count);
        total_i_avg_speed = Math.round(total_i_avg_speed / count * 100) / 100;
        summary.push({
            d_opr,
            'total_t_l_departure': await convertIntToInterval(total_t_l_departure),
            'total_t_l_arrive': await convertIntToInterval(total_t_l_arrive),
            'total_t_l_traveling': await convertIntToInterval(total_t_l_traveling),
            total_t_percent_departure,
            total_t_percent_arrive,
            total_t_percent_traveling,
            'total_i_avg_speed': total_i_avg_speed.toFixed(2)
        });
        resultList.push({
            summary,
            data_rows,
            "approved_at": data_rows[0].approved_at,
            "approved_by": data_rows[0].approved_by
        });
        return build.response("00", "success", resultList);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataAverageDelay = getDataAverageDelay;
const getDataTrafficDelay = async (period_month, period_year) => {
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
        // get data traffic delay
        let resultList = [];
        let baseDate = "1970-01-01";
        let result = await repository.getDataTrafficDelay(stringPeriod);
        result.rows.forEach((el) => {
            // process t_l_minute
            let start = (0, moment_1.default)(baseDate + ' ' + el.t_p_arrive);
            let end = (0, moment_1.default)(baseDate + ' ' + el.t_r_arrive);
            let final = null;
            if (start > end) {
                let diff = start.diff(end);
                final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_minute = '-' + final;
            }
            else {
                let diff = end.diff(start);
                final = (0, moment_1.default)(diff).subtract(7, 'hours').format("HH:mm:ss");
                el.t_l_minute = final;
            }
            // process t_l_percent
            start = (0, moment_1.default)(baseDate + ' ' + el.t_p_minute);
            end = (0, moment_1.default)(baseDate + ' ' + final);
            let start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
            let end_second = end.second() + (end.minute() * 60) + (end.hour() * 3600);
            if (start > end) {
                let devide = end_second / start_second;
                el.t_l_percent = Math.round(devide * 100) * -1;
            }
            else {
                let devide = end_second / start_second;
                el.t_l_percent = Math.round(devide * 100);
            }
            // process avg_speed
            el.i_avg_speed = el.i_avg_speed.toFixed(2);
            resultList.push(el);
        });
        return build.response("00", "success", result.rows ? result.rows : []);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataTrafficDelay = getDataTrafficDelay;
const getDataRecapTrafficDelay = async (period_month, period_year) => {
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
        // get data recap traffic delay - route
        let result = await repository.getDataRecapTrafficDelay(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let tempResult = JSON.parse(JSON.stringify(result.rows));
        tempResult.forEach((el) => {
            if (el.t_l_arrive.substring(0, 1) == '-') {
                el.t_l_arrive = el.t_l_arrive.substring(0, 9);
            }
            else {
                el.t_l_arrive = el.t_l_arrive.substring(0, 8);
            }
            // process avg_speed
            el.i_avg_speed = el.i_avg_speed.toFixed(2);
            data_rows.push(el);
        });
        // get data recap traffic delay - average route
        let total_result = await repository.getDataRecapTrafficDelayAvgRoute(stringPeriod);
        total_result.rows.forEach((el) => {
            if (el.t_l_arrive.substring(0, 1) == '-') {
                el.t_l_arrive = el.t_l_arrive.substring(0, 9);
            }
            else {
                el.t_l_arrive = el.t_l_arrive.substring(0, 8);
            }
            // process avg_speed
            el.i_avg_speed = el.i_avg_speed.toFixed(2);
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
            let temp = await repository.getDataRecapTrafficDelayOneRoute(period_month, period_year, i.c_station_start, i.c_station_end, i.c_station_end, i.c_station_start);
            if (temp.rows[0].t_l_arrive.substring(0, 1) == '-') {
                temp.rows[0].t_l_arrive = temp.rows[0].t_l_arrive.substring(0, 9);
            }
            else {
                temp.rows[0].t_l_arrive = temp.rows[0].t_l_arrive.substring(0, 8);
            }
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
exports.getDataRecapTrafficDelay = getDataRecapTrafficDelay;
const getDataSupportAverageDelay = async (period_month, period_year) => {
    try {
        // get data support average delay
        let result = await repository.getDataSupportAverageDelay(period_month, period_year);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let resultList = [];
        let d_opr = result.rows[0].d_opr;
        let summary = [];
        let data_rows = [];
        for (let el of result.rows) {
            if (JSON.stringify(d_opr) != JSON.stringify(el.d_opr)) {
                summary.push({
                    d_opr
                });
                resultList.push({
                    summary,
                    data_rows
                });
                summary = [];
                data_rows = [];
                d_opr = el.d_opr;
            }
            data_rows.push(el);
        }
        summary.push({
            d_opr
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
exports.getDataSupportAverageDelay = getDataSupportAverageDelay;
const getDataTrainFrequency = async (period_date, period_month, period_year) => {
    try {
        let stringPeriod = "";
        if (period_date.length > 1) {
            stringPeriod = `d_opr BETWEEN '${period_date[0]}' AND '${period_date[1]}' AND `;
        }
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
        // get data train frequency
        let result = await repository.getDataTrainFrequency(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let resultList = [];
        let summary = [];
        let data_rows = [];
        result.rows.forEach((el) => {
            el.train_name = "LRT Jabodebek";
            el.train_route = el.c_station_start + ' - ' + el.c_station_end;
            el.program = Number(el.program);
            el.realization = Number(el.realization);
            el.difference = el.program - el.realization;
            data_rows.push(el);
        });
        // get total train frequency
        let total_result = await repository.getTotalDataTrainFrequency(stringPeriod);
        total_result.rows.forEach((el) => {
            el.difference = el.program - el.realization;
            summary.push(el);
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
exports.getDataTrainFrequency = getDataTrainFrequency;
const convertIntervalToInt = async (origin) => {
    let baseDate = "1970-01-01";
    let temp = origin;
    if (temp.substring(0, 1) == '-') {
        temp = temp.substring(1, temp.length);
        let start = (0, moment_1.default)(baseDate + ' ' + temp);
        let start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
        return start_second * -1;
    }
    else {
        let start = (0, moment_1.default)(baseDate + ' ' + temp);
        let start_second = start.second() + (start.minute() * 60) + (start.hour() * 3600);
        return start_second;
    }
};
const convertIntToInterval = async (origin) => {
    let temp = origin.toString();
    if (temp.substring(0, 1) == '-') {
        temp = temp.substring(1, temp.length);
        let final = (0, moment_1.default)().startOf('day').seconds(Number(temp)).format('HH:mm:ss');
        return '-' + final;
    }
    else {
        return (0, moment_1.default)().startOf('day').seconds(origin).format('HH:mm:ss');
    }
};
