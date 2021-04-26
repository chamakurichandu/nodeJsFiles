const mongoose=require('mongoose');
// const bcrypt=require('bcrypt');

const foodCopy=new mongoose.Schema({
    foodName:{
        type:String,
        trim:true,
        required:true
    },
    daysSinceIAte:{
        type:Number,
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

module.exports=mongoose.model('myfood',foodCopy)