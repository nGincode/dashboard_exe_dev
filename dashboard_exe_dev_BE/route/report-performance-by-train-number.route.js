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
const controller = __importStar(require("../controller/report-performance-by-train-number.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/report-upload/performance-by-train-number:
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
 *                 example: 12
 *               year:
 *                 type: number
 *                 example: 2023
 *               data:
 *                 type: array
 *                 items:
 *                   properties:
 *                     i_period_month:
 *                         type: number
 *                         example: 12
 *                     i_period_year:
 *                         type: number
 *                         example: 2023
 *                     d_opr:
 *                         type: string
 *                         example: 2023-11-30T17:00:00.000Z
 *                     c_noka:
 *                         type: string
 *                         example: "60.2"
 *                     t_departure:
 *                         type: string
 *                         example: "05:00:00"
 *                     c_station_start:
 *                       type: string
 *                       example: "JTM"
 *                     c_station_end:
 *                       type: string
 *                       example: "DKA"
 *                     i_distance:
 *                       type: number
 *                       example: 27.8
 *                     i_fare:
 *                       type: number
 *                       example: 5000
 *                     i_daily_frequency:
 *                       type: number
 *                       example: 1
 *                     i_train_frequency:
 *                       type: number
 *                       example: 1
 *                     i_passenger_seat:
 *                       type: number
 *                       example: 740
 *                     i_td_km:
 *                       type: number
 *                       example: 19832
 *                     i_volume_pnp:
 *                       type: number
 *                       example: 95
 *                     i_km_pnp:
 *                       type: number
 *                       example: 2546
 *                     i_income:
 *                       type: number
 *                       example: 922700
 *                     i_o_static:
 *                       type: number
 *                       example: 13
 *                     i_o_dynamic:
 *                       type: number
 *                       example: 13
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
router.post("/report-upload/performance-by-train-number", jwt_middleware_1.jwtMiddleware, controller.uploadExcel);
/**
 * @openapi
 * /api/v1/report/performance-by-train-number:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: period_date
 *         required: false
 *         schema:
 *           type: string
 *           example: 2024-12-01_2024-12-31
 *       - in: query
 *         name: period_month
 *         required: false
 *         schema:
 *           type: string
 *           example: 01_01
 *       - in: query
 *         name: period_year
 *         required: false
 *         schema:
 *           type: string
 *           example: 2024_2024
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 month:
 *                   type: number
 *                   example: 12
 *                 year:
 *                   type: number
 *                   example: 2023
 *                 data:
 *                   type: array
 *                   items:
 *                     properties:
 *                       i_period_month:
 *                           type: number
 *                           example: 12
 *                       i_period_year:
 *                           type: number
 *                           example: 2023
 *                       d_opr:
 *                           type: string
 *                           example: 2023-11-30T17:00:00.000Z
 *                       c_noka:
 *                           type: string
 *                           example: "60.2"
 *                       t_departure:
 *                           type: string
 *                           example: "05:00:00"
 *                       c_station_start:
 *                         type: string
 *                         example: "JTM"
 *                       c_station_end:
 *                         type: string
 *                         example: "DKA"
 *                       i_distance:
 *                         type: number
 *                         example: 27.8
 *                       i_fare:
 *                         type: number
 *                         example: 5000
 *                       i_daily_frequency:
 *                         type: number
 *                         example: 1
 *                       i_train_frequency:
 *                         type: number
 *                         example: 1
 *                       i_passenger_seat:
 *                         type: number
 *                         example: 740
 *                       i_td_km:
 *                         type: number
 *                         example: 19832
 *                       i_volume_pnp:
 *                         type: number
 *                         example: 95
 *                       i_km_pnp:
 *                         type: number
 *                         example: 2546
 *                       i_income:
 *                         type: number
 *                         example: 922700
 *                       i_o_static:
 *                         type: number
 *                         example: 13
 *                       i_o_dynamic:
 *                         type: number
 *                         example: 13
 *                       approved_at:
 *                         type: string
 *                         example: "2024-03-14T06:14:02.000Z"
 *                       approved_by:
 *                         type: string
 *                         example: "96b7c21a-2144-46e7-bf1d-379e4e6252c8"
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/performance-by-train-number", jwt_middleware_1.jwtMiddleware, controller.getPerformByTrainNumber);
/**
 * @openapi
 * /api/v1/report/performance-by-relation:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: period_month
 *         required: true
 *         schema:
 *           type: string
 *           example: 01_01
 *       - in: query
 *         name: period_year
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024_2024
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 month:
 *                   type: number
 *                   example: 12
 *                 year:
 *                   type: number
 *                   example: 2023
 *                 data:
 *                   type: array
 *                   items:
 *                     properties:
 *                       summary:
 *                         type: array
 *                         items:
 *                           properties:
 *                             total_volume:
 *                                 type: number
 *                                 example: 16172
 *                             total_km_pnp:
 *                                 type: number
 *                                 example: 410775
 *                             total_income:
 *                                 type: number
 *                                 example: 186787800
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_noka:
 *                                 type: string
 *                                 example: "60.2"
 *                             t_departure:
 *                                 type: string
 *                                 example: "05:00:00"
 *                             c_station_start:
 *                               type: string
 *                               example: "JTM"
 *                             c_station_end:
 *                               type: string
 *                               example: "DKA"
 *                             i_distance:
 *                               type: number
 *                               example: 27.8
 *                             i_fare:
 *                               type: number
 *                               example: 5000
 *                             i_train_frequency:
 *                               type: number
 *                               example: 1
 *                             i_passenger_seat:
 *                               type: number
 *                               example: 740
 *                             i_td_km:
 *                               type: number
 *                               example: 19832
 *                             i_volume_pnp:
 *                               type: number
 *                               example: 95
 *                             i_km_pnp:
 *                               type: number
 *                               example: 2546
 *                             i_income:
 *                               type: number
 *                               example: 922700
 *                             i_o_static:
 *                               type: number
 *                               example: 13
 *                             i_o_dynamic:
 *                               type: number
 *                               example: 13
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/performance-by-relation", jwt_middleware_1.jwtMiddleware, controller.getPerformanceByRelation);
/**
 * @openapi
 * /api/v1/report/recap-performance-by-relation:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: period_month
 *         required: true
 *         schema:
 *           type: string
 *           example: 01_01
 *       - in: query
 *         name: period_year
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024_2024
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
 *                   type: array
 *                   items:
 *                     properties:
 *                       summary:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_station_start:
 *                               type: string
 *                               example: "Total"
 *                             c_station_end:
 *                               type: string
 *                               example: "Route"
 *                             i_train_frequency:
 *                               type: number
 *                               example: 7688
 *                             i_passenger_seat:
 *                               type: number
 *                               example: 5689120
 *                             i_td_km:
 *                               type: number
 *                               example: 146210384
 *                             i_volume_pnp:
 *                               type: number
 *                               example: 1200399
 *                             i_km_pnp:
 *                               type: number
 *                               example: 18495789
 *                             i_income:
 *                               type: number
 *                               example: 13133077200
 *                             i_o_static:
 *                               type: number
 *                               example: 21
 *                             i_o_dynamic:
 *                               type: number
 *                               example: 13
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_station_start:
 *                               type: string
 *                               example: "DKA"
 *                             c_station_end:
 *                               type: string
 *                               example: "HAR"
 *                             i_distance:
 *                               type: number
 *                               example: 24.6
 *                             i_train_frequency:
 *                               type: number
 *                               example: 3844
 *                             i_passenger_seat:
 *                               type: number
 *                               example: 2844560
 *                             i_td_km:
 *                               type: number
 *                               example: 69976176
 *                             i_volume_pnp:
 *                               type: number
 *                               example: 503664
 *                             i_km_pnp:
 *                               type: number
 *                               example: 8442753
 *                             i_income:
 *                               type: number
 *                               example: 5875837200
 *                             i_o_static:
 *                               type: number
 *                               example: 18
 *                             i_o_dynamic:
 *                               type: number
 *                               example: 12
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/recap-performance-by-relation", jwt_middleware_1.jwtMiddleware, controller.getRecapPerformanceByRelation);
exports.default = router;
