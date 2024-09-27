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
const service = __importStar(require("../service/prasarana-master.service"));
const getMasterParameter = async (req, res) => {
    const { c_dashboard_type } = req.query;
    const result = await service.getMasterParameter(c_dashboard_type);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getMasterParameter = getMasterParameter;
const getMasterTarget = async (req, res) => {
    const { period_year, period_month, c_dashboard_type } = req.query;
    const result = await service.getMasterTarget({
        period_year: period_year,
        period_month: period_month,
        c_dashboard_type: c_dashboard_type,
    });
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.getMasterTarget = getMasterTarget;
const saveMasterTarget = async (req, res) => {
    const result = await service.saveMasterTarget(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.saveMasterTarget = saveMasterTarget;
const updateMasterTarget = async (req, res) => {
    const result = await service.updateMasterTarget(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.updateMasterTarget = updateMasterTarget;
const deleteMasterTarget = async (req, res) => {
    const result = await service.deleteMasterTarget(req);
    let status;
    if (result.code == '00')
        status = 200;
    else if (result.code == '500')
        status = 500;
    else
        status = 400;
    return res.status(status).json(result);
};
exports.deleteMasterTarget = deleteMasterTarget;
