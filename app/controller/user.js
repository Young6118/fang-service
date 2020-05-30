'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.add(ctx.request.body)
  }
}

module.exports = UserController;
