"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const env = () => {
    let obj = {};
    try {
        let loadEnv = dotenv_1.default.config();
        if (!loadEnv) {
            throw new Error("Fail to load env");
        }
        let appPort = process.env.APP_PORT;
        if (!appPort || appPort == undefined) {
            throw new Error("Fail to load env APP_PORT");
        }
        let appFor = process.env.APP_FOR;
        if (!appFor || appFor == undefined) {
            throw new Error("Fail to load env APP_FOR");
        }
        let dbHost = process.env.DB_HOST;
        if (!dbHost || dbHost == undefined) {
            throw new Error("Fail to load env DB_HOST");
        }
        let dbName = process.env.DB_NAME;
        if (!dbName || dbName == undefined) {
            throw new Error("Fail to load env DB_NAME");
        }
        let dbPort = process.env.DB_PORT;
        if (!dbPort || dbPort == undefined) {
            throw new Error("Fail to load env DB_PORT");
        }
        let dbUser = process.env.DB_USER;
        if (!dbUser || dbUser == undefined) {
            throw new Error("Fail to load env DB_USER");
        }
        let dbPassword = process.env.DB_PASSWORD;
        if (!dbPassword || dbPassword == undefined) {
            throw new Error("Fail to load env DB_PASSWORD");
        }
        let accessToken = process.env.JWT_ACCESS_TOKEN_SECRET;
        if (!accessToken || accessToken == undefined) {
            throw new Error("JWT_ACCESS_TOKEN_SECRET env found");
        }
        let refreshToken = process.env.JWT_REFRESH_TOKEN_SECRET;
        if (!refreshToken || refreshToken == undefined) {
            throw new Error("JWT_REFRESH_TOKEN_SECRET env not found");
        }
        let tokenExp = process.env.JWT_EXPIRATION;
        if (!tokenExp || tokenExp == undefined) {
            throw new Error("JWT_EXPIRATION env not found");
        }
        let tokenExpRefresh = process.env.JWT_EXPIRATION_REFRESH;
        if (!tokenExpRefresh || tokenExpRefresh == undefined) {
            throw new Error("JWT_EXPIRATION_REFRESH env not found");
        }
        obj = {
            PORT: appPort,
            APP_FOR: appFor,
            DB_HOST: dbHost,
            DB_NAME: dbName,
            DB_PORT: dbPort,
            DB_USER: dbUser,
            DB_PASSWORD: dbPassword,
            ACCESS_TOKEN_SECRET: accessToken,
            REFRESH_TOKEN_SECRET: refreshToken,
            TOKEN_EXPIRED: tokenExp,
            JWT_EXPIRATION_REFRESH: tokenExpRefresh
        };
    }
    catch (error) {
        console.log(error);
    }
    return obj;
};
exports.default = { env };
