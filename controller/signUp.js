const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const signUpTemplateCopy=new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        required:true
    },
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
     },
    // hash_password:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // role:{
    //     type:String,
    //     enum:["user","admin"],
    //     default:"user"
    // },
    // contactNumber:{type:String}
})

// signUpTemplateCopy.virtual('password')
// .set(function(password){
//     this.hash_password=bcrypt.hashSync(password,10)
// })
// signUpTemplateCopy.methods={
//     authenticate:function(password){
//     return bcrypt.compare(password,this.hash_password)
// }
// }

module.exports=mongoose.model('mytable',signUpTemplateCopy)