"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const knex_relay_cursor_pagination_1 = require("knex-relay-cursor-pagination");
const pagination = (0, knex_relay_cursor_pagination_1.createPagination)({
    from: "table_name",
    sortColumn: "created_at",
    sortDirection: "desc",
    cursorColumn: "id",
    first: 10,
    after: 10,
    last: 10,
    // before: 1,
});
const All = async () => {
    // let result = await knex
    //   .table("action")
    //   .where(
    //     pagination.where.column,
    //     pagination.where.comparator,
    //     pagination.where.value
    //   )
    //   .orderBy(pagination.orderBy.column, pagination.orderBy.direction)
    //   .limit(pagination.limit);
    // return pagination.getPage(result);
    let result = await db_config_1.default.table("action");
    return result;
};
exports.All = All;
const Find = async (id) => {
    let result = await db_config_1.default.table("action").where("id", id).first();
    return result;
};
exports.Find = Find;
const Insert = async (data) => {
    let result = await db_config_1.default.table("action").insert(data);
    return result;
};
exports.Insert = Insert;
const Update = async (id, data) => {
    let result = await db_config_1.default.table("action").where("id", id).update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id) => {
    let result = db_config_1.default.table("action").where("id", id).del();
    return result;
};
exports.Delete = Delete;
