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
const controller = __importStar(require("../controller/report-average-delay.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/report-upload/average-delay:
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
 *                       type: number
 *                       example: 12
 *                     i_period_year:
 *                       type: number
 *                       example: 2023
 *                     d_opr:
 *                       type: string
 *                       example: "2023-12-01"
 *                     c_noka:
 *                       type: string
 *                       example: "60.2"
 *                     n_train:
 *                       type: string
 *                       example: "4"
 *                     c_station_start:
 *                       type: string
 *                       example: "JTM"
 *                     c_station_end:
 *                       type: string
 *                       example: "DKA"
 *                     i_distance:
 *                       type: number
 *                       example: 26.87
 *                     t_p_departure:
 *                       type: string
 *                       example: "05:00:00"
 *                     t_p_arrive:
 *                       type: string
 *                       example: "05:53:19"
 *                     t_r_departure:
 *                       type: string
 *                       example: "05:00:00"
 *                     t_r_arrive:
 *                       type: string
 *                       example: "05:52:00"
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
router.post("/report-upload/average-delay", jwt_middleware_1.jwtMiddleware, controller.uploadExcel);
/**
 * @openapi
 * /api/v1/report/average-delay:
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
 *                             d_opr:
 *                               type: string
 *                               example: 2023-11-30T17:00:00.000Z
 *                             total_t_l_departure:
 *                               type: string
 *                               example: "0:00:00"
 *                             total_t_l_arrive:
 *                               type: string
 *                               example: "-0:02:19"
 *                             total_t_l_traveling:
 *                               type: string
 *                               example: "-0:02:19"
 *                             total_t_percent_departure:
 *                               type: number
 *                               example: 0
 *                             total_t_percent_arrive:
 *                               type: number
 *                               example: -4
 *                             total_t_percent_traveling:
 *                               type: number
 *                               example: -4
 *                             total_i_avg_speed:
 *                               type: string
 *                               example: 31.62
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             period_month:
 *                               type: number
 *                               example: 12
 *                             period_year:
 *                               type: number
 *                               example: 2023
 *                             d_opr:
 *                               type: string
 *                               example: 2023-11-30T17:00:00.000Z
 *                             c_noka:
 *                               type: string
 *                               example: "60.2"
 *                             n_train:
 *                               type: string
 *                               example: "4"
 *                             c_station_start:
 *                               type: string
 *                               example: "JTM"
 *                             c_station_end:
 *                               type: string
 *                               example: "DKA"
 *                             i_distance:
 *                               type: number
 *                               example: 26.87
 *                             t_p_departure:
 *                               type: string
 *                               example: "05:00:00"
 *                             t_p_arrive:
 *                               type: string
 *                               example: "05:53:19"
 *                             t_p_traveling:
 *                               type: string
 *                               example: "00:53:00"
 *                             t_r_departure:
 *                               type: string
 *                               example: "05:00:00"
 *                             t_r_arrive:
 *                               type: string
 *                               example: "05:52:00"
 *                             t_r_traveling:
 *                               type: string
 *                               example: "00:52:00"
 *                             t_l_departure:
 *                               type: string
 *                               example: "00:00:00"
 *                             t_l_arrive:
 *                               type: string
 *                               example: "-00:01:00"
 *                             t_l_traveling:
 *                               type: string
 *                               example: "-00:01:00"
 *                             t_percent_departure:
 *                               type: string
 *                               example: 0
 *                             t_percent_arrive:
 *                               type: string
 *                               example: 2
 *                             t_percent_traveling:
 *                               type: string
 *                               example: 2
 *                             i_avg_speed:
 *                               type: string
 *                               example: 31.03
 *                             approved_at:
 *                               type: string
 *                               example: "2024-03-14T06:14:02.000Z"
 *                             approved_by:
 *                               type: string
 *                               example: "96b7c21a-2144-46e7-bf1d-379e4e6252c8"
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/average-delay", jwt_middleware_1.jwtMiddleware, controller.getAverageDelay);
/**
 * @openapi
 * /api/v1/report/traffic-delay:
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
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_noka:
 *                               type: string
 *                               example: 40.1
 *                             c_station_start:
 *                               type: string
 *                               example: "JTM"
 *                             c_station_end:
 *                               type: string
 *                               example: "DKA"
 *                             i_distance:
 *                               type: number
 *                               example: 26.87
 *                             t_p_hour:
 *                               type: string
 *                               example: ""
 *                             t_p_minute:
 *                               type: string
 *                               example: "00:53:00"
 *                             t_r_hour:
 *                               type: string
 *                               example: ""
 *                             t_r_minute:
 *                               type: string
 *                               example: "00:52:00"
 *                             t_p_arrive:
 *                               type: string
 *                               example: "11:10:19"
 *                             t_r_arrive:
 *                               type: string
 *                               example: "11:10:00"
 *                             t_l_minute:
 *                               type: string
 *                               example: "-00:00:00"
 *                             t_l_percent:
 *                               type: number
 *                               example: -1
 *                             i_avg_speed:
 *                               type: string
 *                               example: 31.03
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/traffic-delay", jwt_middleware_1.jwtMiddleware, controller.getTrafficDelay);
/**
 * @openapi
 * /api/v1/report/recap-traffic-delay:
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
 *                                 type: string
 *                                 example: "JTM"
 *                             c_station_end:
 *                                 type: string
 *                                 example: "DKA"
 *                             t_p_arrive:
 *                                 type: string
 *                                 example: "05:53:00"
 *                             t_r_arrive:
 *                                 type: string
 *                                 example: "05:52:00"
 *                             t_l_arrive:
 *                                 type: string
 *                                 example: "-00:01:00"
 *                             t_percent_arrive:
 *                                 type: number
 *                                 example: -1
 *                             i_avg_speed:
 *                                 type: string
 *                                 example: 31.03
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_station_start:
 *                               type: string
 *                               example: "JTM"
 *                             c_station_end:
 *                               type: string
 *                               example: "DKA"
 *                             t_p_arrive:
 *                               type: string
 *                               example: "00:53:00"
 *                             t_r_arrive:
 *                               type: string
 *                               example: "00:52:00"
 *                             t_l_arrive:
 *                               type: string
 *                               example: "00:52:00"
 *                             t_percent_arrive:
 *                               type: number
 *                               example: -1
 *                             i_avg_speed:
 *                               type: string
 *                               example: 31.03
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/recap-traffic-delay", jwt_middleware_1.jwtMiddleware, controller.getRecapTrafficDelay);
/**
 * @openapi
 * /api/v1/report/support-average-delay:
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
 *                             d_opr:
 *                               type: string
 *                               example: 2023-11-30T17:00:00.000Z
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             period_month:
 *                               type: number
 *                               example: 12
 *                             period_year:
 *                               type: number
 *                               example: 2023
 *                             d_opr:
 *                               type: string
 *                               example: 2023-11-30T17:00:00.000Z
 *                             n_train:
 *                               type: string
 *                               example: "4"
 *                             c_noka:
 *                               type: string
 *                               example: "60.2"
 *                             t_r_departure:
 *                               type: string
 *                               example: "05:00:00"
 *                             t_r_arrive:
 *                               type: string
 *                               example: "05:52:00"
 *                             t_r_traveling:
 *                               type: string
 *                               example: "00:52:00"
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/support-average-delay", jwt_middleware_1.jwtMiddleware, controller.getSupportAverageDelay);
/**
 * @openapi
 * /api/v1/report/train-frequency:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: period_date
 *         required: false
 *         schema:
 *           type: string
 *           example: 2024-02-03_2024-02-03
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
 *                             program:
 *                               type: number
 *                               example: 1588
 *                             realization:
 *                               type: number
 *                               example: 1588
 *                             difference:
 *                               type: number
 *                               example: 0
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             c_station_start:
 *                               type: string
 *                               example: DKA
 *                             c_station_end:
 *                               type: string
 *                               example: HAR
 *                             train_name:
 *                               type: string
 *                               example: "LRT Jabodebek"
 *                             train_route:
 *                               type: string
 *                               example: "JTM-DKA"
 *                             program:
 *                               type: number
 *                               example: 1588
 *                             realization:
 *                               type: number
 *                               example: 1588
 *                             difference:
 *                               type: number
 *                               example: 0
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/report/train-frequency", jwt_middleware_1.jwtMiddleware, controller.getTrainFrequency);
exports.default = router;
