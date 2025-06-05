import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Signup, Home, Income, Expense } from "./pages/index";
import UserProvider from "./context/useContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <UserProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
            </Routes>
          </Router>
          <Toaster
            toastOptions={{ className: "", style: { fontSize: "13px" } }}
          />
        </div>
      </UserProvider>
    </>
  );
}

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
