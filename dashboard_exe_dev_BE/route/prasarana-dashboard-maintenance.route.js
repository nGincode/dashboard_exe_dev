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
const controller = __importStar(require("../controller/prasarana-dashboard-maintenance.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/v1/prasarana/dashboard-maintenance:
 *    get:
 *      tags: [Prasarana]
 *      parameters:
 *        - in: query
 *          name: period_month
 *          required: true
 *          schema:
 *            type: integer
 *            example: 10_10
 *        - in: query
 *          name: period_year
 *          required: true
 *          schema:
 *            type: integer
 *            example: 2024_2024
 *      description: Get All data dashboard maintenance
 *      responses:
 *        200:
 *          description: Returns all data dashboard maintenance.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  code:
 *                    type: string
 *                    example: "00"
 *                  message:
 *                    type: string
 *                    example: "success"
 *                  data:
 *                    type: object
 *                    description: No Response (Null)
 *                example:
 *                  code: 0
 *                  message: Sukses
 *                  data:
 *                    - parameter: Keselamatan
 *                      record:
 *                        - unit: "DECIMAL"
 *                          order: 1
 *                          target: 10
 *                          indicator: "Test 1"
 *                          percentage: 0
 *                          c_indicator: "731ef33d-181d-4fec-ba78-66536589c4ef"
 *                          realization: 0
 *                        - unit: "DECIMAL"
 *                          order: 3
 *                          target: 10
 *                          indicator: "Test 2"
 *                          percentage: 0
 *                          c_indicator: "5ba61482-0441-4b01-841b-059bc66517fb"
 *                          realization: 0
 */
// router.get("/prasarana/dashboard-maintenance", jwtMiddleware, controller.getAll)
router.get("/prasarana/dashboard-maintenance", jwt_middleware_1.jwtMiddleware, controller.getAll_v2);
/**
 * @openapi
 * /api/v1/prasarana-upload/dashboard-maintenance:
 *    post:
 *      tags: [Prasarana Upload]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                year:
 *                  type: string
 *                  example: "2024"
 *                month:
 *                  type: integer
 *                  example: 7
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      parameter:
 *                        type: string
 *                        example: "Keselamatan"
 *                      indicator:
 *                        type: string
 *                        example: "Jumlah kejadian kecelakaan terkait perawatan"
 *                      target:
 *                        type: integer
 *                        example: 2
 *                      realization:
 *                        type: integer
 *                        example: 2
 *                      order:
 *                        type: integer
 *                        example: 1
 *      responses:
 *        200:
 *          description: Successfully processed the data.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  code:
 *                    type: string
 *                    example: "00"
 *                  message:
 *                    type: string
 *                    example: "success"
 *                  data:
 *                    type: object
 *                    description: No Response (Null)
 *                example:
 *                  code: 0
 *                  message: Sukses
 *                  data: null
 */
router.post("/prasarana-upload/dashboard-maintenance", jwt_middleware_1.jwtMiddleware, controller.add);
exports.default = router;
