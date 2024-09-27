"use strict";
// Update with your config settings.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const env_config_1 = __importDefault(require("./config/env.config"));
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: env_config_1.default.env().DB_HOST,
            port: env_config_1.default.env().DB_PORT,
            user: env_config_1.default.env().DB_USER,
            database: env_config_1.default.env().DB_NAME,
            password: env_config_1.default.env().DB_PASSWORD,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    staging: {
        client: "pg",
        connection: {
            host: env_config_1.default.env().DB_HOST,
            port: env_config_1.default.env().DB_PORT,
            user: env_config_1.default.env().DB_USER,
            database: env_config_1.default.env().DB_NAME,
            password: env_config_1.default.env().DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    production: {
        client: "pg",
        connection: {
            host: env_config_1.default.env().DB_HOST,
            port: env_config_1.default.env().DB_PORT,
            user: env_config_1.default.env().DB_USER,
            database: env_config_1.default.env().DB_NAME,
            password: env_config_1.default.env().DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
