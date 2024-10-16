import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const url = process.env.MONGO_URL;
const monobj=await mongoose.connect(url, { autoIndex: false });
console.log(monobj.connection.readyState)
const UserSchema =new mongoose.Schema(
    {
        name: String,
        message:String,

    }
)
export default  mongoose.model('User',UserSchema)