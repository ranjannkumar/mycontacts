const { mongoose } = require("mongoose")
const {DB_NAME}=require("../constants")

const connectDB=async()=>{
  try {
   const connectionInstance= await mongoose.connect(`${process.env.CONNECTION_STRING}/${DB_NAME}`);
   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
   
  } catch (error) {
    console.log("MONGODB connection error",error);
    process.exit(1);
    
  }
}

module.exports=connectDB;    