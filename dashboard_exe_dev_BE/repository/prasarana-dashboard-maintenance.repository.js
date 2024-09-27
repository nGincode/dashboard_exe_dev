"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndicatorPelaporan = exports.getIndicatorSertifikasi = exports.getIndicatorSertifikasiHarus = exports.getIndicatorTechnical = exports.getIndicatorOperational = exports.getIndicatorSafety = exports.getTargetIndicator = exports.add = exports.getAll = exports.getIndicatorMaintenance = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const getAll = async (stringPeriod) => {
    let query = `SELECT
        parameter,
        indicator,
        target,
        realization,
        sort
        FROM prasarana.dash_maintenance
        WHERE ${stringPeriod}
        ORDER BY sort, parameter
    `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getAll = getAll;
const add = async (user_uuid, req, periodMonth, periodYear) => {
    const trx = await db_config_1.default.transaction();
    try {
        await trx.raw(`SELECT * FROM pso.history_table('${periodMonth}', '${periodYear}', '${user_uuid}', null, 'dash_maintenance')`);
        const dataInsert = [];
        for (const item of req) {
            dataInsert.push({
                parameter: item.parameter,
                indicator: item.indicator,
                target: item.target,
                realization: item.realization,
                period_month: periodMonth,
                period_year: periodYear,
                sort: item.order,
                created_by: user_uuid,
            });
        }
        await trx('dash_maintenance').withSchema('prasarana').insert(dataInsert);
        trx.commit();
        return true;
    }
    catch (error) {
        trx.rollback();
        return false;
    }
};
exports.add = add;
const getTargetIndicator = async (stringPeriod) => {
    let query = `SELECT
    a.c_dashboard_type,
    a.c_param,
    a.i_id AS c_indicator,
    a.n_indicator,
    SUM(a.i_target) AS i_target,
    a.i_order,
    a.n_unit
    FROM prasarana.t_d_dashboard_target_indicator a
    LEFT JOIN prasarana.t_m_dashboard_parameter b on a.c_dashboard_type = b.c_dashboard_type AND a.c_param = b.c_param
    WHERE ${stringPeriod}
    AND a.c_dashboard_type = 'PERAWATAN'
    AND a.i_status_active IN (1, 4)
    AND b.i_status_active = 1
    GROUP BY
    a.i_id,
    a.c_dashboard_type,
    a.c_param,
    a.n_indicator,
    b.i_order,
    a.i_order
    ORDER BY b.i_order, a.i_order
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getTargetIndicator = getTargetIndicator;
const getIndicatorSafety = async (stringPeriod) => {
    let query = `SELECT
    c_indicator,
    SUM(i_value) AS i_value
    FROM prasarana.t_d_maintenance_safety
    WHERE ${stringPeriod}
    AND i_status_active = 4
    GROUP BY c_indicator
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getIndicatorSafety = getIndicatorSafety;
const getIndicatorOperational = async (stringPeriod) => {
    let query = `SELECT
    c_indicator,
    SUM(i_operation_time) AS i_operation_time,
    SUM(i_operation_time_disturb) AS i_operation_time_disturb
    FROM prasarana.t_d_maintenance_operational
    WHERE ${stringPeriod}
    AND i_status_active = 4
    GROUP BY c_indicator
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getIndicatorOperational = getIndicatorOperational;
const getIndicatorTechnical = async (stringPeriod) => {
    let query = `SELECT
    c_indicator,
    SUM(i_value_1) AS i_value_1,
    SUM(i_value_2) AS i_value_2,
    SUM(i_value_3) AS i_value_3
    FROM prasarana.t_d_maintenance_technical
    WHERE ${stringPeriod}
    AND i_status_active = 4
    GROUP BY c_indicator
  `;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getIndicatorTechnical = getIndicatorTechnical;
const getIndicatorMaintenance = async (stringPeriod) => {
    const query = `
    SELECT b.n_param AS parameter,
      COALESCE(
        jsonb_agg(
          jsonb_build_object(
            'c_indicator', a.i_id,
            'indicator', a.n_indicator,
            'target', a.i_target,
            'realization', 0,
            'order', a.i_order,
            'percentage', 0,
            'unit', a.n_unit
        )
        ORDER BY a.i_order
      ) FILTER (WHERE a.n_indicator IS NOT NULL), '[]'
    ) AS record
    FROM prasarana.t_m_dashboard_parameter b
      LEFT JOIN prasarana.t_d_dashboard_target_indicator a
        ON a.c_dashboard_type = b.c_dashboard_type
          AND a.c_param = b.c_param
          AND ${stringPeriod}
          AND a.c_dashboard_type = 'PERAWATAN'
          AND a.i_status_active IN (1, 4)
    WHERE
      b.i_status_active = 1
    GROUP BY
      b.n_param
    ORDER BY
      MIN(a.i_order);
  `;
    try {
        const result = await db_config_1.default.raw(query);
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Indicator Maintenance Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Indicator Maintenance Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Indicator Maintenance Failed: Unexpected error occurred');
        }
    }
};
exports.getIndicatorMaintenance = getIndicatorMaintenance;
const getIndicatorSertifikasiHarus = async (sub_unit, periodMonth, periodeYear) => {
    let query = `SELECT COUNT(a.id)
    FROM prasarana.struktur_organisasi a
    JOIN prasarana.kategori b ON a.id_kategori = b.id_kategori
    WHERE
    UPPER(b.sub_kategori_sub) = ?
    AND period = ?
  `;
    let result = await db_config_1.default.raw(query, [sub_unit, `${periodeYear[0]}-${periodMonth[0]}-01`]);
    return result;
};
exports.getIndicatorSertifikasiHarus = getIndicatorSertifikasiHarus;
const getIndicatorSertifikasi = async (sub_unit, periodMonth, periodeYear) => {
    let query = `SELECT COUNT(a.id) FROM prasarana.sertifikasi a
    LEFT JOIN prasarana.struktur_organisasi b on b.nipp = a.nipp
    JOIN prasarana.kategori c on c.id_kategori = b.id_kategori
    WHERE
    UPPER(c.sub_kategori_sub) = ?
    AND tanggal_berlaku BETWEEN ? AND ?
  `;
    let lastDate = new Date(periodeYear[1], periodMonth[1], 0);
    let result = await db_config_1.default.raw(query, [sub_unit, `${periodeYear[0]}-${periodMonth[0]}-01`, `${periodeYear[1]}-${periodMonth[1]}-${lastDate.getDate()}`]);
    return result;
};
exports.getIndicatorSertifikasi = getIndicatorSertifikasi;
const getIndicatorPelaporan = async (stringPeriod, temp) => {
    let target = 7;
    let total = (temp > 0) ? 2 : 0;
    let queryKeselamatan = `
    SELECT COUNT(i_id) FROM prasarana.t_d_maintenance_safety
    WHERE ${stringPeriod}
    AND approved_by IS NOT NULL
  `;
    let result = await db_config_1.default.raw(queryKeselamatan);
    if (result.rows[0].count > 0) {
        total += 1;
    }
    let queryOperasional = `
    SELECT COUNT(i_id) FROM prasarana.t_d_maintenance_operational
    WHERE ${stringPeriod}
    AND approved_by IS NOT NULL
  `;
    result = await db_config_1.default.raw(queryOperasional);
    if (result.rows[0].count > 0) {
        total += 1;
    }
    let queryTargetTeknis = `
    SELECT * FROM prasarana.t_d_dashboard_target_indicator
    WHERE ${stringPeriod}
    AND c_dashboard_type = 'PERAWATAN'
    AND c_param = 'TEKNIS'
  `;
    result = await db_config_1.default.raw(queryTargetTeknis);
    if (result.rows.length > 0) {
        for (const key of result.rows) {
            let query = `
        SELECT COUNT(i_id) FROM prasarana.t_d_maintenance_technical
        WHERE ${stringPeriod}
        AND approved_by IS NOT NULL
        AND c_indicator = ?
      `;
            let result = await db_config_1.default.raw(query, key.i_id);
            if (result.rows[0].count > 0) {
                total += 1;
            }
        }
    }
    result = Number((total / target * 100).toFixed(2));
    return result;
};
exports.getIndicatorPelaporan = getIndicatorPelaporan;
