"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    // let result = await knex.table("global_parameter")
    let result = await (0, db_config_1.default)("global_parameter");
    return result;
};
exports.All = All;
const Find = async (id) => {
    let result = await (0, db_config_1.default)("global_parameter")
        .where("id", "=", id)
        .first();
    return result;
};
exports.Find = Find;
const Insert = async (data) => {
    let result = await (0, db_config_1.default)("global_parameter").insert(data);
    return result;
};
exports.Insert = Insert;
const Update = async (data, id) => {
    let result = (0, db_config_1.default)("global_parameter").where("id", "=", id).update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id) => {
    let result = await (0, db_config_1.default)("global_parameter").where("id", "=", id).del();
    return result;
};
exports.Delete = Delete;
