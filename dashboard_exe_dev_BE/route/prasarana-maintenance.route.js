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
const controller = __importStar(require("../controller/prasarana-maintenance.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/prasarana/maintenance/safety:
 *   get:
 *     description: |
 *       Untuk __status__ jika tidak diisi maka tampikan yg ACTIVE dan APPROVE
 *
 *       - 1 : ACTIVE
 *       - 4 : APPROVE
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
 *         name: status
 *         required: false
 *         schema:
 *           type: number
 *           example: 4
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
 *                       d_opr:
 *                         type: string
 *                         format: date
 *                         example: 2024-08-10
 *                       indicator:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             i_id:
 *                               type: string
 *                               example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                             c_indicator:
 *                               type: string
 *                               example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                             n_indicator:
 *                               type: string
 *                               example: Jumlah kejadian kecelakaan terkait perawatan
 *                             i_value:
 *                               type: number
 *                               example: 20
 *                       reason:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             n_reason_1:
 *                               type: boolean
 *                             n_reason_2:
 *                               type: boolean
 *                       i_status_active:
 *                         type: number
 *                         example: 1
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/safety', jwt_middleware_1.jwtMiddleware, controller.getMaintenanceSafety);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/safety:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period_month:
 *                 type: number
 *                 example: 7
 *               period_year:
 *                 type: number
 *                 example: 2024
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     d_opr:
 *                       type: string
 *                       format: date
 *                       example: 2024-08-10
 *                     indicator:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           i_id:
 *                             type: string
 *                             example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                           c_indicator:
 *                               type: string
 *                               example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                           n_indicator:
 *                             type: string
 *                             example: Jumlah kejadian kecelakaan terkait perawatan
 *                           i_value:
 *                             type: number
 *                             example: 20
 *                     n_reason_1:
 *                       type: boolean
 *                     n_reason_2:
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
router.post('/prasarana/maintenance/safety', jwt_middleware_1.jwtMiddleware, controller.saveMaintenanceSafety);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/operational:
 *   get:
 *     description: |
 *       Untuk __status__ jika tidak diisi maka tampikan yg ACTIVE dan APPROVE
 *
 *       - 1 : ACTIVE
 *       - 4 : APPROVE
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
 *         name: status
 *         required: false
 *         schema:
 *           type: number
 *           example: 4
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
 *                         example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                       n_indicator:
 *                         type: string
 *                         example: Ketersediaan prasarana dalam mendukung operasional sarana
 *                       record:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             i_id:
 *                               type: string
 *                               example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                             d_opr:
 *                               type: string
 *                               format: date
 *                               example: 2024-08-10
 *                             i_operation_time:
 *                               type: number
 *                               example: 20
 *                             i_operation_time_disturb:
 *                               type: number
 *                               example: 0
 *                             i_percentage:
 *                               type: number
 *                               example: 100
 *                             i_status_active:
 *                               type: number
 *                               example: 1
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/operational', jwt_middleware_1.jwtMiddleware, controller.getMaintenanceOperational);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/operational:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period_month:
 *                 type: number
 *                 example: 7
 *               period_year:
 *                 type: number
 *                 example: 2024
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     c_indicator:
 *                       type: string
 *                       example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                     n_indicator:
 *                       type: string
 *                       example: Ketersediaan prasarana dalam mendukung operasional sarana
 *                     record:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           i_id:
 *                             type: string
 *                             example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                           d_opr:
 *                             type: string
 *                             format: date
 *                             example: 2024-08-10
 *                           i_operation_time:
 *                             type: number
 *                             example: 20
 *                           i_operation_time_disturb:
 *                             type: number
 *                             example: 0
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
router.post('/prasarana/maintenance/operational', jwt_middleware_1.jwtMiddleware, controller.saveMaintenanceOperational);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical:
 *   get:
 *     description: |
 *       Untuk __status__ jika tidak diisi maka tampikan yg ACTIVE dan APPROVE
 *
 *       - 1 : ACTIVE
 *       - 4 : APPROVE
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
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           example: 1
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
 *                       d_opr:
 *                         type: string
 *                         format: date
 *                         example: 2024-08-10
 *                       indicator:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             i_id:
 *                               type: string
 *                               example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                             c_indicator:
 *                               type: string
 *                               example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                             n_indicator:
 *                               type: string
 *                               example: Jumlah Kerusakan Jalur KA
 *                             sub_indicator:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   column:
 *                                     type: string
 *                                     example: column_1
 *                                   i_value:
 *                                     type: number
 *                                     example: 4
 *                               example:
 *                                 - column: "column_1"
 *                                   i_value: 4
 *                                 - column: "column_2"
 *                                   i_value: 4
 *                                 - column: "column_3"
 *                                   i_value: 4
 *                             n_file_path:
 *                               type: string
 *                               example: /home/asus/downloads/coba.pdf
 *                             i_status_active:
 *                               type: number
 *                               example: 1
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/technical', jwt_middleware_1.jwtMiddleware, controller.getMaintenanceTechnical);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period_month:
 *                 type: number
 *                 example: 8
 *               period_year:
 *                 type: number
 *                 example: 2024
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     d_opr:
 *                       type: string
 *                       format: date
 *                       example: 2024-08-10
 *                     indicator:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           i_id:
 *                             type: string
 *                             example: 36b50a64-2003-4d12-afda-8ebc2fc40ce3
 *                           c_indicator:
 *                             type: string
 *                             example: 059c1d49-ad9c-4bc3-8d05-aefb283e2255
 *                           n_indicator:
 *                             type: string
 *                             example: Jumlah Kerusakan Jalur KA
 *                           sub_indicator:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 column:
 *                                   type: string
 *                                   example: column_1
 *                                 i_value:
 *                                   type: number
 *                                   example: 4
 *                             example:
 *                               - column: "column_1"
 *                                 i_value: 4
 *                               - column: "column_2"
 *                                 i_value: 4
 *                               - column: "column_3"
 *                                 i_value: 4
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
router.post('/prasarana/maintenance/technical', jwt_middleware_1.jwtMiddleware, controller.saveMaintenanceTechnical);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical/file:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               i_id:
 *                 type: string
 *                 example: sadknas987
 *               d_opr:
 *                 type: string
 *                 format: date
 *                 example: 2024-08-10
 *               n_file_path:
 *                 type: file
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
router.post('/prasarana/maintenance/technical/file', jwt_middleware_1.jwtMiddleware, controller.saveMaintenanceTechnicalFile);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical/file:
 *   delete:
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
 *                 example: sadknas987
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
router.delete('/prasarana/maintenance/technical/file', jwt_middleware_1.jwtMiddleware, controller.deleteMaintenanceTechnicalFile);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical/download-merge:
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
 *                   properties:
 *                     filename:
 *                       type: string
 *                       example: "www.lrt-jabo.co.id/public/merge/2024/08/TECHNICAL_FILE_202408_20240905135950.pdf"
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/technical/download-merge', jwt_middleware_1.jwtMiddleware, controller.getDownloadMerge);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/technical/build-merge:
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
 *         name: via_api
 *         required: false
 *         schema:
 *           type: string
 *           example: 1
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
 *                   example: null
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/technical/build-merge', jwt_middleware_1.jwtMiddleware, controller.getBuildMerge);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/certificate:
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
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *               example:
 *                 code: 00
 *                 message: Sukses
 *                 data:
 *                   - indicator: Jumlah Tenaga Perawatan Yang Memiliki Sertifikat Keahlian
 *                     record:
 *                      - sub_division: Track & Brigde
 *                        target: 12
 *                        realization: 3
 *                        percentage: 25
 *                        difference: 8
 *                      - sub_division: Building
 *                        target: 12
 *                        realization: 3
 *                        percentage: 25
 *                        difference: 8
 *                      - sub_division: Railway System
 *                        target: 12
 *                        realization: 3
 *                        percentage: 25
 *                        difference: 8
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/certificate', jwt_middleware_1.jwtMiddleware, controller.getCertificate);
/**
 * @openapi
 * /api/v1/prasarana/maintenance/reporting:
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
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *               example:
 *                 code: 00
 *                 message: Sukses
 *                 data:
 *                   - parameter: KESELAMATAN
 *                     target: 30
 *                     realization: 30
 *                     percentage: 100
 *                     children: []
 *                   - parameter: OPERASIONAL
 *                     target: 30
 *                     realization: 0
 *                     percentage: 0
 *                     children: []
 *                   - parameter: TEKNIS
 *                     target: null
 *                     realization: null
 *                     percentage: null
 *                     children:
 *                      - indicator: Jumlah kerusakan jalur kereta api terkait perawatan
 *                        target: 30
 *                        realization: 24
 *                        percentage: 80
 *                      - indicator: Jumlah kerusakan fasilitas operasi kereta api terkait perawatan
 *                        target: 30
 *                        realization: 24
 *                        percentage: 80
 *                      - indicator: Jumlah kerusakan stasiun kereta api terkait perawatan
 *                        target: 30
 *                        realization: 24
 *                        percentage: 80
 *         description: success
 *       400:
 *         description: Header not found
 */
router.get('/prasarana/maintenance/reporting', jwt_middleware_1.jwtMiddleware, controller.getReporting);
exports.default = router;
