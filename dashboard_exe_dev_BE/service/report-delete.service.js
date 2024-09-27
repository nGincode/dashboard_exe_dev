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
exports.Delete = void 0;
const repository = __importStar(require("../repository/report-delete.repository"));
const build = __importStar(require("../helper/response.helper"));
const service = __importStar(require("../service/activity.service"));
const Delete = async (req) => {
    let response;
    try {
        let { code, month, year } = req.body;
        let result;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let tableName = checkType.n_table_data;
        let menuName = checkType.c_type_report;
        result = await repository.Trx(month, year, req.userId, tableName);
        if (result != 1) {
            throw result;
        }
        else {
            response = build.response("00", "success", {});
        }
        // if (code == "INCOME_COST") {
        //   await repository.deleteIncomeCost(tableName, month, year);
        // } else {
        //   await repository.Delete(tableName, month, year);
        // }
        req.body.menu = menuName;
        req.body.description = 'Delete data ' + menuName;
        // req.body.j_old_data = getData
        // req.body.j_new_data = updateData
        await service.InsertActivity(req);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
