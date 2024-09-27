"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const moment_1 = __importDefault(require("moment"));
const All = async (status, month, year) => {
    let result;
    if (status == 1) {
        result = await db_config_1.default.raw(`
      select
        *
      from
        pso.t_d_washing_facilities
      where
        i_period_month = ${month}
        and i_period_year = ${year}
        -- and i_status_active = 1
      order by 
        length(i_trainset), i_trainset
    `);
    }
    else {
        let startDate = (0, moment_1.default)(year + '-' + month).format('YYYY-MM-DD');
        let endDate;
        if (status == 2) {
            // triwulan
            endDate = (0, moment_1.default)(startDate).add(2, 'M').format('YYYY-MM-DD');
        }
        else if (status == 3) {
            // year
            endDate = (0, moment_1.default)(startDate).format('YYYY');
            endDate = endDate + "-12" + "-01";
            console.log("end: ", endDate);
        }
        // triwulan
        result = await db_config_1.default.raw(`
      select
        i_trainset,
        cast(sum(i_interior_wash) as int)as i_interior_wash
      from
        (
          select
            *,
            concat(i_period_year , '-' , i_period_month,'-1')::DATE as full_date
          from
            pso.t_d_washing_facilities
        ) as b
      where
        b.full_date between '${startDate}' and '${endDate}'
      group by
        i_trainset
      order by
        length(i_trainset),
        i_trainset
    `);
    }
    return result.rows;
};
exports.All = All;
