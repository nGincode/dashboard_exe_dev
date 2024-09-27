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
const controller = __importStar(require("../controller/prasarana-daftar-hadir-dinasan.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/prasarana/daftar-hadir-dinasan:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *                 period:
 *                     type: string
 *                     default: 2024-01-01
 *                 menu_at:
 *                     type: string
 *                     default: RAILWAY_SYSTEM_SINYAL_TELKOMUNIKASI_DAFTAR_HADIR_DINASAN
 *     description: Get All Data Daftar Hadir Dinasan by Menu.
 *     responses:
 *        200:
 *          description: Return All Data Daftar Hadir Dinasan by Menu
 */
router.post("/prasarana/daftar-hadir-dinasan", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/prasarana-upload/daftar-hadir-dinasan:
 *   post:
 *     tags: [Prasarana Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: file
 *                 default:
 *               code:
 *                 type: string
 *                 default:
 *               period:
 *                 type: string
 *                 default: 2024-01-01
 *               menu_at:
 *                 type: string
 *                 default: RAILWAY_SYSTEM_SINYAL_TELKOMUNIKASI_DAFTAR_HADIR_DINASAN
 *               description:
 *                 type: string
 *                 default:
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/prasarana-upload/daftar-hadir-dinasan", jwt_middleware_1.jwtMiddleware, controller.saveDetailFile);
/**
 * @openapi
 *  /api/v1/prasarana/daftar-hadir-dinasan/delete:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default:
 *               period:
 *                 type: string
 *                 default: 2024-01-01
 *               menu_at:
 *                 type: string
 *                 default: RAILWAY_SYSTEM_SINYAL_TELKOMUNIKASI_DAFTAR_HADIR_DINASAN
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/prasarana/daftar-hadir-dinasan/delete", jwt_middleware_1.jwtMiddleware, controller.deleteDetailFile);
exports.default = router;
