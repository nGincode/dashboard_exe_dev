"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = exports.Trx = exports.All = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Insert = async (data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("struktur_organisasi")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const All = async () => {
    let result = await db_config_1.default.raw(`
    SELECT 
    *
    FROM prasarana.kategori where b_active is true`);
    return result.rows;
};
exports.All = All;
const Trx = async (month, year, userID, menu) => {
    let result;
    await db_config_1.default.transaction(async (trx) => {
        try {
            await trx.raw(`SELECT * FROM pso.history_table('${month}', '${year}', '${userID}', null, '${menu}')`);
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
const Find = async (nipp) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    rp.id, rp.nipp, rp.name, rp.jabatan, rp.period, rp.divisi, rp.parent_id, rp.sort, rp.id_kategori,
    k.kategori, k.sub_kategori, k.sub_kategori_sub
    FROM prasarana.struktur_organisasi rp
    left join prasarana.kategori k on k.id_kategori = rp.id_kategori and k.b_active is true
    where rp.nipp = '${nipp}' order by rp.period desc limit 1`);
    return result.rows;
};
exports.Find = Find;
