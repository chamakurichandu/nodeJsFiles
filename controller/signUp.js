const mongoose=require('mongoose');
const signUpTemplateCopy=new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
       
        require:true
    },
    firstName:{
        type:String,
        trim:true,
     
        require:true
    },
    lastName:{
        type:String,
        trim:true,
       
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
       
        require:true
    },

})

module.exports=mongoose.model('mytable',signUpTemplateCopy)