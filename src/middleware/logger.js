const logger=(req,res,next)=>{
    console.log(req.method,req.url,Date.now())
    return res.send('work is working')
    next()
}
export default logger