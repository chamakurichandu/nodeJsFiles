
const express=require('express');
const router=express.Router();
const signUpTemplateCopy = require('../controller/signUp');

     const index=  (req,res)=>{
        signUpTemplateCopy.find()
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({
                message:"an error occured"
            })
        })
     }

router.get('/',index)


router.post('/login',(req,res)=>{
    

    signUpTemplateCopy.find({email:req.body.email,password:req.body.password})
    .then(data=>{
        data.length>0?res.status(200).json(data):res.status(401).json({error: 'Inavalid email or password'})
    })
    .catch(error=>{
        res.json({
            message:"something went wrong"
        })
    })
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

module.exports=router;