import express from 'express'
import morgan from 'morgan'
import  logger  from './src/middleware/logger.js'
import routes from './src/routes/routes.js'
const app=express()
app.use(express.json());
app.use(morgan('tiny'))
app.use('/',routes)
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})

