"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./controllers");
const koa = require("koa");
const http = require("http");
const router = require("koa-router");
const config_1 = require("./config");
const configuration_1 = require("./config/configuration");
const routes_1 = require("./routes");
const koaApp = module.exports = new koa();
const koaRouter = new router({
    prefix: '/api',
});
koaRouter.get('/healthz', (ctx) => {
    ctx.status = 200;
    ctx.body = { ok: true };
    ctx.ignoreRequest = true;
});
const appConfiguration = new config_1.default(koaApp);
appConfiguration.build();
(0, routes_1.default)(koaRouter);
koaApp.use(koaRouter.routes());
if (!module.parent) {
    const server = http.createServer(koaApp.callback());
    // Strat Server
    server.listen(configuration_1.default.port, configuration_1.default.ip, () => {
        console.log('Server listening on %d, in %s mode', configuration_1.default.port, koaApp.env);
    });
}
//# sourceMappingURL=server.js.map