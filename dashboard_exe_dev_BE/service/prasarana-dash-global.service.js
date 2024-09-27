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
exports.unapprove = exports.approve = exports.getIndocator = void 0;
const repository = __importStar(require("../repository/prasarana-dash-global.repository"));
const build = __importStar(require("../helper/response.helper"));
const getIndocator = async (periodYear, periodMonth, dashboardType, param) => {
    let response;
    try {
        const result = await repository.getIndicator(periodYear, periodMonth, dashboardType, param);
        if (result) {
            response = build.response("00", "success", result.rows);
        }
        else {
            response = build.response("400", "invalid input type", []);
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.getIndocator = getIndocator;
const approve = async (req) => {
    let response;
    try {
        const dashboardType = req.body.c_dashboard_type;
        const cParam = req.body.c_param;
        const tableName = await repository.getTableName(dashboardType, cParam);
        const result = await repository.approve(req, req.body.data, tableName.rows[0].n_table_data, req.userId);
        if (result) {
            response = build.response("00", "success", {});
        }
        else {
            response = build.response("400", "invalid input type", {});
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.approve = approve;
const unapprove = async (req) => {
    let response;
    try {
        const dashboardType = req.body.c_dashboard_type;
        const cParam = req.body.c_param;
        const tableName = await repository.getTableName(dashboardType, cParam);
        const result = await repository.unapprove(req, req.body.data, tableName.rows[0].n_table_data, req.userId);
        if (result) {
            response = build.response("00", "success", {});
        }
        else {
            response = build.response("400", "invalid input type", {});
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.unapprove = unapprove;
