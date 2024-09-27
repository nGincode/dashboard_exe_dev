"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMasterTarget = exports.updateMasterTarget = exports.saveMasterTarget = exports.findMasterTargetByParam = exports.findMasterTargetById = exports.findMasterTarget = exports.findMasterParameter = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const findMasterParameter = async (c_dashboard_type) => {
    try {
        const query = `SELECT c_param, n_param FROM prasarana.t_m_dashboard_parameter WHERE c_dashboard_type = ? AND i_status_active = 1 ORDER BY d_created_at ASC`;
        const result = await db_config_1.default.raw(query, [c_dashboard_type]);
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Master Parameter Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Master Parameter Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Master Parameter Failed: Unexpected error occurred');
        }
    }
};
exports.findMasterParameter = findMasterParameter;
const findMasterTarget = async (c_dashboard_type, periodDate) => {
    try {
        const query = `
      WITH data AS (
        SELECT
          p.c_dashboard_type,
          q.n_param,
            json_agg(
            json_build_object(
            'c_indicator', p.i_id,
            'n_indicator', p.n_indicator,
            'i_target', p.i_target,
            'n_unit', p.n_unit,
            'i_order', p.i_order,
            'i_status_active', p.i_status_active
          ) ORDER BY p.i_order ASC
        ) AS record
      FROM prasarana.t_d_dashboard_target_indicator p
      JOIN prasarana.t_m_dashboard_parameter q
        ON p.c_dashboard_type = q.c_dashboard_type
          AND p.c_param = q.c_param
      WHERE p.c_dashboard_type = ?
        ${periodDate
            ? `AND ${periodDate
                .replace(/i_period_year/g, 'p.i_period_year')
                .replace(/i_period_month/g, 'p.i_period_month')}`
            : ''}
        AND p.i_status_active != 2
      GROUP BY p.c_dashboard_type, q.n_param 
      )
      SELECT
        c_dashboard_type,
        json_agg(
          json_build_object(
            'n_param', n_param,
            'record', record
          )
        ) AS data
      FROM data
      GROUP BY c_dashboard_type;
    `;
        const result = await db_config_1.default.raw(query, [c_dashboard_type]);
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Master Target Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Master Target Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.findMasterTarget = findMasterTarget;
const findMasterTargetById = async (id) => {
    try {
        const query = `
      WITH data AS (
        SELECT
          p.c_dashboard_type,
          q.n_param,
          json_agg(
            json_build_object(
              'i_id', p.i_id,
              'n_indicator', p.n_indicator,
              'i_target', p.i_target,
              'n_unit', p.n_unit,
              'i_order', p.i_order,
              'i_status_active', p.i_status_active,
              'n_table_data', q.n_table_data
            )
          ) AS record
        FROM prasarana.t_d_dashboard_target_indicator p
        JOIN prasarana.t_m_dashboard_parameter q
          ON p.c_dashboard_type = q.c_dashboard_type
            AND p.c_param = q.c_param
        WHERE p.i_id = ?
        GROUP BY p.c_dashboard_type, q.n_param
      )
      SELECT
        c_dashboard_type,
        json_agg(
          json_build_object(
            'n_param', n_param,
            'record', record
          )
        ) AS data
      FROM data
      GROUP BY c_dashboard_type;
    `;
        const result = await db_config_1.default.raw(query, [id]);
        return result.rows[0];
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Master Target Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Master Target Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.findMasterTargetById = findMasterTargetById;
const findMasterTargetByParam = async (param) => {
    const filter = Object.keys(param)
        .map((key) => `${key} = ?`)
        .join(' AND ');
    try {
        const query = `
      WITH data AS (
        SELECT
          p.c_dashboard_type,
          q.n_param,
          json_agg(
            json_build_object(
              'i_id', p.i_id,
              'n_indicator', p.n_indicator,
              'i_target', p.i_target,
              'n_unit', p.n_unit,
              'i_order', p.i_order,
              'i_status_active', p.i_status_active
            )
          ) AS record
        FROM prasarana.t_d_dashboard_target_indicator p
        JOIN prasarana.t_m_dashboard_parameter q
          ON p.c_dashboard_type = q.c_dashboard_type
            AND p.c_param = q.c_param
        WHERE ${filter}
          AND p.i_status_active != 2
        GROUP BY p.c_dashboard_type, q.n_param
      )
      SELECT
        c_dashboard_type,
        json_agg(
          json_build_object(
            'n_param', n_param,
            'record', record
          )
        ) AS data
      FROM data
      GROUP BY c_dashboard_type;
    `;
        const result = await db_config_1.default.raw(query, Object.values(param));
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Master Target Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Master Target Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.findMasterTargetByParam = findMasterTargetByParam;
const saveMasterTarget = async (value) => {
    try {
        await db_config_1.default.transaction(async (trx) => {
            for (const [index, item] of value.data.entries()) {
                const existingOrder = await trx.raw(`
          SELECT COALESCE(MAX(i_order), 0) as max_order
          FROM prasarana.t_d_dashboard_target_indicator
          WHERE i_period_year = ?
            AND i_period_month = ?
            AND c_dashboard_type = ?
            AND c_param = ?
        `, [
                    value.period_year,
                    value.period_month,
                    item.c_dashboard_type,
                    item.c_param,
                ]);
                const newOrder = existingOrder.rows[0].max_order + index + 1 || 1;
                const insertQuery = `
          INSERT INTO prasarana.t_d_dashboard_target_indicator (
            i_period_year,
            i_period_month,
            c_dashboard_type,
            c_param,
            n_indicator,
            i_target,
            n_unit,
            i_order,
            b_is_last,
            i_status_active,
            n_created_by
          ) VALUES (
            ${value.period_year},
            ${value.period_month},
            '${item.c_dashboard_type}',
            '${item.c_param}',
            '${item.n_indicator}',
            ${item.i_target},
            '${item.n_unit}',
            ${newOrder},
            ${item.b_is_last},
            1,
            '${value.user_id}'
          );
        `;
                await trx.raw(insertQuery);
            }
        });
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '23505') {
                throw new Error(`Save Master Target Failed: Duplicate key error`);
            }
            else if (code === '23503') {
                throw new Error(`Save Master Target Failed: Foreign key violation`);
            }
            throw new Error(`Save Master Target Failed: Database error`);
        }
        else {
            throw new Error('Save Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.saveMasterTarget = saveMasterTarget;
const updateMasterTarget = async (id, user_id, data) => {
    try {
        const query = `
      UPDATE prasarana.t_d_dashboard_target_indicator
      SET
        n_indicator = ?,
        i_target = ?,
        n_unit = ?,
        n_updated_by = '${user_id}',
        d_updated_at = NOW()
      WHERE i_id = '${id}'
    `;
        await db_config_1.default.transaction(async (trx) => {
            await trx.raw(query, [data.n_indicator, data.i_target, data.n_unit]);
        });
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '23505') {
                throw new Error(`Update Master Target Failed: Duplicate key error`);
            }
            else if (code === '23503') {
                throw new Error(`Update Master Target Failed: Foreign key violation`);
            }
            else {
                throw new Error(`Update Master Target Failed: Database error`);
            }
        }
        else {
            throw new Error('Update Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.updateMasterTarget = updateMasterTarget;
const deleteMasterTarget = async (id, user_id, n_table_data) => {
    try {
        const query = `
      BEGIN;
        UPDATE prasarana.t_d_dashboard_target_indicator
        SET
          i_status_active = 2,
          n_deleted_by = '${user_id}',
          d_deleted_at = NOW()
        WHERE i_id = '${id}' AND i_status_active != 2;

        UPDATE prasarana.${n_table_data}
        SET
          i_status_active = 2,
          n_deleted_by = '${user_id}',
          d_deleted_at = NOW()
        WHERE c_indicator = '${id}' AND i_status_active != 2; 
      COMMIT;
    `;
        await db_config_1.default.transaction(async (trx) => {
            await trx.raw(query);
        });
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Delete Master Target Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Delete Master Target Failed: Database error`);
            }
        }
        else {
            throw new Error('Delete Master Target Failed: Unexpected error occurred');
        }
    }
};
exports.deleteMasterTarget = deleteMasterTarget;
