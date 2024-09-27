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
const express_1 = require("express");
const controller = __importStar(require("../controller/konfigurasi-tanda-tangan.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const tanda_tangan_validation_1 = require("../validation/tanda-tangan.validation");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/konfigurasi-ttd-all:
 *   get:
 *     tags: [Signature]
 *     content:
 *       application/json
 *     description: Get Data Master Signature!
 *     responses:
 *       200:
 *         description: Get Data Master Signature.
 */
router.get("/konfigurasi-ttd-all", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/konfigurasi-ttd/update/{id}:
 *   post:
 *     tags: [Signature]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: signature id
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name_1:
 *                 type: string
 *                 default: ADMINISTRATOR
 *               position_1:
 *                 type: string
 *                 default: ROOT
 *               nipp_1:
 *                 type: string
 *                 default: 123
 *               name_2:
 *                 type: string
 *                 default: ADMINISTRATOR
 *               position_2:
 *                 type: string
 *                 default: ROOT
 *               nipp_2:
 *                 type: string
 *                 default: 123
 *
 *             required:
 *               - name_1
 *               - position_1
 *               - nipp_1
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/konfigurasi-ttd/update/:id", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(tanda_tangan_validation_1.updateValidation), controller.Update);
exports.default = router;
