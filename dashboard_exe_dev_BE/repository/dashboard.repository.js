"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.penumpangDanPendapatanOffPeak = exports.penumpangDanPendapatanPeak = exports.penumpangDanPendapatanAverageWeekday = exports.penumpangDanPendapatanAverageWeekend = exports.penumpangDanPendapatanWeekend = exports.penumpangDanPendapatanWeekday = exports.penumpangDanPendapatanDaily = exports.volPenumpangSML = exports.OffPeakNonSML = exports.OffPeakSML = exports.peakNonSML = exports.peakSML = exports.averagePenumpangPeak = exports.averagePenumpangOffPeak = exports.averagePenumpangWeekday = exports.averagePenumpangWeekend = exports.averagePendapatanOffPeak = exports.averagePendapatanPeak = exports.averagePendapatanWeekday = exports.averagePendapatanWeekend = exports.totalPendapatanDanPenumpangKumulatif = exports.totalPendapatanDanPenumpangPerHariIni = exports.getDataGraphTrainNumberTriwulan = exports.getDataGraphPerfomByTrainNumber = exports.volPenumpangOutHarian = exports.volPenumpangInHarian = exports.volPenumpangPerStasiunOut = exports.volPenumpangPerStasiunIn = exports.volPenumpangPendapatanHarian = exports.volPenumpangPeak = exports.volPenumpangOffPeak = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const volPenumpangPendapatanHarian = async (start_date, end_date, station = '') => {
    let query = db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date]);
    if (station && station.trim() !== '') {
        query = query.whereRaw("TRIM(c_station_to) = ?", [station]);
    }
    let result = await query;
    return result;
};
exports.volPenumpangPendapatanHarian = volPenumpangPendapatanHarian;
const volPenumpangPeak = async (start_date, end_date, station = '') => {
    let query = db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .select(db_config_1.default.raw("d_transaction_at::time as time"))
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereIn("i_fare_id", [0])
        .whereRaw("d_transaction_at::time >= '05:00' and d_transaction_at::time <= '23:00'")
        .groupByRaw("d_transaction_at::time")
        .orderByRaw("d_transaction_at::time asc");
    if (station && station.trim() !== '') {
        query = query.whereRaw("TRIM(c_station_to) = ?", [station]);
    }
    let result = await query;
    return result;
};
exports.volPenumpangPeak = volPenumpangPeak;
const volPenumpangOffPeak = async (start_date, end_date, station = '') => {
    // let result = await knex
    //   .withSchema("pso")
    //   .table("t_d_afc")
    //   .select(knex.raw("d_transaction_at::time as time"))
    //   .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
    //   .whereBetween("d_afc", [start_date, end_date])
    //   .whereNotIn("n_fare_type", ["fare_holiday"])
    //   .whereNot("i_fare_id", 0)
    //   .whereRaw(
    //     `d_afc IN (
    //       SELECT
    //           d_afc
    //       FROM
    //           (
    //             SELECT
    //                 d_afc,
    //                 EXTRACT (dow FROM d_afc ) AS of_day,
    //                 n_fare_type AS fare_type
    //             FROM
    //                 pso.t_d_afc
    //             WHERE
    //                 d_afc BETWEEN '${start_date}' AND '${end_date}'
    //                 AND i_fare_id != 0
    //             GROUP BY
    //                 1,
    //                 EXTRACT (dow FROM d_afc ),
    //                 3
    //         ) DOW
    //         WHERE
    //             of_day NOT IN (0,6)
    //             AND fare_type NOT IN ('fare_holiday')
    //     )`
    //   )
    //   .groupByRaw("1")
    //   .orderBy("d_transaction_at", "asc");
    let sts = '';
    if (station && station.trim() !== '') {
        sts = ` AND TRIM(c_station_to) = '${station.trim()}'`;
    }
    let query = `SELECT 
  d_transaction_at::time as time,
  sum(i_total_revenue) AS pendapatan,
  sum(i_total_volume) AS penumpang
FROM 
  pso.t_d_afc
WHERE 
  d_afc BETWEEN '${start_date}' AND '${end_date}'
  AND n_fare_type NOT IN ('fare_holiday')
  AND i_fare_id != 0  
  ${sts}
  AND d_afc IN (
    SELECT 
        d_afc
    FROM
        (
          SELECT 
              d_afc, 
              EXTRACT (dow FROM d_afc ) AS of_day,
              n_fare_type AS fare_type
          FROM 
              pso.t_d_afc 
          WHERE 
              d_afc BETWEEN '${start_date}' AND '${end_date}'
              AND i_fare_id != 0
              ${sts}
          GROUP BY 
              1,
              EXTRACT (dow FROM d_afc ),
              3	
      ) DOW 
      WHERE 
          of_day NOT IN (0,6)
          AND fare_type NOT IN ('fare_holiday') 
  )
and d_transaction_at::time >= '05:00'
and d_transaction_at::time <= '23:00'
GROUP BY 1
ORDER BY time asc
`;
    let result = await db_config_1.default.raw(query);
    return result.rows;
};
exports.volPenumpangOffPeak = volPenumpangOffPeak;
const volPenumpangSML = async (start_date, end_date, station = '') => {
    let sts = '';
    if (station && station.trim() !== '') {
        sts = ` AND TRIM(c_station_to) = '${station.trim()}'`;
    }
    let result = await db_config_1.default
        .select("data.d_transaction_at as time")
        .sum({ penumpang: "data.penumpang", pendapatan: "data.pendapatan" })
        .fromRaw(`(SELECT
    d_transaction_at::time,
    i_total_revenue as pendapatan,
    i_total_volume as penumpang
  FROM
    pso.t_d_afc
  WHERE
    d_afc IN (
      SELECT
        d_afc
      FROM
        (
          SELECT 
            d_afc, 
            EXTRACT (dow FROM d_afc ) AS of_day,
            n_fare_type AS fare_type
          FROM 
            pso.t_d_afc 
          WHERE 
            d_afc BETWEEN '${start_date}' and '${end_date}'
          ${sts}
          GROUP BY 
            1,
            2,
            3
        ) DOW
        WHERE 
          of_day IN (0,6)
          AND fare_type not IN ('fare_holiday') 
    )
  and i_fare_id not in (0)
  
  UNION ALL 
  
  --UNTUK HOLIDAY
  
  select 
    d_transaction_at::time,
    i_total_revenue as pendapatan,
    i_total_volume as penumpang
  from 
    pso.t_d_afc
  where 
    d_afc between '${start_date}' and '${end_date}'
    ${sts}
    and n_fare_type in ('fare_holiday')
    ) data`)
        .groupByRaw("1")
        .whereRaw("data.d_transaction_at >= '05:00' and data.d_transaction_at <= '23:00'");
    return result;
};
exports.volPenumpangSML = volPenumpangSML;
const volPenumpangPerStasiunIn = async (start_date, end_date) => {
    let result = await db_config_1.default
        .select("t_m_station.c_station as kode_stasiun", "t_m_station.n_station as nama_stasiun")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .table("pso.t_d_afc")
        .leftJoin("opr.t_m_station", "t_m_station.c_station", "=", "t_d_afc.c_station_from")
        .whereBetween("d_afc", [start_date, end_date])
        // .whereNotIn("i_fare_id", [0])
        .groupBy("t_m_station.c_station", "t_m_station.n_station", "t_m_station.i_order")
        .orderBy("t_m_station.i_order", "asc");
    return result;
};
exports.volPenumpangPerStasiunIn = volPenumpangPerStasiunIn;
const volPenumpangPerStasiunOut = async (start_date, end_date) => {
    let result = await db_config_1.default
        .select("t_m_station.c_station as kode_stasiun", "t_m_station.n_station as nama_stasiun")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .table("pso.t_d_afc")
        .leftJoin("opr.t_m_station", "t_m_station.c_station", "=", "t_d_afc.c_station_to")
        .whereBetween("d_afc", [start_date, end_date])
        // .whereNotIn("i_fare_id", [0])
        .groupBy("t_m_station.c_station", "t_m_station.n_station", "t_m_station.i_order")
        .orderBy("t_m_station.i_order", "asc");
    return result;
};
exports.volPenumpangPerStasiunOut = volPenumpangPerStasiunOut;
const volPenumpangInHarian = async (start_date, end_date, type, station = '') => {
    if (type == 'year') {
        let sts = '';
        if (station && station.trim() !== '') {
            sts = ` AND TRIM(tda.c_station_from) = '${station.trim()}'`;
        }
        let result = await db_config_1.default.raw(`
WITH month_mapping AS (
    SELECT 1 AS bulan, 'January' AS month_name UNION ALL
    SELECT 2 AS bulan, 'February' AS month_name UNION ALL
    SELECT 3 AS bulan, 'March' AS month_name UNION ALL
    SELECT 4 AS bulan, 'April' AS month_name UNION ALL
    SELECT 5 AS bulan, 'May' AS month_name UNION ALL
    SELECT 6 AS bulan, 'June' AS month_name UNION ALL
    SELECT 7 AS bulan, 'July' AS month_name UNION ALL
    SELECT 8 AS bulan, 'August' AS month_name UNION ALL
    SELECT 9 AS bulan, 'September' AS month_name UNION ALL
    SELECT 10 AS bulan, 'October' AS month_name UNION ALL
    SELECT 11 AS bulan, 'November' AS month_name UNION ALL
    SELECT 12 AS bulan, 'December' AS month_name
)
SELECT
    month_mapping.month_name AS date,
    COALESCE(data_afc.volume, 0) AS penumpang,
    COALESCE(data_afc.revenue, 0) AS pendapatan
FROM 
    month_mapping
LEFT JOIN 
(
    SELECT 
        EXTRACT(MONTH FROM d_afc) AS bulan,
        SUM(i_total_volume) AS volume,
        SUM(i_total_revenue) AS revenue
    FROM 
        pso.t_d_afc tda 
    WHERE 
        d_afc BETWEEN '${start_date}' AND '${end_date}'
        ${sts}
    GROUP BY 
        EXTRACT(MONTH FROM d_afc)
) data_afc ON data_afc.bulan = month_mapping.bulan
ORDER BY 
    month_mapping.bulan
        `);
        // let result = await knex.raw(`
        //   SELECT
        //       bulan_series.bulan as date,
        //       COALESCE(sum(volume), 0) AS penumpang,
        //       COALESCE(sum(revenue), 0) AS pendapatan
        //   FROM 
        //       generate_series(1, 12) AS bulan_series(bulan)
        //   LEFT JOIN 
        //   (
        //     SELECT 
        //       TO_CHAR(d_afc, 'MM')::INT4 AS bulan,
        //       sum(i_total_volume) AS volume,
        //       sum(i_total_revenue) AS revenue
        //     FROM 
        //       pso.t_d_afc tda 
        //     WHERE 
        //       d_afc BETWEEN '${start_date}' AND '${end_date}'
        //     GROUP BY 
        //       TO_CHAR(d_afc, 'MM')::INT4 
        //   )data_afc ON data_afc.bulan = bulan_series.bulaN
        //   GROUP BY bulan_series.bulan
        //   `);
        return result.rows;
    }
    else {
        let sts = '';
        if (station && station.trim() !== '') {
            sts = `WHERE TRIM(tda.c_station_from) = '${station.trim()}'`;
        }
        let result = await db_config_1.default.raw(`
          SELECT 
          TO_CHAR(gs,'DD')::INT4 as date,
          coalesce(sum(tda.i_total_volume),0) as penumpang, 
          coalesce(sum(tda.i_total_revenue),0) as pendapatan 
        FROM generate_series(
            '${start_date}'::date, 
            '${end_date}'::date, 
            '1 day'::interval
        ) gs
        LEFT JOIN 
          pso.t_d_afc tda ON tda.d_afc = gs.gs::DATE
          ${sts}
        GROUP BY 
          gs
        ORDER BY 
          gs ASC
        `);
        return result.rows;
    }
};
exports.volPenumpangInHarian = volPenumpangInHarian;
const volPenumpangOutHarian = async (start_date, end_date, type, station = '') => {
    if (type == 'year') {
        let sts = '';
        if (station && station.trim() !== '') {
            sts = ` AND TRIM(tda.c_station_to) = '${station.trim()}'`;
        }
        let result = await db_config_1.default.raw(`
WITH month_mapping AS (
    SELECT 1 AS bulan, 'January' AS month_name UNION ALL
    SELECT 2 AS bulan, 'February' AS month_name UNION ALL
    SELECT 3 AS bulan, 'March' AS month_name UNION ALL
    SELECT 4 AS bulan, 'April' AS month_name UNION ALL
    SELECT 5 AS bulan, 'May' AS month_name UNION ALL
    SELECT 6 AS bulan, 'June' AS month_name UNION ALL
    SELECT 7 AS bulan, 'July' AS month_name UNION ALL
    SELECT 8 AS bulan, 'August' AS month_name UNION ALL
    SELECT 9 AS bulan, 'September' AS month_name UNION ALL
    SELECT 10 AS bulan, 'October' AS month_name UNION ALL
    SELECT 11 AS bulan, 'November' AS month_name UNION ALL
    SELECT 12 AS bulan, 'December' AS month_name
)
SELECT
    month_mapping.month_name AS date,
    COALESCE(data_afc.volume, 0) AS penumpang,
    COALESCE(data_afc.revenue, 0) AS pendapatan
FROM 
    month_mapping
LEFT JOIN 
(
    SELECT 
        EXTRACT(MONTH FROM d_afc) AS bulan,
        SUM(i_total_volume) AS volume,
        SUM(i_total_revenue) AS revenue
    FROM 
        pso.t_d_afc tda 
    WHERE 
        d_afc BETWEEN '${start_date}' AND '${end_date}'
        ${sts}
    GROUP BY 
        EXTRACT(MONTH FROM d_afc)
) data_afc ON data_afc.bulan = month_mapping.bulan
ORDER BY 
    month_mapping.bulan
      `);
        return result.rows;
    }
    else {
        let sts = '';
        if (station && station.trim() !== '') {
            sts = `WHERE TRIM(tda.c_station_to) = '${station.trim()}'`;
        }
        let result = await db_config_1.default.raw(`
      SELECT 
      TO_CHAR(gs,'DD')::INT4 as date,
      coalesce(sum(tda.i_total_volume),0) as penumpang, 
      coalesce(sum(tda.i_total_revenue),0) as pendapatan 
    FROM generate_series(
        '${start_date}'::date, 
        '${end_date}'::date, 
        '1 day'::interval
    ) gs
    LEFT JOIN 
      pso.t_d_afc tda ON tda.d_afc = gs.gs::DATE
      ${sts}
    GROUP BY 
      gs
    ORDER BY 
      gs ASC
    `);
        return result.rows;
    }
};
exports.volPenumpangOutHarian = volPenumpangOutHarian;
const volPenumpangInHarian_OLD = async (start_date, end_date) => {
    let result = await db_config_1.default
        .select("d_afc as date")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .table("pso.t_d_afc")
        .leftJoin("opr.t_m_station", "t_m_station.c_station", "=", "t_d_afc.c_station_from")
        .whereBetween("d_afc", [start_date, end_date])
        // .whereNotIn("i_fare_id", [0])
        .groupByRaw("d_afc")
        .orderBy("d_afc", "asc");
    return result;
};
const volPenumpangOutHarian_OLD = async (start_date, end_date) => {
    let result = await db_config_1.default
        .select("d_afc as date")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .table("pso.t_d_afc")
        .leftJoin("opr.t_m_station", "t_m_station.c_station", "=", "t_d_afc.c_station_to")
        .whereBetween("d_afc", [start_date, end_date])
        // .whereNotIn("i_fare_id", [0])
        .groupByRaw("d_afc")
        .orderBy("d_afc", "asc");
    return result;
};
const getDataGraphPerfomByTrainNumber = async (stringPeriod, type_of_day) => {
    let sTypeOfDay = "";
    if (type_of_day == "weekday") {
        sTypeOfDay = `('monday', 'tuesday', 'wednesday', 'thursday', 'friday')`;
    }
    else if (type_of_day == "weekend") {
        sTypeOfDay = `('saturday', 'sunday')`;
    }
    else {
        sTypeOfDay = `('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')`;
    }
    let query = `SELECT
      d_opr,
      i_volume_pnp,
      ROUND(i_o_static*100) AS i_o_static,
      ROUND(i_o_dynamic*100) AS i_o_dynamic,
      t_departure
      FROM pso.t_d_perform_by_train_number
      WHERE ${stringPeriod}
      AND TRIM(TO_CHAR(d_opr , 'day')) in ${sTypeOfDay}
      GROUP BY
      d_opr,
      i_volume_pnp,
      i_o_static,
      i_o_dynamic,
      t_departure
      ORDER by
      d_opr,
      t_departure
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataGraphPerfomByTrainNumber = getDataGraphPerfomByTrainNumber;
const getDataGraphTrainNumberTriwulan = async (stringPeriod) => {
    let query = `SELECT
      i_period_year,
      i_period_month,
      t_departure,
      SUM(i_volume_pnp) AS i_volume_pnp,
      ROUND(AVG(i_o_static)*100) AS i_o_static,
      ROUND(AVG(i_o_dynamic)*100) AS i_o_dynamic
      FROM pso.t_d_perform_by_train_number
      WHERE ${stringPeriod}
      GROUP by
      i_period_year,
      i_period_month,
      t_departure
      ORDER BY
      i_period_year,
      i_period_month,
      t_departure
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getDataGraphTrainNumberTriwulan = getDataGraphTrainNumberTriwulan;
const totalPendapatanDanPenumpangPerHariIni = async (today) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .where("d_afc", today);
    return result;
};
exports.totalPendapatanDanPenumpangPerHariIni = totalPendapatanDanPenumpangPerHariIni;
const totalPendapatanDanPenumpangKumulatif = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date]);
    return result;
};
exports.totalPendapatanDanPenumpangKumulatif = totalPendapatanDanPenumpangKumulatif;
const averagePendapatanWeekend = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ weekend: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day in ( 0, 6 )
      )`)
        .first();
    return result;
};
exports.averagePendapatanWeekend = averagePendapatanWeekend;
const averagePendapatanWeekday = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ weekday: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day not in ( 0, 6 )
      )`)
        .first();
    return result;
};
exports.averagePendapatanWeekday = averagePendapatanWeekday;
const averagePendapatanPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereIn("i_fare_id", [0])
        .first();
    return result;
};
exports.averagePendapatanPeak = averagePendapatanPeak;
const averagePendapatanOffPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereNotIn("i_fare_id", [0])
        .first();
    return result;
};
exports.averagePendapatanOffPeak = averagePendapatanOffPeak;
const averagePenumpangWeekend = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ weekend: "i_total_volume" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day in ( 0, 6 )
      )`)
        .first();
    return result;
};
exports.averagePenumpangWeekend = averagePenumpangWeekend;
const averagePenumpangWeekday = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ weekday: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day not in ( 0, 6 )
      )`)
        .first();
    return result;
};
exports.averagePenumpangWeekday = averagePenumpangWeekday;
const averagePenumpangPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ penumpang: "i_total_volume" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereIn("i_fare_id", [0])
        .first();
    return result;
};
exports.averagePenumpangPeak = averagePenumpangPeak;
const averagePenumpangOffPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .avg({ penumpang: "i_total_volume" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereNotIn("i_fare_id", [0])
        .first();
    return result;
};
exports.averagePenumpangOffPeak = averagePenumpangOffPeak;
const peakSML = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day in ( 0, 6 )
      )`)
        .whereIn("i_fare_id", [0]);
    return result;
};
exports.peakSML = peakSML;
const OffPeakSML = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day in ( 0, 6 )
      )`)
        .whereNotIn("i_fare_id", [0]);
    return result;
};
exports.OffPeakSML = OffPeakSML;
const peakNonSML = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day not in ( 0, 6 )
      )`)
        .whereIn("i_fare_id", [0]);
    return result;
};
exports.peakNonSML = peakNonSML;
const OffPeakNonSML = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day not in ( 0, 6 )
      )`)
        .whereNotIn("i_fare_id", [0]);
    return result;
};
exports.OffPeakNonSML = OffPeakNonSML;
const penumpangDanPendapatanDaily = async (start_date, end_date, column) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween(column, [start_date, end_date])
        .first();
    return result;
};
exports.penumpangDanPendapatanDaily = penumpangDanPendapatanDaily;
const penumpangDanPendapatanWeekday = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day not in ( 0, 6 )
      )`)
        // .whereBetween("d_afc", [start_date, end_date])
        .first();
    return result;
};
exports.penumpangDanPendapatanWeekday = penumpangDanPendapatanWeekday;
const penumpangDanPendapatanWeekend = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereRaw(`d_afc in (
      select 
          d_afc
      from
        (
        select 
            d_afc,
            extract(dow
        from
          (d_afc)) as of_day
        from 
            pso.t_d_afc
        where 
            d_afc between '${start_date}' and '${end_date}'
        group by 
            1,
          2
          ) DOW
      where
        of_day in ( 0, 6 )
      )`)
        // .whereBetween("d_afc", [start_date, end_date])
        .first();
    return result;
};
exports.penumpangDanPendapatanWeekend = penumpangDanPendapatanWeekend;
const penumpangDanPendapatanAverageWeekday = async (start_date, end_date) => {
    let query = `
  select
	SUM(penumpang)/COUNT(d_afc) AS penumpang,
	SUM(pendapatan)/COUNT(d_afc) AS pendapatan
