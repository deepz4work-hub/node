# Assignment6 - Node + HTML Website
/node_modules

A simple Node.js + Express web application serving static HTML pages with routing for Home, About Us, and Contact Us.

---

## 📂 Project Structure

```
Assignment6/
│ server.js           # Node.js server with Express routes
│ package.json
└── public/           # Static frontend files
    ├─ home.html
    ├─ aboutus.html
    ├─ contactus.html
    ├─ style.css      # optional CSS
    └─ script.js      # optional JS
```

---

## 🚀 Features

- Serve static HTML pages using Express.
- Routing for:
  - `/` → Home
  - `/aboutus` → About Us
  - `/contactus` → Contact Us
- Responsive design using Bootstrap CDN.
- Clean and modern layout for all pages.
- Ready for deployment to Render or Heroku.

---

## 💻 Installation & Local Usage

1. Clone the repository:
```bash
git clone https://github.com/your-username/Assignment6.git
```

2. Navigate to the project folder:
```bash
cd Assignment6
```

3. Install dependencies:
```bash
npm install
```

4. Start the server locally:
```bash
node server.js
```

5. Open your browser:
- `http://localhost:3000/` → Home  
- `http://localhost:3000/aboutus` → About Us  
- `http://localhost:3000/contactus` → Contact Us  

---

## ⚙️ Deployment Instructions

### Render.com
1. Push your project to GitHub.  
2. Go to [Render](https://render.com) → New → Web Service → Connect GitHub repo.  
3. Branch: `main` (or your active branch).  
4. Build Command: leave empty (static HTML, no build needed) or `npm install`.  
5. Start Command:
```bash
node server.js
```  
6. Render will deploy and give a live URL.

### Heroku
1. Install Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)  
2. Log in:
```bash
heroku login
```  
3. Create a new app:
```bash
heroku create
```  
4. Push your code:
```bash
git push heroku main
```  
5. Open the app:
```bash
heroku open
```

---

## 📦 Dependencies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Bootstrap 5](https://getbootstrap.com/)

---

## 🗑️ License

This project is open-source and available under the MIT License.

---

## 👤 Author

**Your Name**  
[GitHub Profile](https://github.com/your-username)

