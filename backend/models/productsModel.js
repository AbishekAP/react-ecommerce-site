const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock_count: Number,
    images:Array,
    seller: String,
    category:String
});

const productsModel=mongoose.model('product',productSchema);
module.exports=productsModel;

