'use strict';

const Controller = require('egg').Controller;

class DepartmentController extends Controller {
    async list() {
        const query = this.ctx.request.query;
        if (query.page && query.page_size) {
            const response = await this.ctx.service.department.list(query)
            this.ctx.succeed(response);
        } else {
            this.ctx.failure('-2');
        }
    }

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
