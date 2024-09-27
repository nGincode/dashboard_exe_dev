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
const controller = __importStar(require("../controller/report-sf-trainset.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const report_sf_trainset_validation_1 = require("../validation/report-sf-trainset.validation");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report/sf-trainset:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: month
 *         required: true
 *         schema:
 *           type: number
 *           example: 1
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: number
 *           example: 2024
 *     content:
 *       application/json
 *     description: Get Report SF Trainset!
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.get("/report/sf-trainset", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/report-upload/sf-trainset:
 *   post:
 *     tags: [Report Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               month:
 *                 type: number
 *                 default: 1
 *               year:
 *                 type: number
 *                 default: 2024
 *               data:
 *                 type: array
 *                 items:
 *                    properties:
 *                      i_trainset:
 *                        type: number
 *                        default: 19
 *                      c_station_from:
 *                        type: string
 *                        default: HAR
 *                      c_station_to:
 *                        type: string
 *                        default: DKA
 *                      i_distance:
 *                        type: number
 *                        default: 24.64
 *                      i_freq:
 *                        type: number
 *                        default: 6
 *                      i_m1:
 *                        type: number
 *                        default: 1
 *                      i_m2:
 *                        type: number
 *                        default: 1
 *                      i_m3:
 *                        type: number
 *                        default: 1
 *                      i_m4:
 *                        type: number
 *                        default: 1
 *                      i_m5:
 *                        type: number
 *                        default: 1
 *                      i_m6:
 *                        type: number
 *                        default: 1
 *                      i_m7:
 *                        type: number
 *                        default: 1
 *                      i_m8:
 *                        type: number
 *                        default: 1
 *                      i_m9:
 *                        type: number
 *                        default: 1
 *                      i_m10:
 *                        type: number
 *                        default: 1
 *                      i_m11:
 *                        type: number
 *                        default: 1
 *                      i_m12:
 *                        type: number
 *                        default: 1
 *                      i_m13:
 *                        type: number
 *                        default: 1
 *                      i_m14:
 *                        type: number
 *                        default: 1
 *                      i_m15:
 *                        type: number
 *                        default: 1
 *                      i_m16:
 *                        type: number
 *                        default: 1
 *                      i_m17:
 *                        type: number
 *                        default: 1
 *                      i_m18:
 *                        type: number
 *                        default: 1
 *                      i_m19:
 *                        type: number
 *                        default: 1
 *                      i_m20:
 *                        type: number
 *                        default: 1
 *                      i_m21:
 *                        type: number
 *                        default: 1
 *                      i_m22:
 *                        type: number
 *                        default: 1
 *                      i_m23:
 *                        type: number
 *                        default: 1
 *                      i_m24:
 *                        type: number
 *                        default: 1
 *                      i_m25:
 *                        type: number
 *                        default: 1
 *                      i_m26:
 *                        type: number
 *                        default: 1
 *                      i_m27:
 *                        type: number
 *                        default: 1
 *                      i_m28:
 *                        type: number
 *                        default: 1
 *                      i_m29:
 *                        type: number
 *                        default: 1
 *                      i_m30:
 *                        type: number
 *                        default: 1
 *                      i_m31:
 *                        type: number
 *                        default: 1
 *                      i_total_m:
 *                        type: number
 *                        default: 10
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-upload/sf-trainset", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(report_sf_trainset_validation_1.validateInsert), controller.Insert);
exports.default = router;
