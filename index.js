// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/tes", (req, res) => {
  res.send("hello app");
});

app.get("/json", (req, res) => {
  const data = {
    message: "Hello from Express on Vercel",
    status: "success",
  };

  res.json(data);
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
