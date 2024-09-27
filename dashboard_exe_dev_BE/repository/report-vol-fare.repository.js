"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allv2 = exports.Trx = exports.GetDataHeaderBetween = exports.GetDataHeader = exports.GetData = exports.All = exports.Update = exports.Check = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_vol_fare")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .where("i_status_active", 1);
    return result;
};
exports.All = All;
const GetData = async (c_fare_header) => {
    let result = await db_config_1.default.raw(`
  select tmd.i_distance , tmf.m_fare, 
	case 
		when tmfc.i_discount_method is not null then
			case
				when tmfc.i_discount_method = 1 then tmfc.m_value
				else 
					case
						when tmfc.i_discount_method = 2 then tmf.m_fare - tmfc.m_value
						else 
							case
								when tmfc.i_discount_method = 3 then tmf.m_fare - (tmf.m_fare*tmfc.m_value/100::float)
								else 
									case
										when tmfc.i_discount_method = 4 then 
											case 
												when tmf.m_fare > tmfc.m_value then tmfc.m_value
												else tmf.m_fare
											end
											
									end
									
							end
					end
			end
			else null
	end as offpeakhour
	
from opr.t_m_distance tmd
left join opr.t_m_fare tmf on trim(tmf.c_station_start) = trim(tmd.c_station_from) and trim(tmf.c_station_end) = trim(tmd.c_station_to)
left join opr.t_m_fare_header tmfh on tmfh.c_fare_header = tmf.c_fare_header
left join opr.t_m_fare_custom tmfc on coalesce(tmfh.d_end_at, now())  between tmfc.d_start_at and coalesce(tmfc.d_end_at, now()) 
	where tmfh.c_fare_header = '${c_fare_header}'
group by 1, 2, 3
order by 1
  `);
    return result.rows;
};
exports.GetData = GetData;
const GetDataHeader = async (month, year) => {
    let result = await db_config_1.default.raw(`
  select tmfh.c_fare_header, tmfh.d_start_at, coalesce(tmfh.d_end_at, now()) as d_end_at from opr.t_m_fare_header tmfh 
	where (EXTRACT(YEAR FROM coalesce(tmfh.d_end_at, now())) = ${year}
  and EXTRACT(month FROM coalesce(tmfh.d_end_at, now())) = ${month})
  or ('${year}-${month}-01' between tmfh.d_start_at and coalesce(tmfh.d_end_at, now()))
  or ('${year}-${month}-30' between tmfh.d_start_at and coalesce(tmfh.d_end_at, now()))
  Order by tmfh.d_start_at ASC
  `);
    return result.rows;
};
exports.GetDataHeader = GetDataHeader;
const GetDataHeaderBetween = async (start, end) => {
    let result = await db_config_1.default.raw(`
  select tmfh.c_fare_header, tmfh.d_start_at, coalesce(tmfh.d_end_at, now()) as d_end_at from opr.t_m_fare_header tmfh 
	where ('${start}' between tmfh.d_start_at and coalesce(tmfh.d_end_at, now()))
  or ('${end}' between tmfh.d_start_at and coalesce(tmfh.d_end_at, now()))
  or ( tmfh.d_start_at between '${start}'  and '${end}')
  Order by tmfh.d_start_at ASC
  `);
    return result.rows;
};
exports.GetDataHeaderBetween = GetDataHeaderBetween;
const Insert = async (data) => {
    let result = await db_config_1.default.withSchema("pso").table("t_d_vol_fare").insert(data);
    return result;
};
exports.Insert = Insert;
const Check = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_vol_fare")
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
        .table("t_d_vol_fare")
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
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, 't_d_vol_fare')`);
            await trx.batchInsert("pso.t_d_vol_fare", dataInsert, 500);
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
const Allv2 = async (month, year) => {
    let result = await db_config_1.default.raw(`select
    *
    from pso.t_d_vol_fare tdvf 
where i_period_month = '${month}' and i_period_year = '${year}'
 order by SPLIT_PART(i_distance,' ',3)::int4 asc`);
    // let result = await knex
    //   .withSchema("pso")
    //   .table("t_d_vol_fare")
    //   .where("i_period_month", month)
    //   .where("i_period_year", year);
    // // .where("i_status_active", "<>", 2);
    return result.rows;
};
exports.Allv2 = Allv2;
