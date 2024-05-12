// Add Express
const express = require("express");
const { apiKeyAuth } = require("@vpriem/express-api-key-auth");
const dotenv = require("dotenv");
const Posting = require("./model/posting");
const connectDB = require("./connectMongo");

connectDB();

// Initialize Express
const app = express();

// Import .env
dotenv.config();
const apiKey1 = process.env.API_KEY_1;
const apiKey2 = process.env.API_KEY_2;

// Add midleware auth
const apiKeyMiddleware = apiKeyAuth([apiKey1, apiKey2]);
app.use(apiKeyMiddleware);

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/tes", (req, res) => {
  console.log("tes router");
  res.send("hello app");
});

app.get("/json", (req, res) => {
  const data = {
    message: "Hello from Express on Vercel",
    status: "success",
  };

  res.json(data);
});

app.get("/mongo", async (req, res) => {
  try {
    const posts = await Posting.find();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
