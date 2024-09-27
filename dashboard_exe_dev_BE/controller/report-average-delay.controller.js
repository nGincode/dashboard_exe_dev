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
exports.getTrainFrequency = exports.getSupportAverageDelay = exports.getRecapTrafficDelay = exports.getTrafficDelay = exports.getAverageDelay = exports.uploadExcel = void 0;
const service = __importStar(require("../service/report-average-delay.service"));
const uploadExcel = async (req, res) => {
    // clean parameters
    let user_uuid = req.userId;
    let data = req.body.data;
    // process save data
    let result = await service.saveAverageDelay(user_uuid, data);
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
exports.uploadExcel = uploadExcel;
const getAverageDelay = async (req, res) => {
    // clean parameters
    let period_date = String(req.query.period_date).split('_');
    let period_month = String(req.query.period_month).split('_').map(Number);
    let period_year = String(req.query.period_year).split('_').map(Number);
    // get data
    let result = await service.getDataAverageDelay(period_date, period_month, period_year);
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
exports.getAverageDelay = getAverageDelay;
const getTrafficDelay = async (req, res) => {
    // clean parameters
    let period_month = String(req.query.period_month).split('_').map(Number);
    let period_year = String(req.query.period_year).split('_').map(Number);
    // get data
    let result = await service.getDataTrafficDelay(period_month, period_year);
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
exports.getTrafficDelay = getTrafficDelay;
const getRecapTrafficDelay = async (req, res) => {
    // clean parameters
    let period_month = String(req.query.period_month).split('_').map(Number);
    let period_year = String(req.query.period_year).split('_').map(Number);
    // get data
    let result = await service.getDataRecapTrafficDelay(period_month, period_year);
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
exports.getRecapTrafficDelay = getRecapTrafficDelay;
const getSupportAverageDelay = async (req, res) => {
    // clean parameters
    let period_month = String(req.query.period_month).split('_').map(Number);
    let period_year = String(req.query.period_year).split('_').map(Number);
    // get data
    let result = await service.getDataSupportAverageDelay(period_month, period_year);
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
exports.getSupportAverageDelay = getSupportAverageDelay;
const getTrainFrequency = async (req, res) => {
    // clean parameters
    let period_date = String(req.query.period_date).split('_');
    let period_month = String(req.query.period_month).split('_').map(Number);
    let period_year = String(req.query.period_year).split('_').map(Number);
    // get data
    let result = await service.getDataTrainFrequency(period_date, period_month, period_year);
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
exports.getTrainFrequency = getTrainFrequency;
