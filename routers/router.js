
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
  router.delete('/:id', (req,res)=>{
      signUpTemplateCopy.remove({_id:req.params.id})
      .then(data=>{
          res.json(data)
      })
      .catch(err=>{
          res.json(err)
      })

  })
  router.put('/:id',(req,res)=>{
  const updating= new  signUpTemplateCopy({_id:req.params.id,fullName:req.body.fullName})

  signUpTemplateCopy.updateOne({_id:req.params.id},updating)
      .then(data=>{
         
          res.json(data)
      }).catch(err=>{
          res.json(err)
      })
  })

module.exports=router;