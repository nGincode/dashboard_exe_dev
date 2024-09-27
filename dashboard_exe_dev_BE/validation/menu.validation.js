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
exports.listMenuValidation = exports.updateValidation = exports.insertValidation = void 0;
const zod = __importStar(require("zod"));
const insertValidation = zod.object({
    body: zod.object({
        name: zod.string({
            required_error: "name is required",
            invalid_type_error: "name must be string",
        }),
        menu_parent_id: zod
            .string({
            // required_error: "menu_parent_id is required",
            invalid_type_error: "menu_parent_id must be string",
        })
            .optional()
            .nullable(),
        path: zod.string({
            // required_error: "path is required",
            invalid_type_error: "path must be string",
        }),
        sort: zod
            .number({
            invalid_type_error: "sort must be number",
        })
            .optional()
            .nullable(),
    }),
});
exports.insertValidation = insertValidation;
const updateValidation = zod.object({
    body: zod.object({
        name: zod.string({
            required_error: "name is required",
            invalid_type_error: "name must be string",
        }),
        menu_parent_id: zod
            .string({
            // required_error: "menu_parent_id is required",
            invalid_type_error: "menu_parent_id must be string",
        })
            .optional()
            .nullable(),
        path: zod
            .string({
            // required_error: "path is required",
            invalid_type_error: "path must be string",
        })
            .optional()
            .nullable(),
        sort: zod
            .number({
            invalid_type_error: "sort must be number",
        })
            .optional()
            .nullable(),
    }),
});
exports.updateValidation = updateValidation;
const listMenuValidation = zod.object({
    body: zod.object({
        role_id: zod
            .string({
            invalid_type_error: "role_id must be string",
        })
            .optional()
            .nullable(),
    }),
});
exports.listMenuValidation = listMenuValidation;
