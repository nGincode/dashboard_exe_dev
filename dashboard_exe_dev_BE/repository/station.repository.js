"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default
        .withSchema("opr")
        .table("t_m_station")
        .select("c_station as code", "n_station as name")
        .where("b_active", true);
    return result;
};
exports.All = All;
