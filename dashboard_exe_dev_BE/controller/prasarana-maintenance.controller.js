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
exports.getReporting = exports.getCertificate = exports.saveMaintenanceTechnicalFile = exports.saveMaintenanceTechnical = exports.saveMaintenanceSafety = exports.saveMaintenanceOperational = exports.getMaintenanceTechnical = exports.getMaintenanceSafety = exports.getMaintenanceOperational = exports.getDownloadMerge = exports.getBuildMerge = exports.deleteMaintenanceTechnicalFile = void 0;
const service = __importStar(require("../service/prasarana-maintenance.service"));
const getMaintenanceSafety = async (req, res) => {
    let periodMonth = String(req.query.period_month).split('_').map(Number);
    let periodYear = String(req.query.period_year).split('_').map(Number);
    let statusActive = req.query.status || 0;
    let result = await service.getMaintenanceSafety(periodYear, periodMonth, statusActive);
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
exports.getMaintenanceSafety = getMaintenanceSafety;
const saveMaintenanceSafety = async (req, res) => {
    let result = await service.saveMaintenanceSafety(req);
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
exports.saveMaintenanceSafety = saveMaintenanceSafety;
const getMaintenanceOperational = async (req, res) => {
    const periodMonth = String(req.query.period_month).split('_').map(Number);
    const periodYear = String(req.query.period_year).split('_').map(Number);
    const i_status_active = Number(req.query.status || 0);
    const response = await service.getMaintenanceOperational(periodMonth, periodYear, i_status_active);
    let status;
    if (response.code == '00')
        status = 200;
    else if (response.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(response);
};
exports.getMaintenanceOperational = getMaintenanceOperational;
const saveMaintenanceOperational = async (req, res) => {
    const response = await service.saveMaintenanceOperational(req);
    let status;
    if (response.code == '00')
        status = 200;
    else if (response.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(response);
};
exports.saveMaintenanceOperational = saveMaintenanceOperational;
const getMaintenanceTechnical = async (req, res) => {
    const periodMonth = String(req.query.period_month).split('_').map(Number);
    const periodYear = String(req.query.period_year).split('_').map(Number);
    const statusActive = Number(req.query.status) || undefined;
    const result = await service.getMaintenanceTechnical(periodMonth, periodYear, statusActive);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getMaintenanceTechnical = getMaintenanceTechnical;
const saveMaintenanceTechnical = async (req, res) => {
    let result = await service.saveMaintenanceTechnical(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveMaintenanceTechnical = saveMaintenanceTechnical;
const saveMaintenanceTechnicalFile = async (req, res) => {
    let result = await service.saveMaintenanceTechnicalFile(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveMaintenanceTechnicalFile = saveMaintenanceTechnicalFile;
const deleteMaintenanceTechnicalFile = async (req, res) => {
    let result = await service.deleteMaintenanceTechnicalFile(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.deleteMaintenanceTechnicalFile = deleteMaintenanceTechnicalFile;
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
