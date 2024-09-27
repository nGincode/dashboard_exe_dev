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
exports.validateInsert = void 0;
const zod = __importStar(require("zod"));
const validateInsert = zod.object({
    body: zod.object({
        data: zod
            .object({
            i_distance: zod
                .number({
                invalid_type_error: "distance/jarak must be a number",
            })
                .nullable(),
            i_freq: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "frequency must be a number",
            })
                .nullable(),
            i_m1: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m2: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m3: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m4: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m5: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m6: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m7: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m8: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m9: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m10: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m11: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m12: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m13: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m14: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m15: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m16: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m17: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m18: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m19: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m20: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m21: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m22: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m23: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m24: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m25: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m26: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m27: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m28: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m29: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m30: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_m31: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "stamformasi must be a number",
            })
                .nullable(),
            i_total_m: zod
                .number({
                // required_error: "description is required",
                invalid_type_error: "total must be a number",
            })
                .nullable(),
        })
            .array(),
    }),
});
exports.validateInsert = validateInsert;
