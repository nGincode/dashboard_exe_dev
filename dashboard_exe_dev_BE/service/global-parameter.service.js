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
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/global-parameter.respository"));
const moment_1 = __importDefault(require("moment"));
const build = __importStar(require("../helper/response.helper"));
const All = async () => {
    let response;
    try {
        let get = await repository.All();
        response = build.response("00", "success", get);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Find = async (id) => {
    let response;
    try {
        let get = (await repository.Find(id)) ? await repository.Find(id) : {};
        response = build.response("00", "success", get);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
const Insert = async (data) => {
    let response;
    try {
        let { code, name, value, description, status_id } = data;
        let dataInsert;
        dataInsert = {
            code: code,
            name: name,
            description: description,
            status_id: status_id,
            value: value,
        };
        await repository.Insert(dataInsert);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const Update = async (data, id) => {
    let response;
    try {
        let dataUpdate;
        let { code } = data;
        let find = await repository.Find(id);
        if (!find) {
            return (response = build.response("400", "data not found", {}));
        }
        dataUpdate = {
            code: code,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
        };
        await repository.Update(dataUpdate, id);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
const Delete = async (id) => {
    let response;
    try {
        let find = await repository.Find(id);
        if (!find) {
            return (response = build.response("400", "data not found", {}));
        }
        await repository.Delete(id);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
