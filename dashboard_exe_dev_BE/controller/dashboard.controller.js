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
exports.penumpangDanPendapatanWeekend = exports.penumpangDanPendapatanAverageWeekend = exports.penumpangDanPendapatanAverageWeekday = exports.penumpangDanPendapatanPeak = exports.penumpangDanPendapatanOffPeak = exports.penumpangDanPendapatanWeekday = exports.penumpangDanPendapatanDaily = exports.OffPeakSMLNonSML = exports.peakSMLNonSML = exports.averagePenumpang = exports.averagePendapatan = exports.totalPendapatanDanPenumpangKumulatif = exports.totalPendapatanDanPenumpangPerHariIni = exports.getGraphTrainNumberTriwulan = exports.getGraphPerfomByTrainNumber = exports.volPenumpangHarian = exports.volPenumpangPerStasiun = exports.volPenumpangPeakAndOffPeak = exports.volPenumpangPendapatanHarian = void 0;
const service = __importStar(require("../service/dashboard.service"));
const volPenumpangPendapatanHarian = async (req, res) => {
    let result = await service.volPenumpangPendapatanHarian(req);
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
exports.volPenumpangPendapatanHarian = volPenumpangPendapatanHarian;
const volPenumpangPeakAndOffPeak = async (req, res) => {
    let result = await service.volPenumpangPeakAndOffPeak(req);
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
exports.volPenumpangPeakAndOffPeak = volPenumpangPeakAndOffPeak;
const volPenumpangPerStasiun = async (req, res) => {
    let result = await service.volPenumpangPerStasiun(req);
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
exports.volPenumpangPerStasiun = volPenumpangPerStasiun;
const volPenumpangHarian = async (req, res) => {
    let result = await service.volPenumpangHarian(req);
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
exports.volPenumpangHarian = volPenumpangHarian;
const getGraphPerfomByTrainNumber = async (req, res) => {
    // clean parameters
    let period_date = String(req.query.period_date).split("_");
    let period_month = String(req.query.period_month).split("_").map(Number);
    let period_year = String(req.query.period_year).split("_").map(Number);
    let type_of_day = String(req.query.type_of_day);
    // get data
    let result = await service.getDataGraphPerfomByTrainNumber(period_date, period_month, period_year, type_of_day);
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
exports.getGraphPerfomByTrainNumber = getGraphPerfomByTrainNumber;
const getGraphTrainNumberTriwulan = async (req, res) => {
    // clean parameters
    let period_month = String(req.query.period_month).split("_").map(Number);
    let period_year = String(req.query.period_year).split("_").map(Number);
    // get data
    let result = await service.getDataGraphTrainNumberTriwulan(period_month, period_year);
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
exports.getGraphTrainNumberTriwulan = getGraphTrainNumberTriwulan;
const totalPendapatanDanPenumpangPerHariIni = async (req, res) => {
    let result = await service.totalPendapatanDanPenumpangPerHariIni(req);
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
exports.totalPendapatanDanPenumpangPerHariIni = totalPendapatanDanPenumpangPerHariIni;
const totalPendapatanDanPenumpangKumulatif = async (req, res) => {
    let result = await service.totalPendapatanDanPenumpangKumulatif(req);
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
exports.totalPendapatanDanPenumpangKumulatif = totalPendapatanDanPenumpangKumulatif;
const averagePendapatan = async (req, res) => {
    let result = await service.averagePendapatan(req);
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
exports.averagePendapatan = averagePendapatan;
const averagePenumpang = async (req, res) => {
    let result = await service.averagePenumpang(req);
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
exports.averagePenumpang = averagePenumpang;
const peakSMLNonSML = async (req, res) => {
    let result = await service.peakSMLNonSML(req);
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
exports.peakSMLNonSML = peakSMLNonSML;
const OffPeakSMLNonSML = async (req, res) => {
    let result = await service.OffPeakSMLNonSML(req);
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
exports.OffPeakSMLNonSML = OffPeakSMLNonSML;
const penumpangDanPendapatanDaily = async (req, res) => {
    let result = await service.penumpangDanPendapatanDaily(req);
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
exports.penumpangDanPendapatanDaily = penumpangDanPendapatanDaily;
const penumpangDanPendapatanWeekday = async (req, res) => {
    let result = await service.penumpangDanPendapatanWeekday(req);
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
exports.penumpangDanPendapatanWeekday = penumpangDanPendapatanWeekday;
const penumpangDanPendapatanWeekend = async (req, res) => {
    let result = await service.penumpangDanPendapatanWeekend(req);
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
exports.penumpangDanPendapatanWeekend = penumpangDanPendapatanWeekend;
const penumpangDanPendapatanAverageWeekday = async (req, res) => {
    let result = await service.penumpangDanPendapatanAverageWeekday(req);
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
exports.penumpangDanPendapatanAverageWeekday = penumpangDanPendapatanAverageWeekday;
const penumpangDanPendapatanAverageWeekend = async (req, res) => {
    let result = await service.penumpangDanPendapatanAverageWeekend(req);
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
exports.penumpangDanPendapatanAverageWeekend = penumpangDanPendapatanAverageWeekend;
const penumpangDanPendapatanPeak = async (req, res) => {
    let result = await service.penumpangDanPendapatanPeak(req);
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
exports.penumpangDanPendapatanPeak = penumpangDanPendapatanPeak;
const penumpangDanPendapatanOffPeak = async (req, res) => {
    let result = await service.penumpangDanPendapatanOffPeak(req);
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
exports.penumpangDanPendapatanOffPeak = penumpangDanPendapatanOffPeak;
