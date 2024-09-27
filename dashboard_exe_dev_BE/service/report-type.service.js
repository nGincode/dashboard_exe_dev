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
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/report-type.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const All = async () => {
    let response;
    try {
        let result = await repository.All();
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { code } = req.params;
        let data = (await repository.Find(code)) ? await repository.Find(code) : {};
        response = build.response("00", "success", data);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
const Insert = async (req) => {
    let response;
    try {
        let { report_type_code, report_type_name, line_1, line_2, line_3, line_4, line_5, name_1, position_1, nipp_1, signature_1, name_2, position_2, nipp_2, signature_2, report_table, keyword, header_column, } = req.body;
        // let find = await repository.Find(report_type_code);
        // if (find) {
        //   return (response = build.response(
        //     "409",
        //     "report type code already exists",
        //     {}
        //   ));
        // }
        // let checkTable = await repository.checkTable(report_table);
        // if (!checkTable) {
        //   return (response = build.response(
        //     "410",
        //     "report table doesn't exists",
        //     {}
        //   ));
        // }
        let dataInsert = {
            c_type_report: report_type_code,
            n_type_report: report_type_name,
            n_table_data: report_table,
            n_line_1: line_1,
            n_line_2: line_2,
            n_line_3: line_3,
            n_line_4: line_4,
            n_line_5: line_5,
            n_name_1: name_1,
            n_position_1: position_1,
            i_nipp_1: nipp_1,
            n_signature_1: signature_1,
            n_name_2: name_2,
            n_position_2: position_2,
            i_nipp_2: nipp_2,
            n_signature_2: signature_2,
            n_created_by: req.userId,
            n_keyword: keyword,
            n_header_column: header_column,
        };
        await repository.Insert(dataInsert);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const Update = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let { report_type_code, report_type_name, line_1, line_2, line_3, line_4, line_5, name_1, position_1, nipp_1, signature_1, name_2, position_2, nipp_2, signature_2, report_table, keyword, header_column, } = req.body;
        // let find = await repository.Find(report_type_code);
        // if (find) {
        //   return (response = build.response(
        //     "409",
        //     "report type code has already created",
        //     {}
        //   ));
        // }
        // let checkTable = await repository.checkTable(report_table);
        // if (!checkTable) {
        //   return (response = build.response(
        //     "410",
        //     "report table doesn't exists",
        //     {}
        //   ));
        // }
        let dataUpdate = {
            c_type_report: report_type_code,
            n_type_report: report_type_name,
            n_table_data: report_table,
            n_line_1: line_1,
            n_line_2: line_2,
            n_line_3: line_3,
            n_line_4: line_4,
            n_line_5: line_5,
            n_name_1: name_1,
            n_position_1: position_1,
            i_nipp_1: nipp_1,
            n_signature_1: signature_1,
            n_name_2: name_2,
            n_position_2: position_2,
            i_nipp_2: nipp_2,
            n_signature_2: signature_2,
            n_updated_by: req.userId,
            d_updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            n_keyword: keyword,
            n_header_column: header_column,
        };
        await repository.Update(id, dataUpdate);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
const Delete = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let data = {
            i_status_active: 2,
            d_deleted_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            n_deleted_by: req.userId,
        };
        await repository.Delete(id, data);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
