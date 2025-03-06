const express = require("express");
const { getAllDonarDetails, getSingleDonarDetails, postDonarDetails } = require("../controllers/donarDetailsController");

const router = express.Router();

router.get("/", getAllDonarDetails);
router.get("/:id", getSingleDonarDetails);
router.post("/", postDonarDetails)



module.exports=router;