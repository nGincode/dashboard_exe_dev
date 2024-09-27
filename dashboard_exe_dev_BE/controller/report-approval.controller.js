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
exports.UnapproveById = exports.ApproveById = exports.Unapprove = exports.Approve = void 0;
const service = __importStar(require("../service/report-approval.service"));
const Approve = async (req, res) => {
    let result = await service.Approve(req);
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
exports.Approve = Approve;
const Unapprove = async (req, res) => {
    let result = await service.Unapprove(req);
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
exports.Unapprove = Unapprove;
const ApproveById = async (req, res) => {
    let result = await service.ApproveById(req);
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
exports.ApproveById = ApproveById;
const UnapproveById = async (req, res) => {
    let result = await service.UnapproveById(req);
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
exports.UnapproveById = UnapproveById;
