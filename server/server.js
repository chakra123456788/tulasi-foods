const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

console.log(
  "Mongo URI Loaded:",
  process.env.MONGO_URI ? "YES" : "NO"
);


// Middleware
app.use(cors());
app.use(express.json());


// Routes
const enquiryRoutes = require("./routes/enquiryRoutes");

app.use("/api/enquiry", enquiryRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Tulasi Foods Backend Running");
});


// MongoDB Connection
async function connectDB() {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");

  } catch(error) {

    console.log(
      "MongoDB Connection Error:",
      error.message
    );

  }
}

connectDB();


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});