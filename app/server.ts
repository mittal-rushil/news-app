import './controllers';
import * as koa from 'koa';
import http = require('http');
import router = require('koa-router');
import AppConfiguration from './config';
import config from './config/configuration';
import Routes from './routes';

const koaApp = module.exports = new koa();

const koaRouter = new router({
  prefix: '/api',
});

koaRouter.get('/healthz', (ctx: any) => {
  ctx.status = 200;
  ctx.body = { ok: true };
  ctx.ignoreRequest = true;
});

const appConfiguration = new AppConfiguration(koaApp);
appConfiguration.build();

Routes(koaRouter);
koaApp.use(koaRouter.routes());

if (!module.parent) {
  const server = http.createServer(koaApp.callback());
  // Strat Server
  server.listen(config.port, config.ip, () => {
    console.log('Server listening on %d, in %s mode', config.port, koaApp.env);
  });
}
