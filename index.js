const konstructor = require('@konstructor/konstructor');
const koa = require('@konstructor/koa');
const error = require('@konstructor/error');
const logger = require('@konstructor/logger');
const statics = require('@konstructor/static');
const assets = require('@konstructor/assets');
const marko = require('@konstructor/marko');
const router = require('@konstructor/router');

const app = new konstructor();
app.add(new koa());
app.add(new error());
app.add(new logger());
app.add(new statics());
app.add(new assets());
app.add(new marko());
app.add(new router());

app.get('/', 'home/index');

app.listen();
