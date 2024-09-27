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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller = __importStar(require("../controller/report-station-performance.controller"));
const global_parameter_route_1 = __importDefault(require("./global-parameter.route"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
/**
 * @openapi
 *  /api/v1/report/station_performance:
 *   get:
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2023-01-01 00:00:00
 *       - in: query
 *         name: end_date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-12-31 23:59:59
 *       - in: query
 *         name: sts
 *         required: true
 *         schema:
 *           type: integer
 *           example: 4
 *     content:
 *       application/json
 *     description: Get Report Station Performance!
 *     responses:
 *       200:
 *         description: Returns Station Performance data.
 */
global_parameter_route_1.default.get("/report/station_performance/", jwt_middleware_1.jwtMiddleware, controller.All);
exports.default = global_parameter_route_1.default;
