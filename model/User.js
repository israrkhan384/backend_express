const mongoose = require("mongoose")

//create schema is known as schema method

const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    contact:{type:String,required:true},
    otp:{type:String,required:false},
    role:{
        type:String,
        enum:["student","trainer","counsellor","admin"],
        default:"student"
    }
})

// kuch bhi insert krna ho to model bnana jruri hai
const User = mongoose.model('User',userschema);

module.exports=User;
