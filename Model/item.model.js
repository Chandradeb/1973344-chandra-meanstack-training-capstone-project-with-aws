let mongoose= require("mongoose");
mongoose.Promise= global.Promise;

let ItemSchema= mongoose.Schema({
    itemName:String,
    price:Number,
    quantity:Number,
    maxQuant:Number
});

let ItemModel= mongoose.model("itemsTable",ItemSchema, "itemsTable");

module.exports= ItemModel;
