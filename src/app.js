const express= require('express');
const connectToDatabase = require('./db/connectDb');
const applayMiddleware = require('./middleware/applyMiddleWare');
const app=express();

const loginRouter=require('./router/login/login')

connectToDatabase()
applayMiddleware(app)


app.use(loginRouter)






app.get('/health',(req,res)=>{
  res.send('server is runnign')
})

app.all('*',(req,res,next)=>{
    const err= new Error('This url cannot find ')
    next(err)
    
})
 

app.use((error,req,res,next)=>{
    res.send(error.message)
})


app.listen(3000,()=>{
    console.log('server si runneing');
})
