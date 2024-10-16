import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const url = process.env.MONGO_URL;
const monobj=await mongoose.connect(url, { autoIndex: false });
console.log(monobj.connection.readyState)
const UserSchema =new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password:{ type: String, required: true}
    }
)
export default  mongoose.model('User',UserSchema)