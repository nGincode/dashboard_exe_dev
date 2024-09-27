"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndicatorApprove = exports.getTargetIndicator = exports.getMasterParam = exports.getRealizationCertificate = exports.getTargetCertificate = exports.updateTechnicalFile = exports.updateTechnical = exports.updateOperationTechnicalSummary = exports.saveTechnical = exports.saveOperationTechnicalSummary = exports.saveOperationSafety = exports.saveOperationOperational = exports.getTechnicalSummaryByNamePeriod = exports.getTechnicalByIds = exports.getTechnical = exports.getOperationSafety = exports.getOperationOperational = exports.getAllTechnicalSummary = exports.getAllTechnical = exports.deleteTechnical = void 0;
const moment_1 = __importDefault(require("moment"));
const db_config_1 = __importDefault(require("../config/db.config"));
const service = __importStar(require("../service/activity.service"));
const getAllTechnical = async (periodDate, statusActive) => {
    const status = statusActive && [1, 4].includes(statusActive)
        ? `AND i_status_active = ${statusActive}`
        : "AND i_status_active != 2";
    const query = `
	  SELECT d_opr, i_id, c_indicator, n_indicator, n_file_path, i_status_active, i_value_1, i_value_2
	  FROM prasarana.t_d_operation_technical
	  WHERE ${periodDate} ${status}
	  ORDER BY d_opr
  `;
    return await db_config_1.default.raw(query);
};
exports.getAllTechnical = getAllTechnical;
const getTechnicalByIds = async (ids) => {
    const parseIds = ids.map((id) => `'${id}'`).join(", ");
    const query = `
	  SELECT d_opr, i_id, c_indicator, n_indicator, n_file_path, i_status_active, i_value_1, i_value_2
	  FROM prasarana.t_d_operation_technical
	  WHERE i_id IN (${parseIds})
  `;
    return await db_config_1.default.raw(query);
};
exports.getTechnicalByIds = getTechnicalByIds;
const getTechnical = async (i_id) => {
    const query = `
		SELECT i_id, n_indicator, n_file_path
	  FROM prasarana.t_d_operation_technical
		WHERE i_id = ?
	`;
    return await db_config_1.default.raw(query, [i_id]);
};
exports.getTechnical = getTechnical;
const saveTechnical = async (data) => {
    const dataString = data.map((row) => `(
				${row.i_period_month},
				${row.i_period_year},
				'${row.d_opr}',
				'${row.c_indicator}',
				'${row.n_indicator}',
				${row.i_value_1},
				${row.i_value_2},
				'${row.userId}'
		)`);
    const query = `
		INSERT INTO prasarana.t_d_operation_technical
      (i_period_month, i_period_year, d_opr, c_indicator, n_indicator, i_value_1, i_value_2, n_created_by)
		VALUES ${dataString.join(',')}
		RETURNING *
	`;
    return await db_config_1.default.raw(query);
};
exports.saveTechnical = saveTechnical;
const updateTechnical = async (data) => {
    const dataString = data.map((row) => `(
			'${row.i_id}'::uuid,
			${row.i_period_month},
			${row.i_period_year},
			'${row.d_opr}'::date,
			'${row.c_indicator}',
			'${row.n_indicator}',
			${row.i_value_1},
			${row.i_value_2},
			'${row.userId}'::uuid,
			now()
		)`);
    const query = `
		UPDATE prasarana.t_d_operation_technical as target
		SET
			i_period_month = data.i_period_month,
			i_period_year = data.i_period_year,
			d_opr = data.d_opr,
			c_indicator = data.c_indicator,
			n_indicator = data.n_indicator,
			i_value_1 = data.i_value_1,
			i_value_2 = data.i_value_2,
      n_updated_by = data.n_updated_by,
      d_updated_at = data.d_updated_at
		FROM (VALUES ${dataString.join(',')})
      AS data(i_id, i_period_month, i_period_year, d_opr, c_indicator, n_indicator, i_value_1, i_value_2, n_updated_by, d_updated_at)
		WHERE target.i_id = data.i_id
		RETURNING *
	`;
    return await db_config_1.default.raw(query);
};
exports.updateTechnical = updateTechnical;
const updateTechnicalFile = async (data) => {
    const query = `
    UPDATE prasarana.t_d_operation_technical
    SET n_file_path = ?, n_updated_by = ?, d_updated_at = now()
    WHERE i_id = ?
		RETURNING *
	`;
    return await db_config_1.default.raw(query, [data.n_file_path, data.userId, data.i_id]);
};
exports.updateTechnicalFile = updateTechnicalFile;
const deleteTechnical = async (data) => {
    const query = `
		UPDATE prasarana.t_d_operation_technical
		SET n_file_path = NULL, n_deleted_by = ?, d_deleted_at = now(), i_status_active = 2
		WHERE i_id = ?
	`;
    return await db_config_1.default.raw(query, [data.userId, data.i_id]);
};
exports.deleteTechnical = deleteTechnical;
const getAllTechnicalSummary = async (periodDate) => {
    const query = `
		SELECT i_id, n_indicator, n_indicator_item, i_target, i_realization, i_status_active
		FROM prasarana.t_d_operation_technical_summary
		WHERE ${periodDate}
	`;
    return await db_config_1.default.raw(query);
};
exports.getAllTechnicalSummary = getAllTechnicalSummary;
const getTechnicalSummaryByNamePeriod = async (data) => {
    const whereString = data.reduce((acc, row) => {
        return [...acc, `(
			n_indicator = '${row.n_indicator}'
			AND n_indicator_item = '${row.n_indicator_item}'
			AND i_period_year = ${row.i_period_year}
			AND i_period_month = ${row.i_period_month}
		)`];
    }, []);
    const query = `
		SELECT n_indicator, n_indicator_item, i_target, i_realization
		FROM prasarana.t_d_operation_technical_summary
		WHERE ${whereString.join(' OR ')}
	`;
    return await db_config_1.default.raw(query);
};
exports.getTechnicalSummaryByNamePeriod = getTechnicalSummaryByNamePeriod;
const saveOperationTechnicalSummary = async (data) => {
    const dataString = data.map((row) => `(
				${row.i_period_month},
				${row.i_period_year},
				'${row.n_indicator}',
				'${row.n_indicator_item}',
				${row.i_target},
				${row.i_realization},
				'${row.userId}'
		)`);
    const query = `
		INSERT INTO prasarana.t_d_operation_technical_summary
      (i_period_month, i_period_year, n_indicator, n_indicator_item, i_target, i_realization, n_created_by)
		VALUES ${dataString.join(',')}
		RETURNING *
	`;
    return await db_config_1.default.raw(query);
};
exports.saveOperationTechnicalSummary = saveOperationTechnicalSummary;
const updateOperationTechnicalSummary = async (data) => {
    const dataString = data.map((row) => `(
			${row.i_period_month},
			${row.i_period_year},
			'${row.n_indicator}',
			'${row.n_indicator_item}',
			${row.i_target},
			${row.i_realization},
			'${row.userId}'::uuid,
			now()
		)`);
    const query = `
		UPDATE prasarana.t_d_operation_technical_summary as target
		SET
			i_period_month = data.i_period_month,
			i_period_year = data.i_period_year,
			n_indicator = data.n_indicator,
			n_indicator_item = data.n_indicator_item,
			i_target = data.i_target,
			i_realization = data.i_realization,
      n_updated_by = data.n_updated_by,
      d_updated_at = data.d_updated_at
		FROM (VALUES ${dataString.join(',')})
      AS data(i_period_month, i_period_year, n_indicator, n_indicator_item, i_target, i_realization, n_updated_by, d_updated_at)
		WHERE
			target.i_period_year = data.i_period_year AND
			target.i_period_month = data.i_period_month AND
			target.n_indicator = data.n_indicator AND
			target.n_indicator_item = data.n_indicator_item
		RETURNING *
	`;
    return await db_config_1.default.raw(query);
};
exports.updateOperationTechnicalSummary = updateOperationTechnicalSummary;
const getOperationOperational = async (i_status_active, periodDate) => {
    const status = i_status_active.length ? `AND i_status_active IN (${i_status_active.join(', ')})` : '';
    try {
        const query = `
			WITH data AS (SELECT n_indicator, c_indicator,
				json_agg(
					json_build_object(
						'i_id', i_id,
						'd_opr', d_opr,
						'i_operation_time', i_operation_time,
						'i_operation_time_disturb', i_operation_time_disturb,
						'i_percentage', i_percentage,
						'i_status_active', i_status_active
					)
				) AS record
			FROM (
				SELECT DISTINCT ON (d_opr, n_indicator) * FROM
				prasarana.t_d_operation_operational
				WHERE ${periodDate} ${status}
				ORDER BY d_opr ASC
			) AS UNIQUE_RECORD
			GROUP BY n_indicator, c_indicator)
			SELECT
				n_indicator,
				c_indicator,
				record
			FROM data;
		`;
        const result = await db_config_1.default.raw(query);
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '22P02') {
                throw new Error(`Get Operation Operational Failed: Invalid input syntax`);
            }
            else {
                throw new Error(`Get Operation Operational Failed: Database error`);
            }
        }
        else {
            throw new Error('Get Operation Operational Failed: Unexpected error occurred');
        }
    }
};
exports.getOperationOperational = getOperationOperational;
const saveOperationOperational = async (payload) => {
    const isValidUUID = (id) => /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id);
    const queries = payload.data.flatMap((data) => data.record.map((record) => {
        const shouldInsert = !record.i_id || !isValidUUID(record.i_id);
        const i_percentage = ((record.i_operation_time - record.i_operation_time_disturb) /
            record.i_operation_time) *
            100;
        if (shouldInsert) {
            return `
              INSERT INTO prasarana.t_d_operation_operational (
                i_period_month,
                i_period_year,
                n_indicator,
                d_opr,
                i_operation_time,
                i_operation_time_disturb,
                d_created_at,
                c_indicator,
                n_created_by,
				i_percentage
              ) VALUES (
                ${payload.period_month},
                ${payload.period_year},
                '${data.n_indicator}',
                '${record.d_opr}',
                ${record.i_operation_time},
                ${record.i_operation_time_disturb},
                NOW(),
                '${data.c_indicator}',
                '${payload.user_id}',
				${i_percentage}
              );
            `;
        }
        else {
            return `
              DO $$
              BEGIN
                IF EXISTS (
                  SELECT 1 FROM prasarana.t_d_operation_operational WHERE i_id = '${record.i_id}'
                ) THEN
                  UPDATE prasarana.t_d_operation_operational
                  SET
                    i_period_month = ${payload.period_month},
                    i_period_year = ${payload.period_year},
                    n_indicator = '${data.n_indicator}',
                    d_opr = '${record.d_opr}',
                    i_operation_time = ${record.i_operation_time},
                    i_operation_time_disturb = ${record.i_operation_time_disturb},
                    d_updated_at = NOW(),
                    n_updated_by = '${payload.user_id}',
                    c_indicator = '${data.c_indicator}',
					i_percentage = ${i_percentage}
                  WHERE i_id = '${record.i_id}';
                ELSE
                  INSERT INTO prasarana.t_d_operation_operational (
                    i_period_month,
                    i_period_year,
                    n_indicator,
                    d_opr,
                    i_operation_time,
                    i_operation_time_disturb,
                    d_created_at,
                    c_indicator,
                    n_created_by,
					i_percentage
                  ) VALUES (
                    ${payload.period_month},
                    ${payload.period_year},
                    '${data.n_indicator}',
                    '${record.d_opr}',
                    ${record.i_operation_time},
                    ${record.i_operation_time_disturb},
                    NOW(),
                    '${data.c_indicator}',
                    '${payload.user_id}',
					${i_percentage}
                  );
                END IF;
              END $$;
            `;
        }
    }));
    try {
        await db_config_1.default.transaction(async (trx) => {
            await trx.raw(queries.join('\n;'));
        });
    }
    catch (error) {
        if (error instanceof Error && error.code) {
            const code = error.code;
            if (code === '23505') {
                throw new Error(`Save Operation Operational Failed: Duplicate key error`);
            }
            else if (code === '23503') {
                throw new Error(`Save Operation Operational Failed: Foreign key violation`);
            }
            throw new Error(`Save Operation Operational Failed: Database error`);
        }
        else {
            throw new Error('Save Operation Operational Failed: Unexpected error occurred');
        }
    }
};
exports.saveOperationOperational = saveOperationOperational;
const saveOperationSafety = async (req, periodYear, periodMonth, data, userId) => {
    const trx = await db_config_1.default.transaction();
    try {
        for (let element of data) {
            for (let indicator of element.indicator) {
                if (!indicator.i_id) {
                    const newData = await trx('t_d_operation_safety').withSchema('prasarana').returning("*").insert({
                        i_period_year: periodYear,
                        i_period_month: periodMonth,
                        d_opr: element.d_opr,
                        n_indicator: indicator.n_indicator,
                        c_indicator: indicator.c_indicator,
                        i_value: indicator.i_value,
                        n_reason_1: element.n_reason_1,
                        n_reason_2: element.n_reason_2,
                        n_reason_3: element.n_reason_3,
                        i_status_active: 1,
                        n_created_by: userId,
                        d_created_at: (0, moment_1.default)(),
                    });
                    req.body.menu = 'Daftar Operasional Keselamatan';
                    req.body.description = 'Insert Daftar Operasional Keselamatan';
                    req.body.j_new_data = newData[0];
                    await service.InsertActivity(req);
                }
                else {
                    const findData = await trx("t_d_operation_safety")
                        .withSchema('prasarana')
                        .where('i_id', '=', indicator.i_id);
                    const newData = await trx('t_d_operation_safety')
                        .withSchema('prasarana')
                        .returning("*")
                        .where('i_id', '=', indicator.i_id)
                        .andWhere('d_opr', '=', element.d_opr)
                        .andWhere('i_status_active', '=', 1)
                        .update({
                        n_indicator: indicator.n_indicator,
                        c_indicator: indicator.c_indicator,
                        i_value: indicator.i_value,
                        n_reason_1: element.n_reason_1,
                        n_reason_2: element.n_reason_2,
                        n_reason_3: element.n_reason_3,
                        n_updated_by: userId,
                        d_updated_at: (0, moment_1.default)(),
                    });
                    req.body.menu = 'Daftar Operasional Keselamatan';
                    req.body.description = 'Update Daftar Operasional Keselamatan';
                    req.body.j_old_data = findData[0];
                    req.body.j_new_data = newData[0];
                    await service.InsertActivity(req);
                }
            }
        }
        trx.commit();
        return true;
    }
    catch (error) {
        trx.rollback();
        console.log(error);
        return false;
    }
};
exports.saveOperationSafety = saveOperationSafety;
const getOperationSafety = async (periodeYear, periodeMonth, status) => {
    const startYear = periodeYear[0];
    const endYear = periodeYear[1];
    const startMonth = periodeMonth[0];
    const endMonth = periodeMonth[1];
    try {
        let queryBetween = '';
        let conditionWhere = '';
        if (endYear > startYear) {
            queryBetween = `(ms.i_period_year = ${startYear} and ms.i_period_month >= ${startMonth})
            or (ms.i_period_year = ${endYear} and ms.i_period_month <= ${endMonth})`;
        }
        else {
            queryBetween = `ms.i_period_year = ${startYear} and (ms.i_period_month between ${startMonth} and ${endMonth})`;
        }
        if (!status) {
            conditionWhere = `and ms.i_status_active in (1, 4)`;
        }
        else {
            if (status == 1 || status == 4) {
                conditionWhere = `and ms.i_status_active=${status}`;
            }
            else {
                conditionWhere = `and ms.i_status_active not in (1,2,3,4)`;
            }
        }
        let query = `SELECT
        to_char(ms.d_opr, 'YYYY-MM-DD') as d_opr,
        ARRAY_AGG(ms.i_id) AS i_ids,
        ARRAY_AGG(ms.n_indicator) AS n_indicators,
        ARRAY_AGG(ms.c_indicator) AS c_indicators,
        ARRAY_AGG(ms.i_value) AS i_values,
        ARRAY_AGG(ms.n_reason_1) AS n_reasons_1,
        ARRAY_AGG(ms.n_reason_2) AS n_reasons_2,
        ARRAY_AGG(ms.n_reason_3) AS n_reasons_3,
        ARRAY_AGG(ms.i_status_active) AS i_status_actives
      FROM
        prasarana.t_d_operation_safety ms
      WHERE
        ${queryBetween} ${conditionWhere}
      GROUP BY
        ms.d_opr
      ORDER BY
        ms.d_opr ASC;`;
        return await db_config_1.default.raw(query);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOperationSafety = getOperationSafety;
const getTargetCertificate = async (periodMonth, periodeYear, subDivisi, subUnit) => {
    const parseIn = subDivisi.map((el) => `'${el}'`).join(", ");
    let query = `SELECT
		b.sub_kategori AS sub_divisi,
		COUNT(a.id)
		FROM prasarana.struktur_organisasi a
		JOIN prasarana.kategori b ON a.id_kategori = b.id_kategori
		WHERE
		UPPER(b.sub_kategori) IN (${parseIn})
		AND UPPER(b.sub_kategori_sub) = ?
		AND period = ?
		GROUP BY
		b.sub_kategori
	`;
    let result = await db_config_1.default.raw(query, [subUnit, `${periodeYear[0]}-${periodMonth[0]}-01`]);
    return result;
};
exports.getTargetCertificate = getTargetCertificate;
const getRealizationCertificate = async (periodMonth, periodeYear, subDivisi, subUnit) => {
    const parseIn = subDivisi.map((el) => `'${el}'`).join(", ");
    let query = `SELECT c.sub_kategori, COUNT(a.id)
		FROM prasarana.sertifikasi a
		LEFT JOIN prasarana.struktur_organisasi b ON b.nipp = a.nipp
		LEFT JOIN prasarana.kategori c ON c.id_kategori = b.id_kategori
		WHERE
		UPPER(c.sub_kategori) IN (${parseIn})
		AND UPPER(c.sub_kategori_sub) = ?
		AND a.tanggal_berlaku BETWEEN ? AND ?
		AND b.period BETWEEN ? AND ?
		GROUP BY
		c.sub_kategori
	`;
    let lastDate = new Date(periodeYear[1], periodMonth[1], 0);
    let startDate = `${periodeYear[0]}-${periodMonth[0]}-01`;
    let endDate = `${periodeYear[1]}-${periodMonth[1]}-${lastDate.getDate()}`;
    let result = await db_config_1.default.raw(query, [subUnit, startDate, endDate, startDate, endDate]);
    return result;
};
exports.getRealizationCertificate = getRealizationCertificate;
const getMasterParam = async () => {
    let query = `SELECT * FROM prasarana.t_m_dashboard_parameter
		WHERE
		i_status_active = 1 AND c_dashboard_type = 'PENGOPERASIAN'
		AND c_param != 'TEKNIS_SUMMARY'
		ORDER BY i_order
	`;
    let result = await db_config_1.default.raw(query);
    return result;
};
exports.getMasterParam = getMasterParam;
const getTargetIndicator = async (stringPeriod, paramName) => {
    let query = `SELECT
		DISTINCT a.c_param,
		a.i_id,
		a.n_indicator
		FROM prasarana.t_d_dashboard_target_indicator a
		WHERE ${stringPeriod}
		AND a.c_dashboard_type = 'PENGOPERASIAN'
		AND a.c_param = ?
		AND a.i_status_active != 2
	`;
    let result = await db_config_1.default.raw(query, [paramName]);
    return result;
};
exports.getTargetIndicator = getTargetIndicator;
const getIndicatorApprove = async (stringPeriod, tableName, i_id = '') => {
    let query = `SELECT
		COUNT(i_id)
		FROM
		prasarana.${tableName}
		WHERE ${stringPeriod}
		AND i_status_active = 4
		AND c_indicator like ?
	`;
    let result = await db_config_1.default.raw(query, `%${i_id}%`);
    return result;
};
exports.getIndicatorApprove = getIndicatorApprove;
