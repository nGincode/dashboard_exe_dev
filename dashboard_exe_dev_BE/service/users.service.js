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
exports.getAvatar = exports.updatePassword = exports.resetPassword = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/users.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const winston = __importStar(require("../helper/log.helper"));
const unique_code_helper_1 = require("../helper/unique-code.helper");
const fs_1 = __importDefault(require("fs"));
// import path from "path";
const path_1 = __importDefault(require("path"));
const env_config_1 = __importDefault(require("../config/env.config"));
var appEnv = env_config_1.default.env().APP_FOR;
const All = async () => {
    let response;
    try {
        let data = await repository.All();
        for (let user of data) {
            // user.avatar = user.avatar ? "/api/v1/user/avatar/" + user.avatar : null;
            user.avatar = user.avatar ? user.avatar : null;
        }
        response = build.response("00", "success", data);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let data = await repository.Find(id);
        data.avatar = data.avatar ? data.avatar : null;
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
        let { nik, username, fullname, role_id, jabatan, email, password } = req.body;
        let file;
        let extension;
        let path;
        let filename;
        if (req.files) {
            file = req.files;
            let checkExtFile = file.avatar.mimetype;
            if (!checkExtFile.includes("image")) {
                return (response = build.response("408", "file must a image", {}));
            }
            extension = file.avatar.mimetype.split("/")[1];
            path =
                appEnv == "local"
                    ? "upload/avatar/" + username + "." + extension
                    : "upload/avatar/" + username + "." + extension;
            filename = username + "." + extension;
        }
        let hashPassword = await bcrypt_1.default.hash(password, 10);
        let data = {
            nik: nik,
            username: username,
            fullname: fullname,
            role_id: role_id,
            jabatan: jabatan,
            avatar: file ? filename : null,
            email: email,
            password: hashPassword,
            created_by: req.userId,
            status_id: "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d",
        };
        await repository.Insert(data);
        file ? file.avatar.mv(path) : "";
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const Update = async (req) => {
    let response;
    try {
        let { fullname, role_id, jabatan, email } = req.body;
        let { id } = req.params;
        let user = await repository.Find(id);
        if (!user) {
            return build.response("404", "user not found", {});
        }
        let file;
        let extension;
        let path;
        let filename;
        if (req.files) {
            file = req.files;
            let checkExtFile = file.avatar.mimetype;
            if (!checkExtFile.includes("image")) {
                return (response = build.response("408", "file must a image", {}));
            }
            extension = file.avatar.mimetype.split("/")[1];
            path =
                appEnv == "local"
                    ? "upload/avatar/" + user.username + "." + extension
                    : "upload/avatar/" + user.username + "." + extension;
            filename = user.username + "." + extension;
        }
        let data = {
            fullname: fullname,
            role_id: role_id,
            jabatan: jabatan,
            avatar: file
                ? filename
                : user.avatar || file == undefined
                    ? null
                    : filename,
            email: email,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            updated_by: req.userId,
        };
        if (file) {
            fs_1.default.unlink(path, (err) => {
                winston.logger.error(req.originalUrl, " ", err);
            });
            file.avatar.mv(path);
        }
        await repository.Update(id, data);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
const Delete = async (req) => {
    let response;
    try {
        let { id } = req.body;
        for (let dataID of id) {
            let user = await repository.Find(dataID);
            if (user.avatar != null) {
                fs_1.default.unlink(user.avatar, (err) => {
                    winston.logger.error(req.originalUrl + " " + err);
                });
            }
        }
        await repository.Delete(id);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
const resetPassword = async (req) => {
    let response;
    let uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    try {
        let { id } = req.params;
        let { new_password } = req.body;
        winston.logger.info(uniqueCode +
            " [RESET PASSWORD] request " +
            JSON.stringify(id, new_password));
        winston.logger.info(uniqueCode + " [RESET PASSWORD] check user... ");
        let user = await repository.Find(id);
        if (!user) {
            let res = (response = build.response("404", `user not found`, {}));
            winston.logger.warn(uniqueCode + " [RESET PASSWORD] response " + JSON.stringify(res));
            return res;
        }
        let password = "";
        if (!new_password) {
            password = generateRandomString();
        }
        else {
            password = new_password;
        }
        winston.logger.info(uniqueCode + " [RESET PASSWORD] hashing password... ");
        let newPassword = await bcrypt_1.default.hash(password, 10);
        let data = {
            password: newPassword,
        };
        await repository.Update(id, data);
        let res = {
            new_password: password,
        };
        if (!new_password) {
            response = build.response("00", "success", res);
        }
        else {
            response = build.response("00", "success", {});
        }
        winston.logger.warn(uniqueCode + " [RESET PASSWORD] response " + JSON.stringify(response));
    }
    catch (error) {
        response = response = build.response("500", `${error.message}`, {});
        winston.logger.error(uniqueCode + " [RESET PASSWORD] response " + JSON.stringify(response));
    }
    return response;
};
exports.resetPassword = resetPassword;
const generateRandomString = () => {
    let result = (Math.random() + 1).toString(36).substring(7);
    return result;
};
const updatePassword = async (req) => {
    let response;
    let uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    try {
        let { username, password, new_password } = req.body;
        winston.logger.info(uniqueCode + " [UPDATE PASSWORD] request " + JSON.stringify(req.body));
        winston.logger.info(uniqueCode + " [UPDATE] PASSWORD] checking user... ");
        let check = await repository.checkByUsername(username);
        if (!check) {
            let res = build.response("404", "user not found", {});
            winston.logger.warn(uniqueCode + " [UPDATE PASSWORD] response " + JSON.stringify(res));
            return res;
        }
        winston.logger.info(uniqueCode + " [UPDATE PASSWORD] comparing password... ");
        let compare = await comparePassword(password, check.password);
        if (!compare) {
            return build.response("405", "wrong password", {});
        }
        winston.logger.info(uniqueCode + " [UPDATE PASSWORD] hashing password... ");
        let hashPassword = await bcrypt_1.default.hash(new_password, 10);
        let dataUpdate = {
            password: hashPassword,
        };
        await repository.Update(check.id, dataUpdate);
        response = build.response("00", "success", {});
        winston.logger.info(uniqueCode + " [UPDATE PASSWORD] response " + JSON.stringify(response));
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
        winston.logger.error(uniqueCode + " [UPDATE PASSWORD] reponse " + JSON.stringify(response));
    }
    return response;
};
exports.updatePassword = updatePassword;
const comparePassword = async (plainPassword, hashPassword) => {
    let result = await bcrypt_1.default.compare(plainPassword, hashPassword);
    return result;
};
const getAvatar = (req) => {
    // try {
    let { image } = req.params;
    // let path = "./upload/avatar/" + image;
    let pathDir = appEnv == "local"
        ? path_1.default.join(__dirname, "../../upload/avatar/" + image)
        : path_1.default.join(__dirname, "../../upload/avatar/" + image);
    // } catch (error) {}
    return pathDir;
};
exports.getAvatar = getAvatar;
