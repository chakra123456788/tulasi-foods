const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiry");

// Create Enquiry
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      product,
      place,
      quantity,
      message,
    } = req.body;

    // Required field validation
    if (!name || !phone || !email || !product || !quantity) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Mobile number must contain exactly 10 digits.",
      });
    }

    // Email validation
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    const enquiry = new Enquiry({
      name,
      phone,
      email,
      product,
      place: place || "Bengaluru",
      quantity,
      message,
    });

    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
    });
  }
});

// Get All Enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.json(enquiries);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching enquiries.",
    });
  }
});

module.exports = router;