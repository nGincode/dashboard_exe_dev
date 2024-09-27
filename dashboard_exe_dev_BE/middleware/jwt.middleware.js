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
exports.jwtMiddleware = void 0;
const build = __importStar(require("../helper/response.helper"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import {Insert} from "../service/activity.service"
const fs = __importStar(require("fs"));
const jwtMiddleware = (req, res, next) => {
    let getHeader = req.header("Authorization");
    let token = getHeader?.split(" ")[1];
    if (getHeader) {
        if (!token) {
            return res.status(200).json(build.response("401", "token not found", {}));
        }
        let h = { "alg": "RS256" };
        let verifyOptions = {
            header: h,
            issuer: "dashboard-executive",
        };
        let privateKey = fs.readFileSync('./jwt_rs256_private.key', 'utf8');
        jsonwebtoken_1.default.verify(token, 
        // envConfig.env().ACCESS_TOKEN_SECRET,
        privateKey, verifyOptions, (err, data) => {
            if (err) {
                let result = build.response("402", "invalid token", {});
                return res.status(200).json(result);
            }
            req.userId = data.token_id;
            next();
        });
        // if (req.method == 'POST') {
        //   if (req.route.path == '/report/check-format' || req.route.path == '/report/check') {
        //   }else{
        //     Insert(req);
        //   }
        // }
    }
    else {
        return res.status(200).json(build.response("403", "header not found", {}));
    }
};
exports.jwtMiddleware = jwtMiddleware;
