let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema; 


let orderSchema = new Schema({
     name:String,
     price:Number,
     quantity:Number,
     maxQuant:Number
})

let ProductModel = mongoose.model("Products", orderSchema,"Products");

module.exports = ProductModel