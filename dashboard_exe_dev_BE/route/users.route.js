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
const controller = __importStar(require("../controller/users.controller"));
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const users_validation_1 = require("../validation/users.validation");
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/user/:
 *   get:
 *     tags: [User]
 *     content:
 *       application/json
 *     description: Get All user!
 *     responses:
 *       200:
 *         description: Returns all user data.
 */
router.get("/user/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/user/{id}:
 *   get:
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     content:
 *       application/json
 *     description: Get All user!
 *     responses:
 *       200:
 *         description: Returns all user data.
 */
router.get("/user/:id", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/user/insert:
 *   post:
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nik:
 *                 type: string
 *                 default: 123
 *               username:
 *                 type: string
 *                 default: ADMIN
 *               fullname:
 *                 type: string
 *                 default: ADMIN
 *               role_id:
 *                 type: string
 *                 default: 00fbe2ef-817c-4806-ad43-89cd99552816
 *               jabatan:
 *                 type: string
 *                 default: ADMIN
 *               avatar:
 *                 type: file
 *                 default:
 *               email:
 *                 type: string
 *                 default: ADMIN@gmail.com
 *               password:
 *                 type: string
 *                 default: 123
 *             required:
 *               - nik
 *               - username
 *               - fullname
 *               - role_id
 *               - password
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/user/insert", 
// jwtMiddleware,
(0, zod_middleware_1.default)(users_validation_1.insertValidation), controller.Insert);
/**
 * @openapi
 *  /api/v1/user/update/{id}:
 *   post:
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 default: admin
 *               role_id:
 *                 type: string
 *                 default: 00fbe2ef-817c-4806-ad43-89cd99552816
 *               jabatan:
 *                 type: string
 *                 default: ADMIN
 *               avatar:
 *                 type: file
 *                 default:
 *               email:
 *                 type: string
 *                 default: ADMIN@gmail.com
 *               password:
 *                 type: string
 *                 default: 123
 *             required:
 *               - fullname
 *               - role_id
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/user/update/:id", jwt_middleware_1.jwtMiddleware, (0, zod_middleware_1.default)(users_validation_1.updateValidation), controller.Update);
/**
 * @openapi
 *  /api/v1/user/delete:
 *   post:
 *     tags: [User]
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
router.post("/user/delete", jwt_middleware_1.jwtMiddleware, 
// validate(deleteValidation),
controller.Delete);
/**
 * @openapi
 *  /api/v1/user/reset-password/:id:
 *   post:
 *     tags: [User]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               new_password:
 *                 type: string
 *                 default: ""
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/user/reset-password/:id", jwt_middleware_1.jwtMiddleware, controller.resetPassword);
/**
 * @openapi
 *  /api/v1/user/update-password:
 *   post:
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: user
 *               password:
 *                 type: string
 *                 default: 123
 *               new_password:
 *                 type: string
 *                 default: 321
 *             required:
 *               - username
 *               - password
 *               - new_password
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/user/update-password", jwt_middleware_1.jwtMiddleware, controller.updatePassword);
router.get("/user/avatar/:image", controller.getAvatar);
exports.default = router;
