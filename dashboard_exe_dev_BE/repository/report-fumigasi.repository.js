"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trx = exports.Update = exports.Check = exports.Insert = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (start_date, end_date) => {
    let result = await db_config_1.default.raw(`select
        i_trainset,
        sum(i_total_month) as i_total_month
      from
        pso.t_d_fumigasi tdf
      where
        i_trainset like '%Trainset%' and
        TO_DATE(concat(i_period_year,i_period_month) ,'YYYYMM')::date between '${start_date}' and '${end_date}'
      group by
        1
      order by
        SPLIT_PART(i_trainset ,
        ' ',
        2)::int4 asc`);
    return result.rows;
};
exports.All = All;
const Insert = async (data) => {
    let result = await db_config_1.default.withSchema("pso").table("t_d_fumigasi").insert(data);
    return result;
};
exports.Insert = Insert;
const Check = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_fumigasi")
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
        .table("t_d_fumigasi")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .update(data);
    return result;
};
exports.Update = Update;
const Trx = async (month, year, userID, dataInsert) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, 't_d_fumigasi')`);
            await trx("pso.t_d_fumigasi").insert(dataInsert);
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
