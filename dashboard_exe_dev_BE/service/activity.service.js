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
exports.Activity = exports.InsertActivity = void 0;
const repository = __importStar(require("../repository/activity.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const InsertActivity = async (req) => {
    let response;
    try {
        let { menu, description, j_new_data = [], j_old_data = [] } = req.body;
        let dateMoment = (0, moment_1.default)().format("YYYY-MM-DD");
        const getUser = await repository.getUser(req.userId);
        let dataObject = {
            user_id: req?.userId,
            menu: menu,
            username: getUser?.username,
            fullname: getUser?.fullname,
            n_created_by: getUser?.username,
            description: description,
            j_new_data: JSON.stringify(j_new_data),
            j_old_data: JSON.stringify(j_old_data)
        };
        const hasil = await repository.Insert(dataObject);
        response = true;
    }
    catch (error) {
        response = false;
    }
    return response;
};
exports.InsertActivity = InsertActivity;
const Activity = async (req) => {
    let response;
    try {
        let { date } = req.query;
        let dateMoment = (0, moment_1.default)(String(date), "YYYY-MM-DD");
        let startOf = dateMoment.startOf("M").format("YYYY-MM-DD");
        let endOf = dateMoment.endOf("M").format("YYYY-MM-DD");
        let result = await repository.Activity(startOf, endOf);
        response = build.response("00", "success", result);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Activity = Activity;
