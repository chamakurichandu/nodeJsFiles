const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const address=require('address');
console.log(address.ip());

//importing router

const routerUrl=require('./routers/router');
//connecting to mongodb

 mongoose.connect('mongodb://localhost:27017/test' ,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
            console.log('database connected')
 })


app.use(express.json());
app.use(cors());
app.use('/api',routerUrl)

const PORT=2000
app.listen(PORT,()=>{
    console.log(`Server listening at port no${PORT}`)
})















