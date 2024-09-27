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
const controller = __importStar(require("../controller/role.controller"));
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const role_validation_1 = require("../validation/role.validation");
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/role/:
 *   get:
 *     tags: [Role]
 *     content:
 *       application/json
 *     description: Get All role!
 *     responses:
 *       200:
 *         description: Returns all role data.
 */
router.get("/role/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/role/{id}:
 *   get:
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The role id
 *     content:
 *       application/json
 *     description: Get All role!
 *     responses:
 *       200:
 *         description: Returns all role data.
 */
router.get("/role/:id", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/role/insert:
 *   post:
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: Admin
 *               description:
 *                 type: string
 *                 default: Admin
 *               menu_list:
 *                 type: array
 *                 default: [{"menu_id": "aa2c7b1a-6351-4b3f-90f7-57122d18c0e7", "action": ["ab628619-a151-4555-95c8-70ab38901f8b"]}]
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/role/insert", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(role_validation_1.insertValidation), controller.Insert);
/**
 * @openapi
 *  /api/v1/role/update/{id}:
 *   post:
 *     tags: [Role]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: role id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: Admin
 *               description:
 *                 type: string
 *                 default: Admin
 *               menu_list:
 *                 type: array
 *                 default: [{"menu_id": "aa2c7b1a-6351-4b3f-90f7-57122d18c0e7", "action": ["ab628619-a151-4555-95c8-70ab38901f8b"]}]
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/role/update/:id", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(role_validation_1.updateValidation), controller.Update);
/**
 * @openapi
 *  /api/v1/role/delete:
 *   post:
 *     tags: [Role]
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
router.post("/role/delete", jwt_middleware_1.jwtMiddleware, 
// validate(deleteValidation),
controller.Delete);
exports.default = router;
