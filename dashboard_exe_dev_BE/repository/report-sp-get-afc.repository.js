"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (startDate, endDate, fareType = null, distance = null) => {
    let result = await db_config_1.default.raw(`SELECT json_agg(my_data) FROM pso.sp_get_afc('${startDate}', '${endDate}', ${fareType}, ${distance})`);
    return JSON.parse(JSON.stringify(result.rows[0].json_agg));
};
exports.All = All;
