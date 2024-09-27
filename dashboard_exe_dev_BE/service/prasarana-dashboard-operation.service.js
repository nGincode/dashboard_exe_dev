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
exports.add = exports.getAll = exports.getOperation = void 0;
const repository = __importStar(require("../repository/prasarana-dashboard-operation.repository"));
const build = __importStar(require("../helper/response.helper"));
const getAll = async (periodMonth, periodeYear) => {
    let response;
    let dataResponse;
    try {
        let stringPeriod = '';
        if (periodeYear[1] - periodeYear[0] > 0) {
            for (let i = periodeYear[0]; i <= periodeYear[1]; i++) {
                if (i == periodeYear[0]) {
                    stringPeriod += `(period_year BETWEEN ${i} AND ${i} AND period_month BETWEEN ${periodMonth[0]} AND 12) `;
                }
                else if (i == periodeYear[1]) {
                    stringPeriod += `OR (period_year BETWEEN ${i} AND ${i} AND period_month BETWEEN 1 AND ${periodMonth[1]}) `;
                }
                else {
                    stringPeriod += `OR (period_year BETWEEN ${i} AND ${i} AND period_month BETWEEN 1 AND 12) `;
                }
            }
        }
        else {
            stringPeriod += `(period_year = ${periodeYear[0]} AND period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
        }
        const result = await repository.getAll(stringPeriod);
        if (result.rows.length === 0) {
            dataResponse = {
                // period_year: periodeYear,
                // period_month: periodMonth,
                data: [],
            };
        }
        else {
            dataResponse = responseDataJson(result.rows, periodMonth, periodeYear);
        }
        response = build.response('00', 'success', dataResponse);
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getAll = getAll;
const add = async (user_uuid, req, periodMonth, periodYear) => {
    let response;
    try {
        const result = await repository.add(user_uuid, req, periodMonth, periodYear);
        if (result) {
            response = build.response('00', 'success', null);
        }
        else {
            response = build.response('400', 'invalid input type', null);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.add = add;
const getOperation = async (periodMonth, periodeYear) => {
    if (periodMonth.some((month) => isNaN(month)) ||
        periodeYear.some((year) => isNaN(year))) {
        return build.response('400', 'invalid input type', []);
    }
    let response;
    try {
        let stringPeriod = '';
        if (periodeYear[1] - periodeYear[0] > 0) {
            for (let i = periodeYear[0]; i <= periodeYear[1]; i++) {
                if (i === periodeYear[0]) {
                    stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${periodMonth[0]} AND 12) `;
                }
                else if (i === periodeYear[1]) {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${periodMonth[1]}) `;
                }
                else {
                    stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
                }
            }
        }
        else {
            stringPeriod += `(i_period_year = ${periodeYear[0]} AND i_period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
        }
        const sorter = [
            'Keselamatan',
            'Operasional',
            'Teknis',
            'Sertifikasi',
            'Pelaporan',
        ];
        const data = await repository.getIndicatorOperation(stringPeriod);
        const indicators = sorter.flatMap((sort) => data.filter((item) => item.parameter === sort));
        const queryFunctions = [
            {
                index: 0,
                fetch: () => repository.getIndicatorSafety(stringPeriod),
                process: (safety, indicator) => {
                    const safeData = safety.rows.find((safe) => safe.c_indicator === indicator.c_indicator);
                    if (safeData) {
                        indicator.realization = parseInt(safeData.i_value);
                        indicator.percentage = Number(indicator.target === 0
                            ? 0
                            : ((parseInt(safeData.i_value) / parseInt(indicator.target)) *
                                100).toFixed(2));
                    }
                },
            },
            {
                index: 1,
                fetch: () => repository.getIndicatorOperational(stringPeriod),
                process: (operational, indicator) => {
                    const opData = operational.rows.find((op) => op.c_indicator === indicator.c_indicator);
                    if (opData) {
                        const totalRealization = ((Number(opData.i_operation_time) -
                            Number(opData.i_operation_time_disturb)) /
                            Number(opData.i_operation_time)) *
                            100;
                        indicator.realization = totalRealization;
                        indicator.percentage = Number(((totalRealization / indicator.target) * 100).toFixed(2));
                    }
                },
            },
            {
                index: 2,
                fetch: () => repository.getIndicatorTechnical(stringPeriod),
                process: (technical, indicator) => {
                    const techData = technical.rows.find((tech) => tech.c_indicator === indicator.c_indicator);
                    if (techData) {
                        const totalRealization = Number(techData.i_value_1) + Number(techData.i_value_2);
                        indicator.realization = totalRealization;
                        indicator.percentage = Number(((totalRealization / indicator.target) * 100).toFixed(2));
                    }
                },
            },
        ];
        await Promise.all(queryFunctions.map(async ({ index, fetch, process }) => {
            if (indicators[index]) {
                const data = await fetch();
                if (data) {
                    indicators[index].record.forEach((indicator) => process(data, indicator));
                }
            }
        }));
        // get data dashboard sertifikasi
        let dataSertifikasiPemeriksaHarus = await repository.getIndicatorSertifikasiHarus('PEMERIKSA', periodMonth, periodeYear);
        let dataSertifikasiPemeriksa = await repository.getIndicatorSertifikasi('PEMERIKSA', periodMonth, periodeYear);
        let totalSertifikasiPemeriksa = Number(((dataSertifikasiPemeriksa.rows[0].count / dataSertifikasiPemeriksaHarus.rows[0].count) * 100).toFixed(2));
        totalSertifikasiPemeriksa = (isNaN(totalSertifikasiPemeriksa) || !isFinite(totalSertifikasiPemeriksa)) ? 0 : totalSertifikasiPemeriksa;
        let dataSertifikasiPengendaliHarus = await repository.getIndicatorSertifikasiHarus('PENGENDALI', periodMonth, periodeYear);
        let dataSertifikasiPengendali = await repository.getIndicatorSertifikasi('PENGENDALI', periodMonth, periodeYear);
        let totalSertifikasiPengendali = Number(((dataSertifikasiPengendali.rows[0].count / dataSertifikasiPengendaliHarus.rows[0].count) * 100).toFixed(2));
        totalSertifikasiPengendali = (isNaN(totalSertifikasiPengendali) || !isFinite(totalSertifikasiPengendali)) ? 0 : totalSertifikasiPengendali;
        let recordSertifikasi = [
            {
                "unit": "PERSEN",
                "order": 1,
                "target": 100,
                "indicator": "Jumlah tenaga pemeriksa yang memiliki sertifikat keahlian",
                "percentage": Number((totalSertifikasiPemeriksa / 100 * 100).toFixed(2)),
                "c_indicator": "",
                "realization": totalSertifikasiPemeriksa
            },
            {
                "unit": "PERSEN",
                "order": 2,
                "target": 100,
                "indicator": "Jumlah petugas pengoperasian yang memiliki sertifikat kecakapan",
                "percentage": Number((totalSertifikasiPengendali / 100 * 100).toFixed(2)),
                "c_indicator": "",
                "realization": totalSertifikasiPengendali
            }
        ];
        indicators.push({
            'parameter': 'Sertifikasi',
            'record': recordSertifikasi
        });
        // get data dashboard pelaporan
        let dataPelaporan = await repository.getIndicatorPelaporan(stringPeriod, totalSertifikasiPemeriksa, totalSertifikasiPengendali);
        indicators.push({
            'parameter': 'Pelaporan',
            'record': [
                {
                    "unit": "PERSEN",
                    "order": 1,
                    "target": 100,
                    "indicator": "Kepatuhan ketepatan waktu pelaporan pemeriksa",
                    "percentage": Number(((dataPelaporan / 100) * 100).toFixed(2)),
                    "c_indicator": "",
                    "realization": dataPelaporan
                }
            ]
        });
        response = build.response('00', 'success', indicators);
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getOperation = getOperation;
function responseDataJson(result, periodMonth, periodeYear) {
    const data = [];
    let record = [];
    let parameter = result[0].parameter;
    let dataResponse = {
        // period_year: Number(periodeYear),
        // periodMonth: Number(periodMonth),
        data: data,
    };
    for (let i = 0; i < result.length; i++) {
        if (result[i].parameter === parameter) {
            record.push({
                indicator: result[i].indicator,
                target: result[i].target,
                realization: result[i].realization,
                order: result[i].sort,
            });
        }
        else {
            data.push({
                column_1: parameter,
                record,
            });
            record = [];
            parameter = result[i].parameter;
            record.push({
                indicator: result[i].indicator,
                target: result[i].target,
                realization: result[i].realization,
                order: result[i].sort,
            });
        }
    }
    if (record.length !== 0) {
        data.push({ column_1: parameter, record });
    }
    dataResponse.data = data;
    return dataResponse;
}
