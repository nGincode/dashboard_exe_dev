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
const controller = __importStar(require("../controller/prasarana-dash-global.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/prasarana/indicator:
 *   get:
 *     tags: [Prasarana]
 *     parameters:
 *       - in: query
 *         name: period_year
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024_2024
 *       - in: query
 *         name: period_month
 *         required: true
 *         schema:
 *           type: string
 *           example: 01_01
 *       - in: query
 *         name: c_dashboard_type
 *         required: true
 *         schema:
 *           type: string
 *           example: PERAWATAN
 *       - in: query
 *         name: c_param
 *         required: true
 *         schema:
 *           type: string
 *           example: KESELAMATAN
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: 00
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       c_indicator:
 *                         type: string
 *                         example: 5597aff8-eebc-42e6-a5cf-9d18593a6ed9
 *                       n_indicator:
 *                         type: string
 *                         example: Jumlah kerusakan jalur kereta api terkait perawatan
 *                       n_unit:
 *                         type: string
 *                         example: decimal
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/prasarana/indicator", jwt_middleware_1.jwtMiddleware, controller.getIndocator);
/**
 * @openapi
 * /api/v1/prasarana/approval:
 *   put:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               c_dashboard_type:
 *                 type: string
 *                 example: PERAWATAN
 *               c_param:
 *                 type: string
 *                 example: KESELAMATAN
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     i_id:
 *                       type: string
 *                       example: 36b50a64-2003-4d12-afda-8ebc2fc40ce9
 *                     d_opr:
 *                       type: string
 *                       format: date
 *                       example: 2024-08-10
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: "00"
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   example: {}
 *         description: success
 *       400:
 *         description: Header not found
 */
router.put("/prasarana/approval", jwt_middleware_1.jwtMiddleware, controller.approve);
/**
 * @openapi
 * /api/v1/prasarana/unapproval:
 *   put:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               c_dashboard_type:
 *                 type: string
 *                 example: PERAWATAN
 *               c_param:
 *                 type: string
 *                 example: KESELAMATAN
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     i_id:
 *                       type: string
 *                       example: 36b50a64-2003-4d12-afda-8ebc2fc40ce9
 *                     d_opr:
 *                       type: string
 *                       format: date
 *                       example: 2024-08-10
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: "00"
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   example: {}
 *         description: success
 *       400:
 *         description: Header not found
 */
router.put("/prasarana/unapproval", jwt_middleware_1.jwtMiddleware, controller.unapprove);
exports.default = router;
