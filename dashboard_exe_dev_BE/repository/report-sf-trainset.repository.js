"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trx = exports.All = exports.Update = exports.Check = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Insert = async (data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_sf_trainset")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const Check = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_sf_trainset")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .where("i_status_active", 1)
        .first();
    return result;
};
exports.Check = Check;
const Update = async (month, year, data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_sf_trainset")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .update(data);
    return result;
};
exports.Update = Update;
const All = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_sf_trainset")
        .where("i_period_month", month)
        .where("i_period_year", year);
    // .where("i_status_active", "<>", 2);
    return result;
};
exports.All = All;
const Trx = async (month, year, userID, dataInsert) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, 't_d_sf_trainset')`);
            await trx.batchInsert("pso.t_d_sf_trainset", dataInsert, 500);
            await trx.commit();
            result = 1;
        }
        catch (error) {
            await trx.rollback();
            result = error;
        }
    });
    return result;
};
exports.Trx = Trx;
