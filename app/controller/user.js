'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async add() {
        const { ctx } = this;
        try {
            const res = await ctx.service.user.add(ctx.request.body)
            ctx.succeed(res);
        } catch (e) {
            ctx.failure(e);
        }
    }

    async createOrUpdate() {
        const { ctx } = this;
        try {
            const res = await ctx.service.user.createOrUpdate(ctx.request.body)
            ctx.succeed(res);
        } catch (e) {
            ctx.failure(e);
        }
    }
}

module.exports = UserController;
