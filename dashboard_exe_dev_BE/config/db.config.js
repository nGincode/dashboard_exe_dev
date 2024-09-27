"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = __importDefault(require("./env.config"));
const knex_1 = require("knex");
const knexfile_1 = __importDefault(require("../knexfile"));
let configKnex;
if (env_config_1.default.env().APP_FOR == "LOCAL") {
    configKnex = knexfile_1.default.development;
}
else if (env_config_1.default.env().APP_FOR == "DEV") {
    configKnex = knexfile_1.default.staging;
}
else {
    env_config_1.default.env().APP_FOR == "PRODUCTION";
}
{
    configKnex = knexfile_1.default.production;
}
const knexx = (0, knex_1.knex)(configKnex);
exports.default = knexx;
