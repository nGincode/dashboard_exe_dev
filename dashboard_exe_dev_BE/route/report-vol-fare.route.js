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
const express_1 = require("express");
// import * as controller from "../controller/report/polsuska.controller";
const controller = __importStar(require("../controller/report-vol-fare.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report/vol-fare:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: start
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01
 *       - in: query
 *         name: end
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01
 *       - in: query
 *         name: c_fare_header
 *         required: false
 *         schema:
 *           type: string
 *           example: Fare Header
 *     content:
 *       application/json
 *     description: Get Report SF Trainset!
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.get("/report/vol-fare", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/report-upload/vol-fare:
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
 *                      i_distance:
 *                        type: string
 *                        default: 1
 *                      i_kontrak_peak:
 *                        type: number
 *                        default: 0
 *                      i_kontrak_offpeak:
 *                        type: number
 *                        default: 0
 *                      i_realisasi_peak:
 *                        type: number
 *                        default: 0
 *                      i_realisasi_offpeak:
 *                        type: number
 *                        default: 0
 *                      i_selisih_peak:
 *                        type: number
 *                        default: 0
 *                      i_selisih_offpeak:
 *                        type: number
 *                        default: 0
 *                      tarif_km:
 *                        type: number
 *                        default: 0
 *                      tarif_km_offpeak:
 *                        type: number
 *                        default: 0
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-upload/vol-fare", jwt_middleware_1.jwtMiddleware, controller.Insert);
/**
 * @openapi
 *  /api/v1/report/vol-fare-v2:
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
 *     description: Get Report Volume Fare!
 *     responses:
 *       200:
 *         description: Returns Volume Fare data.
 */
router.get("/report/vol-fare-v2", jwt_middleware_1.jwtMiddleware, controller.Allv2);
exports.default = router;
