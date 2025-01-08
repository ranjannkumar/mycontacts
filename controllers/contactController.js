const asyncHandler=require("express-async-handler");

//get all contacts
//route GET /api/contacts
//access public

const getContact=asyncHandler(async(req,res)=>{
  res.status(200).json({message:"Get all contacts"});
})

const createContact=asyncHandler(async(req,res)=>{
  console.log("the request body is: ",req.body);
  const {name,email,phone}=req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  
  res.status(201).json({message:"create conatact"});
})

const getSpecificContact=asyncHandler(async(req,res)=>{
  res.status(200).json({message:`Get contact for ${req.params.id}`});
})

const updateContact=asyncHandler(async(req,res)=>{
  res.status(200).json({message:`Update contact for ${req.params.id}`});
})

const deleteContact=asyncHandler(async(req,res)=>{
  res.status(200).json({message:`Delete contact for ${req.params.id}`});
})

module.exports={
  getContact,
  createContact,
  getSpecificContact,
  updateContact,
  deleteContact
};