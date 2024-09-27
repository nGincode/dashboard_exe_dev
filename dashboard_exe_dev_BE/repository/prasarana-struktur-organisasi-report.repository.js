"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChild = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("report")
        .orderBy("sort", "asc");
    return result;
};
exports.All = All;
const getChild = async (id) => {
    let result;
    result = await db_config_1.default
        .withSchema("prasarana")
        .table("report")
        .where("parent_id", id)
        .orderBy("sort", "asc");
    return result;
};
exports.getChild = getChild;
