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
exports.Update = exports.All = void 0;
const repository = __importStar(require("../repository/konfigurasi-tanda-tangan.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const All = async () => {
    let response;
    try {
        let result = await repository.All();
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Update = async (req) => {
    let response;
    try {
        let { name_1, position_1, nipp_1, name_2, position_2, nipp_2 } = req.body;
        let { id } = req.params;
        const FindID = await repository.FindID(id, 1);
        if (FindID.length > 0) {
            const createHistory = FindID.map((report) => ({
                ...report,
                n_updated_by: req.userId,
                d_updated_at: (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss')
            }));
            await repository.InsertHistory(createHistory);
        }
        else {
            return build.response("404", "config signature not found", {});
        }
        // const updateData = FindID.map((report: any) => ({
        //   ...report,
        //   n_name_1 : name_1,
        //   n_position_1 : position_1,
        //   i_nipp_1 : nipp_1,
        //   n_name_2 : name_2,
        //   n_position_2 : position_2,
        //   i_nipp_2 : nipp_2,
        //   n_updated_by: req.userId,
        //   d_updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        // }));
        let data = {
            n_name_1: name_1,
            n_position_1: position_1,
            i_nipp_1: nipp_1,
            n_name_2: name_2,
            n_position_2: position_2,
            i_nipp_2: nipp_2 || null,
            n_updated_by: req.userId,
            d_updated_at: (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss')
        };
        await repository.Update(id, data);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
