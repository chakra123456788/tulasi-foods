const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Mobile Number is required"],
      trim: true,
      match: [
        /^[0-9]{10}$/,
        "Mobile Number must be exactly 10 digits",
      ],
    },

    email: {
      type: String,
      required: [true, "Email Address is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    product: {
      type: String,
      required: [true, "Please select a product"],
      trim: true,
    },

    place: {
      type: String,
      required: [true, "Franchise Interested Place is required"],
      trim: true,
    },

    quantity: {
      type: String,
      required: [true, "Required Materials field is required"],
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "No message",
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model(
  "Enquiry",
  enquirySchema
);