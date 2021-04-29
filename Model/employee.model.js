const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

//defining the schema
let EmployeeSchema = mongoose.Schema({
    email:String,
    fname:String,
    lname:String,
    password:String
})

//creating the table model
let EmployeeModel = mongoose.model("",EmployeeSchema,"Employee");

//Export
module.exports = EmployeeModel;