const Service = require('egg').Service;

class DepartmentService extends Service {
    async getList() {
        const data = await this.ctx.model.Department.find({});
        return data
    }

    async createOrUpdate(req) {
        const { ctx } = this;
        const { id, ...data } = req;
        let res = {};
        if (!id) {
            res =await ctx.model.Department.create(data);
        } else {
            res = await this.ctx.model.Department.findByIdAndUpdate(
                id,
                data
            );
        }
        return res
    }
}

module.exports = DepartmentService;