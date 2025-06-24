# Expense Tracker

A full-featured personal finance management web app built with the **MERN Stack** and styled using **Tailwind CSS**.  
**Authenticated users** can add transactions, view a visual breakdown of income and expenses, and export data as Excel files.

---

## ✨ Features

- **User Authentication** (Register, Login)
- **Add Income and Expense Transactions**
- **View All Transactions** (with filters and pagination)
- **Dashboard Overview**
  - Total Balance
  - Total Income
  - Total Expense
  - Recent Transactions
  - Last 30 Days Expenses
  - Recent Income with Charts
- **Interactive Charts** using `recharts`
- **Download Excel Reports** of all transactions using `xlsx`
- **Dark/Light Theme Support** with Tailwind CSS
- **Toast Notifications** for actions using `react-hot-toast`
- **Responsive UI** for mobile, tablet, and desktop
- **Elegant Date Formatting** using `moment.js`

---

## 🚀 Demo

**Live:** [https://expense-tracker-sigma-self-63.vercel.app](https://expense-tracker-sigma-self-63.vercel.app)

---

## 📦 Installation

1. **Clone the repository**
- git clone https://expense-tracker-sigma-self-63.vercel.app
- cd expense-tracker

2. **Install dependencies**
# Install client dependencies
- cd client
- npm install

# Install server dependencies
- cd server
- npm install

3. **Start the development server**
# Terminal 1 - start backend
- cd server
- npm run dev

# Terminal 2 - start frontend
- cd client
- npm run dev

4. **Open in your browser:**  
[http://localhost:5173](http://localhost:5173)

---

## 🛠️ Usage

- **Register/Login** to access the expense tracker.
- **Add new transactions** for both income and expenses.
- **Dashboard** displays recent transactions, last 30 days summary, and a full finance overview.
- **Visual Insights** via dynamic charts for income and expense tracking.
- **Filter and view** all transactions by date and type.
- **Download** your entire transaction history as an Excel sheet.
- **Track financial health** over time with real-time updates.

---

## 🌓 Dark/Light Theme

- Easily switch between dark and light modes via the toggle button.
- Theme preference is remembered and respects system settings.
- Powered by Tailwind CSS using `darkMode: 'class'`.

---

## 🌐 Deployment

**Client (Frontend) on Vercel:**  
- Just push the client code to GitHub and import into Vercel.  
- Configure `vite.config.js` if needed for production routing.
- Run the Client app using the environment variable:
  - `VITE_BASE_URL`

**Server (Backend) on Render:**  
- Deploy the Express server with environment variables set:
  - `PORT`
  - `CLIENT_URL`
  - `MONGO_URI`
  - `JWT_SECRET`

---

## 🧩 Tech Stack

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Moment.js](https://momentjs.com/)
- [Recharts](https://recharts.org/en-US/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router DOM (v7)](https://reactrouter.com/en/main)
- [React Hot Toast](https://react-hot-toast.com/)
- [Emoji Picker React](https://github.com/ealush/emoji-picker-react)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- [Multer](https://github.com/expressjs/multer)
- [xlsx](https://github.com/SheetJS/sheetjs)
- [dotenv](https://github.com/motdotla/dotenv)
