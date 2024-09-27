"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All2 = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const moment_1 = __importDefault(require("moment"));
const All = async (data) => {
    // fare_type = 1 peak sml,
    // distance = null => all data (tampill 35 table)
    // 0 < distance <= 33 
    let allDistance = [];
    let maxDistance = 0;
    let totalDataHorizontalTemp = {
        DKA: 0,
        SET: 0,
        RAS: 0,
        KUA: 0,
        PAN: 0,
        CKK: 0,
        CIL: 0,
        CWG: 0,
        HAL: 0,
        JTU: 0,
        CK1: 0,
        CK2: 0,
        BEK: 0,
        JTM: 0,
        HAR: 0,
        KAM: 0,
        CRC: 0,
        TMII: 0,
        i_total: 0,
        station_from: "TOTAL"
    };
    let defaultTable = -1;
    let countDistance = 33;
    let datas = [];
    let dataPerDistance = [];
    let result = [];
    // set distance
    if (data.distance != null) {
        defaultTable = data.distance;
        countDistance = data.distance;
        for (let i = defaultTable; i <= countDistance; i++) {
            result = await db_config_1.default.raw(`
                SELECT * FROM pso.sp_get_afc('${data.start_at}', '${data.end_at}', ${data.fare_type}, ${i}, '${(0, moment_1.default)(data.start_at).format('HH:mm:ss')}', '${(0, moment_1.default)(data.end_at).format('HH:mm:ss')}');
        `);
            result.rows.map((item, key) => {
                totalDataHorizontalTemp.DKA += item?.my_data?.DKA;
                totalDataHorizontalTemp.SET += item?.my_data?.SET;
                totalDataHorizontalTemp.RAS += item?.my_data?.RAS;
                totalDataHorizontalTemp.KUA += item?.my_data?.KUA;
                totalDataHorizontalTemp.PAN += item?.my_data?.PAN;
                totalDataHorizontalTemp.CKK += item?.my_data?.CKK;
                totalDataHorizontalTemp.CIL += item?.my_data?.CIL;
                totalDataHorizontalTemp.CWG += item?.my_data?.CWG;
                totalDataHorizontalTemp.HAL += item?.my_data?.HAL;
                totalDataHorizontalTemp.JTU += item?.my_data?.JTU;
                totalDataHorizontalTemp.CK1 += item?.my_data?.CK1;
                totalDataHorizontalTemp.CK2 += item?.my_data?.CK2;
                totalDataHorizontalTemp.BEK += item?.my_data?.BEK;
                totalDataHorizontalTemp.JTM += item?.my_data?.JTM;
                totalDataHorizontalTemp.HAR += item?.my_data?.HAR;
                totalDataHorizontalTemp.KAM += item?.my_data?.KAM;
                totalDataHorizontalTemp.CRC += item?.my_data?.CRC;
                totalDataHorizontalTemp.TMII += item?.my_data?.TMII;
                totalDataHorizontalTemp.i_total += item?.my_data?.i_total;
                datas.push(item.my_data);
                if (key == result.rows.length - 1) {
                    datas.push(totalDataHorizontalTemp);
                }
            });
            dataPerDistance.push(datas);
            datas = [];
        }
    }
    else {
        maxDistance = await db_config_1.default.raw(`
        select
          max(i_distance) as distance
        from
          opr.t_m_distance
        where
          b_active = true
        limit 1
    `);
        for (let i = 0; i <= (maxDistance.rows[0].distance); i++) {
            allDistance.push({ distance: i });
        }
        let lastDistance = allDistance[allDistance.length - 1].distance;
        let lengthArr = allDistance.length;
        let j = -1;
        let k = 0;
        while (j <= lastDistance) {
            result = await db_config_1.default.raw(`
          SELECT * FROM pso.sp_get_afc('${data.start_at}', '${data.end_at}', ${data.fare_type}, ${j == -1 ? null : j}, '${(0, moment_1.default)(data.start_at).format('HH:mm:ss')}', '${(0, moment_1.default)(data.end_at).format('HH:mm:ss')}');
      `);
            totalDataHorizontalTemp =
                {
                    DKA: 0,
                    SET: 0,
                    RAS: 0,
                    KUA: 0,
                    PAN: 0,
                    CKK: 0,
                    CIL: 0,
                    CWG: 0,
                    HAL: 0,
                    JTU: 0,
                    CK1: 0,
                    CK2: 0,
                    BEK: 0,
                    JTM: 0,
                    HAR: 0,
                    KAM: 0,
                    CRC: 0,
                    TMII: 0,
                    i_total: 0,
                    station_from: "TOTAL"
                };
            result.rows.map((item, key) => {
                totalDataHorizontalTemp.DKA += item?.my_data?.DKA;
                totalDataHorizontalTemp.SET += item?.my_data?.SET;
                totalDataHorizontalTemp.RAS += item?.my_data?.RAS;
                totalDataHorizontalTemp.KUA += item?.my_data?.KUA;
                totalDataHorizontalTemp.PAN += item?.my_data?.PAN;
                totalDataHorizontalTemp.CKK += item?.my_data?.CKK;
                totalDataHorizontalTemp.CIL += item?.my_data?.CIL;
                totalDataHorizontalTemp.CWG += item?.my_data?.CWG;
                totalDataHorizontalTemp.HAL += item?.my_data?.HAL;
                totalDataHorizontalTemp.JTU += item?.my_data?.JTU;
                totalDataHorizontalTemp.CK1 += item?.my_data?.CK1;
                totalDataHorizontalTemp.CK2 += item?.my_data?.CK2;
                totalDataHorizontalTemp.BEK += item?.my_data?.BEK;
                totalDataHorizontalTemp.JTM += item?.my_data?.JTM;
                totalDataHorizontalTemp.HAR += item?.my_data?.HAR;
                totalDataHorizontalTemp.KAM += item?.my_data?.KAM;
                totalDataHorizontalTemp.CRC += item?.my_data?.CRC;
                totalDataHorizontalTemp.TMII += item?.my_data?.TMII;
                totalDataHorizontalTemp.i_total += item?.my_data?.i_total;
                datas.push(item.my_data);
                if (key == result.rows.length - 1) {
                    datas.push(totalDataHorizontalTemp);
                }
            });
            dataPerDistance.push(datas);
            datas = [];
            // to end loop
            if (k == lengthArr) {
                j = allDistance[k - 1].distance + 2;
            }
            else {
                j = allDistance[k].distance;
            }
            k++;
        }
    }
    // return;
    return dataPerDistance;
};
exports.All = All;
const All2 = async (data) => {
    // fare_type = 1 peak sml,
    // distance = null => all data (tampill 35 table)
    // 0 < distance <= 33 
    let totalDataHorizontalTemp = {
        DKA: 0,
        SET: 0,
        RAS: 0,
        KUA: 0,
        PAN: 0,
        CKK: 0,
        CIL: 0,
        CWG: 0,
        HAL: 0,
        JTU: 0,
        CK1: 0,
        CK2: 0,
        BEK: 0,
        JTM: 0,
        HAR: 0,
        KAM: 0,
        CRC: 0,
        TMII: 0,
        i_total: 0,
        station_from: "TOTAL"
    };
    let datas = [];
    let dataPerDistance = [];
    let result = [];
    // set distance
    result = await db_config_1.default.raw(`
      SELECT * FROM pso.sp_get_afc('${data.start_at}', '${data.end_at}', ${data.fare_type}, ${data.distance}, '${(0, moment_1.default)(data.start_at).format('HH:mm:ss')}', '${(0, moment_1.default)(data.end_at).format('HH:mm:ss')}');
  `);
    result.rows.map((item, key) => {
        totalDataHorizontalTemp.DKA += item?.my_data?.DKA;
        totalDataHorizontalTemp.SET += item?.my_data?.SET;
        totalDataHorizontalTemp.RAS += item?.my_data?.RAS;
        totalDataHorizontalTemp.KUA += item?.my_data?.KUA;
        totalDataHorizontalTemp.PAN += item?.my_data?.PAN;
        totalDataHorizontalTemp.CKK += item?.my_data?.CKK;
        totalDataHorizontalTemp.CIL += item?.my_data?.CIL;
        totalDataHorizontalTemp.CWG += item?.my_data?.CWG;
        totalDataHorizontalTemp.HAL += item?.my_data?.HAL;
        totalDataHorizontalTemp.JTU += item?.my_data?.JTU;
        totalDataHorizontalTemp.CK1 += item?.my_data?.CK1;
        totalDataHorizontalTemp.CK2 += item?.my_data?.CK2;
        totalDataHorizontalTemp.BEK += item?.my_data?.BEK;
        totalDataHorizontalTemp.JTM += item?.my_data?.JTM;
        totalDataHorizontalTemp.HAR += item?.my_data?.HAR;
        totalDataHorizontalTemp.KAM += item?.my_data?.KAM;
        totalDataHorizontalTemp.CRC += item?.my_data?.CRC;
        totalDataHorizontalTemp.TMII += item?.my_data?.TMII;
        totalDataHorizontalTemp.i_total += item?.my_data?.i_total;
        datas.push(item.my_data);
        if (key == result.rows.length - 1) {
            datas.push(totalDataHorizontalTemp);
        }
    });
    dataPerDistance.push(datas);
    datas = [];
    // return;
    return dataPerDistance;
};
exports.All2 = All2;
