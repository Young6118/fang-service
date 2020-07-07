'use strict';

const Controller = require('egg').Controller;

class LoupanController extends Controller {
    async list() {
        const query = this.ctx.request.query
        const response = await this.ctx.service.loupan.list(query)
        this.ctx.succeed(response);
    }
}

module.exports = LoupanController;
