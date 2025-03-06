const DonarDetail = require("../models/donarDetailsModel");
const mongoose = require("mongoose");

// Get All Donar Data
const getAllDonarDetails = async (req, res) => {
  try {
    const donarDetails = await DonarDetail.find();
    res.status(200).json(donarDetails);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Get Single Donar Data
const getSingleDonarDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "Invalid ID" });
  }

  const donarDetails = await DonarDetail.findById(id);

  if (!donarDetails) {
    res.status(404).json({ message: "Invalid ID" });
  }

  res.status(200).json(donarDetails);
};
// Post Donar Details
const postDonarDetails = async (req, res) => {
  const data = req.body;

  try {
    const donarDetail = await DonarDetail.create({
      ...data,
    });

    res.status(200).json(donarDetail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Donar Details Delete
const deleteDonarDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "Invalid ID" });
  }

  const donarDetail = await DonarDetail.findOneAndDelete({ _id: id });

  if (!donarDetail) {
    res.status(404).json({ message: "Invalid ID" });
  }

  res.status(200).json(donarDetail);
};

// Donar Details Update
const updateDonarDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "Invalid ID" });
  }

  const donarDetail = await DonarDetail.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!donarDetail) {
    res.status(404).json({ message: "Invalid ID" });
  }

  res.status(200).json(donarDetail);
};

module.exports = {
  getAllDonarDetails,
  getSingleDonarDetails,
  postDonarDetails,
  deleteDonarDetail,
  updateDonarDetail,
};
