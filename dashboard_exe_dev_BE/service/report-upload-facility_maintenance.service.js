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
exports.Insert = exports.All = void 0;
const repository = __importStar(require("../repository/report-upload-facility_maintenance.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const Insert = async (req) => {
    let response;
    try {
        let { periode, data } = req.body;
        periode = periode.split('/');
        let month = parseInt(periode[0]);
        let year = parseInt(periode[1]);
        let check = await repository.checkPeriod(month, year);
        if (check) {
            let dataUpdate = {
                i_status_active: 2,
                n_updated_by: req.userId,
                d_updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            };
            await repository.update(month, year, dataUpdate);
        }
        for (let dataLoop of data) {
            [
                dataLoop.i_period_month = month,
                dataLoop.i_period_year = year,
                dataLoop.n_created_by = req.userId
            ];
        }
        await repository.Insert(data);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const All = async (req) => {
    let response;
    try {
        let { start_date, end_date } = req.query;
        let result = await repository.All(start_date, end_date);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
