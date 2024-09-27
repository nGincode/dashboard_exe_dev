"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const moment = require("moment");
require("winston-daily-rotate-file");
require("moment/locale/id");
const env_config_1 = __importDefault(require("../config/env.config"));
moment.locale("id");
process.env.TZ = "Asia/Jakarta";
const { combine, timestamp, printf, align, json } = winston_1.default.format;
const fileRotateTransport = new winston_1.default.transports.DailyRotateFile({
    filename: "logs/%DATE%.trx.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: env_config_1.default.env().APP_FOR == "prod" ? "90d" : "1d",
    zippedArchive: env_config_1.default.env().APP_FOR == "prod" ? true : false,
});
const level = () => {
    const env = process.env.NODE_ENV || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "warn";
};
const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
};
const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};
winston_1.default.addColors(colors);
var logger;
exports.logger = logger = winston_1.default.createLogger({
    levels: logLevels,
    level: level(),
    exitOnError: false,
    format: combine(timestamp({
        format: "YYYY-MM-DD HH:mm:ss.SSS",
    }), align(), json(), printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
    defaultMeta: { service: "express-ts" },
    transports: [
        fileRotateTransport,
        new winston_1.default.transports.File({
            filename: `logs/error.trx.log`,
            level: "error",
        }),
    ],
});
