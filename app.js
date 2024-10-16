import express from 'express'
import morgan from 'morgan'
import routes from './src/routes/routes.js'
import errorHandler from './src/middleware/error-handler.js'
const app=express()
app.use(express.json());
app.use(errorHandler)
app.use(morgan('tiny'))
app.use('/',routes)
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})

