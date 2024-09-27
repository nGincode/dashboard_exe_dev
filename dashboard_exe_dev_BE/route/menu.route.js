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
const controller = __importStar(require("../controller/menu.controller"));
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const menu_validation_1 = require("../validation/menu.validation");
const router = (0, express_1.Router)();
// router.get("/menu/export-excel/", controller.exportExcel);
/**
 * @openapi
 *  /api/v1/menu/:
 *   get:
 *     tags: [Menu]
 *     content:
 *       application/json
 *     description: Get All Menu!
 *     responses:
 *       200:
 *         description: Returns all menu data.
 */
router.get("/menu/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/menu/{id}:
 *   get:
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     content:
 *       application/json
 *     description: Get All Menu!
 *     responses:
 *       200:
 *         description: Returns all Menu data.
 */
router.get("/menu/:id", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/menu/insert:
 *   post:
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: Dashboard
 *               icon:
 *                 type: string
 *                 default: fa fa-icon
 *               path:
 *                 type: string
 *                 default: /dashboard
 *               menu_parent_id:
 *                 type: string
 *                 default: aa2c7b1a-6351-4b3f-90f7-57122d18c0e8
 *               sort:
 *                 type: number
 *                 default: 1
 *               action:
 *                  type: array
 *                  default: ["ab628619-a151-4555-95c8-70ab38901f8b"]
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/menu/insert", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(menu_validation_1.insertValidation), controller.Insert);
/**
 * @openapi
 *  /api/v1/menu/update/{id}:
 *   post:
 *     tags: [Menu]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Menu id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: Dashboard
 *               icon:
 *                 type: string
 *                 default: fa fa-icon
 *               path:
 *                 type: string
 *                 default: /dashboard
 *               menu_parent_id:
 *                 type: string
 *                 default: aa2c7b1a-6351-4b3f-90f7-57122d18c0e8
 *               sort:
 *                 type: number
 *                 default: 1
 *               action:
 *                  type: array
 *                  default: ["ab628619-a151-4555-95c8-70ab38901f8b"]
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/menu/update/:id", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(menu_validation_1.updateValidation), controller.Update);
/**
 * @openapi
 *  /api/v1/menu/delete:
 *   post:
 *     tags: [Menu]
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
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/menu/delete", jwt_middleware_1.jwtMiddleware, controller.Delete);
/**
 * @openapi
 *  /api/v1/menu/list:
 *   post:
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role_id:
 *                 type: string
 *                 default: 00fbe2ef-817c-4806-ad43-89cd99552816
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/menu/list", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(menu_validation_1.listMenuValidation), controller.List);
/**
 * @openapi
 *  /api/v1/menu/import-excel:
 *   post:
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: file
 *                 default: Dashboard
 *             required:
 *               - file
 *     responses:
 *       200:
 *         description: Returns all menu data.
 */
router.post("/menu/import-excel", controller.importExcel);
exports.default = router;
