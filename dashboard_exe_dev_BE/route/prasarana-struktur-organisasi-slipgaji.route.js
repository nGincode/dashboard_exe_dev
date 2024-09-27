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
const controller = __importStar(require("../controller/prasarana-struktur-organisasi-slipgaji.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/prasarana-upload/struktur-organisasi-slipgaji:
 *   post:
 *     tags: [Prasarana Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nipp:
 *                 type: number
 *                 default: 123
 *               period:
 *                 type: string
 *                 default: 2024-01-01
 *               file:
 *                 type: file
 *                 default:
 *               nominal:
 *                 type: number
 *                 default: 20000
 *     description: Upload certificate!
 *     responses:
 *       200:
 *         description: Upload certificate.
 */
router.post("/prasarana-upload/struktur-organisasi-slipgaji", jwt_middleware_1.jwtMiddleware, controller.Insert);
/**
 * @openapi
 *  /api/v1/prasarana/struktur-organisasi-slipgaji:
 *   get:
 *     tags: [Prasarana]
 *     content:
 *       application/json
 *     description: Get All station!
 *     responses:
 *       200:
 *         description: Returns all station data.
 */
router.get("/prasarana/struktur-organisasi-slipgaji", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/prasaran/struktur-organisasi-slipgaji/get-file:
 *   get:
 *     tags: [Prasarana]
 *     parameters:
 *       - in: query
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *           example: filename.pdf
 *     content:
 *       application/json
 *     description: Get Report SF Trainset!
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.get("/prasarana/struktur-organisasi-slipgaji/get-file", jwt_middleware_1.jwtMiddleware, controller.getFile);
/**
 * @openapi
 *  /api/v1/prasarana/struktur-organisasi-slipgaji/delete:
 *   post:
 *     tags: [Prasarana]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: array
 *                 default: [3b52456c-7dc7-4077-85ae-1935a0392b1a]
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.post("/prasarana/struktur-organisasi-slipgaji/delete", jwt_middleware_1.jwtMiddleware, controller.dataDelete);
/**
 * @openapi
 *  /api/v1/prasarana-upload/struktur-organisasi-slipgaji/update/{id}:
 *   post:
 *     tags: [Prasarana Upload]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Sertifikasi id
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nipp:
 *                 type: number
 *                 default:
 *               period:
 *                 type: string
 *                 default:
 *               file:
 *                 type: file
 *                 default:
 *               nominal:
 *                 type: number
 *                 default:
 *     description: Upload certificate!
 *     responses:
 *       200:
 *         description: Upload certificate.
 */
router.post("/prasarana-upload/struktur-organisasi-slipgaji/update/:id", jwt_middleware_1.jwtMiddleware, controller.update);
/**
 * @openapi
 *  /api/v1/prasarana-upload/struktur-organisasi-slipgaji/batchUpload/:
 *   post:
 *     tags: [Prasarana Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nipp:
 *                 type: number
 *                 default:
 *               period:
 *                 type: string
 *                 default:
 *               file:
 *                 type: file
 *                 default:
 *               nominal:
 *                 type: number
 *                 default:
 *     description: Upload certificate!
 *     responses:
 *       200:
 *         description: Upload certificate.
 */
router.post("/prasarana-upload/struktur-organisasi-slipgaji/batchUpload", jwt_middleware_1.jwtMiddleware, controller.batchUpload);
exports.default = router;
