'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const { ctx } = this;
    const res = await ctx.service.home.login(ctx.request.body)
    if (res) {
      ctx.succeed({
          result: 'success',
          message: '登录成功'
      });
    } else {
      ctx.failure('-222');
    }
  }
}

module.exports = HomeController;
