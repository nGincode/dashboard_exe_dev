"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = exports.getUser = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Insert = async (data) => {
    let result = await db_config_1.default
        .table("t_d_activity")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const getUser = async (userId) => {
    let result = await db_config_1.default
        .table("users")
        .where('id', userId)
        .first();
    return result;
};
exports.getUser = getUser;
const Activity = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT 
     *
    FROM t_d_activity where d_activity_at::date between '${startOf}' and '${endOf}' order by d_activity_at desc`);
    return result.rows;
};
exports.Activity = Activity;
