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
exports.batchUpload = exports.update = exports.dataDelete = exports.getFile = exports.All = exports.Insert = void 0;
const repository = __importStar(require("../repository/prasarana-struktur-organisasi-sertifikasi.repository"));
const service = __importStar(require("../service/activity.service"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const winston = __importStar(require("../helper/log.helper"));
const mime_types_1 = __importDefault(require("mime-types"));
// const Insert = async (req: Request) => {
//   let response;
//   try {
//     let { data } = req.body;
//     await repository.Insert(data);
//     response = build.response("00", "success", {});
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, {});
//   }
//   return response;
// };
const All = async () => {
    let response;
    try {
        let result = await repository.getAllSertifikasi();
        for (let res of result) {
            let result1 = await repository.getAllStrukturOrganisasi(res?.nipp);
            // let result2 = await repository.getAllKategori(res?.kategori);
            res.name = result1[0]?.name;
            res.jabatan = result1[0]?.jabatan;
            res.divisi = result1[0]?.kategori;
            res.sub_divisi = result1[0]?.kategori_sub;
            res.unit = result1[0]?.sub_kategori_sub;
            res.tanggal_berlaku = (0, moment_1.default)(res.tanggal_berlaku).format("YYYY-MM-DD");
            res.status = (0, moment_1.default)(res.tanggal_berlaku).format("YYYY-MM-DD") > (0, moment_1.default)().format("YYYY-MM-DD") ? "Aktif" : "Nonaktif";
            res.file = res.filename;
            // res.kategori = result2[0] ? result2[0] : {}
        }
        // console.log(result);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.All = All;
const Insert = async (req) => {
    let response;
    try {
        let { nipp, kodefikasi_sertifikat, tanggal_berlaku, bidang, kategori } = req.body;
        let file;
        let filename = "";
        let pathFile = "";
        let checkFile;
        let extension;
        checkFile = req.files ? true : false;
        let status = [];
        let dataObject = [];
        if (checkFile) {
            file = req.files;
            extension = file.file.name.split(".").pop();
            filename = nipp + "_" + kodefikasi_sertifikat + "." + extension;
            pathFile = "upload/file/" + filename;
        }
        let getData = await repository.CheckFile(String(kodefikasi_sertifikat));
        if (getData.length > 0) {
            status = { status: "400", message: "File Sudah ada" };
        }
        else {
            status = {};
            dataObject = {
                nipp: nipp,
                kodefikasi_sertifikat: kodefikasi_sertifikat,
                tanggal_berlaku: (0, moment_1.default)(tanggal_berlaku).format("YYYY-MM-DD"),
                bidang: bidang,
                filename: filename,
                kategori: kategori,
            };
            if (checkFile) {
                let cekfile = await fileMiddleware(req, filename);
                if (cekfile?.code != '00') {
                    return cekfile;
                }
            }
            await repository.Insert(dataObject);
        }
        req.body.menu = 'Struktur Organisasi Sertifikasi';
        req.body.description = 'Insert data Sertifikasi';
        // req.body.j_old_data = data
        req.body.j_new_data = dataObject;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const getFile = async (req) => {
    let pathFile;
    // try {
    let { filename } = req.query;
    // let data = await repository.Find(id);
    if (fs_1.default.existsSync("dist/upload/file/" + filename)) {
        pathFile = path_1.default.join(__dirname, "../../dist/upload/file/" + filename);
    }
    else {
        pathFile = path_1.default.join(__dirname, "../../upload/file/" + filename);
    }
    // response = build.response("00", "success", {});
    // } catch (error) {
    //   response = build.response("500", `${(error as Error).message}`, {});
    // }
    return pathFile;
};
exports.getFile = getFile;
const dataDelete = async (req) => {
    let response;
    try {
        let { id } = req.body;
        let data = await repository.Find(id);
        let datas = [];
        for (let data1 of data) {
            if (data1.filename != "" || data1.filename != null) {
                let pathFile = "upload/file/" + data1.filename;
                if (fs_1.default.existsSync(pathFile)) {
                    fs_1.default.unlink(pathFile, (err) => {
                        winston.logger.error(err);
                    });
                    // let dataUpdate = {
                    //   filename: null,
                    //   updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
                    //   updated_by: req.userId,
                    // };
                    // await repository.updateFile(dataUpdate, data1.id);
                }
            }
            let datas = await repository.FindUpdate(data1.id);
            await repository.InsertHistory(datas);
            await repository.Delete(data1.id);
        }
        req.body.menu = 'Struktur Organisasi Sertifikasi';
        req.body.description = 'Delete Data Slip Gaji';
        req.body.j_old_data = data;
        // req.body.j_new_data = dataUpdate
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.dataDelete = dataDelete;
const update = async (req) => {
    let response;
    try {
        let file;
        let { id } = req.params;
        let { nipp, kodefikasi_sertifikat, tanggal_berlaku, bidang, kategori } = req.body;
        let checkID = await repository.FindUpdate(id);
        let dataUpdate = [];
        if (!checkID) {
            return (response = build.response("400", "data not found!", {}));
        }
        if (req.files) {
            file = req.files;
            let pathFile = "upload/file/" + checkID.filename;
            let extension = file.file.name.split(".").pop();
            let newfile = nipp + "_" + kodefikasi_sertifikat + "." + extension;
            let pathnewfile = "upload/file/" + newfile;
            if (fs_1.default.existsSync(pathFile)) {
                fs_1.default.unlink(pathFile, (err) => {
                    winston.logger.error(err);
                });
            }
            dataUpdate = {
                nipp: nipp,
                kodefikasi_sertifikat: kodefikasi_sertifikat,
                tanggal_berlaku: (0, moment_1.default)(tanggal_berlaku).format("YYYY-MM-DD"),
                bidang: bidang,
                filename: newfile,
                kategori: kategori,
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
                updated_by: req.userId,
            };
            // file.file.mv(pathnewfile);
            let cekfile = await fileMiddleware(req, newfile);
            if (cekfile?.code != '00') {
                return cekfile;
            }
            await repository.Update(dataUpdate, checkID.id);
        }
        else {
            dataUpdate = {
                nipp: nipp,
                kodefikasi_sertifikat: kodefikasi_sertifikat,
                tanggal_berlaku: (0, moment_1.default)(tanggal_berlaku).format("YYYY-MM-DD"),
                bidang: bidang,
                kategori: kategori,
                // filename: null,
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
                updated_by: req.userId,
            };
            await repository.Update(dataUpdate, id);
        }
        req.body.menu = 'Struktur Organisasi Sertifikasi';
        req.body.description = 'Update Data Sertifikasi';
        req.body.j_old_data = checkID;
        req.body.j_new_data = dataUpdate;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.update = update;
const batchUpload = async (req) => {
    let response;
    try {
        const { nipp, kodefikasi_sertifikat, tanggal_berlaku } = req.body;
        if (nipp == null) {
            response = build.response("400", "Nipp Sertifikat Tidak Boleh Kosong !", {});
        }
        let checkCode = await repository.CheckFile(String(kodefikasi_sertifikat));
        if (checkCode.length > 0) {
            response = build.response("400", "Kode Sertifikat Tidak Boleh Sama !", {});
        }
        else {
            let getData = await repository.CheckFileBatch(String(nipp), String(tanggal_berlaku));
            if (getData.length > 0) {
                req.params.id = getData[0].id;
                return { ...(await update(req)) };
            }
            else {
                return { ...(await Insert(req)) };
            }
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.batchUpload = batchUpload;
const fileMiddleware = async (req, filename) => {
    let response;
    let file;
    file = req.files;
    file;
    // const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const allowedMimeTypes = ['application/pdf'];
    const mimeType = mime_types_1.default.lookup(file.file.name);
    if (!mimeType || !allowedMimeTypes.includes(mimeType)) {
        return (response = build.response("400", "Invalid file type", {}));
    }
    // Securely store the file
    const uploadPath = path_1.default.join('upload/file/', filename);
    // Ensure the uploads directory exists
    fs_1.default.mkdirSync(path_1.default.dirname(uploadPath), { recursive: true });
    // Move the file to the specified directory
    file.file.mv(uploadPath, (err) => {
        if (err) {
            return (response = build.response("400", `${err.message}`, {}));
        }
    });
    return (response = build.response("00", "success", {}));
};
