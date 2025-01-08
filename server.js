const express=require("express");
const dotenv = require("dotenv").config();
const router=require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const userRouter = require("./routes/userRoutes");

connectDB();
const app=express();

const port=process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts",router);
app.use("/api/users",userRouter);

app.use(errorHandler);

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
  
})
