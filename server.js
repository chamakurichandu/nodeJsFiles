const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

//importing router

const routerUrl=require('');
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
















// const express=require('express');
// const app = express();
// const cors=require('cors');
// const mongoose=require('mongoose');


// //import from router
// const routerUrls=require('./routes/user')

// //connect to the mongoose
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true},()=>{
//     console.log('database connected')
// })
// app.use(cors())
// app.use(express.json());

// //using router
// app.use('/app',routerUrls)

// app.listen(2000,()=>{
//     console.log('server running on port no :2000')
// })