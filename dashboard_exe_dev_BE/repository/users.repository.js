"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkByUsername = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default
        .select("users.id", "nik", "username", "password", "fullname", "role_id", "role.name as role_name", "jabatan", "avatar", "email", "users.status_id", "status.name as status_name", "users.created_at", "users.created_by", "users.updated_at", "users.updated_by", "users.deleted_at", "users.deleted_by")
        .table("users")
        .leftJoin("role", "role.id", "=", "users.role_id")
        .leftJoin("status", "status.id", "=", "users.status_id")
        .where("users.status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d");
    return result;
};
exports.All = All;
const Find = async (id) => {
    let result = await db_config_1.default
        .table("users")
        .where("id", id)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .first();
    return result;
};
exports.Find = Find;
const Insert = async (data) => {
    let result = await db_config_1.default.table("users").insert(data);
    return result;
};
exports.Insert = Insert;
const Update = async (id, data) => {
    let result = await db_config_1.default.table("users").where("id", id).update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id) => {
    let result = await db_config_1.default.table("users").whereIn("id", id).delete();
    return result;
};
exports.Delete = Delete;
const checkByUsername = async (username) => {
    let result = await db_config_1.default
        .table("users")
        .where("username", username)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .first();
    return result;
};
exports.checkByUsername = checkByUsername;
