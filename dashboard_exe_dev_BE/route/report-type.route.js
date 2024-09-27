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
const controller = __importStar(require("../controller/report-type.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/report-type/:
 *   get:
 *     tags: [Report Type]
 *     content:
 *       application/json
 *     description: Get All Report Type!
 *     responses:
 *       200:
 *         description: Returns all Report Type.
 */
router.get("/report-type/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/report-type/{code}:
 *   get:
 *     tags: [Report Type]
 *     parameters:
 *       - in: path
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: The Report Type code
 *     content:
 *       application/json
 *     description: Get All Report Type!
 *     responses:
 *       200:
 *         description: Returns Report Type data by code.
 */
router.get("/report-type/:code", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/report-type/insert:
 *   post:
 *     tags: [Report Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               report_type_code:
 *                 type: string
 *                 default: SF_TRAINSET
 *               report_type_name:
 *                 type: string
 *                 default: Report SF Trainset
 *               report_table:
 *                 type: string
 *                 default: t_d_sf_trainset
 *               line_1:
 *                 type: string
 *                 default: FORMAT STAMFORMASI TRAINSET
 *               line_2:
 *                 type: string
 *                 default: "NAMA KA : LRT JABODEBEK"
 *               line_3:
 *                 type: string
 *                 default: ""
 *               line_4:
 *                 type: string
 *                 default: ""
 *               line_5:
 *                 type: string
 *                 default: ""
 *               name_1:
 *                 type: string
 *                 default: LETKOL MAR IMANDA
 *               position_1:
 *                 type: string
 *                 default: MANAGER OF SECURITY
 *               nipp_1:
 *                 type: number
 *                 default: 60000057
 *               signature_1:
 *                 type: string
 *                 default: ""
 *               name_2:
 *                 type: string
 *                 default: LETKOL MAR IMANDA
 *               position_2:
 *                 type: string
 *                 default: MANAGER OF SECURITY
 *               nipp_2:
 *                 type: number
 *                 default: 60000057
 *               signature_2:
 *                 type: string
 *                 default: ""
 *               keyword:
 *                 type: string
 *                 default: ""
 *               header_column:
 *                 type: array
 *                 default: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-type/insert", jwt_middleware_1.jwtMiddleware, controller.Insert);
/**
 * @openapi
 *  /api/v1/report-type/update/{id}:
 *   post:
 *     tags: [Report Type]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: report type id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               report_type_code:
 *                 type: string
 *                 default: SF_TRAINSET
 *               report_type_name:
 *                 type: string
 *                 default: Report SF Trainset
 *               report_table:
 *                 type: string
 *                 default: t_d_sf_trainset
 *               line_1:
 *                 type: string
 *                 default: FORMAT STAMFORMASI TRAINSET
 *               line_2:
 *                 type: string
 *                 default: "NAMA KA : LRT JABODEBEK"
 *               line_3:
 *                 type: string
 *                 default: ""
 *               line_4:
 *                 type: string
 *                 default: ""
 *               line_5:
 *                 type: string
 *                 default: ""
 *               name_1:
 *                 type: string
 *                 default: LETKOL MAR IMANDA
 *               position_1:
 *                 type: string
 *                 default: MANAGER OF SECURITY
 *               nipp_1:
 *                 type: number
 *                 default: 60000057
 *               signature_1:
 *                 type: string
 *                 default: ""
 *               name_2:
 *                 type: string
 *                 default: LETKOL MAR IMANDA
 *               position_2:
 *                 type: string
 *                 default: MANAGER OF SECURITY
 *               nipp_2:
 *                 type: number
 *                 default: 60000057
 *               signature_2:
 *                 type: string
 *                 default: ""
 *               keyword:
 *                 type: string
 *                 default: ""
 *               header_column:
 *                 type: array
 *                 default: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-type/update/:id", jwt_middleware_1.jwtMiddleware, controller.Update);
/**
 * @openapi
 *  /api/v1/report-type/delete/{id}:
 *   post:
 *     tags: [Report Type]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: report type id
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/report-type/delete/:id", jwt_middleware_1.jwtMiddleware, controller.Delete);
exports.default = router;
