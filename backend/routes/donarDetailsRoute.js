const express = require("express");
const { getAllDonarDetails, getSingleDonarDetails, postDonarDetails, deleteDonarDetail, updateDonarDetail } = require("../controllers/donarDetailsController");

const router = express.Router();

router.get("/", getAllDonarDetails);
router.get("/:id", getSingleDonarDetails);
router.post("/", postDonarDetails)
router.delete("/:id", deleteDonarDetail);
router.patch("/:id", updateDonarDetail);



module.exports=router;