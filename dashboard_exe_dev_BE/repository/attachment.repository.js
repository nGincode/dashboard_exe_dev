"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailFileAYear = exports.getDataByYear = exports.Delete = exports.Find = exports.All = exports.findByDate = exports.Insert = exports.updateDetailFile = exports.updateFile = exports.saveDetailFile = exports.getDetailFile = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const updateFile = async (data, id) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .where("id", id)
        .update(data);
    return result;
};
exports.updateFile = updateFile;
const getDetailFile = async (code) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment_file")
        .where("code", code)
        .first();
    return result;
};
exports.getDetailFile = getDetailFile;
const saveDetailFile = async (data) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment_file")
        .insert(data);
    return result;
};
exports.saveDetailFile = saveDetailFile;
const updateDetailFile = async (code, data) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment_file")
        .where("code", code)
        .update(data);
    return result;
};
exports.updateDetailFile = updateDetailFile;
const Insert = async (data) => {
    let result = await db_config_1.default.withSchema("public").table("attachment").insert(data);
    return result;
};
exports.Insert = Insert;
const findByDate = async (date) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .where("period", date)
        .first();
    return result;
};
exports.findByDate = findByDate;
const All = async (date) => {
    let result;
    result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .where("period", date);
    return result;
};
exports.All = All;
const Delete = async (id) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .where("id", id)
        .del();
    return result;
};
exports.Delete = Delete;
const Find = async (id) => {
    let result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .where("id", id)
        .first();
    return result;
};
exports.Find = Find;
const getDataByYear = async (year) => {
    let result;
    result = await db_config_1.default
        .withSchema("public")
        .table("attachment")
        .whereRaw(`EXTRACT(YEAR FROM period::date) = ?`, [year])
        .orderBy("period", "asc");
    return result;
};
exports.getDataByYear = getDataByYear;
const getDetailFileAYear = async (year) => {
    let result;
    result = await db_config_1.default
        .withSchema("public")
        .table("attachment_file")
        .whereIn("code", year);
    return result;
};
exports.getDetailFileAYear = getDetailFileAYear;
