"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataPeformancestation = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const moment_1 = __importDefault(require("moment"));
const GetDataPeformancestation = async (start, end) => {
    const output = {
        all: [],
        // pick: [],
        // of_pick:[],
        station: [],
        t_all: [],
        // t_pick:[],
        // t_ofpick:[]
    };
    let totals1 = {};
    // let totals2: any = {
    // };
    // let totals3: any = {
    // };
    let result1 = [];
    result1 = await db_config_1.default.raw(`select json_agg(my_data) from pso.sp_get_afc('${start}','${end}',null,null,'${(0, moment_1.default)(start).format('HH:mm:ss')}','${(0, moment_1.default)(end).format('HH:mm:ss')}')`);
    // let result2 = await knex.raw(`select json_agg(my_data) from pso.sp_get_afc('${start}','${end}',${0})`)
    // let result3 = await knex.raw(`select json_agg(my_data) from pso.sp_get_afc('${start}','${end}',${1})`)
    let station = await db_config_1.default.raw(`select c_station, n_station from opr.t_m_station where b_active is true order by i_order asc `);
    output.all.push(result1.rows[0].json_agg);
    // output.pick.push(result2.rows[0].json_agg)
    // output.of_pick.push(result3.rows[0].json_agg)
    station.rows.forEach((rows, i) => {
        let datas = {
            c_station: null,
            n_station: null,
        };
        datas.c_station = rows.c_station;
        datas.n_station = rows.n_station;
        // datas.c_station = "St "+rows.c_station
        totals1[rows.c_station] = 0;
        // totals2[rows.c_station] = 0;
        // totals3[rows.c_station] = 0;
        output.station.push(datas);
    });
    let datas = {
        c_station: 'i_total',
        n_station: 'TOTAL',
    };
    output.station.push(datas);
    totals1.i_total = 0;
    // totals2.i_total = 0;
    // totals3.i_total = 0;
    result1.rows[0].json_agg.forEach((rows1) => {
        station.rows.forEach((rows) => {
            if (totals1.hasOwnProperty(rows.c_station) && !isNaN(parseInt(rows1[rows.c_station]))) {
                totals1[rows.c_station] += parseInt(rows1[rows.c_station]);
            }
        });
        totals1.i_total += parseInt(rows1['i_total']);
    });
    output.t_all.push(totals1);
    // result2.rows[0].json_agg.forEach((rows1: any) => {
    //   station.rows.forEach((rows: any) => {
    //     if (totals2.hasOwnProperty(rows.c_station) && !isNaN(parseInt(rows1[rows.c_station]))) {
    //       totals2[rows.c_station] += parseInt(rows1[rows.c_station]);
    //     }
    //   });
    //   totals2.i_total += parseInt(rows1['i_total']);
    // });
    // output.t_pick.push(totals2)
    // result3.rows[0].json_agg.forEach((rows1: any) => {
    //   station.rows.forEach((rows: any) => {
    //     if (totals3.hasOwnProperty(rows.c_station) && !isNaN(parseInt(rows1[rows.c_station]))) {
    //       totals3[rows.c_station] += parseInt(rows1[rows.c_station]);
    //     }
    //   });
    //   totals3.i_total += parseInt(rows1['i_total']);
    // });
    // output.t_ofpick.push(totals3)
    return output;
    // return JSON.parse(JSON.stringify(result.rows[0].json_agg))
};
exports.GetDataPeformancestation = GetDataPeformancestation;
