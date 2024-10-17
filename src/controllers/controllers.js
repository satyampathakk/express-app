import Data from '../models/model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
export const getreq = async (req, res) => {
    const {username}=req.body
    const token=jwt.sign({username},process.env.SECRET_KEY,{expiresIn:'1d'})
    console.log(token)
    const a=Math.random()*10
    res.json({message:`lucky number is ${a} `,token:token});
};
export const postreq=async(req,res)=>{
    let {username,password}=req.body
    const exist=await Data.findOne({username:username})
    if(exist){
        return res.status(400).json({message:'User already exists'})
    }
   password =await bcrypt.hash(password,4)
    const data=new Data({username,password})
    await data.save()
    console.log(data)
    res.json(data)
    
    
}
export const delreq=async (req,res)=>{
    const {id}=req.body
    const data=await Data.deleteOne({_id:id})
    res.json(data)
}
export const putreq=async (req,res)=>{
    const {id,name,message}=req.body
    const data=await Data.updateOne({_id:id},{name,message})
    res.json(data)
}
