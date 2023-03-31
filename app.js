const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()

// middle were
app.use(express.json())
app.get('/',(req,res)=>{
 res.json({text:'hey you are at main page'})
})
app.use('/api/v1/tasks', tasks)
const start = async () =>{
try{
  await connectDB(process.env.MONGO_URL)
  app.listen(process.env.PORT,()=>{
    console.log(`app is listening port ${process.env.PORT}`)
     
    })
}catch (err){
 console.log(err)
}
}
start()
