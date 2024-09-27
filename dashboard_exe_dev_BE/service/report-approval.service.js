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
exports.UnapproveById = exports.ApproveById = exports.Unapprove = exports.Approve = void 0;
const repository = __importStar(require("../repository/report-approval.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const service = __importStar(require("../service/activity.service"));
const Approve = async (req) => {
    let response;
    try {
        let { code, codeMenu = '', month, year } = req.body;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let tableName = checkType.n_table_data;
        let updateData;
        updateData = {
            approved_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            approved_by: req.userId,
        };
        if (code == "INCOME_COST" || code == "PRASARANA_INCOME_COST") {
            await repository.approveIncomeCost(parseInt(month), parseInt(year), tableName, updateData, code);
        }
        else if (code == "STRUKTUR_ORGANISASI") {
            await repository.approveStrukturOrganisasi(parseInt(month), parseInt(year), tableName, updateData);
        }
        else if (code == "DAFTAR_HADIR_DINASAN" || code == "SERAH_TERIMA_DINASAN" || code == "DATA_KELAMBATAN") {
            await repository.approveCustom(parseInt(month), parseInt(year), tableName, updateData, codeMenu);
        }
        else {
            updateData = {
                approved_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
                approved_by: req.userId,
                i_status_active: 4,
            };
            await repository.Approve(parseInt(month), parseInt(year), tableName, updateData);
        }
        req.body.menu = code;
        req.body.description = 'Approve ' + code;
        // req.body.j_old_data = getData
        req.body.j_new_data = updateData;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Approve = Approve;
const Unapprove = async (req) => {
    let response;
    try {
        let { code, codeMenu = '', month, year } = req.body;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let tableName = checkType.n_table_data;
        let updateData;
        updateData = {
            approved_at: null,
            approved_by: null,
        };
        if (code == "INCOME_COST" || code == "PRASARANA_INCOME_COST") {
            await repository.approveIncomeCost(parseInt(month), parseInt(year), tableName, updateData, code);
        }
        else if (code == "STRUKTUR_ORGANISASI") {
            await repository.approveStrukturOrganisasi(parseInt(month), parseInt(year), tableName, updateData);
        }
        else if (code == "DAFTAR_HADIR_DINASAN" || code == "SERAH_TERIMA_DINASAN" || code == "DATA_KELAMBATAN") {
            await repository.approveCustom(parseInt(month), parseInt(year), tableName, updateData, codeMenu);
        }
        else {
            updateData = {
                approved_at: null,
                approved_by: null,
                i_status_active: 1,
            };
            await repository.Approve(parseInt(month), parseInt(year), tableName, updateData);
        }
        req.body.menu = code;
        req.body.description = 'Unapprove ' + code;
        // req.body.j_old_data = getData
        req.body.j_new_data = updateData;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Unapprove = Unapprove;
const ApproveById = async (req) => {
    let response;
    try {
        let { code, codeMenu = '', data } = req.body;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let tableName = checkType.n_table_data;
        let updateData;
        updateData = {
            approved_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            approved_by: req.userId,
        };
        if (codeMenu == "") {
            await repository.approveCustomById(tableName, updateData, codeMenu, data);
        }
        else {
            await repository.approveById(tableName, updateData, data);
        }
        req.body.menu = code;
        req.body.description = 'Approve ' + code;
        // req.body.j_old_data = getData
        req.body.j_new_data = updateData;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.ApproveById = ApproveById;
const UnapproveById = async (req) => {
    let response;
    try {
        let { code, codeMenu = '', data } = req.body;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let tableName = checkType.n_table_data;
        let updateData;
        updateData = {
            approved_at: null,
            approved_by: null,
        };
        if (codeMenu == "") {
            await repository.approveCustomById(tableName, updateData, codeMenu, data);
        }
        else {
            await repository.approveById(tableName, updateData, data);
        }
        req.body.menu = code;
        req.body.description = 'Unapprove ' + code;
        // req.body.j_old_data = getData
        req.body.j_new_data = updateData;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.UnapproveById = UnapproveById;
