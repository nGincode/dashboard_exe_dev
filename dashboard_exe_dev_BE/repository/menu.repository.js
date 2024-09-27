"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cekPathUpdate = exports.cekPath = exports.getActionAll = exports.getChildAll = exports.listMenuAll = exports.listWithRoleId = exports.getChildWithRoleId = exports.List = exports.getAction = exports.getChild = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const listWithRoleId = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.id", "menu.name", "menu.id", "menu.path", "menu.icon", "menu.status_id", "menu_parent_id", "role_detail.action")
        .join("role_detail", "role_detail.menu_id", "=", "menu.id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .where("role_id", id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", 0);
    return result;
};
exports.listWithRoleId = listWithRoleId;
const All = async () => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.id", "menu.name", "path", "icon", "status_id", "status.name as status_name", "sort", "menu.created_at", "menu.created_by", "menu.updated_at", "menu.updated_by", "menu.deleted_at", "menu.deleted_by")
        .leftJoin("status", "status.id", "=", "menu.status_id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d");
    return result;
};
exports.All = All;
const Find = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.id", "menu.name", "path", "icon", "status_id", "status.name as status_name", "sort", "menu.created_at", "menu.created_by", "menu.updated_at", "menu.updated_by", "menu.deleted_at", "menu.deleted_by")
        .leftJoin("status", "status.id", "=", "menu.status_id")
        .where("menu.id", id)
        .first();
    return result;
};
exports.Find = Find;
const Insert = async (data) => {
    let result = await db_config_1.default.table("menu").insert(data);
    return result;
};
exports.Insert = Insert;
const Update = async (id, data) => {
    let result = await db_config_1.default.table("menu").where("id", id).update(data);
    return result;
};
exports.Update = Update;
const Delete = async (id, data) => {
    let result = await db_config_1.default.table("menu").whereIn("id", id).update(data);
    return result;
};
exports.Delete = Delete;
const getChildWithRoleId = async (id, role_id) => {
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
exports.getChildWithRoleId = getChildWithRoleId;
const getAction = async (id) => {
    let result = await db_config_1.default.table("action").select("name").whereIn("id", id);
    return result;
};
exports.getAction = getAction;
const List = async () => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.name", "menu.id", "menu.path", "menu.icon", "menu.status_id", "menu_parent_id", "role_detail.action")
        .join("role_detail", "role_detail.menu_id", "=", "menu.id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        // .where("role_id", id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", 0);
    return result;
};
exports.List = List;
const getChild = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.name as title", "menu.path", "menu.icon", "role_detail.action as permission")
        .join("role_detail", "role_detail.menu_id", "=", "menu.id")
        .where("menu_parent_id", id)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        // .where("role_detail.role_id", role_id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", "!=", null);
    return result;
};
exports.getChild = getChild;
const getChildAll = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.name", "menu.id", "menu.path", "menu.icon", "menu.status_id", "menu_parent_id", "menu.sort", 
    // "role_detail.action as action",
    "status.name as status_name", "menu.created_at", "menu.created_by", "menu.updated_at", "menu.updated_by", "menu.deleted_at", "menu.deleted_by", "menu.action")
        // .leftJoin("role_detail", "role_detail.menu_id", "=", "menu.id")
        .leftJoin("status", "status.id", "=", "menu.status_id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .where("menu_parent_id", id)
        // .where("role_detail.role_id", role_id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", "!=", null);
    return result;
};
exports.getChildAll = getChildAll;
const listMenuAll = async () => {
    let result = await db_config_1.default
        .table("menu")
        .select("menu.name", "menu.id", "menu.path", "menu.icon", "menu.status_id", "menu_parent_id", "menu.sort", 
    // "role_detail.action as action",
    "status.name as status_name", "menu.created_at", "menu.created_by", "menu.updated_at", "menu.updated_by", "menu.deleted_at", "menu.deleted_by", "menu.action")
        // .leftJoin("role_detail", "role_detail.menu_id", "=", "menu.id")
        .leftJoin("status", "status.id", "=", "menu.status_id")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        // .where("role_id", id)
        .orderBy("sort", "asc");
    // .where("menu_parent_id", 0);
    return result;
};
exports.listMenuAll = listMenuAll;
const getActionAll = async (id) => {
    let result = await db_config_1.default
        .table("action")
        .select("id", "name")
        .whereIn("id", id);
    return result;
};
exports.getActionAll = getActionAll;
const cekPath = async (path) => {
    let result = await db_config_1.default
        .table("menu")
        .select("path")
        .where("path", path);
    return result;
};
exports.cekPath = cekPath;
const cekPathUpdate = async (path, id) => {
    let result = await db_config_1.default
        .table("menu")
        .select("path")
        .whereNot('id', id)
        .where("path", path);
    return result;
};
exports.cekPathUpdate = cekPathUpdate;
