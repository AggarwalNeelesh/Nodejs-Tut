const mongoose  = require('mongoose');


let ProductSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand: String
});
module.exports = mongoose.model('products', ProductSchema);