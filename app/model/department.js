module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const department = new Schema({
        name: { 
            type: String,
            validate: function(val) {
                return val.length >= 2;
            }
        },
        picUrl: { 
            type: String,
            validate: function(val) {
                return val.length >= 8;
            }
        },
        area: { 
            type: Number,
            validate: function(val) {
                return val > 20;
            }
        },
        // 朝向
        position: {
            type: String
        },
        // floor 楼层
        floor: {
            type: String
        },
        // 总楼层
        totalFloor: {
            type: String
        },
        // tag 标签
        tag: {
            type: String
        },
        typeTag: {
            type: String
        },
        location: {
            // 省
            province: String,
            // 市
            city: String,
            // 区
            area: String,
            // 地铁
            subway: Array,
            // 商区
            business: Array,
            // 医院
            hospital: Array,
            school: Array,
            // 经纬度
            latlon: String,
            other: Array,
            exactPosition: String
        },
        phone: {
            type: String
        },
        company: {
            type: String
        },
        // 销售员
        seller: {
            _id: String,
            name: String
        },
        status: {
            /*
                1 规划中
                2 开发中
                3 待开盘
                4 开盘出售
                5 已售出
                6 已下架
            */
            type: Number
        },
        exposeData: {
            visited: Number,
            concact: Number
        },
        date: {
            type: String
        },
        // 价格 单位元
        price: {
            type: Number
        },
        // 总价 单位万
        sale: {
            type: Number
        }
    }, {
        versionKey: false,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    });
    return mongoose.model('Department', department);
}
