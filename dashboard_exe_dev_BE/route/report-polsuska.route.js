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
const controller = __importStar(require("../controller/report-polsuska.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report/polsuska/:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01
 *       - in: query
 *         name: end_date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-02-01
 *     content:
 *       application/json
 *     description: Get Report Polsuska!
 *     responses:
 *       200:
 *         description: Returns Polsuska data.
 */
router.get("/report/polsuska/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/report-upload/polsuska:
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
 *                        default: 1
 *                      i_total_day:
 *                        type: number
 *                        default: 0
 *                      i_total_ka:
 *                        type: number
 *                        default: 0
 *                      i_freq_ka:
 *                        type: number
 *                        default: 0
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-upload/polsuska", jwt_middleware_1.jwtMiddleware, controller.Insert);
exports.default = router;
