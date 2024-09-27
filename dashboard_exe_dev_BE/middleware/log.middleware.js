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
exports.logErrResponseMiddleware = exports.uniqueCodeMiddleware = exports.logger = void 0;
const express_winston_1 = __importDefault(require("express-winston"));
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
const unique_code_helper_1 = require("../helper/unique-code.helper");
const logWinston = __importStar(require("../helper/log.helper"));
const env_config_1 = __importDefault(require("../config/env.config"));
const { combine, timestamp, printf, align, json } = winston_1.default.format;
const logRotateFile = new winston_1.default.transports.DailyRotateFile({
    filename: "logs/%DATE%.all.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: env_config_1.default.env().APP_FOR == "prod" ? "90d" : "1d",
    zippedArchive: env_config_1.default.env().APP_FOR == "prod" ? true : false,
});
var uniqueCode;
const uniqueCodeMiddleware = (req, res, next) => {
    uniqueCode = (0, unique_code_helper_1.generateUniqueCode)();
    next();
};
exports.uniqueCodeMiddleware = uniqueCodeMiddleware;
const logger = {
    request: express_winston_1.default.logger({
        transports: [logRotateFile],
        format: combine(timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSS",
        }), align(), printf((info) => `[${info.timestamp}] REQ ${uniqueCode} ${info.meta.req.originalUrl} ${JSON.stringify(info.meta.req.body)
            ? JSON.stringify(info.meta.req.body)
            : JSON.stringify({})} ${info.meta.req.ip}`)),
        requestWhitelist: [
            ...express_winston_1.default.requestWhitelist,
            "body",
            "id",
            "ip",
            "timestamp",
        ],
    }),
    response: express_winston_1.default.logger({
        transports: [logRotateFile],
        format: combine(timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSS",
        }), align(), printf((info) => `[${info.timestamp}] RES ${uniqueCode} ${info.meta.req.originalUrl} ${info.meta.responseTime}ms ${JSON.stringify(info.meta.res.body)
            ? JSON.stringify(info.meta.res.body)
            : {}}`)),
        responseWhitelist: [
            ...express_winston_1.default.responseWhitelist,
            "body",
            "id",
            "ip",
            "timestamp",
        ],
    }),
};
exports.logger = logger;
const logErrResponseMiddleware = (req, res, next) => {
    res.on("finish", () => {
        if (res.statusCode == 500) {
            logWinston.logger.error(uniqueCode + " " + req.originalUrl + " " + JSON.stringify(res.body));
        }
    });
    next();
};
exports.logErrResponseMiddleware = logErrResponseMiddleware;
