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
exports.getReporting = exports.getCertificate = exports.saveOperationTechnicalSummary = exports.saveOperationTechnicalFile = exports.saveOperationTechnical = exports.saveOperationSafety = exports.saveOperationOperational = exports.getOperationTechnical = exports.getOperationSafety = exports.getOperationOperational = exports.getDownloadMerge = exports.getBuildMerge = exports.deleteOperationTechnicalFile = void 0;
const service = __importStar(require("../service/prasarana-operation.service"));
const getOperationSafety = async (req, res) => {
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let statusActive = req.query.status || 0;
    let result = await service.getOperationSafety(periodYear, periodMonth, statusActive);
    let status;
    if (result.code == '00') {
        status = 200;
    }
    else if (result.code == '500') {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.getOperationSafety = getOperationSafety;
const saveOperationSafety = async (req, res) => {
    const body = req.body;
    const payload = {
        user_id: req.userId,
        period_year: body.period_year,
        period_month: body.period_month,
        data: body.data,
    };
    const response = await service.saveOperationSafety(req);
    let status;
    if (response.code == '00')
        status = 200;
    else if (response.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(response);
};
exports.saveOperationSafety = saveOperationSafety;
const getOperationOperational = async (req, res) => {
    const periodMonth = String(req.query.period_month).split('_').map(Number);
    const periodYear = String(req.query.period_year).split('_').map(Number);
    const i_status_active = Number(req.query.status || 0);
    const response = await service.getOperationOperational(periodMonth, periodYear, i_status_active);
    let status;
    if (response.code == '00')
        status = 200;
    else if (response.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(response);
};
exports.getOperationOperational = getOperationOperational;
const saveOperationOperational = async (req, res) => {
    const response = await service.saveOperationOperational(req);
    let status;
    if (response.code == '00')
        status = 200;
    else if (response.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(response);
};
exports.saveOperationOperational = saveOperationOperational;
const getOperationTechnical = async (req, res) => {
    const periodMonth = String(req.query.period_month).split('_').map(Number);
    const periodYear = String(req.query.period_year).split('_').map(Number);
    const statusActive = Number(req.query.status) || undefined;
    const result = await service.getOperationTechnical(periodMonth, periodYear, statusActive);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getOperationTechnical = getOperationTechnical;
const saveOperationTechnical = async (req, res) => {
    let result = await service.saveOperationTechnical(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveOperationTechnical = saveOperationTechnical;
const saveOperationTechnicalSummary = async (req, res) => {
    let result = await service.saveOperationTechnicalSummary(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveOperationTechnicalSummary = saveOperationTechnicalSummary;
const saveOperationTechnicalFile = async (req, res) => {
    let result = await service.saveOperationTechnicalFile(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveOperationTechnicalFile = saveOperationTechnicalFile;
const deleteOperationTechnicalFile = async (req, res) => {
    let result = await service.deleteOperationTechnicalFile(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.deleteOperationTechnicalFile = deleteOperationTechnicalFile;
const getDownloadMerge = async (req, res) => {
    let result = await service.getDownloadMerge(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getDownloadMerge = getDownloadMerge;
const getBuildMerge = async (req, res) => {
    let result = await service.getBuildMerge(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getBuildMerge = getBuildMerge;
const getCertificate = async (req, res) => {
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let result = await service.getCertificate(periodYear, periodMonth);
    let status;
    if (result.code == '00') {
        status = 200;
    }
    else if (result.code == '500') {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.getCertificate = getCertificate;
const getReporting = async (req, res) => {
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let result = await service.getReporting(periodYear, periodMonth);
    let status;
    if (result.code == '00') {
        status = 200;
    }
    else if (result.code == '500') {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.getReporting = getReporting;
