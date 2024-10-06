const express=require('express')
const morgan = require('morgan')
const app=express()
const path=require('path')
const logger=(req,res,next)=>{
    console.log(req.method,req.url,Date.now())
    return res.send('work is working')
    next()
}

app.use('/',morgan('tiny'))
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    for(i=0;i<10;i++){
        console.log(i,j)
    }
    res.status(200).send('home')
})
app.get('/about',(req,res)=>{
    res.status(200).send('working')
})
app.all('*',(req,res)=>{
    res.status(404).send({details:"Resource Not found!"})
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})