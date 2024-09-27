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
exports.add = exports.getAll_v2 = exports.getAll = void 0;
const service = __importStar(require("../service/prasarana-dashboard-maintenance.service"));
const getAll = async (req, res) => {
    // const periodYear: number = req.query.period_year as unknown as number || 0;
    // const periodMonth: number = req.query.period_month as unknown as number || 0;
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let result = await service.getAll(periodMonth, periodYear);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.getAll = getAll;
const getAll_v2 = async (req, res) => {
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let result = await service.getMaintenance(periodMonth, periodYear);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.getAll_v2 = getAll_v2;
const add = async (req, res) => {
    const user_uuid = req.userId;
    const data = req.body.data;
    const periodeYear = req.body.year;
    const periodeMonth = req.body.month;
    let status;
    let result = await service.add(user_uuid, data, periodeMonth, periodeYear);
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.add = add;
