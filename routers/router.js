
const express=require('express');
const router=express.Router()
const signUpTemplateCopy = require('../controller/signUp');



router.get('/',(req,res)=>{
            res.send('welcome to nodejs')
})
router.post('/signup',(req,res)=>{
    const signUpUser=new signUpTemplateCopy({
        fullName:req.body.fullName,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })

    signUpUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports=router