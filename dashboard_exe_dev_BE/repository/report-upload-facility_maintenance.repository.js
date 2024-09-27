"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.update = exports.Insert = exports.checkPeriod = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const checkPeriod = async (month, year) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_facility_maintenance")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .where("i_status_active", 1)
        .first();
    return result;
};
exports.checkPeriod = checkPeriod;
const Insert = async (data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_facility_maintenance")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const update = async (month, year, data) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_facility_maintenance")
        .where("i_period_month", month)
        .where("i_period_year", year)
        .update(data);
    return result;
};
exports.update = update;
const All = async (start_date, end_date) => {
    const output = {
        data: [],
        total: []
    };
    let totals = {
        i_total: null,
        i_tph_p: null,
        i_tph_r: null,
        i_tp1_p: null,
        i_tp1_r: null,
        i_tp3_p: null,
        i_tp3_r: null,
        i_tp6_p: null,
        i_tp6_r: null,
        i_tp12_p: null,
        i_tp12_r: null,
        i_tp24_p: null,
        i_tp24_r: null,
        i_tp48_p: null,
        i_tp48_r: null,
        i_tp72_p: null,
        i_tp72_r: null,
        i_tpb_p: null,
        i_tpb_r: null,
        i_tkm_p: null,
        i_tkm_r: null,
    };
    // let result = await knex.raw(`select 
    // SPLIT_PART(tdfm.i_trainset , ' ', 2)::int4 AS tr,tdfm.i_trainset, coalesce(data_ph.i_total_p,0) as i_ph_p, 
    // coalesce(data_ph.i_total_r,0) as i_ph_r, coalesce(data_p1.i_total_p,0) as i_p1_p, coalesce(data_p1.i_total_r,0) as i_p1_r,
    // coalesce(data_p3.i_total_p,0) as i_p3_p, coalesce(data_p3.i_total_r,0) as i_p3_r, coalesce(data_p6.i_total_p,0) as i_p6_p, 
    // coalesce(data_p6.i_total_r,0) as i_p6_r, coalesce(data_p12.i_total_p,0) as i_p12_p, coalesce(data_p12.i_total_r,0) as i_p12_r,
    // coalesce(data_p24.i_total_p,0) as i_p24_p, coalesce(data_p24.i_total_r,0) as i_p24_r, coalesce(data_p48.i_total_p,0) as i_p48_p,
    // coalesce(data_p48.i_total_r,0) as i_p48_r, coalesce(data_p72.i_total_p,0) as i_p72_p, coalesce(data_p72.i_total_r,0) as i_p72_r,
    // coalesce(data_pb.i_total_p,0) as i_pb_p, coalesce(data_pb.i_total_r,0) as i_pb_r, coalesce(data_km.i_total_p,0) as i_km_p, 
    // coalesce(data_km.i_total_r,0) as i_km_r, coalesce(coalesce(data_ph.i_total,0)+coalesce(data_p1.i_total,0)+coalesce(data_p3.i_total,0)+coalesce(data_p6.i_total,0) +coalesce(data_p12.i_total,0) ,0) as i_total_1, 
    // coalesce(coalesce(data_p24.i_total,0)+coalesce(data_p48.i_total,0)+coalesce(data_p72.i_total,0)+coalesce(data_pb.i_total,0)+coalesce(data_km.i_total,0) ,0) as i_total_2, tdfm.approved_at, tdfm.approved_by  
    // from pso.t_d_facility_maintenance tdfm
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'PH'  
    //     and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_ph on data_ph.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P1'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p1 on data_p1.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P3'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p3 on data_p3.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P6'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p6 on data_p6.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P12'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p12 on data_p12.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P24'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p24 on data_p24.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P48'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p48 on data_p48.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'P72'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_p72 on data_p72.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'PB'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_pb on data_pb.i_trainset = tdfm.i_trainset
    // left join (
    //   select i_trainset, i_type, i_total_p, i_total_r, i_total from pso.t_d_facility_maintenance where i_type = 'KM TEMPUH'  
    //   and i_period_month = '${month}' and i_period_year ='${year}'
    // ) data_km on data_km.i_trainset = tdfm.i_trainset
    // where i_period_month = '${month}' and i_period_year ='${year}'
    // group by 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
    // order by SPLIT_PART(tdfm.i_trainset , ' ', 2)::int4 asc
    // `);
    let result = await db_config_1.default.raw(`select
    SPLIT_PART(data_trainset.i_trainset ,
    ' ',
    2)::int4 as tr,
    data_trainset.i_trainset,
    coalesce(data_ph.i_total_p,0) as i_ph_p,
    coalesce(data_ph.i_total_r,0) as i_ph_r,
    coalesce(data_p1.i_total_p,0) as i_p1_p,
    coalesce(data_p1.i_total_r,0) as i_p1_r,
    coalesce(data_p3.i_total_p,0) as i_p3_p,
    coalesce(data_p3.i_total_r,0) as i_p3_r,
    coalesce(data_p6.i_total_p,0) as i_p6_p,
    coalesce(data_p6.i_total_r,0) as i_p6_r,
    coalesce(data_p12.i_total_p,0) as i_p12_p,
    coalesce(data_p12.i_total_r,0) as i_p12_r,
    coalesce(data_p24.i_total_p,0) as i_p24_p,
    coalesce(data_p24.i_total_r,0) as i_p24_r,
    coalesce(data_p48.i_total_p,0) as i_p48_p,
    coalesce(data_p48.i_total_r,0) as i_p48_r,
    coalesce(data_p72.i_total_p,0) as i_p72_p,
    coalesce(data_p72.i_total_r,0) as i_p72_r,
    coalesce(data_pb.i_total_p,0) as i_pb_p,
    coalesce(data_pb.i_total_r,0) as i_pb_r,
    coalesce(data_km.i_total_p,0) as i_km_p,
    coalesce(data_km.i_total_r,0) as i_km_r
  from
    (
    select
      i_trainset
    from
      pso.t_d_facility_maintenance tdfm
    group by
      i_trainset
     ) data_trainset
  left join(
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'PH'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_ph
    on
    data_trainset.i_trainset = data_ph.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P1'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p1
    on
    data_trainset.i_trainset = data_p1.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P3'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p3
    on
    data_trainset.i_trainset = data_p3.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P6'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p6
    on
    data_trainset.i_trainset = data_p6.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P12'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p12
    on
    data_trainset.i_trainset = data_p12.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P24'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p24
    on
    data_trainset.i_trainset = data_p24.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P48'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p48
    on
    data_trainset.i_trainset = data_p48.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'P72'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_p72
    on
    data_trainset.i_trainset = data_p72.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'PB'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_pb
    on
    data_trainset.i_trainset = data_pb.i_trainset
  left join
       (
    select
      i_trainset,
      i_type,
      coalesce(sum(i_total_p),0) as i_total_p,
      coalesce(sum(i_total_r),0) as i_total_r
    from
      pso.t_d_facility_maintenance
    where
      i_type = 'KM TEMPUH'
      and
        TO_DATE(concat(i_period_year,
      i_period_month) ,
      'YYYYMM')::date between '${start_date}' and '${end_date}'
    group by
      i_trainset,
      i_type
          ) data_km
    on
    data_trainset.i_trainset = data_km.i_trainset
  order by
    SPLIT_PART(data_trainset.i_trainset ,
    ' ',
    2)::int4 asc`);
    // result.forEach((rows:any, i)=>{
    //   let datas: any = {
    //     i_no : i + 1,
    //     key : i+ 1,
    //     i_trainset : rows.i_trainset ?? '',
    //     i_total : rows.i_total ?? 0,
    //     i_ph_p : rows.i_type == "PH" ? rows.i_total_p : 0,
    //     i_ph_r : rows.i_type == "PH" ? rows.i_total_r : 0,
    //     i_p1_p : rows.i_type == "P1" ? rows.i_total_p : 0,
    //     i_p1_r : rows.i_type == "P1" ? rows.i_total_r : 0,
    //     i_p3_p : rows.i_type == "P3" ? rows.i_total_p : 0,
    //     i_p3_r : rows.i_type == "P3" ? rows.i_total_r : 0,
    //     i_p6_p : rows.i_type == "P6" ? rows.i_total_p : 0,
    //     i_p6_r : rows.i_type == "P6" ? rows.i_total_r : 0,
    //     i_p12_p : rows.i_type == "P12" ? rows.i_total_p : 0,
    //     i_p12_r : rows.i_type == "P12" ? rows.i_total_r : 0,
    //     i_p24_p : rows.i_type == "P24" ? rows.i_total_p : 0,
    //     i_p24_r : rows.i_type == "P24" ? rows.i_total_r : 0,
    //     i_p48_p : rows.i_type == "P48" ? rows.i_total_p : 0,
    //     i_p48_r : rows.i_type == "P48" ? rows.i_total_r : 0,
    //     i_p72_p : rows.i_type == "P72" ? rows.i_total_p : 0,
    //     i_p72_r : rows.i_type == "P72" ? rows.i_total_r : 0,
    //     i_pb_p : rows.i_type == "PB" ? rows.i_total_p : 0,
    //     i_pb_r : rows.i_type == "PB" ? rows.i_total_r : 0,
    //     i_km_p : rows.i_type == "KM TEMPUH" ? rows.i_total_p : 0,
    //     i_km_r : rows.i_type == "KM TEMPUH" ? rows.i_total_r : 0,
    //   };
    //   totals.i_total += rows.i_total ?? 0
    //   totals.i_tph_p += rows.i_type == "PH" ? rows.i_total_p : 0
    //   totals.i_tph_r += rows.i_type == "PH" ? rows.i_total_r : 0
    //   totals.i_tp1_p += rows.i_type == "P1" ? rows.i_total_p : 0
    //   totals.i_tp1_r += rows.i_type == "P1" ? rows.i_total_r : 0
    //   totals.i_tp3_p += rows.i_type == "P3" ? rows.i_total_p : 0
    //   totals.i_tp3_r += rows.i_type == "P3" ? rows.i_total_r : 0
    //   totals.i_tp6_p += rows.i_type == "P6" ? rows.i_total_p : 0
    //   totals.i_tp6_r += rows.i_type == "P6" ? rows.i_total_r : 0
    //   totals.i_tp12_p += rows.i_type == "P12" ? rows.i_total_p : 0
    //   totals.i_tp12_r += rows.i_type == "P12" ? rows.i_total_r : 0
    //   totals.i_tp24_p += rows.i_type == "P24" ? rows.i_total_p : 0
    //   totals.i_tp24_r += rows.i_type == "P24" ? rows.i_total_r : 0
    //   totals.i_tp48_p += rows.i_type == "P48" ? rows.i_total_p : 0
    //   totals.i_tp48_r += rows.i_type == "P48" ? rows.i_total_r : 0
    //   totals.i_tp72_p += rows.i_type == "P72" ? rows.i_total_p : 0
    //   totals.i_tp72_r += rows.i_type == "P72" ? rows.i_total_r : 0
    //   totals.i_tpb_p += rows.i_type == "PB" ? rows.i_total_p : 0
    //   totals.i_tpb_r += rows.i_type == "PB" ? rows.i_total_r : 0
    //   totals.i_tkm_p += rows.i_type == "KM TEMPUH" ? rows.i_total_p : 0
    //   totals.i_tkm_r += rows.i_type == "KM TEMPUH" ? rows.i_total_r : 0
    //   output.data.push(datas);
    // })
    // output.total.push(totals);
    return result.rows;
};
exports.All = All;
