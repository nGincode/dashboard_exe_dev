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
exports.importExcel = exports.exportExcel = exports.List = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const service = __importStar(require("../service/menu.service"));
const exceljs_1 = __importDefault(require("exceljs"));
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
const Find = async (req, res) => {
    let result = await service.Find(req);
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
exports.Find = Find;
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
const Update = async (req, res) => {
    let result = await service.Update(req);
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
exports.Update = Update;
const Delete = async (req, res) => {
    let result = await service.Delete(req);
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
exports.Delete = Delete;
const List = async (req, res) => {
    let result = await service.List(req);
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
exports.List = List;
const exportExcel = async (req, res) => {
    let data = await service.exportExcel();
    const workBook = new exceljs_1.default.Workbook();
    const workSheet = workBook.addWorksheet("Menu");
    workSheet.columns = [
        { header: "Name", key: "name", width: 20 },
        { header: "Path", key: "path", width: 20 },
        { header: "Icon", key: "icon", width: 20 },
    ];
    workSheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });
    // workSheet.getCell("active");
    // workSheet.eachColumnKey((cell) => {
    //   cell.border = {
    //     top: { style: "double", color: { argb: "FF00FF00" } },
    //     left: { style: "double", color: { argb: "FF00FF00" } },
    //     bottom: { style: "double", color: { argb: "FF00FF00" } },
    //     right: { style: "double", color: { argb: "FF00FF00" } },
    //   };
    // });
    data.forEach((menu) => {
        workSheet.addRow(menu);
    });
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=" + "users.xlsx");
    workBook.xlsx.write(res).then(() => res.end());
};
exports.exportExcel = exportExcel;
const importExcel = async (req, res) => {
    let result = await service.importExcel(req);
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
exports.importExcel = importExcel;
