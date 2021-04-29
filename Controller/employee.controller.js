const EmployeeModel = require("../Model/employee.model.js")
const ObjectId = require('mongodb').ObjectId;
let OrderModel =require("../Model/order.model");
let TicketModel =require("../Model/ticket.model.js");
let UserModel =require("../Model/user.model.js");
let mongoose =require("mongoose")
let ReqEmployeeModel =require("../Model/reqEmployee.model.js");


let employeeLogin = (req, res)=>{
    let eemail = req.body.email;
    let epass = req.body.pass;

    EmployeeModel.findOne({email:eemail}, (err, result)=>{
        if(err)throw err;
        if(!result){
            return res.json({success:false, msg: "Incorrect email!!"})
        }else{
            if(result.password == epass){
                res.json({
                    success:true,
                    employee: {
                        _id:result._id,
                        email:result.email,
                        fname:result.fname,
                        lname:result.lname
                    }
                })
            }else{
                return res.json({success:false, msg: "Incorrect password!!"})
            }
        }
    })
}

let sendRequest =(req,res)=>{
    let request = new ReqEmployeeModel({
        _id:req.body.pid,
        prodreq:req.body.prodreq

    });
    request.save((err,result)=>{
        if(!err){
            res.send("Request stored successfully ")
        }else {
            res.send("Request didn't store ");}

    })
}

let updateEmpPwd=(req,res)=>{
    let eid =req.body.eid;
    let updatedpwd=req.body.pwd;
    console.log(eid)
    console.log(updatedpwd)
    EmployeeModel.updateOne({email:eid},{$set:{password:updatedpwd}},(err,result)=>{
        console.log(result)
        if(!err){

            if(result.nModified>0){
                res.send("password Updated")
            }else{
                res.send("Password not updated");
            }
        }else{
            res.send("Error generated"+err);
        }
    })

}

let updateOrder=(req,res)=>{
    let uid=req.body.uid;
    let upstatus=req.body.status;
    OrderModel.updateOne({_id:uid},{$set:{status:upstatus}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Status  Updated")
            }else{
                res.send("Status  not updated");
            }
        }else{
            res.send("Error generated"+err);
        }

    })
}

let RefundUser=(req,res)=>{
    let uid=req.body.uid;
    let upfund=req.body.total;
    UserModel.findOne({userName:uid},(error,data)=>{ 
        if (error) throw error;
        if(data){    
            upfund+=data.fund;
            UserModel.updateOne({userName:uid},{$set:{fund:upfund}},(err,result)=>{
                if(!err){
                    if(result.nModified>0){
                        res.send("Refund is Done")
                    }else{
                        res.send("Refund is not done");
                    }
                }else{
                    res.send("Error generated"+err);
                }

            })
        }else{
            res.send("User not found");
        }
    })
}

let unlockUser=(req,res)=>{
    let uid =req.body.uid;
    UserModel.updateOne({userName:uid},{$set:{ticket:false}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                TicketModel.updateOne({userName:uid},{$set:{msg:"User has been unlocked"}},(err,data)=>{
                    if(err) throw err;
                    if(result.nModified>0){
                        res.send("User has been Unlocked");
                    }else{
                        res.send("Something Went Wrong!!");
                    }
                })
                
            }else{
                res.send("User is already Unlocked");
            }
        }else{
            res.send("Error generated"+err);
        }

    })
}
let ViewOrder =(req,res)=>{
    OrderModel.find({},(err,result)=>{
        if(!err){
            console.log(result._id);
            res.json(result);
        }
    })
}
let ViewTicket =(req,res)=>{
    TicketModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }

    })
}
let ViewFunds =(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })

}

module.exports={sendRequest,updateEmpPwd,ViewOrder,updateOrder,ViewFunds,ViewTicket,unlockUser,RefundUser, employeeLogin};