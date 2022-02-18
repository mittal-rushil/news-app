"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body = require("koa-body");
const compress = require("koa-compress");
const Objection = require("objection");
const errorHandler = require("koa-json-logger-next");
const koa_response_time_next_1 = require("koa-response-time-next");
const configuration_1 = require("./configuration");
const Model = Objection.Model;
class Config {
    constructor(app) {
        this.app = app;
        this.app = app;
    }
    build() {
        // db setup
        const knex = require('knex')(configuration_1.default.database);
        Model.knex(knex);
        // return response time
        this.app.use((0, koa_response_time_next_1.default)());
        // HTTP compression
        this.app.use(compress({}));
        // parse request body into ctx.request.body
        this.app.use(body());
        // global error handling
        this.app.use(errorHandler({
            surfaceErrors: true,
        }));
        return configuration_1.default;
    }
}
exports.default = Config;
//# sourceMappingURL=index.js.map