//load all required modules
require('dotenv').config();
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require('cors');

//Enable to load the static files 
app.use(express.static(process.cwd()));

//middleware enable data from post method
//middleware: between client and server
app.use(bodyParser.urlencoded({ extended: true }));  //enable data from url (body part data)
app.use(bodyParser.json());  //enable data from jason file
app.use(cors());   //enable cors policy

let url= "mongodb://localhost:27017/grocery_store";

let StartSchema =mongoose.Schema({
   user:String,
   password:String
})

let StartModel = mongoose.model("admin_login",StartSchema, "admin_login");

let start = new StartModel({
    user:"my_admin",
   password:"CPFAc97gYPiF"
})

StartModel.findOne({user:"my_admin"}, (err,result)=>{
   if(err) throw err;
   if(result != null && result){
      console.log("database already exists")
   }else{
      start.save((err,res)=>{
         if(!err){
            console.log("database created with admin login")
         }
      })
   }
})

//load the frontend file ie angular program
app.get('/', (req,res) => {
 res.sendFile(__dirname+"/index.html")
});


//Database connection without warning
const mongooseDbOption = {       // to avoid warning
   useNewUrlParser: true,
   useUnifiedTopology: true
}
//ready to connct
mongoose.connect(url, mongooseDbOption);
//connect the database
mongoose.connection;



//link to router module
var User = require("./Router/user.router.js");
var Admin = require("./Router/admin.router.js");
var Employee = require("./Router/employee.router.js");

//Middelware
app.use("/user", User);
app.use("/admin", Admin);
app.use("/employee", Employee);

app.listen(9090, () => console.log("Server running on port 9090"));