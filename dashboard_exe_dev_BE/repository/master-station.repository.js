"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default.raw(`
	with all_lane as (
		-- to get all lane
			select 
				i_id as lane_id,
				c_lane,
				n_lane
			from 
					opr.t_m_lane tml
			where
					tml.b_active = true
			order by 
				tml.i_id asc	
		),
		sub_station as(
		-- get all station
			select 
				tms.c_station,
				case 
					when tms.n_station = 'KAMPUNG RAMBUTAN' then 'KAMPUNG RAMBUTAN'
					else
						tms.n_station
				end,
				tms.i_order,
				i_line_id as lane_id_parent
			from 
				opr.t_m_lane tml
			left join
				opr.t_m_station tms 
			on
				tml.i_id = tms.i_line_id
			where
				tml.b_active = true
				and tms.b_active = true
			order by 
				tml.i_id asc,
				i_order asc
		)
		SELECT
					json_agg(submenu) AS all_lane -- Menggabungkan semua submenu menjadi satu array
				FROM (
					SELECT
					json_build_object(
						'id_lane', lane_id,
						'c_lane', c_lane ,
						'n_lane', n_lane,
						'station', (
						SELECT
							json_agg(
							json_build_object(
								'c_station', c_station,
								'n_station', n_station,
								'i_order', i_order                       
							)
							)
						FROM
							sub_station
						WHERE
							lane_id = sub_station.lane_id_parent
						)
					) AS submenu
					FROM
					all_lane
				) AS subquery		
            `);
    return result.rows[0].all_lane;
};
exports.All = All;
