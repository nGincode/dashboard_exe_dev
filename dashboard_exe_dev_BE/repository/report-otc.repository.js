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
        // perhari
        result = await db_config_1.default.raw(`
      select
        *,
        i_total_day * i_total_day_otc * i_total_freq_day_otc as jumlah_kinerja_otc
      from
        pso.t_d_otc
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
            endDate = (0, moment_1.default)(startDate).format('YYYY-12-DD');
        }
        // triwulan
        result = await db_config_1.default.raw(`
        select
        i_trainset,
        cast(sum(i_total_day) as int)as i_total_day,
        cast(max(i_total_day_otc) as int) as i_total_day_otc,
        cast(max(i_total_freq_day_otc) as int) as i_total_freq_day_otc,
        cast(sum(i_total_day) * max(i_total_day_otc) * max(i_total_freq_day_otc)  as int) as jumlah_kinerja_otc
    --  cast(sum(jumlah_kinerja_otc) as int) as jumlah_kinerja_otc
      from
        (
          select
            *,
            i_total_day * i_total_day_otc * i_total_freq_day_otc as jumlah_kinerja_otc,
            concat(i_period_year , '-' , i_period_month,'-1')::DATE as full_date
          from
            pso.t_d_otc
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
