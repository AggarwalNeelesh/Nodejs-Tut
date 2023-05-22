const mongoose  = require('mongoose');

const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    let ProductSchema = new mongoose.Schema({
        name:String,
        price: String,
        brand: String
    });
    let ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({
        name:"Going Merry",
        price:"$ 300 Million",
        brand:"3rd Nakama"
    })
    let result = await data.save();
    console.log(result);
}
main();