"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMenu = exports.getAction = exports.getMenuChild = exports.getMenu = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const All = async () => {
    let result = await db_config_1.default
        .table("role")
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d");
    return result;
};
exports.All = All;
const Find = async (id) => {
    let result = await db_config_1.default
        .table("role")
        .where("id", id)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .first();
    return result;
};
exports.Find = Find;
const Insert = async (dataRole, dataRoleDetail) => {
    let result;
    await db_config_1.default.transaction(async (knex) => {
        try {
            let [getRole] = await knex("role").insert(dataRole).returning("id");
            for (let data of dataRoleDetail) {
                data.role_id = getRole.id;
            }
            await knex("role_detail").insert(dataRoleDetail);
            await knex.commit();
            result = 1;
        }
        catch (error) {
            // console.log(error);
            await knex.rollback();
            result = error;
        }
    });
    return result;
};
exports.Insert = Insert;
const Update = async (id, dataRole, dataRoleDetail) => {
    let result;
    await db_config_1.default.transaction(async (knex) => {
        try {
            await knex("role_detail").where("role_id", id).del();
            await knex("role").where("id", id).update(dataRole);
            for (let data of dataRoleDetail) {
                data.role_id = id;
            }
            await knex("role_detail").insert(dataRoleDetail);
            await knex.commit();
            result = 1;
        }
        catch (error) {
            // console.log(error);
            await knex.rollback();
            result = error;
        }
    });
    return result;
};
exports.Update = Update;
const Delete = async (id, data) => {
    let result = await db_config_1.default.table("role").whereIn("id", id).update(data);
    return result;
};
exports.Delete = Delete;
const getMenu = async (id) => {
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
exports.getMenu = getMenu;
const getMenuChild = async (id, role_id) => {
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
exports.getMenuChild = getMenuChild;
const getAction = async (id) => {
    let result = await db_config_1.default.table("action").select("name").whereIn("id", id);
    return result;
};
exports.getAction = getAction;
const findMenu = async (id) => {
    let result = await db_config_1.default
        .table("menu")
        .where("id", id)
        .where("status_id", "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d")
        .first();
    return result;
};
exports.findMenu = findMenu;
