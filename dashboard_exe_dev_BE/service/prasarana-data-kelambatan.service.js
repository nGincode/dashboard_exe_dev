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
exports.fileMiddleware = exports.deleteDetailFile = exports.saveDetailFile = exports.All = void 0;
const repository = __importStar(require("../repository/prasarana-data-kelambatan.repository"));
const service = __importStar(require("../service/activity.service"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mime_types_1 = __importDefault(require("mime-types"));
const All = async (req) => {
    let response;
    try {
        let { period, end_at, menu_at } = req.body;
        let result = await repository.All((0, moment_1.default)(period).format('YYYY-MM-01'), end_at, menu_at);
        let formattedData = result.map(item => ({ ...item, period: (0, moment_1.default)(item.period).format('YYYY-MM-DD') }));
        response = build.response("00", "success", formattedData);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.All = All;
const saveDetailFile = async (req) => {
    let response;
    try {
        let { period, end_at, menu_at, description, code } = req.body;
        let userID = req.userId;
        let file;
        let filename = "";
        let checkFile;
        checkFile = req.files ? true : false;
        let pathFile = "";
        let extension;
        let result;
        let dataObject = [];
        if (code == '' || code == null) {
            return (response = build.response("400", "Code tidak boleh kosong !", {}));
        }
        if (description == '' || description == null) {
            return (response = build.response("400", "Deskripsi tidak boleh kosong !", {}));
        }
        if (menu_at == '' || menu_at == null) {
            return (response = build.response("400", "Menu tidak boleh kosong !", {}));
        }
        let getData = await repository.getDetailFile(String(code), String(menu_at), String((0, moment_1.default)(period).format("YYYY-MM-01")));
        let checkUpdateCode = await repository.FindByCodeUpdate(String(getData?.code), String(code), String(menu_at));
        if (checkUpdateCode) {
            return (response = build.response("400", "Code tidak boleh sama !", {}));
        }
        if (checkFile) {
            file = req.files;
            extension = file.file.name.split(".").pop();
            filename = menu_at + "_" + code + "_" + (0, moment_1.default)(period).format('YYYYMMDD') + "." + extension;
            pathFile = "upload/file/" + filename;
        }
        if (getData) {
            getData.updated_at = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss'),
                getData.updated_by = userID;
            if (checkFile) {
                if (fs_1.default.existsSync("upload/file/" + getData.file)) {
                    fs_1.default.unlink("upload/file/" + getData.file, (err) => {
                        console.log(err);
                    });
                }
                let cekfile = await fileMiddleware(req, filename);
                if (cekfile?.code != '00') {
                    return cekfile;
                }
            }
            else {
                filename = getData.file;
            }
            result = await repository.Delete(getData.id);
            result = await repository.InsertHistory(getData);
            let dataObject = {
                period: (0, moment_1.default)(period).format("YYYY-MM-01"),
                menu: menu_at,
                description: description,
                file: filename,
                code: code,
                created_by: getData.created_by,
                created_at: getData.created_at,
                updated_by: userID,
                updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            };
            await repository.Insert(dataObject);
        }
        else {
            let checkInsertCode = await repository.FindByCodeInsert(String(code), String(menu_at));
            if (checkInsertCode) {
                return (response = build.response("400", "Code tidak boleh sama !", {}));
            }
            let dataObject = {
                period: (0, moment_1.default)(period).format("YYYY-MM-01"),
                menu: menu_at,
                description: description,
                file: filename,
                code: code,
                created_by: userID,
                created_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss")
            };
            if (checkFile) {
                // file.file.mv(pathFile);
                let cekfile = await fileMiddleware(req, filename);
                if (cekfile?.code != '00') {
                    return cekfile;
                }
            }
            await repository.Insert(dataObject);
        }
        req.body.menu = 'Data Kelambatan';
        req.body.description = 'Insert Data Kelambatan';
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
exports.saveDetailFile = saveDetailFile;
const deleteDetailFile = async (req) => {
    let response;
    try {
        let { period, end_at, menu_at, code } = req.body;
        let userID = req.userId;
        let filename = "";
        let checkFile;
        checkFile = req.files ? true : false;
        let result;
        let getData = await repository.getDetailFile(String(code), String(menu_at), String((0, moment_1.default)(period).format("YYYY-MM-01")));
        if (getData) {
            let dataParse = getData;
            getData.deleted_at = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss'),
                getData.deleted_by = userID;
            result = await repository.InsertHistory(dataParse);
            result = await repository.Delete(dataParse.id);
            if (dataParse.length != 0) {
                if (dataParse.code == code) {
                    checkFile ? "" : (filename = dataParse.file);
                    if (fs_1.default.existsSync("upload/file/" + dataParse.file)) {
                        fs_1.default.unlink("upload/file/" + dataParse.file, (err) => {
                            console.log(err);
                        });
                    }
                }
            }
        }
        req.body.menu = 'Data Kelambatan';
        req.body.description = 'Delete Data Kelambatan';
        // req.body.j_old_data = data
        req.body.j_new_data = getData;
        await service.InsertActivity(req);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.deleteDetailFile = deleteDetailFile;
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
exports.fileMiddleware = fileMiddleware;
