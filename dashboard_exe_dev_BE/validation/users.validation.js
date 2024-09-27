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
exports.deleteValidation = exports.updateValidation = exports.insertValidation = void 0;
const zod = __importStar(require("zod"));
const insertValidation = zod.object({
    body: zod.object({
        nik: zod.string({
            required_error: "nik is required",
            // invalid_type_error: "nik must be string",
        }),
        username: zod.string({
            required_error: "username is required",
            invalid_type_error: "username must be string",
        }),
        // password: zod.string({
        //   required_error: "password is required",
        //   invalid_type_error: "password must be string",
        // }),
        fullname: zod.string({
            required_error: "fullname is required",
            invalid_type_error: "fullname must be string",
        }),
        role_id: zod.string({
            required_error: "role_id is required",
            invalid_type_error: "role_id must be string",
        }),
    }),
});
exports.insertValidation = insertValidation;
const updateValidation = zod.object({
    body: zod.object({
        // nik: zod.string({
        //   // required_error: "nik is required",
        //   invalid_type_error: "nik must be string",
        // }),
        // username: zod.string({
        //   required_error: "username is required",
        //   invalid_type_error: "username must be string",
        // }),
        // password: zod.string({
        //   required_error: "password is required",
        //   invalid_type_error: "password must be string",
        // }),
        fullname: zod.string({
            required_error: "fullname is required",
            invalid_type_error: "fullname must be string",
        }),
        role_id: zod.string({
            required_error: "role_id is required",
            invalid_type_error: "role_id must be string",
        }),
    }),
});
exports.updateValidation = updateValidation;
const deleteValidation = zod.object({
    body: zod.object({
        id: zod.date({
            required_error: "deleted_at is required",
            invalid_type_error: "deleted_at must be date",
        }),
    }),
});
exports.deleteValidation = deleteValidation;
