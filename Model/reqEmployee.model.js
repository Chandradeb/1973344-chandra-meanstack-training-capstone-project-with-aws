let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//EMployee sign in details

let  ReqEmployeeSchema = mongoose.Schema({
    _id:Number,
    prodreq:String
}); 
let ReqEmployeeModel = mongoose.model("choice",ReqEmployeeSchema,"EmployeeRequests");
module.exports = ReqEmployeeModel;