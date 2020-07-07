const Service = require('egg').Service;
class LoupanService extends Service {
    async list(filter) {
        const query = {
            "price": {
                "$ne": "价格待定"
            }
        }
        Object.keys(filter).forEach(key => {
            filter[key] = Number(filter[key])
        })
        let list = [];
        this.ctx.model.Loupan.create({
            "city": "xa",
            "date": "20191026",
            "xiaoqu": "西安金辉城",
            "price": "8000",
            "sale": "74万"
        })
        list = await this.ctx.model.Loupan.find(query, filter)
        return list
    }

    async spider ({ cityName, spiderName }) {
        let totalPage = 1
        let loupanList = []
        let cityEn = cityName || 'xa'
        let spiderPath = spiderName || 'key' // lianjia
        const baseUrl = `http://${cityEn}.fang.${spiderPath}.com/loupan/`
        console.log('**爬取地址是**', baseUrl)
    }

    createHeaders () {
        const headers = {
            "User-Agent": random.choice(USER_AGENTS)
            
        }
    }
}

module.exports = LoupanService;