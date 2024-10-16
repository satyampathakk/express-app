import Data from '../models/model.js'
export const getreq = async (req, res) => {
    const data=await Data.find()
    res.json(data);
};
export const postreq=async(req,res)=>{
    console.log(req.body)
    const {name,message}=req.body
    const data=new Data({name,message})
    await data.save()
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