from (
	SELECT 
		d_afc,
	    SUM(i_total_volume) AS penumpang, 
	    SUM(i_total_revenue) AS pendapatan
	FROM 
	    pso.t_d_afc
	WHERE 
	    d_afc IN (
	        SELECT 
	            d_afc
	        FROM 
	            (
	            SELECT 
	                d_afc,
	                EXTRACT(DOW FROM d_afc) AS of_day
	            FROM 
	                pso.t_d_afc
	            WHERE 
	                d_afc BETWEEN '${start_date}' AND '${end_date}'
	            GROUP BY 
	                d_afc,
	                of_day
	            ) AS DOW
	        WHERE 
	            of_day NOT IN (0, 6)
	    )
	GROUP BY 
		1
) datanew`;
    let result = await db_config_1.default.raw(query);
    // let result = await knex
    //   .withSchema("pso")
    //   .table("t_d_afc")
    //   .avg({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
    //   .whereRaw(
    //     `d_afc in (
    //     select 
    //         d_afc
    //     from
    //       (
    //       select 
    //           d_afc,
    //           extract(dow
    //       from
    //         (d_afc)) as of_day
    //       from 
    //           pso.t_d_afc
    //       where 
    //           d_afc between '${start_date}' and '${end_date}'
    //       group by 
    //           1,
    //         2
    //         ) DOW
    //     where
    //       of_day not in ( 0, 6 )
    //     )`
    //   )
    //   .first();
    return result.rows[0];
};
exports.penumpangDanPendapatanAverageWeekday = penumpangDanPendapatanAverageWeekday;
const penumpangDanPendapatanAverageWeekend = async (start_date, end_date) => {
    let query = `
  select
	SUM(penumpang)/COUNT(d_afc) AS penumpang,
	SUM(pendapatan)/COUNT(d_afc) AS pendapatan
from (
	SELECT 
		d_afc,
	    SUM(i_total_volume) AS penumpang, 
	    SUM(i_total_revenue) AS pendapatan
	FROM 
	    pso.t_d_afc
	WHERE 
	    d_afc IN (
	        SELECT 
	            d_afc
	        FROM 
	            (
	            SELECT 
	                d_afc,
	                EXTRACT(DOW FROM d_afc) AS of_day
	            FROM 
	                pso.t_d_afc
	            WHERE 
	                d_afc BETWEEN '${start_date}' AND '${end_date}'
	            GROUP BY 
	                d_afc,
	                of_day
	            ) AS DOW
	        WHERE 
	            of_day IN (0, 6)
	    )
	GROUP BY 
		1
) datanew`;
    let result = await db_config_1.default.raw(query);
    // let result = await knex
    //   .withSchema("pso")
    //   .table("t_d_afc")
    //   .avg({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
    //   .whereRaw(
    //     `d_afc in (
    //     select 
    //         d_afc
    //     from
    //       (
    //       select 
    //           d_afc,
    //           extract(dow
    //       from
    //         (d_afc)) as of_day
    //       from 
    //           pso.t_d_afc
    //       where 
    //           d_afc between '${start_date}' and '${end_date}'
    //       group by 
    //           1,
    //         2
    //         ) DOW
    //     where
    //       of_day in ( 0, 6 )
    //     )`
    //   )
    //   .first();
    return result.rows[0];
};
exports.penumpangDanPendapatanAverageWeekend = penumpangDanPendapatanAverageWeekend;
const penumpangDanPendapatanPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereIn("i_fare_id", [0])
        .first();
    return result;
};
exports.penumpangDanPendapatanPeak = penumpangDanPendapatanPeak;
const penumpangDanPendapatanOffPeak = async (start_date, end_date) => {
    let result = await db_config_1.default
        .withSchema("pso")
        .table("t_d_afc")
        .sum({ penumpang: "i_total_volume", pendapatan: "i_total_revenue" })
        .whereBetween("d_afc", [start_date, end_date])
        .whereNotIn("i_fare_id", [0])
        .first();
    return result;
};
exports.penumpangDanPendapatanOffPeak = penumpangDanPendapatanOffPeak;
