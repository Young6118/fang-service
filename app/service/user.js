const Service = require('egg').Service;
const moment = require('moment');

class UserService extends Service {
    async getList() {
        const data = await this.ctx.model.Useristrator.find({});
        return data
    }

    async delete(body) {
        const { userMail, deleteMail } = body;
        if(! await this.ctx.service.admin.isUser(userMail)) {
            return '权限错误';
        }
        const result = await this.ctx.model.Useristrator.deleteOne( { userMail: deleteMail } );
        return result.n && result.ok === 1 ? "删除成功" : "删除出错";
    }

    async add(req) {
        const {
            ctx
        } = this;
        return  await ctx.model.User.create(req);
    }

    async isUser(mail) {
        if((await this.ctx.model.Useristrator.find({})).length === 0) {
            await this.ctx.model.Useristrator.create({
                userMail: 'zhouyang02@qutoutiao.net',
                username: '周洋',
                created_by: 'sysInit',
                created_time: moment().format("YYYY年MM月DD日 HH:mm:ss")
             });
        }
        const data = await this.ctx.model.Useristrator.find({ userMail: mail });
        return data.length>0 ? true : false
    }
}

module.exports = UserService;