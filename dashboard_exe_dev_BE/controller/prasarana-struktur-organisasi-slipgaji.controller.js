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
exports.batchUpload = exports.update = exports.dataDelete = exports.getFile = exports.All = exports.Insert = void 0;
const service = __importStar(require("../service/prasarana-struktur-organisasi-slipgaji.service"));
// const Insert = async (req: Request, res: Response) => {
//   let result = await service.Insert(req);
//   let status: number;
//   if (result.code == "00") {
//     status = 200;
//   } else if (result.code == "500") {
//     status = 500;
//   } else {
//     status = 400;
//   }
//   return res.status(status).json(result);
// };
const Insert = async (req, res) => {
    let result = await service.Insert(req);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.Insert = Insert;
const All = async (req, res) => {
    let result = await service.All();
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.All = All;
const getFile = async (req, res) => {
    let path = await service.getFile(req);
    return res.sendFile(path);
};
exports.getFile = getFile;
const dataDelete = async (req, res) => {
    let result = await service.dataDelete(req);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.dataDelete = dataDelete;
const update = async (req, res) => {
    let result = await service.update(req);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.update = update;
const batchUpload = async (req, res) => {
    let result = await service.batchUpload(req);
    let status;
    if (result.code == "00") {
        status = 200;
    }
    else if (result.code == "500") {
        status = 500;
    }
    else {
        status = 400;
    }
    return res.status(status).json(result);
};
exports.batchUpload = batchUpload;
