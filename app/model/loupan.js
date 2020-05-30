module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const user = new Schema({
        city: { 
            type: String
        },
        date: { 
            type: String,
        },
        price: { 
            type: String,
        },
        xiaoqu: { 
            type: String,
        },
        sale: { 
            type: String,
        }
    }, {
        versionKey: false,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    });
    return mongoose.model('Loupan', user);
}
