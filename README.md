# 📦 React Inventory Management System

A complete Inventory Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring authentication and role-based access control for Admin and Warehouse Staff. This project helps manage stock, suppliers, categories, and transactions efficiently.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Authentication | JWT & Bcrypt |
| Deployment | Backend → Render / Railway • Frontend → Vercel / Netlify |

---

## ⭐ Features

### 👨‍💼 Admin (Inventory Manager)
- Add / Edit / Delete Products
- Add / Edit / Delete Categories
- Add / Edit / Delete Suppliers
- Real-time Dashboard → low stock alerts
- View Transaction History
- Top-5 product reports
- (Optional) Manage Warehouse Staff accounts

### 👷 Warehouse Staff
- Stock In / Stock Out operations
- Stock Audit & Adjustment
- Product Search & Quick Access
- Simple UI toggle between roles

---

## 🗂 Folder Structure
React-Inventory-Management-System
┣ Backend
┃ ┣ server.js
┃ ┣ models/
┃ ┣ router/
┃ ┗ .env  ← Not included in GitHub
┣ Frontend
┃ ┣ src/
┃ ┣ public/
┗ README.m

---

## 🔧 Installation & Setup

### ⚙️ Backend

cd Backend
npm install

Create `.env` inside Backend folder:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=SuperSecretKey
PORT=4000



## 🌍 Deployment Guide

| Component | Platform |
|----------|----------|
| Backend | Render / Railway |
| Frontend | Vercel / Netlify |
| Database | MongoDB Atlas |

After backend is deployed, update frontend API base URL:



---

## 📌 Future Enhancements
- PDF / Excel export of reports
- Email notifications for low stock
- Product barcode scanning
- Improved Audit Logs
- Multi-warehouse support

---

## 🤝 Contributions
Pull requests are welcome. For major changes, open an issue first to discuss your ideas.

---

## 📜 License
This project is licensed under the MIT License.

---

✨ Happy Building! 🚀
