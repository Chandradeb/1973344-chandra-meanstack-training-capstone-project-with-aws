let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let TicketSchema =mongoose.Schema({
    userName:String,
    msg:String
})

let TicketModel =mongoose.model("Ticket",TicketSchema,"Ticket");
module.exports=TicketModel;