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
exports.All = void 0;
const repository = __importStar(require("../repository/report-sp-get-afc.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const All = async (req) => {
    let response;
    try {
        let { startDate, endDate, fareType, distance } = req.query;
        let start_date = (0, moment_1.default)(`${startDate}`).format("YYYY-MM-DD");
        let end_date = (0, moment_1.default)(`${endDate}`).format("YYYY-MM-DD");
        // let fare_type = fareType;
        // let i_distance = distance;
        let result = await repository.All(start_date, end_date, fareType, distance);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
