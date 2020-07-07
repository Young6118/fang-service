module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Loupan = new Schema({
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
    });
    return mongoose.model('Loupan', Loupan);
}
