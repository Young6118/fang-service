module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const user = new Schema({
        title: { 
            type: String,
            validate: function(val) {
                return val.length >= 4;
            }
        },
        content: { 
            type: String,
            validate: function(val) {
                return val.length >= 8;
            }
        },
    }, {
        versionKey: false,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    });
    return mongoose.model('Article', user);
}
