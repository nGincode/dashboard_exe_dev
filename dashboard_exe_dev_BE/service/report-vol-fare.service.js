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
exports.Allv2 = exports.All = exports.Insert = void 0;
const repository = __importStar(require("../repository/report-vol-fare.repository"));
const build = __importStar(require("../helper/response.helper"));
const Insert = async (req) => {
    let response;
    try {
        let { month, year, data } = req.body;
        let result;
        for (let dataLoop of data) {
            dataLoop.i_period_month = month;
            dataLoop.i_period_year = year;
            dataLoop.n_created_by = req.userId;
        }
        result = await repository.Trx(month, year, req.userId, data);
        if (result != 1) {
            throw result;
        }
        else {
            response = build.response("00", "success", {});
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const All = async (req) => {
    let response;
    try {
        let { month, year, c_fare_header, start, end } = req.query || "";
        // let arr = date.split("-");
        // console.log(date)
        //Get Header with month and year
        // let getHeader = await repository.GetDataHeader(month, year);
        //Get Header with between two dates
        let getHeader = await repository.GetDataHeaderBetween(start, end);
        // if(!c_fare_header || c_fare_header == "") {
        //   c_fare_header = getHeader[0].c_fare_header
        // }
        // console.log(c_fare_header)
        // let result = await repository.All(Number(arr[1]), Number(arr[0]));
        let dataSend = await Promise.all(getHeader.map(async (item) => {
            let result = await repository.GetData(item.c_fare_header);
            return {
                c_fare_header: item.c_fare_header,
                d_start_at: item.d_start_at,
                d_end_at: item.d_end_at,
                data: result,
            };
        }));
        // console.log(result)
        let sendData = dataSend;
        response = build.response("00", "success", sendData);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Allv2 = async (req) => {
    let response;
    try {
        let { month, year } = req.query;
        let result = await repository.Allv2(Number(month), Number(year));
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.Allv2 = Allv2;
