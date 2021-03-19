const mongoose=require('mongoose');
const signUpTemplateCopy=new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        min:8,
        max:15,
        require:true
    },
    firstName:{
        type:String,
        trim:true,
        min:3,
        require:true
    },
    lastName:{
        type:String,
        trim:true,
        min:3,
        max:3,
        require:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        require:true
    },
    password:{
        type:String,
        trim:true,
        min:5,
        max:15,
        require:true
    },

})

module.exports=mongoose.model('mytable',signUpTemplateCopy)