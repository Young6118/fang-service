const Service = require('egg').Service;
const moment = require('moment');

class UserService extends Service {
    async getList() {
        const data = await this.ctx.model.User.find({});
        return data
    }

    async delete(body) {
        const { userMail, deleteMail } = body;
        if(! await this.ctx.service.admin.isUser(userMail)) {
            return '权限错误';
        }
        const result = await this.ctx.model.User.deleteOne( { userMail: deleteMail } );
        return result.n && result.ok === 1 ? "删除成功" : "删除出错";
    }

    async createOrUpdate(req) {
        const { ctx } = this;
        const { id, ...data } = req;
        let res = {};
        if (!id) {
            res =await ctx.model.User.create(data);
        } else {
            res = await this.ctx.model.User.findByIdAndUpdate(
                id,
                data
            );
        }
        return res
    }

    async isUser(mail) {
        if((await this.ctx.model.User.find({})).length === 0) {
            await this.ctx.model.User.create({
                userMail: 'zhouyang02@qutoutiao.net',
                username: '周洋',
                created_by: 'sysInit',
                created_time: moment().format("YYYY年MM月DD日 HH:mm:ss")
            });
        }
        const data = await this.ctx.model.User.find({ userMail: mail });
        return data.length > 0 ? true : false
    }
}

module.exports = UserService;