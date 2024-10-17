import jwt from 'jsonwebtoken'
export const tokenVerifier=async(req,res,next)=>{
    const authHeader=req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
    const token=authHeader.split(' ')[1]
    console.log(token)
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        console.log(decoded)
    }catch(error)
    {
        console.error(error);
        return res.status(403).json({ message: 'Not authorized to access this page' });
    }
    next()
}