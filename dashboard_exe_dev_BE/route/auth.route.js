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
const controller = __importStar(require("../controller/auth.controller"));
const global_parameter_route_1 = __importDefault(require("./global-parameter.route"));
const zod_middleware_1 = __importDefault(require("../middleware/zod.middleware"));
const auth_validation_1 = require("../validation/auth.validation");
const jwt_middleware_1 = require("../middleware/jwt.middleware");
/**
 * @openapi
 *  /api/v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: ADMIN
 *               password:
 *                 type: string
 *                 default: lrtdas789
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: success
 */
global_parameter_route_1.default.post("/auth/login", (0, zod_middleware_1.default)(auth_validation_1.loginValidation), controller.Login);
/**
 * @openapi
 *  /api/v1/auth/refresh-token:
 *   get:
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: refresh-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Refresh token
 *     responses:
 *       200:
 *         description: success
 */
global_parameter_route_1.default.get("/auth/refresh-token", controller.refreshToken);
/**
 * @openapi
 *  /api/v1/auth/menu-list:
 *   get:
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: success
 */
global_parameter_route_1.default.get("/auth/menu-list", jwt_middleware_1.jwtMiddleware, controller.menuList);
/**
 * @openapi
 *  /api/v1/auth/register:
 *   post:
 *     tags: [Auth]
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
global_parameter_route_1.default.post("/auth/register", controller.Register);
exports.default = global_parameter_route_1.default;
