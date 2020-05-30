module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const user = new Schema({
        userName: { 
            type: String,
            validate: function(val) {
                return val.length >= 4;
            }
        },
        password: { 
            type: String,
            validate: function(val) {
                return val.length >= 8;
            }}
    });
    return mongoose.model('User', user);
}
