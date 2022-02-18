import body = require('koa-body');
import compress = require('koa-compress');
import Objection = require('objection');
import errorHandler = require('koa-json-logger-next');
import responseTime from 'koa-response-time-next';
import config from './configuration';
import * as koa from 'koa';

const Model = Objection.Model;

export default class Config {

  constructor(private app: koa) {
    this.app = app;
  }

  public build() {
    // db setup
    const knex = require('knex')(config.database);
    Model.knex(knex);
    // return response time
    this.app.use(responseTime());
    // HTTP compression
    this.app.use(compress({}));
    // parse request body into ctx.request.body
    this.app.use(body());
    // global error handling
    this.app.use(errorHandler({
      surfaceErrors: true,
    }));

    return config;
  }
}
