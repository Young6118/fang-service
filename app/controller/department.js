'use strict';

const Controller = require('egg').Controller;

class DepartmentController extends Controller {
    async createOrUpdate() {
        const { ctx } = this;
        try {
            const res = await ctx.service.department.createOrUpdate(ctx.request.body)
            ctx.succeed(res);
        } catch (e) {
            ctx.failure(e);
        }
    }
}

module.exports = DepartmentController;
