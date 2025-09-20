// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/aboutus", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "aboutus.html"));
});

app.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contactus.html"));
});

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
