
const express=require('express');
const router=express.Router();
const foodCopy = require('../controller/signUp');

    //  const index=  (req,res)=>{
    //     foodCopy.find()
    //     .then(response=>{
    //         res.json({response})
    //     })
    //     .catch(error=>{
    //         res.json({
    //             message:"an error occured"
    //         })
    //     })
    //  }

// router.get('/',index)


// router.get('/login',(req,res)=>{
    

//     foodCopy.find({foodName:req.body.foodName, daysSinceIAte:req.body.daysSinceIAte})
//     .then(data=>{
//         data.length>0?res.status(200).json(data):res.status(401).json({error: 'Inavalid email or password'})
//     })
//     .catch(error=>{
//         res.json({
//             message:"something went wrong"
//         })
//     })
// })
router.get('/veg',(req,res)=>{
    foodCopy.find()
    .then(response=>{
        res.json({response})
    })
})

router.post('/signup',(req,res)=>{
    const foodUser=new foodCopy({
        foodName:req.body.foodName,
        daysSinceIAte:req.body.daysSinceIAte,
        
    })

    foodUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})
  router.delete('/:id', (req,res)=>{
      foodCopy.remove({_id:req.params.id})
      .then(data=>{
          res.json(data)
      })
      .catch(err=>{
          res.json(err)
      })

  })
  router.put('/:id',(req,res)=>{
  const updating= new  foodCopy({_id:req.params.id,foodName:req.body.foodName})

  foodCopy.updateOne({_id:req.params.id},updating)
      .then(data=>{
         
          res.json(data)
      }).catch(err=>{
          res.json(err)
      })
  })

module.exports=router;