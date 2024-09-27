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
const controller = __importStar(require("../controller/dashboard.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/dashboard/daily-passenger-income:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *       - in: query
 *         name: station
 *         required: false
 *         schema:
 *           type: string
 *           example: DKA
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/daily-passenger-income", jwt_middleware_1.jwtMiddleware, controller.volPenumpangPendapatanHarian);
/**
 * @openapi
 *  /api/v1/dashboard/passenger-peak-offpeak:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *       - in: query
 *         name: station
 *         required: false
 *         schema:
 *           type: string
 *           example: DKA
 *     content:
 *       application/json
 *     description: Get All Data of Passenger Peak and Offpeak!
 *     responses:
 *       200:
 *         description: Returns all Data Passenger Peak and Offpeak.
 */
router.get("/dashboard/passenger-peak-offpeak", jwt_middleware_1.jwtMiddleware, controller.volPenumpangPeakAndOffPeak);
/**
 * @openapi
 *  /api/v1/dashboard/passenger-per-station:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *     content:
 *       application/json
 *     description: Get All Data of Passenger Per Station!
 *     responses:
 *       200:
 *         description: Returns all Data of Passenger Per Station.
 */
router.get("/dashboard/passenger-per-station", jwt_middleware_1.jwtMiddleware, controller.volPenumpangPerStasiun);
/**
 * @openapi
 *  /api/v1/dashboard/daily-passenger-per-station:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *       - in: query
 *         name: type
 *         required: false
 *         schema:
 *           type: string
 *           example: date
 *       - in: query
 *         name: station
 *         required: false
 *         schema:
 *           type: string
 *           example: DKA
 *     content:
 *       application/json
 *     description: Get All Data of Passenger Per Station!
 *     responses:
 *       200:
 *         description: Returns all Data of Passenger Per Station.
 */
router.get("/dashboard/daily-passenger-per-station", jwt_middleware_1.jwtMiddleware, controller.volPenumpangHarian);
/**
 * @openapi
 * /api/v1/dashboard/graph-performance-by-train-number:
 *   get:
 *     tags: [Dashboard]
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
 *       - in: query
 *         name: type_of_day
 *         required: false
 *         schema:
 *           type: string
 *           example: weekday
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
 *                             t_departure:
 *                               type: string
 *                               example: "05:00:00"
 *                             count_t_departure:
 *                               type: number
 *                               example: 215
 *                             i_volume_pnp:
 *                               type: number
 *                               example: 19573
 *                             i_o_static:
 *                               type: number
 *                               example: 0.12302325581395349
 *                             i_o_dynamic:
 *                               type: number
 *                               example: 0.07781392054002342
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             d_opr:
 *                               type: string
 *                               example: "2024-01-30T17:00:00.000Z"
 *                             datas:
 *                               type: array
 *                               items:
 *                                 properties:
 *                                   t_departure:
 *                                     type: string
 *                                     example: "05:00:00"
 *                                   count_t_departure:
 *                                     type: number
 *                                     example: 5
 *                                   i_volume_pnp:
 *                                     type: number
 *                                     example: 108
 *                                   i_o_static:
 *                                     type: number
 *                                     example: 0.02918918918918919
 *                                   i_o_dynamic:
 *                                     type: number
 *                                     example: 0.01657344457672088
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/dashboard/graph-performance-by-train-number", jwt_middleware_1.jwtMiddleware, controller.getGraphPerfomByTrainNumber);
/**
 * @openapi
 * /api/v1/dashboard/graph-train-number-triwulan:
 *   get:
 *     tags: [Dashboard]
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
 *                             t_departure:
 *                               type: string
 *                               example: "05:00:00"
 *                             count_t_departure:
 *                               type: number
 *                               example: 215
 *                             i_volume_pnp:
 *                               type: number
 *                               example: 19573
 *                             i_o_static:
 *                               type: number
 *                               example: 0.12302325581395349
 *                             i_o_dynamic:
 *                               type: number
 *                               example: 0.07781392054002342
 *                       data_rows:
 *                         type: array
 *                         items:
 *                           properties:
 *                             i_period_year:
 *                               type: number
 *                               example: 2024
 *                             i_period_month:
 *                               type: number
 *                               example: 1
 *                             datas:
 *                               type: array
 *                               items:
 *                                 properties:
 *                                   t_departure:
 *                                     type: string
 *                                     example: "05:00:00"
 *                                   count_t_departure:
 *                                     type: number
 *                                     example: 5
 *                                   i_volume_pnp:
 *                                     type: number
 *                                     example: 108
 *                                   i_o_static:
 *                                     type: number
 *                                     example: 0.02918918918918919
 *                                   i_o_dynamic:
 *                                     type: number
 *                                     example: 0.01657344457672088
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get("/dashboard/graph-train-number-triwulan", jwt_middleware_1.jwtMiddleware, controller.getGraphTrainNumberTriwulan);
/**
 * @openapi
 *  /api/v1/dashboard/passenger-income-today:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/passenger-income-today", jwt_middleware_1.jwtMiddleware, controller.totalPendapatanDanPenumpangPerHariIni);
/**
 * @openapi
 *  /api/v1/dashboard/passenger-income-cumulative:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/passenger-income-cumulative", jwt_middleware_1.jwtMiddleware, controller.totalPendapatanDanPenumpangKumulatif);
/**
 * @openapi
 *  /api/v1/dashboard/average-income:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/average-income", jwt_middleware_1.jwtMiddleware, controller.averagePendapatan);
/**
 * @openapi
 *  /api/v1/dashboard/average-passenger:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/average-passenger", jwt_middleware_1.jwtMiddleware, controller.averagePenumpang);
/**
 * @openapi
 *  /api/v1/dashboard/peak-sml-nonsml:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/peak-sml-nonsml", jwt_middleware_1.jwtMiddleware, controller.peakSMLNonSML);
/**
 * @openapi
 *  /api/v1/dashboard/offpeak-sml-nonsml:
 *   get:
 *     tags: [Dashboard]
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
 *           example: 2024-01-02
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/offpeak-sml-nonsml", jwt_middleware_1.jwtMiddleware, controller.OffPeakSMLNonSML);
/**
 * @openapi
 *  /api/v1/dashboard/daily:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of Daily Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of Daily Passenger Volume and Income.
 */
router.get("/dashboard/daily", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanDaily);
/**
 * @openapi
 *  /api/v1/dashboard/weekday:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekday Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekday Passenger Volume and Income.
 */
router.get("/dashboard/weekday", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanWeekday);
/**
 * @openapi
 *  /api/v1/dashboard/weekend:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekend Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekend Passenger Volume and Income.
 */
router.get("/dashboard/weekend", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanWeekend);
/**
 * @openapi
 *  /api/v1/dashboard/average-weekday:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekday Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekday Passenger Volume and Income.
 */
router.get("/dashboard/average-weekday", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanAverageWeekday);
/**
 * @openapi
 *  /api/v1/dashboard/average-weekend:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekend Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekend Passenger Volume and Income.
 */
router.get("/dashboard/average-weekend", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanAverageWeekend);
/**
 * @openapi
 *  /api/v1/dashboard/peak:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekend Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekend Passenger Volume and Income.
 */
router.get("/dashboard/peak", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanPeak);
/**
 * @openapi
 *  /api/v1/dashboard/off-peak:
 *   get:
 *     tags: [Dashboard]
 *     content:
 *       application/json
 *     description: Get All Data of weekend Passenger Volume and Income!
 *     responses:
 *       200:
 *         description: Returns all Data of weekend Passenger Volume and Income.
 */
router.get("/dashboard/off-peak", jwt_middleware_1.jwtMiddleware, controller.penumpangDanPendapatanOffPeak);
exports.default = router;
