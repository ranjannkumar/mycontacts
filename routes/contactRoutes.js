const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

const { 
  createContact, 
  deleteContact, 
  getContact,
  getSpecificContact,
   updateContact 
  } = require ("../controllers/contactController");

router.use(validateToken)
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getSpecificContact).put(updateContact).delete(deleteContact);



module.exports=router