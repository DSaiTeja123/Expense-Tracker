import React, { useContext, useState } from "react";
import { AuthLayout, Input } from "../../components/index";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/useContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { updateUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!trimmedPassword || trimmedPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email: trimmedEmail,
        password: trimmedPassword,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <AuthLayout>
      <div className="w-full h-full flex flex-col justify-center max-w-md mx-auto px-4">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
          Welcome Back
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Please enter your details to login.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setError("");
            }}
            label="Email ID"
            type="email"
            placeholder="sampleuser@example.com"
            required
          />
          <Input
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
              setError("");
            }}
            label="Password"
            type="password"
            placeholder="Minimum 8 characters"
            minLength={8}
            required
          />

          {error && (
            <p className="text-red-600 text-sm font-medium -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary w-full py-3 font-semibold text-white rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            LOGIN
          </button>

          <p className="text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
