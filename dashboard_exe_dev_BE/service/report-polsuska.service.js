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
exports.All = exports.Insert = void 0;
const repository = __importStar(require("../repository/report-polsuska.repository"));
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
    // try {
    //   let { month, year, data } = req.body;
    //   // console.log(month + " | " + year)
    //   console.log("data", data)
    //   // let newData<dataPolsuska>[] = data
    //   let check = await repository.Check(parseInt(month), parseInt(year));
    //   if (check) {
    //     let dataUpdate = {
    //       i_status_active: 2,
    //       n_updated_by: req.userId,
    //       d_updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    //     };
    //     await repository.Update(month, year, dataUpdate);
    //   }
    //   for (let dataLoop of data) {
    //     console.log(dataLoop)
    //     dataLoop.i_period_month = month;
    //     dataLoop.i_period_year = year;
    //     dataLoop.n_created_by = req.userId;
    //   }
    //   // const newData = data.map((item : any) => {
    //   //   item.i_period_month = month;
    //   //   item.i_period_year = year;
    //   //   item.n_created_by = req.userId;
    //   //   return item
    //   // })
    //   console.log(data)
    //   await repository.Insert(data);
    //   response = build.response("00", "success", {});
    // } catch (error) {
    //   response = build.response("500", `${(error as Error).message}`, {});
    //   console.log(error)
    // }
    // return response;
};
exports.Insert = Insert;
// const All = async (req: Request) => {
//   let response;
//   try {
//     let { date } = req.params;
//     let arr = date.split("-");
//     // console.log(arr)
//     let result = await repository.All(Number(arr[1]), Number(arr[0]));
//     // console.log(result)
//     response = build.response("00", "success", result);
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, []);
//   }
//   return response;
// };
const All = async (req) => {
    let response;
    try {
        let { start_date, end_date } = req.query;
        let result = await repository.All(start_date, end_date);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
