const { isValidObjectId } = require('mongoose');
var adminModel = require('../Model/admin.model.js');
var EmployeeModel = require('../Model/employee.model.js');
const OrderModel = require('../Model/order.model.js');
const ProductModel = require('../Model/product.model.js');
var UserModel = require('../Model/user.model.js')


exports.admin_login = function(req, res) {
    // console.log('admin_controller')
    var body = req.body;
    adminModel.getAdminLogin(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            res.json(login)
        }
    })
}

exports.admin_addProduct = function(req, res) {
    var body = req.body;
    adminModel.addProduct(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            res.json(login)
        }
    })
}

exports.admin_updateProduct = function(req, res) {
    var body = req.body;
    console.log('updateBody', body)
    adminModel.updateProduct(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(login)
        }
    })
}

exports.admin_deleteProduct = function(req, res) {
    let pid = req.params.productName;
    adminModel.deleteProduct(pid, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(login)
        }
    })
}

exports.admin_viewRequests = function(req, res) {
    adminModel.getEmployeeRequests(req, function(err, data) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(data)
        }
    })
}

exports.Signup = (req,res)=> {
    let eemail = req.body.emailid;
    EmployeeModel.findOne({email:eemail}, (err,result)=>{
        if(err)throw err;
        if(result){
            return res.json({success:false, msg:"Email already exist"})
        }else{
            let employee = new EmployeeModel({
                fname:req.body.fname,
                lname:req.body.lname,
                email:req.body.emailid,
                password:req.body.pass   
            })
            employee.save((err,result)=> {
                if(!err){
                    return res.json({success:true, msg:"Employee registered"});
                }else {
                    return res.json({success:false, msg:"Something went wrong"});
                }
            })
        }
    })

}

exports.deleteEmployee = (req,res)=>{
    let eemail = req.params.email;
    EmployeeModel.deleteOne({email:eemail},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                res.send("true") 
            }
            else {
                res.send("false");
            }
        }
    })
}

exports.costumerDetails = (req,res)=>{
    
    UserModel.find({},(err,result)=> {
       
        if(!err){
            
            res.json(result);
            console.log(result)
        }
    })
    
       

}

exports.dailyReports = (req,res)=>{
   OrderModel.find({
        date:{
            $gte:new Date(new Date()-1*60*60*24*1000)
        }
    },(err,data)=>{
      if (!err) {
        res.json(data);
      }
    })
}

exports.monthlyReports = (req,res)=>{
    OrderModel.find({
        date:{
            $gte:new Date(new Date()-30*60*60*24*1000)
        }
    },(err,data)=>{
      if (!err) {
        res.json(data);
      }
    })
}

exports.weeklyReports = (req, res) => {
    OrderModel.find({
      date: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    },(err,data)=>{
      if (!err) {
        res.json(data);
      }
    })
}

exports.productReports = (req,res)=>{
    ProductModel.find({},(err,result)=>{
        if(!err){
            
            res.json(result);
            console.log(result)
        }
    })
}

