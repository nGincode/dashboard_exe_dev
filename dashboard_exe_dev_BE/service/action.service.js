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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/action.repository"));
const build = __importStar(require("../helper/response.helper"));
const All = async () => {
    let response;
    try {
        let result = await repository.All();
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let result = await repository.Find(id);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
const Insert = async (req) => {
    let response;
    try {
        let { name } = req.body;
        let dataInsert = { name: name };
        let result = await repository.Insert(dataInsert);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const Update = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let { name } = req.body;
        let dataUpdate = { name: name };
        let result = await repository.Update(id, dataUpdate);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
const Delete = async (req) => {
    let response;
    try {
        let { id } = req.body;
        let result = await repository.Delete(id);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
