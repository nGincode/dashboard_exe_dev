"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (startDate, endDate) => {
    let result = await db_config_1.default.raw(`
      SELECT
        distance_station AS distance,
        total_volume_peak, 
        total_volume_off_peak, 
        total_revenue_peak, 
        total_revenue_off_peak, 
        total_volume_all AS total_volume, 
        total_revenue_all AS total_revenue
      FROM
        pso.sp_get_passenger_income('${startDate}', '${endDate}');
    `);
    return result;
};
exports.All = All;
