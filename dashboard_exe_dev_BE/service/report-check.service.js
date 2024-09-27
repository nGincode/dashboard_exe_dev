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
exports.checkFormat = exports.Check = void 0;
const repository = __importStar(require("../repository/report-check.repository"));
const build = __importStar(require("../helper/response.helper"));
const Check = async (req) => {
    let response;
    try {
        let { code, month, year, schema = '' } = req.body;
        if (code == "INCOME_COST") {
            let checkApproval = await repository.checkApprovalIncomeCost(month, year);
            if (checkApproval) {
                return (response = build.response("411", "report data in has already approved", {}));
            }
            let check = await repository.checkIncomeCost(month, year);
            if (check) {
                return (response = build.response("407", "report data has already created", {}));
            }
        }
        else if (code == "PRASARANA_INCOME_COST") {
            let checkApproval = await repository.checkApprovalPraIncomeCost(month, year);
            if (checkApproval) {
                return (response = build.response("411", "report data in has already approved", {}));
            }
            let check = await repository.checkPraIncomeCost(month, year);
            if (check) {
                return (response = build.response("407", "report data has already created", {}));
            }
        }
        else if (code == 'PERFORMANCE_MAINTENANCE' || code == 'PERFORMANCE_OPERATION') {
            let checkType = await repository.checkType(code);
            if (!checkType) {
                return build.response("406", "report type code is not found", {});
            }
            let tableName = checkType.n_table_data;
            let checkApproval = await repository.checkApprovalDashMaintenance(month, year, tableName, 'prasarana');
            if (checkApproval) {
                return (response = build.response("411", "report data has already approved", {}));
            }
            let check = await repository.CheckDashMaintenance(tableName, parseInt(month), parseInt(year), 'prasarana');
            if (check) {
                return (response = build.response("407", "report data has already created", {}));
            }
        }
        else {
            let checkType = await repository.checkType(code);
            if (!checkType) {
                return build.response("406", "report type code is not found", {});
            }
            let tableName = checkType.n_table_data;
            // if (checkType.c_type_report == code) {
            //   tableName = checkType.n_table_data;
            // }
            let checkApproval = await repository.checkApproval(month, year, tableName, schema);
            if (checkApproval) {
                return (response = build.response("411", "report data has already approved", {}));
            }
            let check = await repository.Check(tableName, parseInt(month), parseInt(year), schema);
            if (check) {
                return (response = build.response("407", "report data has already created", {}));
            }
        }
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Check = Check;
const checkFormat = async (req) => {
    let response;
    try {
        let { code } = req.body;
        let checkType = await repository.checkType(code);
        if (!checkType) {
            return build.response("406", "report type code is not found", {});
        }
        let result = await repository.checkFormat(code);
        response = build.response("00", "success", result ? result : {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.checkFormat = checkFormat;
