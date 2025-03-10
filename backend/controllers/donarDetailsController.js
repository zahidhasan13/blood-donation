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

// Filter Donor
// const getFilterDonor = async (req, res) => {
//   try {
//     const { bloodGroup, location, availability } = req.query;

//     console.log('Received filters:', { bloodGroup, location, availability }); // Debugging

//     // Build filter object based on provided query parameters
//     const filter = {};
//     if (bloodGroup) filter.bloodGroup = bloodGroup;
//     if (location) filter.location = { $regex: location, $options: 'i' }; // Case-insensitive search
//     if (availability) filter.availability = availability;

//     console.log('MongoDB filter:', filter); // Debugging

//     // Fetch filtered donors from the database
//     const donors = await Donor.find(filter);

//     console.log('Filtered donors:', donors); // Debugging

//     // Return the filtered donors
//     res.status(200).json(donors);
//   } catch (err) {
//     console.error('Error filtering donors:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

module.exports = {
  getAllDonarDetails,
  getSingleDonarDetails,
  postDonarDetails,
  deleteDonarDetail,
  updateDonarDetail,
};
