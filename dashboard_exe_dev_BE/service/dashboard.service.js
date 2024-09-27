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
exports.penumpangDanPendapatanWeekend = exports.penumpangDanPendapatanAverageWeekend = exports.penumpangDanPendapatanAverageWeekday = exports.penumpangDanPendapatanPeak = exports.penumpangDanPendapatanOffPeak = exports.penumpangDanPendapatanWeekday = exports.penumpangDanPendapatanDaily = exports.OffPeakSMLNonSML = exports.peakSMLNonSML = exports.averagePenumpang = exports.averagePendapatan = exports.totalPendapatanDanPenumpangKumulatif = exports.totalPendapatanDanPenumpangPerHariIni = exports.getDataGraphTrainNumberTriwulan = exports.getDataGraphPerfomByTrainNumber = exports.volPenumpangHarian = exports.volPenumpangPerStasiun = exports.volPenumpangPeakAndOffPeak = exports.volPenumpangPendapatanHarian = void 0;
const repository = __importStar(require("../repository/dashboard.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const volPenumpangPendapatanHarian = async (req) => {
    let response;
    try {
        // let date = moment().format("YYYY-MM-DD");
        let { start_date, end_date, station } = req.query;
        let result = await repository.volPenumpangPendapatanHarian(start_date, end_date, station);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.volPenumpangPendapatanHarian = volPenumpangPendapatanHarian;
const volPenumpangPeakAndOffPeak = async (req) => {
    let response;
    try {
        let { start_date, end_date, station } = req.query;
        let peak = await repository.volPenumpangPeak(start_date, end_date, station);
        let offPeak = await repository.volPenumpangOffPeak(start_date, end_date, station);
        let sml = await repository.volPenumpangSML(start_date, end_date, station);
        let peakTime = [];
        let offPeakTime = [];
        let smlTime = [];
        let labelTime = [
            "05:00:00",
            "06:00:00",
            "07:00:00",
            "08:00:00",
            "09:00:00",
            "10:00:00",
            "11:00:00",
            "12:00:00",
            "13:00:00",
            "14:00:00",
            "15:00:00",
            "16:00:00",
            "17:00:00",
            "18:00:00",
            "19:00:00",
            "20:00:00",
            "21:00:00",
            "22:00:00",
            "23:00:00",
        ];
        for (const data of peak) {
            peakTime.push(data.time);
        }
        for (const data of offPeak) {
            offPeakTime.push(data.time);
        }
        for (const data of sml) {
            smlTime.push(data.time);
        }
        let peakData = labelTime.filter((v) => {
            return !peakTime.includes(v);
        });
        let offPeakData = labelTime.filter((v) => {
            return !offPeakTime.includes(v);
        });
        let smlData = labelTime.filter((v) => {
            return !smlTime.includes(v);
        });
        for (const data of peakData) {
            let dataPush = {
                time: data,
                penumpang: "0",
                pendapatan: "0",
            };
            peak.push(dataPush);
        }
        for (const data of offPeakData) {
            let dataPush = {
                time: data,
                penumpang: "0",
                pendapatan: "0",
            };
            offPeak.push(dataPush);
        }
        for (const data of smlData) {
            let dataPush = {
                time: data,
                penumpang: "0",
                pendapatan: "0",
            };
            sml.push(dataPush);
        }
        peak.sort((a, b) => {
            if ((0, moment_1.default)(a.time, "HH:mm:ss") < (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return -1;
            }
            if ((0, moment_1.default)(a.time, "HH:mm:ss") > (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return 1;
            }
            return 0;
        });
        offPeak.sort((a, b) => {
            if ((0, moment_1.default)(a.time, "HH:mm:ss") < (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return -1;
            }
            if ((0, moment_1.default)(a.time, "HH:mm:ss") > (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return 1;
            }
            return 0;
        });
        sml.sort((a, b) => {
            if ((0, moment_1.default)(a.time, "HH:mm:ss") < (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return -1;
            }
            if ((0, moment_1.default)(a.time, "HH:mm:ss") > (0, moment_1.default)(b.time, "HH:mm:ss")) {
                return 1;
            }
            return 0;
        });
        let result = {
            peak: peak,
            off_peak: offPeak,
            sml: sml,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.volPenumpangPeakAndOffPeak = volPenumpangPeakAndOffPeak;
const volPenumpangPerStasiun = async (req) => {
    let response;
    try {
        let { start_date, end_date } = req.query;
        let stationIn = await repository.volPenumpangPerStasiunIn(start_date, end_date);
        let stationOut = await repository.volPenumpangPerStasiunOut(start_date, end_date);
        let result = {
            in: stationIn,
            out: stationOut,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.volPenumpangPerStasiun = volPenumpangPerStasiun;
const volPenumpangHarian = async (req) => {
    let response;
    try {
        let { start_date, end_date, type, station } = req.query;
        let stationIn = await repository.volPenumpangInHarian(start_date, end_date, type, station);
        let stationOut = await repository.volPenumpangOutHarian(start_date, end_date, type, station);
        const getDateRange = (start_date, end_date) => {
            const start = (0, moment_1.default)(start_date, 'YYYY-MM-DD');
            const end = (0, moment_1.default)(end_date, 'YYYY-MM-DD');
            const daysBetween = end.diff(start, 'days');
            return daysBetween;
        };
        let totalDataIn = [];
        let totalDataOut = [];
        for (const dataIn of stationIn) {
            totalDataIn.push({
                date: dataIn.date,
                penumpang: dataIn.penumpang,
                pendapatan: dataIn.pendapatan,
            });
        }
        for (const dataOut of stationOut) {
            totalDataOut.push({
                date: dataOut.date,
                penumpang: dataOut.penumpang,
                pendapatan: dataOut.pendapatan,
            });
        }
        let result = {
            in: totalDataIn,
            out: totalDataOut,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.volPenumpangHarian = volPenumpangHarian;
// const volPenumpangHarian_OLD = async (req: Request) => {
//   let response;
//   try {
//     let { start_date, end_date } = req.query;
//     let stationIn: any = await repository.volPenumpangInHarian(
//       start_date,
//       end_date
//     );
//     let stationOut: any = await repository.volPenumpangOutHarian(
//       start_date,
//       end_date
//     );
//     let daysIn = [];
//     let daysOut = [];
//     let month: string = "";
//     for (const dataIn of stationIn) {
//       month = dataIn.date;
//       dataIn.date = parseInt(
//         moment(dataIn.date).add(1, "day").utc().format("DD")
//       );
//       if (dataIn.date) {
//         daysIn.push(dataIn.date);
//       } else {
//         daysIn.push(0);
//       }
//     }
//     for (const dataOut of stationOut) {
//       dataOut.date = parseInt(
//         moment(dataOut.date).add(1, "day").utc().format("DD")
//       );
//       if (dataOut.date) {
//         daysOut.push(dataOut.date);
//       } else {
//         daysOut.push(0);
//       }
//     }
//     let totalDataIn = [];
//     let totalDataOut = [];
//     let daysInMonth = moment(end_date?.toLocaleString()).daysInMonth();
//     for (let index = 1; index <= daysInMonth; index++) {
//       if (daysIn.includes(index)) {
//         for (const dataIn of stationIn) {
//           if (index == dataIn.date) {
//             totalDataIn.push({
//               date: index,
//               penumpang: dataIn.penumpang,
//               pendapatan: dataIn.pendapatan,
//             });
//           }
//         }
//       } else {
//         totalDataIn.push({
//           date: index,
//           penumpang: 0,
//           pendapatan: 0,
//         });
//       }
//       if (daysOut.includes(index)) {
//         for (const dataOut of stationOut) {
//           if (index == dataOut.date) {
//             totalDataOut.push({
//               date: index,
//               penumpang: dataOut.penumpang,
//               pendapatan: dataOut.pendapatan,
//             });
//           }
//         }
//       } else {
//         totalDataOut.push({
//           date: index,
//           penumpang: 0,
//           pendapatan: 0,
//         });
//       }
//     }
//     let result = {
//       in: totalDataIn,
//       out: totalDataOut,
//     };
//     response = build.response("00", "success", result);
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, []);
//   }
//   return response;
// };
const getDataGraphPerfomByTrainNumber = async (period_date, period_month, period_year, type_of_day) => {
    try {
        let stringPeriod = "";
        if (period_date.length > 1) {
            stringPeriod = `d_opr BETWEEN '${period_date[0]}' AND '${period_date[1]}'`;
        }
        else if (period_year[1] - period_year[0] > 0) {
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
        let arrayTime = [
            "05:00:00",
            "06:00:00",
            "07:00:00",
            "08:00:00",
            "09:00:00",
            "10:00:00",
            "11:00:00",
            "12:00:00",
            "13:00:00",
            "14:00:00",
            "15:00:00",
            "16:00:00",
            "17:00:00",
            "18:00:00",
            "19:00:00",
            "20:00:00",
            "21:00:00",
            "22:00:00",
        ];
        // get data graph by train number
        let result = await repository.getDataGraphPerfomByTrainNumber(stringPeriod, type_of_day);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        // process data_rows
        let resultList = [];
        let data_rows = [];
        let d_opr = result.rows[0].d_opr;
        let t_departure = result.rows[0].t_departure.substring(0, 2);
        let countTimeDepart = 0;
        let countVolumePnp = 0;
        let countOccupancyStatic = 0;
        let countOccupancyDinamis = 0;
        result.rows.forEach((el) => {
            if (t_departure !== el.t_departure.substring(0, 2)) {
                data_rows.push({
                    d_opr,
                    t_departure: t_departure + ":00:00",
                    count_t_departure: countTimeDepart,
                    i_volume_pnp: countVolumePnp,
                    i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
                    i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
                    temp_i_o_static: countOccupancyStatic,
                    temp_i_o_dynamic: countOccupancyDinamis,
                });
                countTimeDepart = 0;
                countVolumePnp = 0;
                countOccupancyStatic = 0;
                countOccupancyDinamis = 0;
            }
            countTimeDepart++;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.i_o_static;
            countOccupancyDinamis += el.i_o_dynamic;
            d_opr = el.d_opr;
            t_departure = el.t_departure.substring(0, 2);
        });
        data_rows.push({
            d_opr,
            t_departure: t_departure + ":00:00",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
            temp_i_o_static: countOccupancyStatic,
            temp_i_o_dynamic: countOccupancyDinamis,
        });
        let data_summary = JSON.parse(JSON.stringify(data_rows));
        // process data summary
        let summary = [];
        t_departure = data_summary[0].t_departure.substring(0, 2);
        countTimeDepart = 0;
        countVolumePnp = 0;
        countOccupancyStatic = 0;
        countOccupancyDinamis = 0;
        data_summary.sort((a, b) => a.t_departure < b.t_departure ? -1 : 1);
        data_summary.forEach((el) => {
            if (t_departure !== el.t_departure.substring(0, 2)) {
                summary.push({
                    t_departure: t_departure + ":00:00",
                    count_t_departure: countTimeDepart,
                    i_volume_pnp: countVolumePnp,
                    i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
                    i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
                });
                countTimeDepart = 0;
                countVolumePnp = 0;
                countOccupancyStatic = 0;
                countOccupancyDinamis = 0;
            }
            countTimeDepart += el.count_t_departure;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.temp_i_o_static;
            countOccupancyDinamis += el.temp_i_o_dynamic;
            t_departure = el.t_departure.substring(0, 2);
        });
        summary.push({
            t_departure: t_departure + ":00:00",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
        });
        // set full array time
        let tempArray = [];
        summary.forEach((el) => {
            tempArray.push(el.t_departure);
        });
        let missing = arrayTime.filter((item) => tempArray.indexOf(item) < 0);
        if (missing.length > 0) {
            missing.forEach((el) => {
                summary.push({
                    t_departure: el,
                    count_t_departure: 0,
                    i_volume_pnp: 0,
                    i_o_static: 0,
                    i_o_dynamic: 0,
                });
            });
        }
        // set colomn total
        countTimeDepart = 0;
        countVolumePnp = 0;
        countOccupancyStatic = 0;
        countOccupancyDinamis = 0;
        summary.forEach((el) => {
            countTimeDepart++;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.i_o_static;
            countOccupancyDinamis += el.i_o_dynamic;
        });
        summary.push({
            t_departure: "Total/hari",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
        });
        // set response data_rows
        let finalResult = [];
        let tempFResult = [];
        d_opr = data_rows[0].d_opr;
        for (let el of data_rows) {
            if (JSON.stringify(d_opr) != JSON.stringify(el.d_opr)) {
                // set full array time
                let tempArray = [];
                tempFResult.forEach((el) => {
                    tempArray.push(el.t_departure);
                });
                let missing = arrayTime.filter((item) => tempArray.indexOf(item) < 0);
                if (missing.length > 0) {
                    missing.forEach((el) => {
                        tempFResult.push({
                            t_departure: el,
                            count_t_departure: 0,
                            i_volume_pnp: 0,
                            i_o_static: 0,
                            i_o_dynamic: 0,
                        });
                    });
                }
                // set colomn total
                countTimeDepart = 0;
                countVolumePnp = 0;
                countOccupancyStatic = 0;
                countOccupancyDinamis = 0;
                tempFResult.forEach((el) => {
                    countTimeDepart++;
                    countVolumePnp += el.i_volume_pnp;
                    countOccupancyStatic += el.i_o_static;
                    countOccupancyDinamis += el.i_o_dynamic;
                });
                tempFResult.push({
                    t_departure: "Total/hari",
                    count_t_departure: countTimeDepart,
                    i_volume_pnp: countVolumePnp,
                    i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
                    i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
                });
                finalResult.push({
                    d_opr,
                    datas: tempFResult,
                });
                tempFResult = [];
            }
            tempFResult.push({
                t_departure: el.t_departure,
                count_t_departure: el.count_t_departure,
                i_volume_pnp: el.i_volume_pnp,
                i_o_static: el.i_o_static,
                i_o_dynamic: el.i_o_dynamic,
            });
            d_opr = el.d_opr;
        }
        // set full array time
        tempArray = [];
        tempFResult.forEach((el) => {
            tempArray.push(el.t_departure);
        });
        missing = arrayTime.filter((item) => tempArray.indexOf(item) < 0);
        if (missing.length > 0) {
            missing.forEach((el) => {
                tempFResult.push({
                    t_departure: el,
                    count_t_departure: 0,
                    i_volume_pnp: 0,
                    i_o_static: 0,
                    i_o_dynamic: 0,
                });
            });
        }
        // set colomn total
        countTimeDepart = 0;
        countVolumePnp = 0;
        countOccupancyStatic = 0;
        countOccupancyDinamis = 0;
        tempFResult.forEach((el) => {
            countTimeDepart++;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.i_o_static;
            countOccupancyDinamis += el.i_o_dynamic;
        });
        tempFResult.push({
            t_departure: "Total/hari",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
        });
        finalResult.push({
            d_opr,
            datas: tempFResult,
        });
        resultList.push({
            summary,
            data_rows: finalResult,
        });
        return build.response("00", "success", resultList);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataGraphPerfomByTrainNumber = getDataGraphPerfomByTrainNumber;
const getDataGraphTrainNumberTriwulan = async (period_month, period_year) => {
    try {
        let stringPeriod = "";
        if (period_year[1] - period_year[0] > 0) {
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
        let arrayTime = [
            "05:00:00",
            "06:00:00",
            "07:00:00",
            "08:00:00",
            "09:00:00",
            "10:00:00",
            "11:00:00",
            "12:00:00",
            "13:00:00",
            "14:00:00",
            "15:00:00",
            "16:00:00",
            "17:00:00",
            "18:00:00",
            "19:00:00",
            "20:00:00",
            "21:00:00",
            "22:00:00",
        ];
        // get data graph by train number
        let result = await repository.getDataGraphTrainNumberTriwulan(stringPeriod);
        if (result.rows.length == 0) {
            return build.response("00", "success", []);
        }
        let data_summary = JSON.parse(JSON.stringify(result.rows));
        // process data_rows
        let resultList = [];
        let data_rows = [];
        let i_period_year = result.rows[0].i_period_year;
        let i_period_month = result.rows[0].i_period_month;
        let t_departure = result.rows[0].t_departure.substring(0, 2);
        let countTimeDepart = 0;
        let countVolumePnp = 0;
        let countOccupancyStatic = 0;
        let countOccupancyDinamis = 0;
        result.rows.forEach((el) => {
            if (t_departure !== el.t_departure.substring(0, 2)) {
                data_rows.push({
                    i_period_year,
                    i_period_month,
                    t_departure: t_departure + ":00:00",
                    count_t_departure: countTimeDepart,
                    i_volume_pnp: countVolumePnp,
                    i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
                    i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
                });
                countTimeDepart = 0;
                countVolumePnp = 0;
                countOccupancyStatic = 0;
                countOccupancyDinamis = 0;
            }
            i_period_year = el.i_period_year;
            i_period_month = el.i_period_month;
            t_departure = el.t_departure.substring(0, 2);
            countTimeDepart++;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.i_o_static;
            countOccupancyDinamis += el.i_o_dynamic;
        });
        data_rows.push({
            i_period_year,
            i_period_month,
            t_departure: t_departure + ":00:00",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
        });
        let finalResult = [];
        let tempResult = [];
        i_period_year = data_rows[0].i_period_year;
        i_period_month = data_rows[0].i_period_month;
        let marginPeriodYearMonth = `${data_rows[0].i_period_year}-${data_rows[0].i_period_month}`;
        data_rows.forEach((el) => {
            if (marginPeriodYearMonth != `${el.i_period_year}-${el.i_period_month}`) {
                finalResult.push({
                    i_period_year,
                    i_period_month,
                    datas: tempResult,
                });
                tempResult = [];
            }
            tempResult.push({
                t_departure: el.t_departure,
                count_t_departure: el.count_t_departure,
                i_volume_pnp: el.i_volume_pnp,
                i_o_static: el.i_o_static,
                i_o_dynamic: el.i_o_dynamic,
            });
            i_period_year = el.i_period_year;
            i_period_month = el.i_period_month;
            marginPeriodYearMonth = `${el.i_period_year}-${el.i_period_month}`;
        });
        finalResult.push({
            i_period_year,
            i_period_month,
            datas: tempResult,
        });
        // process data summary
        let summary = [];
        countTimeDepart = 0;
        countVolumePnp = 0;
        countOccupancyStatic = 0;
        countOccupancyDinamis = 0;
        data_summary.sort((a, b) => a.t_departure < b.t_departure ? -1 : 1);
        t_departure = data_summary[0].t_departure.substring(0, 2);
        data_summary.forEach((el) => {
            if (t_departure !== el.t_departure.substring(0, 2)) {
                summary.push({
                    t_departure: t_departure + ":00:00",
                    count_t_departure: countTimeDepart,
                    i_volume_pnp: countVolumePnp,
                    i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
                    i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
                });
                countTimeDepart = 0;
                countVolumePnp = 0;
                countOccupancyStatic = 0;
                countOccupancyDinamis = 0;
            }
            countTimeDepart++;
            countVolumePnp += el.i_volume_pnp;
            countOccupancyStatic += el.i_o_static;
            countOccupancyDinamis += el.i_o_dynamic;
            t_departure = el.t_departure.substring(0, 2);
        });
        summary.push({
            t_departure: t_departure + ":00:00",
            count_t_departure: countTimeDepart,
            i_volume_pnp: countVolumePnp,
            i_o_static: Math.round(countOccupancyStatic / countTimeDepart),
            i_o_dynamic: Math.round(countOccupancyDinamis / countTimeDepart),
        });
        // set full array time
        let tempArray = [];
        summary.forEach((el) => {
            tempArray.push(el.t_departure);
        });
        let missing = arrayTime.filter((item) => tempArray.indexOf(item) < 0);
        if (missing.length > 0) {
            missing.forEach((el) => {
                summary.push({
                    t_departure: el,
                    count_t_departure: 0,
                    i_volume_pnp: 0,
                    i_o_static: 0,
                    i_o_dynamic: 0,
                });
            });
        }
        resultList.push({
            summary,
            data_rows: finalResult,
        });
        return build.response("00", "success", resultList);
    }
    catch (error) {
        return build.response("500", `${error.message}`, {});
    }
};
exports.getDataGraphTrainNumberTriwulan = getDataGraphTrainNumberTriwulan;
const totalPendapatanDanPenumpangPerHariIni = async (req) => {
    let response;
    try {
        let today = (0, moment_1.default)().format("YYYY-MM-DD");
        let result = await repository.totalPendapatanDanPenumpangPerHariIni(today);
        for (const data of result) {
            data.pendapatan ? data.pendapatan : (data.pendapatan = 0);
            data.penumpang ? data.penumpang : (data.penumpang = 0);
        }
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.totalPendapatanDanPenumpangPerHariIni = totalPendapatanDanPenumpangPerHariIni;
const totalPendapatanDanPenumpangKumulatif = async (req) => {
    let response;
    try {
        let startDate = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endDate = (0, moment_1.default)().format("YYYY-MM-DD");
        let result = await repository.totalPendapatanDanPenumpangKumulatif(startDate, endDate);
        for (const data of result) {
            data.pendapatan ? data.pendapatan : (data.pendapatan = 0);
            data.penumpang ? data.penumpang : (data.penumpang = 0);
        }
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.totalPendapatanDanPenumpangKumulatif = totalPendapatanDanPenumpangKumulatif;
const averagePendapatan = async (req) => {
    let response;
    try {
        let startDate = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endDate = (0, moment_1.default)().format("YYYY-MM-DD");
        let getWeekend = await repository.averagePendapatanWeekend(startDate, endDate);
        let getWeekday = await repository.averagePendapatanWeekday(startDate, endDate);
        let getPeak = await repository.averagePendapatanPeak(startDate, endDate);
        let getOffPeak = await repository.averagePendapatanOffPeak(startDate, endDate);
        let result = {
            weekend: getWeekend?.weekend ? getWeekend.weekend : 0,
            weekday: getWeekday?.weekday ? getWeekday.weekday : 0,
            peak: getPeak?.pendapatan ? getPeak.pendapatan : 0,
            off_peak: getOffPeak?.pendapatan ? getOffPeak.pendapatan : 0,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.averagePendapatan = averagePendapatan;
const averagePenumpang = async (req) => {
    let response;
    try {
        let startDate = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endDate = (0, moment_1.default)().format("YYYY-MM-DD");
        let getWeekend = await repository.averagePenumpangWeekend(startDate, endDate);
        let getWeekday = await repository.averagePenumpangWeekday(startDate, endDate);
        let getPeak = await repository.averagePenumpangPeak(startDate, endDate);
        let getOffPeak = await repository.averagePenumpangOffPeak(startDate, endDate);
        let result = {
            weekend: getWeekend?.weekend ? getWeekend.weekend : 0,
            weekday: getWeekday?.weekday ? getWeekday.weekday : 0,
            peak: getPeak?.penumpang ? getPeak.penumpang : 0,
            off_peak: getOffPeak?.penumpang ? getOffPeak.penumpang : 0,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.averagePenumpang = averagePenumpang;
const peakSMLNonSML = async (req) => {
    let response;
    try {
        let { start_date, end_date } = req.query;
        let sml = await repository.peakSML(start_date, end_date);
        let nonSml = await repository.peakNonSML(start_date, end_date);
        for (const data of sml) {
            data.pendapatan = data.pendapatan ? data.pendapatan : 0;
            data.penumpang = data.penumpang ? data.penumpang : 0;
        }
        for (const data of nonSml) {
            data.pendapatan = data.pendapatan ? data.pendapatan : 0;
            data.penumpang = data.penumpang ? data.penumpang : 0;
        }
        let result = {
            sml: sml,
            non_sml: nonSml,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.peakSMLNonSML = peakSMLNonSML;
const OffPeakSMLNonSML = async (req) => {
    let response;
    try {
        let { start_date, end_date } = req.query;
        let sml = await repository.OffPeakSML(start_date, end_date);
        let nonSml = await repository.OffPeakNonSML(start_date, end_date);
        for (const data of sml) {
            data.pendapatan = data.pendapatan ? data.pendapatan : 0;
            data.penumpang = data.penumpang ? data.penumpang : 0;
        }
        for (const data of nonSml) {
            data.pendapatan = data.pendapatan ? data.pendapatan : 0;
            data.penumpang = data.penumpang ? data.penumpang : 0;
        }
        let result = {
            sml: sml,
            non_sml: nonSml,
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.OffPeakSMLNonSML = OffPeakSMLNonSML;
const penumpangDanPendapatanDaily = async (req) => {
    let response;
    try {
        let columnDaily = "d_transaction_at";
        let column = "d_afc";
        let daily = await repository.penumpangDanPendapatanDaily((0, moment_1.default)().startOf("day").format("YYYY-MM-DD HH:mm:ss"), (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"), columnDaily);
        let yesterday = await repository.penumpangDanPendapatanDaily((0, moment_1.default)().subtract(1, "days").startOf("day").format("YYYY-MM-DD HH:mm:ss"), (0, moment_1.default)().subtract(1, "days").endOf("day").format("YYYY-MM-DD HH:mm:ss"), columnDaily);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanDaily(startThisMonth, endThisMonth, column);
        let lastMonth = await repository.penumpangDanPendapatanDaily(startLastMonth, endLastMonth, column);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanDaily(startThisYear, endThisYear, column);
        let lastYear = await repository.penumpangDanPendapatanDaily(startLastYear, endLastYear, column);
        let dailyData = {
            penumpang: {
                hari: {
                    kemarin: yesterday?.penumpang ? yesterday.penumpang : 0,
                    ini: daily?.penumpang ? daily.penumpang : 0,
                    selisih: ((daily?.penumpang ? daily.penumpang : 0) /
                        (yesterday?.penumpang ? yesterday.penumpang : 0)) *
                        100
                        ? ((daily?.penumpang ? daily.penumpang : 0) /
                            (yesterday?.penumpang ? yesterday.penumpang : 0)) *
                            100
                        : 0,
                    status: (daily?.penumpang ? daily.penumpang : 0) ==
                        (yesterday?.penumpang ? yesterday.penumpang : 0)
                        ? "same"
                        : (daily?.penumpang ? daily.penumpang : 0) >
                            (yesterday?.penumpang ? yesterday.penumpang : 0)
                            ? "up"
                            : "down",
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                    selisih: ((thisMonth?.penumpang ? thisMonth.penumpang : 0) /
                        (lastMonth?.penumpang ? lastMonth.penumpang : 0)) *
                        100
                        ? ((thisMonth?.penumpang ? thisMonth.penumpang : 0) /
                            (lastMonth?.penumpang ? lastMonth.penumpang : 0)) *
                            100
                        : 0,
                    status: (thisMonth?.penumpang ? thisMonth.penumpang : 0) ==
                        (lastMonth?.penumpang ? lastMonth.penumpang : 0)
                        ? "same"
                        : (thisMonth?.penumpang ? thisMonth.penumpang : 0) >
                            (lastMonth?.penumpang ? lastMonth.penumpang : 0)
                            ? "up"
                            : "down",
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                    selisih: ((thisYear?.penumpang ? thisYear.penumpang : 0) /
                        (lastYear?.penumpang ? lastYear.penumpang : 0)) *
                        100
                        ? ((thisYear?.penumpang ? thisYear.penumpang : 0) /
                            (lastYear?.penumpang ? lastYear.penumpang : 0)) *
                            100
                        : 0,
                    status: (thisYear?.penumpang ? thisYear.penumpang : 0) ==
                        (lastYear?.penumpang ? lastYear.penumpang : 0)
                        ? "same"
                        : (thisYear?.penumpang ? thisYear.penumpang : 0) >
                            (lastYear?.penumpang ? lastYear.penumpang : 0)
                            ? "up"
                            : "down",
                },
            },
            pendapatan: {
                hari: {
                    kemarin: yesterday?.pendapatan ? yesterday.pendapatan : 0,
                    ini: daily?.pendapatan ? daily.pendapatan : 0,
                    selisih: ((daily?.pendapatan ? daily.pendapatan : 0) /
                        (yesterday?.pendapatan ? yesterday.pendapatan : 0)) *
                        100
                        ? ((daily?.pendapatan ? daily.pendapatan : 0) /
                            (yesterday?.pendapatan ? yesterday.pendapatan : 0)) *
                            100
                        : 0,
                    status: (daily?.pendapatan ? daily.pendapatan : 0) ==
                        (yesterday?.pendapatan ? yesterday.pendapatan : 0)
                        ? "same"
                        : (daily?.pendapatan ? daily.pendapatan : 0) >
                            (yesterday?.pendapatan ? yesterday.pendapatan : 0)
                            ? "up"
                            : "down",
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                    selisih: ((thisMonth?.pendapatan ? thisMonth.pendapatan : 0) /
                        (lastMonth?.pendapatan ? lastMonth.pendapatan : 0)) *
                        100
                        ? ((thisMonth?.pendapatan ? thisMonth.pendapatan : 0) /
                            (lastMonth?.pendapatan ? lastMonth.pendapatan : 0)) *
                            100
                        : 0,
                    status: (thisMonth?.pendapatan ? thisMonth.pendapatan : 0) ==
                        (lastMonth?.pendapatan ? lastMonth.pendapatan : 0)
                        ? "same"
                        : (thisMonth?.pendapatan ? thisMonth.pendapatan : 0) >
                            (lastMonth?.pendapatan ? lastMonth.pendapatan : 0)
                            ? "up"
                            : "down",
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                    selisih: ((thisYear?.pendapatan ? thisYear.pendapatan : 0) /
                        (lastYear?.pendapatan ? lastYear.pendapatan : 0)) *
                        100
                        ? ((thisYear?.pendapatan ? thisYear.pendapatan : 0) /
                            (lastYear?.pendapatan ? lastYear.pendapatan : 0)) *
                            100
                        : 0,
                    status: (thisYear?.pendapatan ? thisYear.pendapatan : 0) ==
                        (lastYear?.pendapatan ? lastYear.pendapatan : 0)
                        ? "same"
                        : (thisYear?.pendapatan ? thisYear.pendapatan : 0) >
                            (lastYear?.pendapatan ? lastYear.pendapatan : 0)
                            ? "up"
                            : "down",
                },
            },
        };
        let result = {
            penumpang: {
                hari: {
                    kemarin: dailyData.penumpang.hari.kemarin,
                    ini: dailyData.penumpang.hari.ini,
                    // selisih: dailyData.penumpang.hari.selisih,
                    // status: dailyData.penumpang.hari.status,
                },
                bulan: {
                    kemarin: dailyData.penumpang.bulan.kemarin,
                    ini: dailyData.penumpang.bulan.ini,
                    // selisih: dailyData.penumpang.bulan.selisih,
                    // status: dailyData.penumpang.bulan.status,
                },
                year: {
                    kemarin: dailyData.penumpang.tahun.kemarin,
                    ini: dailyData.penumpang.tahun.ini,
                    // selisih: dailyData.penumpang.tahun.selisih,
                    // status: dailyData.penumpang.tahun.status,
                },
            },
            pendapatan: {
                hari: {
                    kemarin: dailyData.pendapatan.hari.kemarin,
                    ini: dailyData.pendapatan.hari.ini,
                    // selisih: dailyData.pendapatan.hari.selisih,
                    // status: dailyData.pendapatan.hari.status,
                },
                bulan: {
                    kemarin: dailyData.pendapatan.bulan.kemarin,
                    ini: dailyData.pendapatan.bulan.ini,
                    // selisih: dailyData.pendapatan.bulan.selisih,
                    // status: dailyData.pendapatan.bulan.status,
                },
                tahun: {
                    kemarin: dailyData.pendapatan.tahun.kemarin,
                    ini: dailyData.pendapatan.tahun.ini,
                    // selisih: dailyData.pendapatan.tahun.selisih,
                    // status: dailyData.pendapatan.tahun.status,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanDaily = penumpangDanPendapatanDaily;
const penumpangDanPendapatanWeekday = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanWeekday(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanWeekday(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanWeekday(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanWeekday(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanWeekday(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanWeekday(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanWeekday = penumpangDanPendapatanWeekday;
const penumpangDanPendapatanWeekend = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanWeekend(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanWeekend(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanWeekend(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanWeekend(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanWeekend(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanWeekend(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanWeekend = penumpangDanPendapatanWeekend;
const penumpangDanPendapatanAverageWeekday = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanAverageWeekday(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanAverageWeekday(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanAverageWeekday(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanAverageWeekday(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanAverageWeekday(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanAverageWeekday(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanAverageWeekday = penumpangDanPendapatanAverageWeekday;
const penumpangDanPendapatanAverageWeekend = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanAverageWeekend(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanAverageWeekend(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanAverageWeekend(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanAverageWeekend(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanAverageWeekend(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanAverageWeekend(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanAverageWeekend = penumpangDanPendapatanAverageWeekend;
const penumpangDanPendapatanPeak = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanPeak(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanPeak(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanPeak(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanPeak(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanPeak(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanPeak(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanPeak = penumpangDanPendapatanPeak;
const penumpangDanPendapatanOffPeak = async (req) => {
    let response;
    try {
        let startThisWeek = (0, moment_1.default)().startOf("isoWeek").format("YYYY-MM-DD");
        let endThisWeek = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .startOf("isoWeek")
            .format("YYYY-MM-DD");
        let endLastWeek = (0, moment_1.default)()
            .subtract(1, "week")
            .endOf("isoWeek")
            .format("YYYY-MM-DD");
        let thisWeek = await repository.penumpangDanPendapatanOffPeak(startThisWeek, endThisWeek);
        let lastWeek = await repository.penumpangDanPendapatanOffPeak(startLastWeek, endLastWeek);
        let startThisMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD");
        let endThisMonth = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        let endLastMonth = (0, moment_1.default)()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD");
        let thisMonth = await repository.penumpangDanPendapatanOffPeak(startThisMonth, endThisMonth);
        let lastMonth = await repository.penumpangDanPendapatanOffPeak(startLastMonth, endLastMonth);
        let startThisYear = (0, moment_1.default)().startOf("year").format("YYYY-MM-DD");
        let endThisYear = (0, moment_1.default)().format("YYYY-MM-DD");
        let startLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        let endLastYear = (0, moment_1.default)()
            .subtract(1, "year")
            .endOf("year")
            .format("YYYY-MM-DD");
        let thisYear = await repository.penumpangDanPendapatanOffPeak(startThisYear, endThisYear);
        let lastYear = await repository.penumpangDanPendapatanOffPeak(startLastYear, endLastYear);
        let result = {
            penumpang: {
                minggu: {
                    kemarin: lastWeek?.penumpang ? lastWeek.penumpang : 0,
                    ini: thisWeek?.penumpang ? thisWeek.penumpang : 0,
                },
                bulan: {
                    kemarin: lastMonth?.penumpang ? lastMonth.penumpang : 0,
                    ini: thisMonth?.penumpang ? thisMonth.penumpang : 0,
                },
                tahun: {
                    kemarin: lastYear?.penumpang ? lastYear.penumpang : 0,
                    ini: thisYear?.penumpang ? thisYear.penumpang : 0,
                },
            },
            pendapatan: {
                minggu: {
                    kemarin: lastWeek?.pendapatan ? lastWeek.pendapatan : 0,
                    ini: thisWeek?.pendapatan ? thisWeek.pendapatan : 0,
                },
                bulan: {
                    kemarin: lastMonth?.pendapatan ? lastMonth.pendapatan : 0,
                    ini: thisMonth?.pendapatan ? thisMonth.pendapatan : 0,
                },
                tahun: {
                    kemarin: lastYear?.pendapatan ? lastYear.pendapatan : 0,
                    ini: thisYear?.pendapatan ? thisYear.pendapatan : 0,
                },
            },
        };
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.penumpangDanPendapatanOffPeak = penumpangDanPendapatanOffPeak;
