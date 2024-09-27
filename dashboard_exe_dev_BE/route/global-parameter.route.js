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
const express_1 = require("express");
const controller = __importStar(require("../controller/global-parameter.controller"));
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const global_parameter_validation_1 = require("../validation/global-parameter.validation");
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/global-parameter/:
 *   get:
 *     tags: [Global Parameter]
 *     content:
 *       application/json
 *     description: Get All Global Parameter!
 *     responses:
 *       200:
 *         description: Returns all global parameter data.
 */
router.get("/global-parameter", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/global-parameter/{id}:
 *   get:
 *     tags: [Global Parameter]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The book id
 *     content:
 *       application/json
 *     description: Get All Global Parameter!
 *     responses:
 *       200:
 *         description: Returns all global parameter data.
 */
router.get("/global-parameter/:id", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/global-parameter/insert:
 *   post:
 *     tags: [Global Parameter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: GLOBAL_PARAMETER_CODE
 *             required:
 *               - code
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/global-parameter/insert", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(global_parameter_validation_1.insertValidation), controller.Insert);
/**
 * @openapi
 *  /api/v1/global-parameter/update/{id}:
 *   post:
 *     tags: [Global Parameter]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: Global parameter id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: GLOBAL_PARAMETER_CODE
 *             required:
 *               - code
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/global-parameter/update/:id", jwt_middleware_1.jwtMiddleware, controller.Update);
/**
 * @openapi
 *  /api/v1/global-parameter/delete/{id}:
 *   post:
 *     tags: [Global Parameter]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: Global parameter id
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/global-parameter/delete/:id", jwt_middleware_1.jwtMiddleware, controller.Delete);
exports.default = router;
