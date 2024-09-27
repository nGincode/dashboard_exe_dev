"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllKategori = exports.Allslipgaji = exports.GetNowPeriod = exports.GetLastPeriod = exports.CheckDataPeriod = exports.Trx = exports.CheckUser = exports.Allmcu = exports.Allsertifikasi = exports.AllNewSubMaster = exports.AllNewMaster = exports.Insert = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Insert = async (data) => {
    let result = await db_config_1.default
        .withSchema("prasarana")
        .table("struktur_organisasi")
        .insert(data);
    return result;
};
exports.Insert = Insert;
const AllNewMaster = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    id, nipp, name, jabatan, period, divisi, parent_id, sort, id_kategori
    FROM prasarana.struktur_organisasi rp where parent_id is null and
    period between '${startOf}' and '${endOf}' order by sort asc`);
    return result.rows;
};
exports.AllNewMaster = AllNewMaster;
// const AllNewMaster = async (startOf:any,endOf:any) => {
//   let result = await knex.raw(`
//     SELECT 
//      rp.*,
//      k.kategori,
//      k.sub_kategori,
//      k.sub_kategori_sub
//     FROM prasarana.struktur_organisasi rp 
//     left join prasarana.kategori k on k.id_kategori = rp.id_kategori and k.b_active = true
//     where rp.parent_id is null 
//     and rp.period between '${startOf}' and '${endOf}' order by rp.sort asc`);
//     return result.rows
// };
const AllNewSubMaster = async (parent) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    id, nipp, name, jabatan, period, divisi, parent_id, sort, id_kategori
     FROM prasarana.struktur_organisasi rp where parent_id = '${parent}' order by sort desc`);
    return result.rows;
};
exports.AllNewSubMaster = AllNewSubMaster;
// const AllNewSubMaster = async (parent:any) => {
//   let result = await knex.raw(`
//     SELECT 
//     rp.*,
//     k.kategori,
//     k.sub_kategori,
//     k.sub_kategori_sub
//     FROM prasarana.struktur_organisasi rp 
//     left join prasarana.kategori k on k.id_kategori = rp.id_kategori and k.b_active = true
//     where rp.parent_id = '${parent}' order by rp.sort desc`);
//     return result.rows;
// };
const CheckUser = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT 
      *
    FROM prasarana.struktur_organisasi rp
    WHERE period::date between '${startOf}' and '${endOf}'`);
    return result.rows;
};
exports.CheckUser = CheckUser;
const Allsertifikasi = async (nip) => {
    let result = await db_config_1.default.raw(`
    SELECT 
     *,
     filename as file
    FROM prasarana.sertifikasi rp
    WHERE nipp = '${nip}'
    order by tanggal_berlaku desc`);
    return result.rows;
};
exports.Allsertifikasi = Allsertifikasi;
const Allmcu = async (nip) => {
    let result = await db_config_1.default.raw(`
    SELECT 
     *,
     filename as file
    FROM prasarana.mcu rp
    WHERE nipp = '${nip}'`);
    return result.rows;
};
exports.Allmcu = Allmcu;
const Allslipgaji = async (nip) => {
    let result = await db_config_1.default.raw(`
    SELECT 
     *,
     filename as file
    FROM prasarana.slip_gaji rp
    WHERE nipp = '${nip}'`);
    return result.rows;
};
exports.Allslipgaji = Allslipgaji;
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
const CheckDataPeriod = async (startOf, endOf) => {
    let result = await db_config_1.default.raw(`
    SELECT 
      *
    FROM prasarana.struktur_organisasi rp
    WHERE period::date between '${startOf}' and '${endOf}'`);
    return result.rows;
};
exports.CheckDataPeriod = CheckDataPeriod;
const GetLastPeriod = async (startOf, endOf, nipp) => {
    let result;
    if (nipp === 'no') {
        result = await db_config_1.default.raw(`
      SELECT TRIM(nipp) as nipp, TRIM(jabatan) as jabatan, name, period, TRIM(divisi) as divisi, parent_id FROM prasarana.struktur_organisasi rp where period between '${startOf}' and '${endOf}' order by jabatan asc`);
    }
    else {
        result = await db_config_1.default.raw(`
      SELECT TRIM(nipp) as nipp, TRIM(jabatan) as jabatan, name, period, TRIM(divisi) as divisi, parent_id FROM prasarana.struktur_organisasi rp where period between '${startOf}' and '${endOf}' and nipp ='${nipp}' order by jabatan asc limit 1`);
    }
    return result.rows;
};
exports.GetLastPeriod = GetLastPeriod;
const GetNowPeriod = async (startOf, endOf, nipp) => {
    let result;
    if (nipp === 'no') {
        result = await db_config_1.default.raw(`
      SELECT TRIM(nipp) as nipp, TRIM(jabatan) as jabatan, name, period, TRIM(divisi) as divisi, parent_id FROM prasarana.struktur_organisasi rp where period between '${startOf}' and '${endOf}' order by jabatan asc`);
    }
    else {
        result = await db_config_1.default.raw(`
      SELECT TRIM(nipp) as nipp, TRIM(jabatan) as jabatan, name, period, TRIM(divisi) as divisi, parent_id FROM prasarana.struktur_organisasi rp where period between '${startOf}' and '${endOf}' and nipp ='${nipp}' order by jabatan asc limit 1`);
    }
    return result.rows;
};
exports.GetNowPeriod = GetNowPeriod;
// const getAllKategori = async (id:any) => {
//   let result = await knex.raw(`
//     SELECT 
//     id,kategori, sub_kategori, sub_kategori_sub
//     FROM prasarana.kategori
//     where id = '${id}'
//     order by kategori.kategori desc
//     limit 1
//   `)
// return result.rows;
// };  
const getAllKategori = async (id) => {
    let result = await db_config_1.default.raw(`
    SELECT 
    id, kategori, sub_kategori, sub_kategori_sub, description
    FROM prasarana.kategori
    where id_kategori = '${id}'
    and b_active is true
    limit 1
  `);
    return result.rows[0];
};
exports.getAllKategori = getAllKategori;
