// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

// Helper to serve HTML files
function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 - Internal Server Error</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    serveFile(path.join(__dirname,"public", "/home.html"), res);
  } else if (req.url === "/aboutus") {
    serveFile(path.join(__dirname, "public","aboutus.html"), res);
  } else if (req.url === "/contactus") {
    serveFile(path.join(__dirname,"public", "contactus.html"), res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
