const express=require('express');
const app=express();
const PORT=2000;
const path=require('path');

//static files

let files = [{
    path: '/',
    filePath: '/home.html'
},
{
    path: '/css',
    filePath: '/style.css'
},
{
    path:'/javascript',
    filePath:"/main.js"
},
{
    path:"/image",
    filePath:"Screenshot.png"
},
{
    path:"/video",
    filePath:"/video.mp4"
}

]

files.forEach(file => {
    app.get(file.path ,(req,res)=>{
        res.sendFile(path.join(__dirname,file.filePath) )
    })
})



app.listen(PORT,()=>{
    console.log(`server listening at port no ${PORT}`)
})