const Service = require('egg').Service;
const moment = require('moment');

class HomeService extends Service {
    async login(req) {
        const { ctx } = this;
        const data = await ctx.model.User.findOne({
            userName: req.userName
        })
        return data.password === req.password
    }
}

module.exports = HomeService;