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
const controllerReport = __importStar(require("../controller/report-pest.controller"));
const controllerUpload = __importStar(require("../controller/report-upload-pest.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report/pest-control:
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
 *           example: 2024-01-31
 *     content:
 *       application/json
 *     description: Get Report SF Trainset!
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.get("/report/pest-control", jwt_middleware_1.jwtMiddleware, controllerReport.All);
/**
 * @openapi
 *  /api/v1/report-upload/pest-control:
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
 *                      i_total_month:
 *                        type: number
 *                        default: 12
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-upload/pest-control", jwt_middleware_1.jwtMiddleware, controllerUpload.Insert);
exports.default = router;
