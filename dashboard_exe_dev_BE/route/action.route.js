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
const controller = __importStar(require("../controller/action.controller"));
const global_parameter_route_1 = __importDefault(require("./global-parameter.route"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
/**
 * @openapi
 *  /api/v1/action/:
 *   get:
 *     tags: [Action]
 *     content:
 *       application/json
 *     description: Get All Action!
 *     responses:
 *       200:
 *         description: Returns all action data.
 */
global_parameter_route_1.default.get("/action/", jwt_middleware_1.jwtMiddleware, controller.All);
/**
 * @openapi
 *  /api/v1/action/{id}:
 *   get:
 *     tags: [Action]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The action id
 *     content:
 *       application/json
 *     description: Get All action!
 *     responses:
 *       200:
 *         description: Returns all action data.
 */
global_parameter_route_1.default.get("/action/:id", jwt_middleware_1.jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/action/insert:
 *   post:
 *     tags: [Action]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: view
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
global_parameter_route_1.default.post("/action/insert", jwt_middleware_1.jwtMiddleware, controller.Insert);
/**
 * @openapi
 *  /api/v1/action/update/{id}:
 *   post:
 *     tags: [Action]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: action id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: view
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
global_parameter_route_1.default.post("/action/update/:id", jwt_middleware_1.jwtMiddleware, controller.Update);
/**
 * @openapi
 *  /api/v1/action/delete:
 *   post:
 *     tags: [Action]
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
global_parameter_route_1.default.post("/action/delete", jwt_middleware_1.jwtMiddleware, 
// validate(deleteValidation),
controller.Delete);
exports.default = global_parameter_route_1.default;
