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
exports.getReporting = exports.getCertificate = exports.saveMaintenanceTechnicalFile = exports.saveMaintenanceTechnical = exports.saveMaintenanceSafety = exports.saveMaintenanceOperational = exports.getMaintenanceTechnical = exports.getMaintenanceSafety = exports.getMaintenanceOperational = exports.getDownloadMerge = exports.getBuildMerge = exports.deleteMaintenanceTechnicalFile = void 0;
const fs_1 = __importDefault(require("fs"));
const fsPromise = __importStar(require("fs/promises"));
const mime_types_1 = __importDefault(require("mime-types"));
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const build = __importStar(require("../helper/response.helper"));
const repository = __importStar(require("../repository/prasarana-maintenance.repository"));
const activity_service_1 = require("../service/activity.service");
const PDFMerger = require('pdf-merger-js');
const getMaintenanceSafety = async (periodeYear, periodeMonth, status) => {
    let response;
    const startYear = periodeYear[0];
    const endYear = periodeYear[1];
    const startMonth = periodeMonth[0];
    const endMonth = periodeMonth[1];
    try {
        const result = await repository.getMaintenanceSafety(periodeYear, periodeMonth, status);
        const dataResponse = convertToResponseMaintenanceSafety(result.rows);
        if (result) {
            response = build.response('00', 'success', dataResponse);
        }
        else {
            response = build.response('400', 'invalid input type', []);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getMaintenanceSafety = getMaintenanceSafety;
const saveMaintenanceSafety = async (req) => {
    let response;
    try {
        const periodeYear = req.body.period_year;
        const periodMonth = req.body.period_month;
        const data = req.body.data;
        const result = await repository.saveMaintenanceSafety(req, periodeYear, periodMonth, data, req.userId);
        if (result) {
            response = build.response('00', 'success', null);
        }
        else {
            response = build.response('400', 'invalid input type', null);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.saveMaintenanceSafety = saveMaintenanceSafety;
const getMaintenanceOperational = async (periodMonth, periodYear, i_status_active) => {
    const stringPeriod = getPeriodDatesQuery(periodMonth, periodYear);
    let response;
    const statusActive = [];
    if ([0].includes(i_status_active)) {
        statusActive.push(1, 4);
    }
    else if ([1, 4].includes(i_status_active)) {
        statusActive.push(i_status_active);
    }
    else {
        statusActive.push(0);
    }
    try {
        const data = await repository.getMaintenanceOperational(statusActive, stringPeriod);
        if (!data) {
            response = build.response('400', 'invalid input type', []);
        }
        else {
            response = build.response('00', 'success', data);
        }
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getMaintenanceOperational = getMaintenanceOperational;
const saveMaintenanceOperational = async (request) => {
    const body = request.body;
    const payload = {
        user_id: request.userId,
        period_year: body.period_year,
        period_month: body.period_month,
        data: body.data,
    };
    let response;
    try {
        const validate = request.body.data.some((element) => element.record.some((record) => record.i_operation_time === 0));
        if (validate) {
            response = build.response('400', 'Jangka waktu operasi pelepasan tidak boleh 0 atau tidak di isi', []);
            return response;
        }
        const validateMaxInteger = request.body.data.some((element) => element.record.some((record) => record.i_operation_time > 2147483647 || record.i_operation_time_disturb > 2147483647));
        if (validateMaxInteger) {
            response = build.response('400', 'Jangka Waktu Operasi Pelayanan KA / Jangka Waktu Operasi yang Terganggu terlalu besar', []);
            return response;
        }
        await repository.saveMaintenanceOperational(payload);
        request.body.menu = 'Prasarana Perawatan Operasional';
        request.body.description = 'Insert Data Maintenance Operational';
        request.body.j_new_data = payload;
        await (0, activity_service_1.InsertActivity)(request);
        response = build.response('00', 'success', {});
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.saveMaintenanceOperational = saveMaintenanceOperational;
const getMaintenanceTechnical = async (periodMonth, periodYear, statusActive) => {
    try {
        let results;
        const stringPeriod = getPeriodDatesQuery(periodMonth, periodYear);
        const getData = await repository.getAllTechnical(stringPeriod, statusActive);
        if (getData.rows.length === 0)
            results = [];
        else {
            results = getData.rows.reduce((acc, row) => {
                const { d_opr, i_id, i_status_active, n_file_path, c_indicator, n_indicator, ...values } = row;
                const dateOpr = (0, moment_1.default)(d_opr, true).format('YYYY-MM-DD');
                const idx = acc.findIndex((val) => val.d_opr === dateOpr);
                const indicator = {
                    i_id,
                    n_indicator,
                    c_indicator,
                    sub_indicator: Object.keys(values).map((value) => {
                        const index = value.slice(-1);
                        return { 'column': `column_${index}`, "i_value": values[value] };
                    }),
                    n_file_path,
                    i_status_active
                };
                if (acc.length > 0 && idx >= 0)
                    acc[idx].indicator.push(indicator);
                else
                    acc.push({ d_opr: dateOpr, indicator: [indicator] });
                return acc;
            }, []);
        }
        return build.response('00', 'success', results);
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.getMaintenanceTechnical = getMaintenanceTechnical;
const saveMaintenanceTechnical = async (req) => {
    const userId = req.userId;
    const data = req.body;
    try {
        const { period_month: i_period_month, period_year: i_period_year, data: dataPerPeriod } = data;
        let insertData = [];
        let updateData = [];
        const inputData = dataPerPeriod.reduce((acc, { d_opr, indicator }) => {
            indicator.forEach(({ i_id, sub_indicator, c_indicator, n_indicator }) => {
                const values = sub_indicator.reduce((subObj, sub) => {
                    const index = sub.column.slice(-1);
                    return { ...subObj, [`i_value_${index}`]: sub.i_value };
                }, {});
                acc.push({ i_id, i_period_month, i_period_year, d_opr, n_indicator, c_indicator, userId, ...values });
            });
            return acc;
        }, []);
        inputData.forEach((val) => {
            if (val.i_id.length === 0)
                insertData.push(val);
            else
                updateData.push(val);
        });
        let logData = { ...req };
        if (insertData.length > 0) {
            const insert = await repository.saveTechnical(insertData);
            if (insert.rowCount < 0)
                throw new Error('Save Maintenance Technical Failed');
            logData.body.menu = "Prasarana Perawatan Teknis";
            logData.body.description = "Insert Data Perawatan Teknis";
            logData.body.j_new_data = insert.rows;
            await (0, activity_service_1.InsertActivity)(logData);
        }
        if (updateData.length > 0) {
            const oldData = await repository.getTechnicalByIds(updateData.map((val) => val.i_id));
            const update = await repository.updateTechnical(updateData);
            if (update.rowCount < 0)
                throw new Error('Update Maintenance Technical Failed');
            logData.body.menu = "Prasarana Perawatan Teknis";
            logData.body.description = "Update Data Perawatan Teknis";
            logData.body.j_old_data = oldData.rows;
            logData.body.j_new_data = update.rows;
            await (0, activity_service_1.InsertActivity)(logData);
        }
        return build.response('00', 'success', {});
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.saveMaintenanceTechnical = saveMaintenanceTechnical;
const saveMaintenanceTechnicalFile = async (req) => {
    try {
        const { i_id, d_opr } = req.body;
        const files = req.files?.n_file_path;
        if (!i_id)
            return build.response('400', 'ID Maintenance Technical is required!', []);
        if (!d_opr)
            return build.response('400', 'Date Opr. Maintenance Technical is required!', []);
        if (!files)
            return build.response('400', 'File Maintenance Technical is required!', []);
        const getRow = await repository.getTechnical(i_id);
        if (getRow.rows.length <= 0)
            return build.response('400', 'Maintenance Technical not found!', []);
        const { pathFile, filename } = getFileProps(getRow.rows?.[0].n_indicator, d_opr, files);
        const uploadFile = await fileMiddleware(req, pathFile, filename);
        if (uploadFile?.code !== '00')
            return uploadFile;
        const pathbefore = pathFile.replace("upload/", "");
        const fullpath = `http://his.nutech-integrasi.com:7007/static/${pathbefore}/${filename}`;
        const update = await repository.updateTechnicalFile({ i_id, n_file_path: fullpath, userId: req.userId });
        if (update?.rowCount < 0)
            throw new Error('Update Maintenance Technical File Failed');
        const logData = { ...req };
        logData.body.menu = "Prasarana Perawatan Teknis";
        logData.body.description = "Update File Perawatan Teknis";
        logData.body.j_old_data = getRow.rows;
        logData.body.j_new_data = update.rows;
        await (0, activity_service_1.InsertActivity)(logData);
        return build.response('00', 'success', {});
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.saveMaintenanceTechnicalFile = saveMaintenanceTechnicalFile;
const deleteMaintenanceTechnicalFile = async (req) => {
    try {
        const { i_id } = req.body;
        if (!i_id)
            return build.response('400', 'ID Maintenance Technical is required!', []);
        const getRow = await repository.getTechnical(i_id);
        if (getRow.rows.length <= 0)
            return build.response('400', 'Maintenance Technical not found!', []);
        const deleted = await repository.deleteTechnical({ i_id, userId: req.userId });
        if (deleted?.rowCount < 0)
            throw new Error('Delete File Maintenance Technical Failed');
        const pathfile = "upload/" + getRow.rows[0].n_file_path.split("/static/")[1];
        const deletedFile = await deleteFile(pathfile);
        if (!deletedFile)
            throw new Error('Delete File Maintenance Technical Failed');
        const logData = { ...req };
        logData.body.menu = "Prasarana Perawatan Teknis";
        logData.body.description = "Delete Data Perawatan Teknis";
        logData.body.j_old_data = getRow.rows;
        await (0, activity_service_1.InsertActivity)(logData);
        return build.response('00', 'success', {});
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.deleteMaintenanceTechnicalFile = deleteMaintenanceTechnicalFile;
const getDownloadMerge = async (req) => {
    try {
        const { period_month, period_year } = req.query;
        if (!period_month)
            return build.response('400', 'Period Month is required!', []);
        if (!period_year)
            return build.response('400', 'Period Year is required!', []);
        const periodDates = getPeriodDates(period_month, period_year);
        const file = await getFile(periodDates);
        const filepath = file.split("\\").join("/").replace("upload/", "");
        const filename = `http://his.nutech-integrasi.com:7007/static/${filepath}`;
        return build.response('00', 'success', { filename });
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.getDownloadMerge = getDownloadMerge;
const getBuildMerge = async (req) => {
    try {
        const { period_month, period_year, via_api = "0" } = req.query;
        if (!period_month)
            return build.response('400', 'Period Month is required!', []);
        if (!period_year)
            return build.response('400', 'Period Year is required!', []);
        const periodDates = getPeriodDates(period_month, period_year);
        const logData = { ...req };
        if (Number(via_api) === 0) {
            const file = await mergeFile(periodDates);
            const filepath = file.split("\\").join("/").replace("upload/", "");
            const filename = `http://his.nutech-integrasi.com:7007/static/${filepath}`;
            logData.body.j_new_data = { filename };
        }
        else {
            mergeFile(periodDates);
            logData.body.j_new_data = { filename: "Background process" };
        }
        logData.body.menu = "Prasarana Perawatan Teknis";
        logData.body.description = "Merge PDF Data Perawatan Teknis";
        await (0, activity_service_1.InsertActivity)(logData);
        return build.response('00', 'success', {});
    }
    catch (error) {
        return build.response('500', `${error.message}`, []);
    }
};
exports.getBuildMerge = getBuildMerge;
// Utility Functions
const getFileProps = (n_indicator, date, files) => {
    const day = date.split("-");
    const extension = mime_types_1.default.extension(files.mimetype);
    const filename = `${day.join("")}_${n_indicator}.${extension}`;
    const pathFile = `upload/origin/perawatan/${day[0]}/${day[1]}`;
    return { extension, filename, pathFile };
};
const getFile = async (periodDate) => {
    try {
        const pathFileMerge = `upload/merge/perawatan/${periodDate}`;
        const mergeFiles = await fsPromise.readdir(pathFileMerge);
        const pdfMergeFiles = mergeFiles.filter((file) => path_1.default.extname(file).toLowerCase() === '.pdf');
        if (pdfMergeFiles.length < 1)
            throw new Error('File Not Found');
        return path_1.default.join(pathFileMerge, pdfMergeFiles[0]);
    }
    catch (error) {
        throw error;
    }
};
const deleteFile = async (filePath) => {
    try {
        await fsPromise.unlink(filePath);
        return true;
    }
    catch (_) {
        return false;
    }
};
const mergeFile = async (periodDate) => {
    try {
        const merger = new PDFMerger();
        const pathFileOrigin = `upload/origin/perawatan/${periodDate}`;
        const pathFileMerge = `upload/merge/perawatan/${periodDate}`;
        await fsPromise.mkdir(pathFileMerge, { recursive: true });
        const originFiles = await fsPromise.readdir(pathFileOrigin);
        const mergeFiles = await fsPromise.readdir(pathFileMerge);
        const pdfOriginFiles = originFiles.filter((file) => path_1.default.extname(file).toLowerCase() === '.pdf');
        const pdfMergeFiles = mergeFiles.filter((file) => path_1.default.extname(file).toLowerCase() === '.pdf');
        if (pdfMergeFiles.length > 0)
            await fsPromise.unlink(path_1.default.join(pathFileMerge, pdfMergeFiles[0]));
        for (const file of pdfOriginFiles) {
            const filePath = path_1.default.join(pathFileOrigin, file);
            await merger.add(filePath);
        }
        const dateNow = (0, moment_1.default)().format("YYYYMMDDHHmmss");
        const filename = `Perawatan Teknis_${periodDate.replace(/\//g, "")}_${dateNow}.pdf`;
        const mergePath = path_1.default.join(pathFileMerge, filename);
        await merger.save(mergePath);
        return mergePath;
    }
    catch (error) {
        throw error;
    }
};
const getPeriodDatesQuery = (periodMonth, periodYear) => {
    let stringPeriod = '';
    if (periodYear[1] - periodYear[0] > 0) {
        for (let i = periodYear[0]; i <= periodYear[1]; i++) {
            if (i == periodYear[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${periodMonth[0]} AND 12) `;
            }
            else if (i == periodYear[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${periodMonth[1]}) `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${periodYear[0]} AND i_period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
    }
    return stringPeriod;
};
const getPeriodDates = (periodMonth, periodYear) => {
    const monthArr = periodMonth.split("_");
    const yearArr = periodYear.split("_");
    if (monthArr.length < 1 || yearArr.length < 1)
        throw new Error("Invalid Period");
    if (monthArr[0] !== monthArr[1])
        throw new Error("Invalid Period Month");
    if (yearArr[0] !== yearArr[1])
        throw new Error("Invalid Period Year");
    return `${yearArr[0]}/${monthArr[0]}`;
};
const fileMiddleware = async (req, pathFolder, filename) => {
    const files = req.files?.n_file_path;
    const allowedMime = ['application/pdf'];
    const mimeType = mime_types_1.default.lookup(files.name);
    // Check file mime-types
    if (!mimeType || !allowedMime.includes(mimeType)) {
        return build.response('400', 'Invalid file type', {});
    }
    // Securely store the file
    const uploadPath = path_1.default.join(pathFolder, filename);
    // Ensure the uploads directory exists
    fs_1.default.mkdirSync(path_1.default.dirname(uploadPath), { recursive: true });
    // Move the file to the specified directory
    files.mv(uploadPath, (err) => {
        if (err)
            return build.response('400', `${err.message}`, {});
    });
    return build.response('00', 'success', {});
};
const convertToResponseMaintenanceSafety = (data) => {
    const dataResponse = [];
    for (let dateOperation of data) {
        const indicators = [];
        for (let i = 0; i < dateOperation.i_ids.length; i++) {
            indicators.push({
                i_id: dateOperation.i_ids[i],
                n_indicator: dateOperation.n_indicators[i],
                c_indicator: dateOperation.c_indicators[i],
                i_value: dateOperation.i_values[i],
            });
        }
        const reasons = [{
                n_reason_1: dateOperation.n_reasons_1[0],
                n_reason_2: dateOperation.n_reasons_2[0]
            }];
        dataResponse.push({
            d_opr: dateOperation.d_opr,
            indicator: indicators,
            reason: reasons,
            i_status_active: dateOperation.i_status_actives[0],
        });
    }
    return dataResponse;
};
const getCertificate = async (periodeYear, periodMonth) => {
    let response;
    let stringPeriod = '';
    if (periodeYear[1] - periodeYear[0] > 0) {
        for (let i = periodeYear[0]; i <= periodeYear[1]; i++) {
            if (i === periodeYear[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${periodMonth[0]} AND 12) `;
            }
            else if (i === periodeYear[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${periodMonth[1]}) `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${periodeYear[0]} AND i_period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
    }
    // get data target certificate from struktur organisasi
    let subDivisi = ['TRACK AND BRIDGE (M)', 'BUILDING (M)', 'THIRD RAIL (M)'];
    let subUnit = 'PERAWATAN';
    let targetCertificate = await repository.getTargetCertificate(periodMonth, periodeYear, subDivisi, subUnit);
    // get data realization certificate from sertifikasi
    let realizationCertificate = await repository.getRealizationCertificate(periodMonth, periodeYear, subDivisi, subUnit);
    // process
    let record = [];
    for (const el of targetCertificate.rows) {
        let find = realizationCertificate.rows.find((e) => e.sub_kategori === el.sub_divisi);
        let realization = (find == undefined) ? 0 : find.count;
        record.push({
            'sub_division': el.sub_divisi,
            'target': Number(el.count),
            'realization': Number(realization),
            'percentage': Number((realization / el.count * 100).toFixed(2)),
            'difference': el.count - realization
        });
    }
    let result = [
        {
            'indicator': 'Jumlah Tenaga Perawatan Yang Memiliki Sertifikat Keahlian',
            'record': record,
        }
    ];
    try {
        response = build.response('00', 'success', result);
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getCertificate = getCertificate;
const getReporting = async (periodeYear, periodMonth) => {
    let response;
    let stringPeriod = '';
    if (periodeYear[1] - periodeYear[0] > 0) {
        for (let i = periodeYear[0]; i <= periodeYear[1]; i++) {
            if (i === periodeYear[0]) {
                stringPeriod += `(i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN ${periodMonth[0]} AND 12) `;
            }
            else if (i === periodeYear[1]) {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND ${periodMonth[1]}) `;
            }
            else {
                stringPeriod += `OR (i_period_year BETWEEN ${i} AND ${i} AND i_period_month BETWEEN 1 AND 12) `;
            }
        }
    }
    else {
        stringPeriod += `(i_period_year = ${periodeYear[0]} AND i_period_month BETWEEN ${periodMonth[0]} AND ${periodMonth[1]}) `;
    }
    // get master parameter
    let listMasterParam = await repository.getMasterParam();
    // process
    let result = [];
    for (const el of listMasterParam.rows) {
        if (el.c_param == 'TEKNIS') {
            let children = [];
            let listTargetIndicator = await repository.getTargetIndicator(stringPeriod, el.c_param);
            if (listTargetIndicator.rows.length > 0) {
                for (const el2 of listTargetIndicator.rows) {
                    let temp = await repository.getIndicatorApprove(stringPeriod, el.n_table_data, el2.i_id);
                    let realization = (temp.rows[0].count > 0) ? 1 : 0;
                    children.push({
                        indicator: el2.n_indicator,
                        target: 1,
                        realization: realization,
                        percentage: realization / 1 * 100,
                    });
                }
                result.push({
                    'parameter': el.c_param,
                    'target': null,
                    'realization': null,
                    'percentage': null,
                    children
                });
            }
        }
        else {
            let listTargetIndicator = await repository.getTargetIndicator(stringPeriod, el.c_param);
            if (listTargetIndicator.rows.length > 0) {
                let temp = await repository.getIndicatorApprove(stringPeriod, el.n_table_data);
                let realization = (temp.rows[0].count > 0) ? 1 : 0;
                result.push({
                    'parameter': el.c_param,
                    'target': 1,
                    'realization': realization,
                    'percentage': realization / 1 * 100,
                    'children': []
                });
            }
        }
    }
    // set sertifikasi
    let subDivisi = ['TRACK AND BRIDGE (M)', 'BUILDING (M)', 'THIRD RAIL (M)'];
    let subUnit = 'PERAWATAN';
    let dataSertifikasi = await repository.getRealizationCertificate(periodMonth, periodeYear, subDivisi, subUnit);
    if (dataSertifikasi.rows.length > 0) {
        let children = [
            {
                indicator: 'Jumlah Prasarana yang Memiliki Sertifikat Uji Berkala',
                target: 0,
                realization: 0,
                percentage: 0,
            },
            {
                indicator: 'Jumlah Tenaga Perawatan Yang Memiliki Sertifikat Keahlian',
                target: 1,
                realization: 1,
                percentage: 1 / 1 * 100,
            }
        ];
        result.push({
            'parameter': 'SERTIFIKASI',
            'target': null,
            'realization': null,
            'percentage': null,
            children
        });
    }
    try {
        response = build.response('00', 'success', result);
    }
    catch (error) {
        response = build.response('500', `${error.message}`, []);
    }
    return response;
};
exports.getReporting = getReporting;
