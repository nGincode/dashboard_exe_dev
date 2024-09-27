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
exports.getDetailFileAYear = exports.getDataByYear = exports.deleteDetailFile = exports.saveDetailFile = exports.getDetailFile = exports.deleteFile = exports.updateFile = exports.Insert = exports.All = void 0;
const repository = __importStar(require("../repository/attachment.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
const winston = __importStar(require("../helper/log.helper"));
const All = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let result = await repository.All(date);
        for (const data of result) {
            if (data.filename) {
                data.filename = data.filename.split(",");
            }
        }
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
        let { periode, data } = req.body;
        let month = (0, moment_1.default)(periode, "YYYY/MM/DD").format("M");
        let year = (0, moment_1.default)(periode, "YYYY/MM/DD").format("YYYY");
        let dataInsert = {
            period: periode,
            data: data,
            //   created_by: req.userId,
        };
        // let result;
        await repository.Insert(dataInsert);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const updateFile = async (req) => {
    let response;
    try {
        let file;
        let { id, filename } = req.body;
        let checkID = await repository.Find(id);
        if (!checkID) {
            return (response = build.response("400", "data not found!", {}));
        }
        if (req.files) {
            file = req.files;
            // console.log(file.file.name.split(".").pop());
            // let extension = file.file.mimetype.split("/")[1];
            let extension = file.file.name.split(".").pop();
            let name = filename + "." + extension;
            // let pathDev = "dist/upload/attachment/" + name;
            // let pathProd = "upload/attachment/" + name;
            let filenameArray = checkID.filename;
            // let host = process.env.DB_HOST;
            let pathFile = "upload/attachment/" + name;
            // if (host == "36.66.3.44") {
            //   pathFile = "dist/upload/attachment/" + name;
            // } else {
            //   pathFile = "upload/attachment/" + name;
            // }
            if (filenameArray) {
                if (filenameArray.includes(name)) {
                    fs_1.default.unlink(pathFile, (err) => {
                        winston.logger.error(err);
                    });
                    // fs.unlink(pathProd, (err) => {
                    //   console.log(err);
                    // });
                }
            }
            file.file.mv(pathFile);
            // file.file.mv(pathProd);
            let filenameData;
            if (checkID.filename) {
                if (checkID.filename.includes(name)) {
                    filenameData = checkID.filename;
                }
                else {
                    filenameData = checkID.filename + "," + name;
                }
            }
            else {
                filenameData = name;
            }
            let data = {
                filename: filenameData,
                // updated_by: req.userId,
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            };
            await repository.updateFile(data, id);
        }
        else {
            return (response = build.response("400", "file is required", {}));
        }
        // let data = await repository.Find(id);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.updateFile = updateFile;
const deleteFile = async (req) => {
    let response;
    try {
        let { id, filename } = req.body;
        let dataIncomeCost = await repository.Find(id);
        if (!dataIncomeCost.filename.includes(filename)) {
            return (response = build.response("400", "filename not found!", {}));
        }
        let filenameArray = dataIncomeCost.filename.split(",");
        let filenameFilter = filenameArray.filter((name) => name != filename);
        let filenameData = filenameFilter.join(",");
        let dataUpdate = {
            filename: filenameData,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            //   updated_by: req.userId,
        };
        await repository.updateFile(dataUpdate, id);
        let pathFile = "upload/attachment/" + filename;
        if (!fs_1.default.existsSync(pathFile)) {
            return (response = build.response("400", "file not found!", {}));
        }
        else {
            fs_1.default.unlink(pathFile, (err) => {
                winston.logger.error(err);
            });
        }
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.deleteFile = deleteFile;
const getDetailFile = async (req) => {
    let response;
    try {
        let { code } = req.query;
        let date = (0, moment_1.default)(String(code), "YYYY_MM_D").format("YYYY_MM_D");
        let triwulanDate = [];
        triwulanDate.push(String(code));
        for (let index = 1; index <= 2; index++) {
            let addedDate = (0, moment_1.default)(String(code), "YYYY_MM_D")
                .add(index, "M")
                .format("YYYY_MM_D");
            triwulanDate.push(String(code).replace(date, addedDate));
        }
        // let triwulan = await repository.getTriwulanDetailFile(triwulanDate);
        let data;
        let getData = await repository.getDetailFile(String(code));
        if (getData) {
            data = getData;
            data.data.sort((a, b) => {
                return parseInt(a.no_dokumen) - parseInt(b.no_dokumen);
            });
        }
        else {
            data = {};
        }
        response = build.response("00", "success", data);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.getDetailFile = getDetailFile;
const saveDetailFile = async (req) => {
    let response;
    try {
        let { code, no_dok, deskripsi, nominal } = req.body;
        let file;
        let filename = "";
        let pathFile = "";
        let checkFile;
        let extension;
        checkFile = req.files ? true : false;
        if (checkFile) {
            file = req.files;
            extension = file.file.name.split(".").pop();
            filename = code + "_" + no_dok + "." + extension;
            pathFile = "upload/attachment/" + filename;
        }
        let getData = await repository.getDetailFile(String(code));
        if (getData) {
            let dataParse = getData.data;
            let dataFile = [];
            if (dataParse.length != 0) {
                for (const data of dataParse) {
                    if (data.no_dokumen == no_dok) {
                        checkFile ? "" : (filename = data.file);
                        delete data.no_dokumen;
                        delete data.file;
                        delete data.deskripsi;
                        delete data.nominal;
                        if (fs_1.default.existsSync("upload/attachment/" + data.file)) {
                            fs_1.default.unlink("upload/attachment/" + data.file, (err) => {
                                console.log(err);
                            });
                        }
                    }
                    if (data.no_dokumen != undefined) {
                        let dataObject = {
                            no_dokumen: data.no_dokumen,
                            file: data.file,
                            deskripsi: data.deskripsi,
                            nominal: data.nominal,
                        };
                        dataFile.push(dataObject);
                    }
                }
            }
            let dataObject = {
                no_dokumen: no_dok,
                file: filename,
                deskripsi: deskripsi,
                nominal: nominal,
            };
            dataFile.push(dataObject);
            // dataParse.section_name = filename;
            // let dataStringify = JSON.stringify(dataParse);
            // let dataUpdate = {
            //   code: code,
            //   data: {},
            // };
            let dataUpdate = {
                data: JSON.stringify(dataFile),
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            };
            await repository.updateDetailFile(code, dataUpdate);
        }
        else {
            let data = [];
            let dataObject = {
                no_dokumen: no_dok,
                file: filename,
                deskripsi: deskripsi,
                nominal: nominal,
            };
            data.push(dataObject);
            let dataStringify = JSON.stringify(data);
            let dataInsert = {
                code: code,
                data: dataStringify,
            };
            await repository.saveDetailFile(dataInsert);
        }
        if (checkFile) {
            file.file.mv(pathFile);
        }
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.saveDetailFile = saveDetailFile;
const deleteDetailFile = async (req) => {
    let response;
    try {
        let { code, no_dok } = req.body;
        let getData = await repository.getDetailFile(code);
        if (!getData) {
            return (response = build.response("400", "data not found", {}));
        }
        let check = [];
        let dataFile = getData.data;
        let fileData = [];
        for (const data of dataFile) {
            if (data.no_dokumen == no_dok) {
                if (fs_1.default.existsSync("upload/attachment/" + data.file)) {
                    fs_1.default.unlink("upload/attachment/" + data.file, (err) => {
                        console.log(err);
                    });
                }
                check.push(1);
                delete data.no_dokumen;
                delete data.file;
                delete data.deskripsi;
                delete data.nominal;
            }
            if (data.no_dokumen != undefined) {
                let dataObject = {
                    no_dokumen: data.no_dokumen,
                    file: data.file,
                    deskripsi: data.deskripsi,
                    nominal: data.nominal,
                };
                fileData.push(dataObject);
            }
        }
        if (check.length == 0) {
            return (response = build.response("400", "file not found", {}));
        }
        let dataUpdate = {
            data: JSON.stringify(fileData),
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
        };
        await repository.updateDetailFile(code, dataUpdate);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.deleteDetailFile = deleteDetailFile;
const getDataByYear = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let year = (0, moment_1.default)(String(date), "YYYY-MM-DD").year();
        let result = await repository.getDataByYear(year);
        for (const data of result) {
            if (data.filename) {
                data.filename = data.filename.split(",");
            }
        }
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.getDataByYear = getDataByYear;
const getDetailFileAYear = async (req) => {
    let response;
    try {
        let { code } = req.query;
        let splitDate = String(code).split("_");
        let dataCode = [];
        for (let index = 0; index < 12; index++) {
            let month = (0, moment_1.default)(String(code), "YYYY_MM")
                .startOf("year")
                .add(index, "M")
                .format("YYYY_MM");
            dataCode.push(month + "_" + splitDate[2] + "_" + splitDate[3]);
        }
        let result = await repository.getDetailFileAYear(dataCode);
        for (const data of result) {
            if (data.filename) {
                data.filename = data.filename.split(",");
            }
        }
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.getDetailFileAYear = getDetailFileAYear;
