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
const controller = __importStar(require("../controller/attachment.controller"));
const jwt_middleware_1 = require("../middleware/jwt.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 *  /api/v1/attachment:
 *   get:
 *     tags: [Attachment]
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: 01-01-2024
 *     content:
 *       application/json
 *     description: Get All report!
 *     responses:
 *       200:
 *         description: Returns all report data.
 */
router.get("/attachment", jwt_middleware_1.jwtMiddleware, controller.All);
// /**
//  * @openapi
//  *  /api/v1/report-upload/{id}:
//  *   get:
//  *     tags: [Attachment]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The role id
//  *     content:
//  *       application/json
//  *     description: Get All role!
//  *     responses:
//  *       200:
//  *         description: Returns all role data.
//  */
// router.get("/role/:id", jwtMiddleware, controller.Find);
/**
 * @openapi
 *  /api/v1/attachment/insert:
 *   post:
 *     tags: [Attachment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               periode:
 *                 type: string
 *                 default: 2023-01-01
 *               data:
 *                 type: json
 *                 default: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/attachment/insert", jwt_middleware_1.jwtMiddleware, controller.Insert);
/**
//  * @openapi
//  *  /api/v1/report-upload/subsidi/upload:
//  *   post:
//  *     tags: [Attachment]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               file:
//  *                 type: file
//  *                 default:
//  *               id:
//  *                 type: number
//  *                 default:
//  *               filename:
//  *                 type: string
//  *                 default:
//  *     responses:
//  *       200:
//  *         description: success
//  *       400:
//  *         description: Header not found
//  */
// router.post(
//   "/report-upload/subsidi/upload",
//   jwtMiddleware,
//   controller.uploadFile
// );
// /**
//  * @openapi
//  *  /api/v1/attachment/get:
//  *   get:
//  *     tags: [Report]
//  *     parameters:
//  *       - in: query
//  *         name: filename
//  *         required: true
//  *         schema:
//  *           type: string
//  *           example: filename.pdf
//  *     content:
//  *       application/json
//  *     description: Get Report SF Trainset!
//  *     responses:
//  *       200:
//  *         description: Returns SF Trainset data.
//  */
// router.get("/attachment/get", jwtMiddleware, controller.getFile);
/**
 * @openapi
 *  /api/v1/attachment/delete:
 *   post:
 *     tags: [Attachment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 default: ""
 *               filename:
 *                 type: string
 *                 default: filename.pdf
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.post("/attachment/delete", jwt_middleware_1.jwtMiddleware, controller.deleteFile);
/**
 * @openapi
 *  /api/v1/attachment/get-detail-file:
 *   get:
 *     tags: [Attachment]
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01_modal_1
 *     content:
 *       application/json
 *     description: Get Report SF Trainset!
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.get("/attachment/get-detail-file", jwt_middleware_1.jwtMiddleware, controller.getDetailFile);
/**
 * @openapi
 *  /api/v1/attachment/upload-detail-file:
 *   post:
 *     tags: [Attachment]
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
 *               no_dok:
 *                 type: string
 *                 default:
 *               deskripsi:
 *                 type: string
 *                 default:
 *               nominal:
 *                 type: string
 *                 default:
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: Header not found
 */
router.post("/attachment/upload-detail-file", jwt_middleware_1.jwtMiddleware, controller.saveDetailFile);
/**
 * @openapi
 *  /api/v1/attachment/delete-detail-file:
 *   post:
 *     tags: [Attachment]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 default: 2023-01-01_modal
 *               no_dok:
 *                 type: string
 *                 default: ""
 *     responses:
 *       200:
 *         description: Returns SF Trainset data.
 */
router.post("/attachment/delete-detail-file", jwt_middleware_1.jwtMiddleware, controller.deleteDetailFile);
/**
 * @openapi
 *  /api/v1/attachment-year:
 *   get:
 *     tags: [Attachment]
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01
 *     content:
 *       application/json
 *     description: Get All report!
 *     responses:
 *       200:
 *         description: Returns all report data.
 */
router.get("/attachment-year", jwt_middleware_1.jwtMiddleware, controller.getDataByYear);
/**
 * @openapi
 *  /api/v1/attachment-detail-year:
 *   get:
 *     tags: [Attachment]
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *           example: 2024-01-01
 *     content:
 *       application/json
 *     description: Get All report!
 *     responses:
 *       200:
 *         description: Returns all report data.
 */
router.get("/attachment-detail-year", jwt_middleware_1.jwtMiddleware, controller.getDetailFileAYear);
exports.default = router;
