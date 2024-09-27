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
exports.getTableName = exports.unapprove = exports.approve = exports.getIndicator = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const moment_1 = __importDefault(require("moment"));
const service = __importStar(require("../service/activity.service"));
const getIndicator = async (periodYear, periodMonth, cDashboardType, cParam) => {
    const startYear = periodYear[0];
    const endYear = periodYear[1];
    const startMonth = periodMonth[0];
    const endMonth = periodMonth[1];
    let queryBetween = "";
    if (endYear > startYear) {
        queryBetween = `(tddti.i_period_year = ${startYear} and tddti.i_period_month >= ${startMonth})
      or (tddti.i_period_year = ${endYear} and tddti.i_period_month <= ${endMonth})`;
    }
    else {
        queryBetween = `tddti.i_period_year = ${startYear} and (tddti.i_period_month between ${startMonth} and ${endMonth})`;
    }
    let query = `select
      tddti.i_id AS c_indicator,
      tddti.n_indicator,
      tddti.n_unit
    from
      prasarana.t_d_dashboard_target_indicator tddti
    where
      ${queryBetween}
      and tddti.c_dashboard_type = '${cDashboardType}'
      and tddti.c_param = '${cParam}'
      and tddti.i_status_active in (1,4)
    order by i_order asc`;
    return await db_config_1.default.raw(query);
};
exports.getIndicator = getIndicator;
const approve = async (req, data, tableName, userId) => {
    const trx = await db_config_1.default.transaction();
    try {
        if (!data[0].d_opr) {
            for (let element of data) {
                const findData = await getDetailIndicatorById(tableName, element.i_id);
                await db_config_1.default.transaction(async (trx) => {
                    if (findData.length == 0) {
                        throw new Error(`No row update with id ${element.i_id}`);
                    }
                    const updateParameterData = await (0, db_config_1.default)(tableName)
                        .transacting(trx)
                        .withSchema("prasarana")
                        .returning("*")
                        .where("i_id", "=", element.i_id)
                        .update({
                        i_status_active: 4,
                        d_updated_at: (0, moment_1.default)(),
                        n_updated_by: userId,
                        approved_at: (0, moment_1.default)(),
                        approved_by: userId,
                    });
                    if (!updateParameterData) {
                        throw new Error(`Faild update data with id ${element.i_id}`);
                    }
                    req.body.menu = `Approve Indicicator ${tableName}`;
                    req.body.description = 'Update Indicicator ${tableName}';
                    req.body.j_old_data = findData[0];
                    req.body.j_new_data = updateParameterData[0];
                    await service.InsertActivity(req);
                });
            }
            return true;
        }
        const cIndicators = [];
        await db_config_1.default.transaction(async (trx) => {
            for (const element of data) {
                const findData = await getDetailIndicatorByIdAndDateOpr(tableName, element.i_id, element.d_opr);
                if (findData.length == 0) {
                    throw new Error(`No row update with id ${element.i_id}`);
                }
                if (!cIndicators.includes(findData[0].c_indicator)) {
                    cIndicators.push(findData[0].c_indicator);
                }
                const updateParameterData = await (0, db_config_1.default)(tableName)
                    .transacting(trx)
                    .withSchema("prasarana")
                    .returning("*")
                    .where("i_id", "=", element.i_id)
                    .andWhere("d_opr", "=", element.d_opr)
                    .update({
                    i_status_active: 4,
                    d_updated_at: (0, moment_1.default)(),
                    n_updated_by: userId,
                    approved_at: (0, moment_1.default)(),
                    approved_by: userId,
                });
                if (!updateParameterData) {
                    throw new Error(`Faild update data with id ${element.i_id}`);
                }
                req.body.menu = `Approve Indicicator ${tableName}`;
                req.body.description = 'Update Indicicator ${tableName}';
                req.body.j_old_data = findData[0];
                req.body.j_new_data = updateParameterData[0];
                await service.InsertActivity(req);
            }
        });
        const findDashTargetIndicator = await trx("t_d_dashboard_target_indicator").withSchema('prasarana').whereIn("i_id", cIndicators);
        const updateDashTargetIndicator = await (0, db_config_1.default)("t_d_dashboard_target_indicator")
            .transacting(trx)
            .withSchema("prasarana")
            .returning("*")
            .whereIn("i_id", cIndicators)
            .update({
            i_status_active: 4,
            d_updated_at: (0, moment_1.default)(),
            n_updated_by: userId,
        });
        if (!updateDashTargetIndicator) {
            throw new Error(`Faild update target indicator with c_indicator ${cIndicators}`);
        }
        req.body.menu = `Dashboard Target Indicicator`;
        req.body.description = 'Update Dashboard Target Indicicator';
        req.body.j_old_data = findDashTargetIndicator;
        req.body.j_new_data = updateDashTargetIndicator;
        await service.InsertActivity(req);
        trx.commit();
        return true;
    }
    catch (error) {
        console.log(error);
        trx.rollback();
        return false;
    }
};
exports.approve = approve;
const unapprove = async (req, data, tableName, userId) => {
    const trx = await db_config_1.default.transaction();
    try {
        const cIndicators = [];
        if (!data[0].d_opr) {
            for (let element of data) {
                const findData = await getDetailIndicatorById(tableName, element.i_id);
                await db_config_1.default.transaction(async (trx) => {
                    if (findData.length == 0) {
                        throw new Error(`No row update with id ${element.i_id}`);
                    }
                    const updateParameterData = await (0, db_config_1.default)(tableName)
                        .transacting(trx)
                        .withSchema("prasarana")
                        .returning("*")
                        .where("i_id", "=", element.i_id)
                        .update({
                        i_status_active: 1,
                        d_updated_at: (0, moment_1.default)(),
                        n_updated_by: userId,
                        approved_at: null,
                        approved_by: null,
                    });
                    if (!updateParameterData) {
                        throw new Error(`Faild update data with id ${element.i_id}`);
                    }
                    req.body.menu = `Unapprove Indicicator ${tableName}`;
                    req.body.description = 'Update Indicicator ${tableName}';
                    req.body.j_old_data = findData[0];
                    req.body.j_new_data = updateParameterData[0];
                    await service.InsertActivity(req);
                });
            }
            return true;
        }
        await db_config_1.default.transaction(async (trx) => {
            for (const element of data) {
                const findData = await getDetailIndicatorByIdAndDateOpr(tableName, element.i_id, element.d_opr);
                if (findData.length == 0) {
                    throw new Error(`No row update with id ${element.i_id}`);
                }
                if (!cIndicators.includes(findData[0].c_indicator)) {
                    cIndicators.push(findData[0].c_indicator);
                }
                const updateParameterData = await (0, db_config_1.default)(tableName)
                    .transacting(trx)
                    .withSchema("prasarana")
                    .returning("*")
                    .where("i_id", "=", element.i_id)
                    .andWhere("d_opr", "=", element.d_opr)
                    .update({
                    i_status_active: 1,
                    d_updated_at: (0, moment_1.default)(),
                    n_updated_by: userId,
                    approved_at: null,
                    approved_by: null,
                });
                if (!updateParameterData) {
                    throw new Error(`Faild update data with id ${element.i_id}`);
                }
                req.body.menu = `Unapprove Indicicator ${tableName}`;
                req.body.description = 'Update Indicicator ${tableName}';
                req.body.j_old_data = findData[0];
                req.body.j_new_data = updateParameterData[0];
                await service.InsertActivity(req);
            }
        });
        const dateOperation = String(req.body.data[0].d_opr).split('-').map(Number);
        const periodYear = dateOperation[0];
        const periodMonth = dateOperation[1];
        for (let cIndicator of cIndicators) {
            const totalDataIsActive = await (0, db_config_1.default)(tableName).withSchema("prasarana").count("*").where("i_period_month", "=", periodMonth).andWhere("i_period_year", "=", periodYear).andWhere("c_indicator", "=", cIndicator).andWhere("i_status_active", "=", 4);
            if (Number(totalDataIsActive[0].count) < 1) {
                const findDashTargetIndicator = await (0, db_config_1.default)("t_d_dashboard_target_indicator")
                    .withSchema("prasarana").where("i_id", "=", cIndicator);
                const updateDashTargetIndicator = await (0, db_config_1.default)("t_d_dashboard_target_indicator")
                    .transacting(trx)
                    .withSchema("prasarana")
                    .returning("*")
                    .where("i_id", "=", cIndicator)
                    .update({
                    i_status_active: 1,
                    d_updated_at: (0, moment_1.default)(),
                    n_updated_by: userId,
                });
                if (!updateDashTargetIndicator) {
                    throw new Error(`Faild update target indicator with c_indicator ${cIndicators}`);
                }
                req.body.menu = `Dashboard Target Indicicator`;
                req.body.description = 'Update Dashboard Target Indicicator';
                req.body.j_old_data = findDashTargetIndicator;
                req.body.j_new_data = updateDashTargetIndicator;
                await service.InsertActivity(req);
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
exports.unapprove = unapprove;
const getTableName = async (dashboardType, cParam) => {
    let query = `select
        tmdp.n_table_data
    from
        prasarana.t_m_dashboard_parameter tmdp
    where
        tmdp.c_dashboard_type = '${dashboardType}'
        and tmdp.c_param = '${cParam}'`;
    return await db_config_1.default.raw(query);
};
exports.getTableName = getTableName;
const getDetailIndicatorByIdAndDateOpr = async (tableName, iId, dOpr) => {
    try {
        const findData = await db_config_1.default
            .withSchema("prasarana")
            .from(tableName)
            .where({ "i_id": iId, "d_opr": dOpr })
            .select("*");
        return findData;
    }
    catch (error) {
        return [];
    }
};
const getDetailIndicatorById = async (tableName, iId) => {
    try {
        const findData = await db_config_1.default
            .withSchema("prasarana")
            .from(tableName)
            .where({ "i_id": iId })
            .select("*");
        return findData;
    }
    catch (error) {
        return [];
    }
};
