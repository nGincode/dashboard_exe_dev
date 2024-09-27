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
exports.getAllMenu = exports.Register = exports.refreshToken = exports.Login = void 0;
const repository = __importStar(require("../repository/auth.repository"));
const build = __importStar(require("../helper/response.helper"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = __importDefault(require("../config/env.config"));
require("../dto/auth.dto");
const winston = __importStar(require("../helper/log.helper"));
const unique_code_helper_1 = require("../helper/unique-code.helper");
const fs = __importStar(require("fs"));
// import load from "../config/env.config";
// var appEnv = "";
const Login = async (data) => {
    let response;
    let uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    try {
        let { username, password } = data;
        winston.logger.info(uniqueCode + " [LOGIN] request " + JSON.stringify(data));
        winston.logger.info(uniqueCode + " [LOGIN] check user by username... ");
        let user = await repository.Check(username);
        if (!user) {
            let res = build.response("404", "user is not register", {});
            winston.logger.warn(uniqueCode + " [LOGIN] response " + JSON.stringify(res));
            return res;
        }
        winston.logger.info(uniqueCode + " [LOGIN] comparing password... ");
        let comparingPassword = await comparePassword(password, user.password);
        if (!comparingPassword) {
            let res = build.response("405", "incorrect/wrong password", {});
            winston.logger.warn(uniqueCode + " [LOGIN] response " + JSON.stringify(res));
            return res;
        }
        let payloadData = {
            token_id: user.id,
            // nik: user.nik,
            // username: user.username,
            // role_id: user.role_id,
            // fullname: user.fullname,
            // jabatan: user.jabatan,
            // avatar: user.avatar,
        };
        winston.logger.info(uniqueCode + " [LOGIN] generating access token... ");
        let accessToken = await generateAccessToken(payloadData);
        winston.logger.info(uniqueCode + " [LOGIN] generating refresh token... ");
        let refreshToken = await generateRefreshToken(payloadData);
        winston.logger.info(uniqueCode + " [LOGIN] get list menu... ");
        let listMenu = await menuList(user.role_id);
        let responseToken;
        responseToken = {
            accessToken: accessToken,
            refreshToken: refreshToken,
            menuList: listMenu,
            user: {
                nik: user.nik,
                username: user.username,
                email: user.email,
                role_id: user.role_id,
                fullname: user.fullname,
                jabatan: user.nik,
                // avatar: user.avatar ? "/api/v1/user/avatar/" + user.avatar : null,
                avatar: user.avatar ? user.avatar : null,
            },
        };
        response = build.response("00", "success", responseToken);
        winston.logger.info(uniqueCode + " [LOGIN] response " + JSON.stringify(response));
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
        winston.logger.error(uniqueCode + " [LOGIN] response " + JSON.stringify(response));
    }
    return response;
};
exports.Login = Login;
const refreshToken = async (req) => {
    let response;
    let uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    try {
        let token = req.header("refresh-token");
        winston.logger.info(uniqueCode + " [REFRESH TOKEN] request " + JSON.stringify(token));
        winston.logger.info(uniqueCode + " [REFRESH TOKEN] check if token is there or not... ");
        if (token) {
            let h = { alg: "RS256" };
            let verifyOptions = {
                header: h,
                issuer: "dashboard-executive",
            };
            let payload = {};
            let role_id;
            let user_id = "";
            winston.logger.info(uniqueCode + " [REFRESH TOKEN] verify token... ");
            let privateKey = fs.readFileSync("./jwt_rs256_private.key", "utf8");
            let verifyToken = jsonwebtoken_1.default.verify(token, 
            // envConfig.env().REFRESH_TOKEN_SECRET,
            privateKey, verifyOptions, (err, data) => {
                if (err) {
                    return err;
                }
                user_id = data.token_id;
                payload = {
                    token_id: data.token_id,
                    // nik: data.nik,
                    // username: data.username,
                    // role_id: data.role_id,
                    // fullname: data.fullname,
                    // jabatan: data.nik,
                    // avatar: data.avatar,
                };
            });
            if (verifyToken != null) {
                let res = build.response("402", "invalid token", {});
                winston.logger.warn(uniqueCode + " [REFRESH TOKEN] response " + JSON.stringify(res));
                return res;
            }
            winston.logger.info(uniqueCode + " [REFRESH TOKEN] generating access token... ");
            let accessToken = await generateAccessToken(payload);
            winston.logger.info(uniqueCode + " [REFRESH TOKEN] generating refresh token... ");
            let refreshToken = await generateRefreshToken(payload);
            let user = await repository.Find(user_id);
            role_id = user.role_id;
            winston.logger.info(uniqueCode + " [REFRESH TOKEN] get list menu... ");
            let listMenu = await menuList(role_id);
            let dataUser = {
                nik: user.nik,
                username: user.username,
                email: user.email,
                role_id: user.role_id,
                fullname: user.fullname,
                jabatan: user.nik,
                // avatar: user.avatar ? "/api/v1/user/avatar/" + user.avatar : null,
                avatar: user.avatar ? user.avatar : null,
            };
            let responseToken;
            responseToken = {
                accessToken: accessToken,
                refreshToken: refreshToken,
                menuList: listMenu,
                user: dataUser,
            };
            response = build.response("00", "success", responseToken);
            winston.logger.info(uniqueCode + " [REFRESH TOKEN] response " + JSON.stringify(response));
        }
        else {
            response = build.response("403", "header not found", {});
        }
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
        winston.logger.error(uniqueCode + " [REFRESH TOKEN] response " + JSON.stringify(response));
    }
    return response;
};
exports.refreshToken = refreshToken;
const getAllMenu = async (req) => {
    let response;
    try {
        let user = await repository.Find(req.userId);
        let listMenu = await menuList(user.role_id);
        let dataUser = {
            nik: user.nik,
            username: user.username,
            email: user.email,
            role_id: user.role_id,
            fullname: user.fullname,
            jabatan: user.nik,
            // avatar: user.avatar ? "/api/v1/user/avatar/" + user.avatar : null,
            avatar: user.avatar ? user.avatar : null,
        };
        let results = {
            menuList: listMenu,
            user: dataUser
        };
        response = build.response("00", "success", results);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.getAllMenu = getAllMenu;
const comparePassword = async (plainPassword, hashPassword) => {
    let result = await bcrypt_1.default.compare(plainPassword, hashPassword);
    return result;
};
const generateAccessToken = async (data) => {
    let expired = env_config_1.default.env().TOKEN_EXPIRED;
    let h = { alg: "RS256" };
    let signOptions = {
        header: h,
        issuer: "dashboard-executive",
        expiresIn: expired,
    };
    let privateKey = fs.readFileSync("./jwt_rs256_private.key", "utf8");
    let token = await jsonwebtoken_1.default.sign(data, 
    // envConfig.env().ACCESS_TOKEN_SECRET,
    privateKey, signOptions);
    return token;
};
const generateRefreshToken = async (data) => {
    let expired = env_config_1.default.env().JWT_EXPIRATION_REFRESH;
    let h = { alg: "RS256" };
    let signOptions = {
        header: h,
        issuer: "dashboard-executive",
        expiresIn: expired,
    };
    let privateKey = fs.readFileSync("./jwt_rs256_private.key", "utf8");
    let token = await jsonwebtoken_1.default.sign(data, 
    // envConfig.env().REFRESH_TOKEN_SECRET,
    privateKey, signOptions);
    return token;
};
const menuList = async (role_id) => {
    let response;
    try {
        let get = await repository.List(role_id);
        let menuList = [];
        let menuObj = {};
        for (let data of get) {
            if (data.path != "#" && data.menu_parent_id == null) {
                let action = await repository.getAction(data.action);
                let actionList = [];
                for (let nameAction of action) {
                    actionList.push(nameAction.name);
                }
                menuObj = {
                    title: data.name,
                    Icon: data.icon,
                    path: data.path,
                    permission: actionList,
                };
                menuList.push(menuObj);
            }
            else {
                if (data.path == "#") {
                    let menuChild = await repository.getChild(data.id, role_id);
                    for (let getAction of menuChild) {
                        if (getAction.path == "$") {
                            getAction.path = undefined;
                            let child = await repository.getChild(getAction.id, role_id);
                            for (let actionChild of child) {
                                if (actionChild.path == "%") {
                                    let child2child = await repository.getChild(actionChild.id, role_id);
                                    for (const child3 of child2child) {
                                        if (child3.path == "&") {
                                            let child3child = await repository.getChild(child3.id, role_id);
                                            for (const child4 of child3child) {
                                                if (child4.path == "*") {
                                                    let child4child = await repository.getChild(child4.id, role_id);
                                                    for (let actionChild4 of child4child) {
                                                        let action = await repository.getAction(actionChild4.permission);
                                                        let actionList = [];
                                                        for (let childAction of action) {
                                                            // console.log(childAction);
                                                            actionList.push(childAction.name);
                                                        }
                                                        actionChild4.permission = actionList;
                                                    }
                                                    child4.submenuId = child3child.length;
                                                    child4.submenuItems = child3child;
                                                    child4.level = 5;
                                                }
                                            }
                                            for (let actionChild3 of child3child) {
                                                let action = await repository.getAction(actionChild3.permission);
                                                let actionList = [];
                                                for (let childAction of action) {
                                                    // console.log(childAction);
                                                    actionList.push(childAction.name);
                                                }
                                                actionChild3.permission = actionList;
                                            }
                                            child3.submenuId = child3child.length;
                                            child3.submenuItems = child3child;
                                            child3.level = 4;
                                        }
                                    }
                                    for (let actionChild2 of child2child) {
                                        let action = await repository.getAction(actionChild2.permission);
                                        let actionList = [];
                                        for (let childAction of action) {
                                            // console.log(childAction);
                                            actionList.push(childAction.name);
                                        }
                                        actionChild2.permission = actionList;
                                    }
                                    actionChild.submenuId = child2child.length;
                                    actionChild.submenuItems = child2child;
                                    actionChild.level = 3;
                                }
                                let action = await repository.getAction(actionChild.permission);
                                let actionList = [];
                                for (let childAction of action) {
                                    // console.log(childAction);
                                    actionList.push(childAction.name);
                                }
                                actionChild.permission = actionList;
                            }
                            getAction.submenuId = child.length;
                            getAction.submenuItems = child;
                            getAction.level = 2;
                        }
                        let action = await repository.getAction(getAction.permission);
                        let actionList = [];
                        for (let nameAction of action) {
                            actionList.push(nameAction.name);
                        }
                        getAction.permission = actionList;
                    }
                    menuObj = {
                        title: data.name,
                        Icon: data.icon,
                        submenuId: menuChild.length,
                        submenuItems: menuChild,
                        level: 1,
                    };
                    menuList.push(menuObj);
                }
            }
        }
        return menuList;
    }
    catch (error) {
        throw error;
    }
};
const Register = async (req) => {
    let response;
    let uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    try {
        console.log(req.body);
        let { nik, username, fullname, role_id, jabatan, email, password } = req.body;
        winston.logger.info(uniqueCode + " [REGISTER] request " + JSON.stringify(req.body));
        let file;
        let extension;
        let path;
        let filename;
        winston.logger.info(uniqueCode + " [REGISTER] checking files... ");
        if (req.files) {
            file = req.files;
            let checkExtFile = file.avatar.mimetype;
            winston.logger.info(uniqueCode + " [REGISTER] checking files type... ");
            if (!checkExtFile.includes("image")) {
                return (response = build.response("408", "file must a image", {}));
            }
            extension = file.avatar.mimetype.split("/")[1];
            let appEnv = "";
            path =
                appEnv == "local"
                    ? "upload/avatar/" + username + "." + extension
                    : "dist/upload/avatar/" + username + "." + extension;
            filename = username + "." + extension;
        }
        winston.logger.info(uniqueCode + " [REGISTER] hashing password... ");
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
        winston.logger.info(uniqueCode + " [REGISTER] inserting data... ");
        await repository.Insert(data);
        winston.logger.info(uniqueCode + " [REGISTER] saving image... ");
        file ? file.avatar.mv(path) : "";
        response = build.response("00", "success", {});
        winston.logger.info(uniqueCode + " [REGISTER] response " + JSON.stringify(response));
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
        winston.logger.error(uniqueCode + " [REGISTER] response " + JSON.stringify(response));
    }
    return response;
};
exports.Register = Register;
