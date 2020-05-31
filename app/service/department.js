const Service = require('egg').Service;
class DepartmentService extends Service {
    async list(filter) {
        let { page_size, page } = filter
        const query = {}
        const childDict = ['_id']
        const areaChildDict = ['price', 'sale', 'area']
        const childOfChildDict = ['city']
        const regChildDict = ['name']
        const childOfChildRegChildDict = ['school', 'subway', 'business', 'hospital']

        page = Number(page)
        page_size = Number(page_size)
        childDict.forEach(key => {
            if (filter[key]) {
                query.$and = []
                const q = {}
                q[key] = filter[key]
                query.$and.push(q)
            }
        })
        areaChildDict.forEach(key => {
            if (filter[key]) {
                const area = JSON.parse(filter[key])
                query.$and = []
                const q = {}
                q[key] = {
                    $gte: area[0],
                    $lte: area[1]
                }
                query.$and.push(q)
            }
        })
        childOfChildDict.forEach(key => {
            if (filter[key]) {
                query.$and = query.$and || []
                const keyName = 'location.' + key
                const q = {}
                q[keyName] = filter[key]
                query.$and.push(q)
            }
        })
        regChildDict.forEach(key => {
            if (filter[key]) {
                query.$and = query.$and || []
                const reg = {}
                reg[key] = {
                    $regex: filter[key],
                    $options: '$i'
                }
                query.$and.push(reg)
            }
        })
        childOfChildRegChildDict.forEach(key => {
            if (filter[key]) {
                const keyName = 'location.' + key
                query.$and = query.$and || []
                const reg = {}
                reg[keyName] = {
                    $elemMatch: {$regex: filter[key], $options: '$i'}
                    // $eq: filter[key]
                }
                query.$and.push(reg)
            }
        })
        let list = [];
        let total = 0;
        total = await this.ctx.model.Department.find(query).countDocuments()
        list = await this.ctx.model.Department.find(query)
            .skip((page-1)*page_size)
            .limit(page_size)
            .sort({'_id': -1});
        return {
            total,
            list,
            page_size: parseInt(page_size),
            page: parseInt(page)
        };
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