"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = exports.Find = exports.getAction = exports.getChild = exports.List = exports.Check = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const Check = async (username) => {
    let result = await db_config_1.default
        .table("users")
        .where("username", "=", username)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .first();
    return result;
};
exports.Check = Check;
const List = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.name", "menu.id", "menu.path", "menu.icon", "menu.status_id", "menu_parent_id", "role_detail.action")
        .join("role_detail", "role_detail.menu_id", "=", "menu.id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .where("role_detail.role_id", id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", 0);
    return result;
};
exports.List = List;
const getChild = async (id, role_id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.id", "menu.name as title", "menu.path", "menu.icon", "role_detail.action as permission")
        .join("role_detail", "role_detail.menu_id", "=", "menu.id")
        .where("menu_parent_id", id)
        .where("role_detail.role_id", role_id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", "!=", null);
    return result;
};
exports.getChild = getChild;
const getAction = async (id) => {
    let result = await db_config_1.default.table("action").select("name").whereIn("id", id);
    return result;
};
exports.getAction = getAction;
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
