# this project is build and deployed in render and available in 

https://node-mysm.onrender.com/


# 🌐 Simple Node.js Server (Without Express)

This project demonstrates how to build a lightweight web server using **only Node.js core modules** (`http`, `fs`, and `path`) without relying on external frameworks like Express.js.  

It serves three static HTML pages:  
- 🏠 **Home** (`home.html`)  
- ℹ️ **About Us** (`aboutus.html`)  
- 📞 **Contact Us** (`contactus.html`)  

---

## 📂 Project Structure

```
project/
│-- server.js          # Main server file
│-- public/            # Folder containing static HTML files
    │-- home.html
    │-- aboutus.html
    │-- contactus.html
```

---

## ⚙️ How It Works

- `http` → Creates the web server and listens for requests.  
- `fs` → Reads the HTML files from the filesystem.  
- `path` → Safely constructs file paths.  
- Routes:
  - `/` or `/home` → Loads `home.html`  
  - `/aboutus` → Loads `aboutus.html`  
  - `/contactus` → Loads `contactus.html`  
  - Any other route → Shows a **404 Page Not Found**  

---

## 🚀 Getting Started

### 1. Install Node.js
Check if Node.js is installed:
```bash
node -v
```
If not, download and install from [Node.js official site](https://nodejs.org/).

---

### 2. Clone or Create the Project
```bash
git clone <your-repo-url>
cd project
```

---

### 3. Run the Server
```bash
node server.js
```

---

### 4. Open in Browser
- [http://localhost:3000/](http://localhost:3000/) → Home Page  
- [http://localhost:3000/aboutus](http://localhost:3000/aboutus) → About Us Page  
- [http://localhost:3000/contactus](http://localhost:3000/contactus) → Contact Us Page  

---

## 🛠 Example Code (server.js)

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

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
    serveFile(path.join(__dirname, "public", "home.html"), res);
  } else if (req.url === "/aboutus") {
    serveFile(path.join(__dirname, "public", "aboutus.html"), res);
  } else if (req.url === "/contactus") {
    serveFile(path.join(__dirname, "public", "contactus.html"), res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 📌 Features

- ✅ Pure Node.js (no external libraries required)  
- ✅ Serves static HTML files  
- ✅ Clean routing for Home, About Us, and Contact Us  
- ✅ Handles 404 errors gracefully  

---

## 🔮 Future Improvements

- Serve CSS, JavaScript, and image files (static assets)  
- Add logging for requests  
- Enable query parameter handling  
- Add support for POST requests (e.g., contact form)  
- Convert to use a templating engine (EJS, Handlebars, etc.)  

---

## 📜 License

This project is open-source and available under the **MIT License**.  
You are free to use, modify, and distribute it for personal or commercial purposes.  

---

