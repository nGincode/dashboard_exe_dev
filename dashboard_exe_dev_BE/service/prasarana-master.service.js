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
exports.deleteMasterTarget = exports.updateMasterTarget = exports.saveMasterTarget = exports.getMasterTarget = exports.getMasterParameter = void 0;
const build = __importStar(require("../helper/response.helper"));
const repository = __importStar(require("../repository/prasarana-master.repository"));
const activity_service_1 = require("../service/activity.service");
const getMasterParameter = async (c_dashboard_type) => {
    let response;
    try {
        const data = await repository.findMasterParameter(c_dashboard_type);
        const sorter = [
            'KESELAMATAN',
            'OPERASIONAL',
            'TEKNIS',
            'SERTIFIKASI',
            'PELAPORAN',
        ];
        if (!data) {
            response = build.response('400', 'invalid input type', []);
        }
        else {
            const sortedData = [];
            sorter.forEach((sort) => {
                const filtered = data.filter((item) => item.c_param === sort);
                sortedData.push(...filtered);
            });
            response = build.response('00', 'success', sortedData);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getMasterParameter = getMasterParameter;
const getMasterTarget = async (params) => {
    const periodMonth = String(params.period_month).split('_').map(Number);
    const periodYear = String(params.period_year).split('_').map(Number);
    const stringPeriod = getPeriodDates(periodMonth, periodYear);
    let response;
    try {
        const sorter = [
            'KeselaMatan',
            'OperaSional',
            'Teknis',
            'Sertifikasi',
            'Pelaporan',
        ];
        let data = await repository.findMasterTarget(params.c_dashboard_type, stringPeriod);
        if (!data) {
            response = build.response('400', 'invalid input type', []);
        }
        else {
            data = data.map((item) => {
                item.data = item.data.sort((a, b) => {
                    return sorter.indexOf(a.n_param) - sorter.indexOf(b.n_param);
                });
                return item;
            });
            response = build.response('00', 'success', data);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getMasterTarget = getMasterTarget;
const saveMasterTarget = async (request) => {
    const user_id = request.userId;
    const { period_year, period_month, data } = request.body;
    const payload = {
        user_id,
        period_year,
        period_month,
        data,
    };
    let response;
    try {
        await repository.saveMasterTarget(payload);
        request.body.menu = 'Dashboard Master Target Indikator';
        request.body.description = 'Insert Data Master Target Indikator';
        request.body.j_new_data = payload;
        await (0, activity_service_1.InsertActivity)(request);
        response = build.response('00', 'success', {});
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.saveMasterTarget = saveMasterTarget;
const updateMasterTarget = async (request) => {
    const user_id = request.body.i_id;
    const payload = {
        i_id: request.body.i_id,
        user_id: request.userId,
        n_indicator: request.body.n_indicator,
        i_target: request.body.i_target,
        n_unit: request.body.n_unit,
    };
    const target = await repository.findMasterTargetById(user_id);
    if (!target) {
        return build.response('404', 'data not found', []);
    }
    else if (target.data[0].record[0].i_status_active === 2) {
        return build.response('400', 'data already deleted', []);
    }
    const data = {
        n_indicator: payload.n_indicator,
        i_target: payload.i_target,
        n_unit: payload.n_unit,
    };
    try {
        await repository.updateMasterTarget(payload.i_id, payload.user_id, data);
        request.body.menu = 'Dashboard Master Target Indikator';
        request.body.description = 'Update Data Master Target Indikator';
        request.body.j_old_data = target;
        request.body.j_new_data = payload;
        await (0, activity_service_1.InsertActivity)(request);
        return build.response('00', 'success', []);
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.updateMasterTarget = updateMasterTarget;
const deleteMasterTarget = async (request) => {
    try {
        const target = await repository.findMasterTargetById(request.body.i_id);
        if (!target)
            return build.response('404', 'data not found', []);
        if (target.data[0].record[0].i_status_active === 2)
            return build.response('400', 'data already deleted', []);
        await repository.deleteMasterTarget(request.body.i_id, request.userId, target.data[0].record[0].n_table_data);
        request.body.menu = 'Dashboard Master Target Indikator';
        request.body.description = 'Delete Data Master Target Indikator';
        request.body.j_old_data = target;
        await (0, activity_service_1.InsertActivity)(request);
        return build.response('00', 'success', []);
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.deleteMasterTarget = deleteMasterTarget;
const getPeriodDates = (periodMonth, periodYear) => {
    let stringPeriod = '';
    if (periodYear[1] - periodYear[0] > 0) {
        for (let i = periodYear[0]; i <= periodYear[1]; i++) {
            if (i == periodYear[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${periodMonth[0]} AND 12) `;
            }
            else if (i == periodYear[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${periodMonth[1]}) `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${periodYear[0]} AND i_period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
    }
    return stringPeriod;
};
