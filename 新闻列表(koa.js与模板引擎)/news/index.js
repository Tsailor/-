const Koa = require("koa");
const Router = require("koa-router");
const Views = require("koa-views");
const Static = require("koa-static");
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');

const app = new Koa();