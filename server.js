const express=require('express');
const app=express();
const PORT=2000

app.get('/',(req,res)=>{
    res.send('welcome to backend')
})
app.get('/data',(req,res)=>{
    const id=req.query.id
    res.send('welcome to the node js' +id)
})
app.get('/data/:id',(req,res)=>{
    const id=req.params.id
    res.send('welcome to the node js' +id)
})

app.listen(PORT,()=>{
    console.log(`server listening at port no ${PORT}`)
})