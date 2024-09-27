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
const controller = __importStar(require("../controller/prasarana-kategori.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/prasarana/kategori:
 *   get:
 *     tags: [Prasarana]
 *     content:
 *       application/json
 *     description: Get All structure organization by nipp!
 *     responses:
 *       200:
 *         description: Returns struktur organisasi by nipp.
 */
router.get("/prasarana/kategori", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/prasarana/kategori/id:
 *   get:
 *     tags: [Prasarana]
 *     parameters:
 *       - in: query
 *         name: nipp
 *         schema:
 *           type: string
 *           example: 1111
 *         description: The nipp
 *     content:
 *       application/json
 *     description: Get All Menu!
 *     responses:
 *       200:
 *         description: Returns all Menu data.
 */
router.get("/prasarana/kategori/id", jwt_middleware_1.jwtMiddleware, controller.Find);
// /**
//  * @openapi
//  *  /api/v1/prasarana-upload/katgori:
//  *   post:
//  *     tags: [Prasarana Upload]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               data:
//  *                 type: array
//  *                 items:
//  *                    properties:
//  *                      kategori:
//  *                        type: string
//  *                        default: 123456
//  *                      sub_kategori:
//  *                        type: string
//  *                        default: Ally
//  *                      sub_kategori_sub:
//  *                        type: string
//  *                        default: Manager
//  *     responses:
//  *       200:
//  *         description: success
//  *       400:
//  *         description: Header not found
//  */
// router.post("/prasarana-upload/kategori", jwtMiddleware, controller.Insert);
// /**
//  * @openapi
//  *  /api/v1/prasarana/kategori/delete:
//  *   post:
//  *     tags: [Prasarana]
//  *     parameters:
//  *       - in: query
//  *         name: date
//  *         required: true
//  *         schema:
//  *           type: string
//  *           example: 2024-01-01
//  *     content:
//  *       application/json
//  *     description: Get Report Facility Maintenance!
//  *     responses:
//  *       200:
//  *         description: Returns SF Trainset data.
//  */
// router.post(
//     "/prasarana/kategori/delete",
//     jwtMiddleware,
//     controller.dataDelete
//   );
exports.default = router;
