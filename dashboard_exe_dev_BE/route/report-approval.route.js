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
const controller = __importStar(require("../controller/report-approval.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const route = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report/approve:
 *   post:
 *     tags: [Report]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: OTC
 *               codeMenu:
 *                 type: string
 *                 default: PRASARANA_KINERJAOPRASI_OCC_DAFTARHADIRDINASAN
 *               month:
 *                 type: number
 *                 default: 1
 *               year:
 *                 type: number
 *                 default: 2024
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
route.post("/report/approve", jwt_middleware_1.jwtMiddleware, controller.Approve);
/**
 * @openapi
 *  /api/v1/report/unapprove:
 *   post:
 *     tags: [Report]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: OTC
 *               codeMenu:
 *                 type: string
 *                 default: PRASARANA_KINERJAOPRASI_OCC_DAFTARHADIRDINASAN
 *               month:
 *                 type: number
 *                 default: 1
 *               year:
 *                 type: number
 *                 default: 2024
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
route.post("/report/unapprove", jwt_middleware_1.jwtMiddleware, controller.Unapprove);
/**
 * @openapi
 *  /api/v1/report/approvebyid:
 *   post:
 *     tags: [Report]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: SERTIFIKASI
 *               codeMenu:
 *                 type: string
 *                 default: sertifikasi
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 36b50a64-2003-4d12-afda-8ebc2fc40ce9
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
route.post("/report/approvebyid", jwt_middleware_1.jwtMiddleware, controller.ApproveById);
/**
 * @openapi
 *  /api/v1/report/unapprovebyid:
 *   post:
 *     tags: [Report]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: SERTIFIKASI
 *               codeMenu:
 *                 type: string
 *                 default: sertifikasi
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 36b50a64-2003-4d12-afda-8ebc2fc40ce9
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
route.post("/report/unapprovebyid", jwt_middleware_1.jwtMiddleware, controller.ApproveById);
exports.default = route;
