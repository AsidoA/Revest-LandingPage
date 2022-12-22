const mongoose = require('mongoose');
mongoose.pluralize(null);
const schema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fName:String,
    lName:String,
    Email:String,
    Phone:String,
    txtArea:String
});

module.exports = mongoose.model("ContactUs",schema);