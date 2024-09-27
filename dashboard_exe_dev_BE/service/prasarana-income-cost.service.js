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
exports.getDataByYear = exports.deleteDetailFile = exports.saveDetailFile = exports.getDetailFile = exports.deleteFile = exports.getFile = exports.updateFile = exports.Find = exports.Insert = exports.All = void 0;
const repository = __importStar(require("../repository/prasarana-income-cost.repository"));
const service = __importStar(require("../service/activity.service"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const winston = __importStar(require("../helper/log.helper"));
const All = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let triwulanDate = [];
        let now = (0, moment_1.default)(String(date), "YYYY-MM-DD")
            .startOf("M")
            .format("YYYY-MM-DD");
        triwulanDate.push(now);
        for (let index = 1; index <= 2; index++) {
            triwulanDate.push((0, moment_1.default)(String(date), "YYYY-MM-DD")
                .add(index, "M")
                .startOf("M")
                .format("YYYY-MM-DD"));
        }
        let triwulan = await repository.getTriwulan(triwulanDate);
        for (const data of triwulan) {
            if (data.filename) {
                data.filename = data.filename.split(",");
            }
        }
        let result = await repository.All(date);
        for (const data of result) {
            if (data.filename) {
                data.filename = data.filename.split(",");
            }
            data.triwulan = triwulan;
        }
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let data = await repository.Find(id);
        response = build.response("00", "success", data ? data : {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
const Insert = async (req) => {
    let response;
    try {
        let { periode, data } = req.body;
        let month = (0, moment_1.default)(periode, "YYYY/MM/DD").format("M");
        let year = (0, moment_1.default)(periode, "YYYY/MM/DD").format("YYYY");
        let dataInsert = {
            period: periode,
            data: data,
            created_by: req.userId,
        };
        let result;
        let find = await repository.findByDate(periode);
        if (find) {
            result = await repository.Trx(parseInt(month), parseInt(year), req.userId, dataInsert);
        }
        else {
            await repository.Insert(dataInsert);
            result = 1;
        }
        if (result != 1) {
            throw result;
        }
        else {
            req.body.menu = 'Income and Cost';
            req.body.description = 'Insert Income and Cost';
            // req.body.j_old_data = data
            req.body.j_new_data = dataInsert;
            await service.InsertActivity(req);
            response = build.response("00", "success", {});
        }
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
        let data = [];
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
            // let pathDev = "dist/upload/file/" + name;
            // let pathProd = "upload/file/" + name;
            let filenameArray = checkID.filename;
            // let host = process.env.DB_HOST;
            let pathFile = "upload/file/" + name;
            // if (host == "36.66.3.44") {
            //   pathFile = "dist/upload/file/" + name;
            // } else {
            //   pathFile = "upload/file/" + name;
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
            data = {
                filename: filenameData,
                updated_by: req.userId,
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            };
            await repository.updateFile(data, id);
        }
        else {
            return (response = build.response("400", "file is required", {}));
        }
        req.body.menu = 'Income and Cost';
        req.body.description = 'Update File Income and Cost';
        req.body.j_old_data = checkID;
        req.body.j_new_data = data;
        await service.InsertActivity(req);
        // let data = await repository.Find(id);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.updateFile = updateFile;
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
const deleteFile = async (req) => {
    let response;
    try {
        let { id, filename } = req.body;
        let dataUpdate = [];
        let dataIncomeCost = await repository.Find(id);
        if (!dataIncomeCost.filename.includes(filename)) {
            return (response = build.response("400", "filename not found!", {}));
        }
        let filenameArray = dataIncomeCost.filename.split(",");
        let filenameFilter = filenameArray.filter((name) => name != filename);
        let filenameData = filenameFilter.join(",");
        dataUpdate = {
            filename: filenameData,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            updated_by: req.userId,
        };
        await repository.updateFile(dataUpdate, id);
        let pathFile = "upload/file/" + filename;
        if (!fs_1.default.existsSync(pathFile)) {
            return (response = build.response("400", "file not found!", {}));
        }
        else {
            fs_1.default.unlink(pathFile, (err) => {
                winston.logger.error(err);
            });
        }
        req.body.menu = 'Income and Cost';
        req.body.description = 'Delete File Income and Cost';
        req.body.j_old_data = dataUpdate;
        // req.body.j_new_data = dataUpdate
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.deleteFile = deleteFile;
// const getDetailFile = async (req: Request) => {
//   let response;
//   try {
//     let { code } = req.query;
//     let date = moment(String(code), "YYYY_MM").format("YYYY_MM");
//     let triwulanDate = [];
//     triwulanDate.push(String(code));
//     for (let index = 1; index <= 2; index++) {
//       let addedDate = moment(String(code), "YYYY_MM")
//         .add(index, "M")
//         .format("YYYY_MM");
//       triwulanDate.push(String(code).replace(date, addedDate));
//     }
//     let triwulan = await repository.getTriwulanDetailFile(triwulanDate);
//     for (const data of triwulan) {
//       data.data.sort((a: any, b: any) => {
//         return parseInt(a.no_dokumen) - parseInt(b.no_dokumen);
//       });
//     }
//     let data;
//     let getData = await repository.getDetailFile(String(code));
//     if (getData) {
//       data = getData;
//       data.data.sort((a: any, b: any) => {
//         return parseInt(a.no_dokumen) - parseInt(b.no_dokumen);
//       });
//     } else {
//       data = {};
//     }
//     data.triwulan = triwulan;
//     response = build.response("00", "success", data);
//   } catch (error) {
//     response = build.response("500", `${(error as Error).message}`, {});
//   }
//   return response;
// };
const getDetailFile = async (req) => {
    let response;
    try {
        let { code } = req.query;
        let date = (0, moment_1.default)(String(code), "YYYY_MM").format("YYYY_MM");
        let triwulanDate = [];
        let year = [];
        triwulanDate.push(String(code));
        for (let index = 1; index <= 2; index++) {
            let addedDate = (0, moment_1.default)(String(code), "YYYY_MM")
                .add(index, "M")
                .format("YYYY_MM");
            triwulanDate.push(String(code).replace(date, addedDate));
        }
        for (let index = 0; index < 12; index++) {
            let month = (0, moment_1.default)(String(code), "YYYY_MM")
                .startOf("year")
                .add(index, "M")
                .format("YYYY_MM");
            year.push(String(code).replace(date, month));
        }
        let triwulan = await repository.getTriwulanDetailFile(triwulanDate);
        let years = await repository.getTriwulanDetailFile(year);
        for (const data of triwulan) {
            data.data.sort((a, b) => {
                return parseInt(a.no_dokumen) - parseInt(b.no_dokumen);
            });
        }
        for (const data of years) {
            data.data.sort((a, b) => {
                return parseInt(a.no_dokumen) - parseInt(b.no_dokumen);
            });
        }
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
        data.triwulan = triwulan;
        data.year = years;
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
            pathFile = "upload/file/" + filename;
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
                        if (fs_1.default.existsSync("upload/file/" + data.file)) {
                            fs_1.default.unlink("upload/file/" + data.file, (err) => {
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
            req.body.menu = 'Income and Cost';
            req.body.description = 'Update Detail Income and Cost';
            req.body.j_old_data = getData;
            req.body.j_new_data = dataUpdate;
            await service.InsertActivity(req);
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
            req.body.menu = 'Income and Cost';
            req.body.description = 'Insert Detail Income and Cost';
            req.body.j_old_data = data;
            req.body.j_new_data = dataInsert;
            await service.InsertActivity(req);
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
                if (fs_1.default.existsSync("upload/file/" + data.file)) {
                    fs_1.default.unlink("upload/file/" + data.file, (err) => {
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
        req.body.menu = 'Income and Cost';
        req.body.description = 'Delete Detail Income and Cost';
        req.body.j_old_data = dataUpdate;
        // req.body.j_new_data = dataUpdate
        await service.InsertActivity(req);
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
