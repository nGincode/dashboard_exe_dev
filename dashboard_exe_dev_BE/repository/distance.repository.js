"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxDistance = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default
        .withSchema("opr")
        .table("t_m_distance")
        .select("i_distance as distance")
        .where("b_active", true)
        .groupBy("i_distance")
        .orderBy("i_distance", "asc");
    return result;
};
exports.All = All;
const getMaxDistance = async () => {
    let result = await db_config_1.default
        .withSchema("opr")
        .table("t_m_distance")
        .where("b_active", true)
        .max("i_distance as distance")
        .first();
    return result;
};
exports.getMaxDistance = getMaxDistance;
