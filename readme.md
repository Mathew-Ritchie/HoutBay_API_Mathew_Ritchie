# 🌊 Hout Bay API

A simple REST API built with **Express.js** that serves mock data for local establishments in **Hout Bay**, including restaurants, attractions, and healthcare facilities.  
Designed to integrate with a React frontend project.

---

## 🚀 Features

- Provides establishment data via RESTful endpoints
- Serves static images for each establishment
- Supports CORS for frontend integration
- Fully deployable on **Render**

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **Render** (for hosting)

---

## 📂 Project Structure

hout-bay-api/
│
├── server.js # Express server setup
├── data/
│ └── mockEstablishments.js # Dataset of Hout Bay establishments
├── public/
│ └── images/ # Static image files
├── package.json
└── README.md

---

## 🧩 API Endpoints

### Get all establishments

GET /api/establishments
Returns a list of all establishments.

### Get a single establishment by ID

GET /api/establishments/:id
Example:  
GET /api/establishments/1

### Serve static images

Each establishment’s image can be accessed directly from the public folder.  
Example:  
GET /images/blue-cafe.jpg

---

## 🧰 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hout-bay-api.git
   cd hout-bay-api

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Run locally:
   ```bash
   npm start
   ```

The server will run on http://localhost:8000
