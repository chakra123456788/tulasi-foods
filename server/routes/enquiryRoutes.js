const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    res.status(201).json({
      message: "Enquiry saved successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error saving enquiry"
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 });

    res.json(enquiries);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching enquiries"
    });
  }
});


module.exports = router;
