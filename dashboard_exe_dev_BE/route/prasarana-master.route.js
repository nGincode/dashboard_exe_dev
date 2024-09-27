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
const controller = __importStar(require("../controller/prasarana-master.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/prasarana/master/parameter:
 *   get:
 *     tags: [Prasarana]
 *     parameters:
 *       - in: query
 *         name: c_dashboard_type
 *         required: true
 *         schema:
 *           type: string
 *           example: PERAWATAN
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   format: date-time
 *                   example: "00"
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       c_param:
 *                         type: string
 *                         example: KESELAMATAN
 *                       n_param:
 *                         type: string
 *                         example: Keselamatan
 *                   example:
 *                     - c_param: KESELAMATAN
 *                       n_param: Keselamatan
 *                     - c_param: OPERASIONAL
 *                       n_param: operasional
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/prasarana/master/parameter", jwt_middleware_1.jwtMiddleware, controller.getMasterParameter);
/**
 * @openapi
 * /api/v1/prasarana/master/target:
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
 *                   type: object
 *                   properties:
 *                     c_dashboard_type:
 *                       type: string
 *                       example: PERAWATAN / PENGOPERASIAN
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           n_param:
 *                             type: string
 *                             example: Keselamatan
 *                           record:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 c_indicator:
 *                                   type: string
 *                                   example: "490041d9-a1eb-4a16-b610-b7762abcf007"
 *                                 n_indicator:
 *                                   type: string
 *                                   example: Jumlah kejadian kecelakaan terkait perawatan
 *                                 i_target:
 *                                   type: number
 *                                   example: 2
 *                                 n_unit:
 *                                   type: string
 *                                   example: decimal
 *                                 i_order:
 *                                   type: number
 *                                   example: 1
 *                                 i_status_active:
 *                                   type: number
 *                                   example: 1
 *                             example:
 *                               - c_indicator: "490041d9-a1eb-4a16-b610-b7762abcf007"
 *                                 n_indicator: Jumlah kejadian kecelakaan terkait perawatan
 *                                 i_target: 2
 *                                 n_unit: decimal
 *                                 i_order: 1
 *                                 i_status_active: 1
 *                               - c_indicator: "490041d9-a1eb-4a16-b610-b7762abcf021"
 *                                 n_indicator: "Jumlah kerusakan stasiun kereta api terkait perawatan"
 *                                 i_target: 2
 *                                 n_unit: "decimal"
 *                                 i_order: 2
 *                                 i_status_active: 1
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/master/target', jwt_middleware_1.jwtMiddleware, controller.getMasterTarget);
/**
 * @openapi
 * /api/v1/prasarana/master/target:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period_year:
 *                 type: number
 *                 example: 2024
 *               period_month:
 *                 type: number
 *                 example: 7
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     c_dashboard_type:
 *                       type: string
 *                       example: PERAWATAN
 *                     c_param:
 *                       type: string
 *                       example: KESELAMATAN
 *                     n_param:
 *                       type: string
 *                       example: KESELAMATAN
 *                     c_indicator:
 *                       type: string
 *                       example: 5597aff8-eebc-42e6-a5cf-9d18593a6ed9
 *                     n_indicator:
 *                       type: string
 *                       example: Jumlah kejadian kecelakaan terkait perawatan
 *                     i_target:
 *                       type: number
 *                       example: 2
 *                     n_unit:
 *                       type: string
 *                       example: decimal
 *                     i_order:
 *                       type: number
 *                       example: 1
 *                     b_is_last:
 *                       type: boolean
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
router.post('/prasarana/master/target', jwt_middleware_1.jwtMiddleware, controller.saveMasterTarget);
/**
 * @openapi
 * /api/v1/prasarana/master/target:
 *   put:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               i_id:
 *                 type: string
 *                 example: 490041d9-a1eb-4a16-b610-b7762abcf007
 *               n_indicator:
 *                 type: string
 *                 example: Jumlah kejadian kecelakaan terkait perawatan
 *               i_target:
 *                 type: number
 *                 example: 2
 *               n_unit:
 *                 type: string
 *                 example: decimal
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
router.put('/prasarana/master/target', jwt_middleware_1.jwtMiddleware, controller.updateMasterTarget);
/**
 * @openapi
 * /api/v1/prasarana/master/target/delete:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               i_id:
 *                 type: string
 *                 example: 490041d9-a1eb-4a16-b610-b7762abcf007
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
router.post('/prasarana/master/target/delete', jwt_middleware_1.jwtMiddleware, controller.deleteMasterTarget);
exports.default = router;
