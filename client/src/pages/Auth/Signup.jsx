import React, { useContext, useState } from "react";
import {
  AuthLayout,
  Input,
  ProfileImageSelector,
} from "../../components/index";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/useContext";
import uploadImage from "../../utils/uploadImage";

const Signup = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { updateUser } = useContext(UserContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedFullName) {
      setError("Full name is required.");
      return;
    }

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
      if (profileImage) {
        const imgUpload = await uploadImage(profileImage);
        profileImageUrl = imgUpload.imageUrl || "";
      }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName: trimmedFullName,
        email: trimmedEmail,
        password: trimmedPassword,
        profileImageUrl,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      } else {
        setError("Signup failed. Please try again.");
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
      <div className="max-w-md mx-auto mt-10 md:mt-0 p-4 md:p-0 h-auto md:h-full flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Create an Account
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignup} className="space-y-6">
          <ProfileImageSelector
            image={profileImage}
            setImage={setProfileImage}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => {
                setFullName(target.value);
                setError("");
              }}
              label="Full Name"
              placeholder="Sample User"
              type="text"
              className="flex-1"
              required
            />
            <Input
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
                setError("");
              }}
              label="Email ID"
              type="email"
              placeholder="sampleuser@example.com"
              className="flex-1"
              required
            />
          </div>

          <Input
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
              setError("");
            }}
            label="Password"
            type="password"
            placeholder="Minimum 8 characters"
            required
            minLength={8}
          />

          {error && (
            <p className="text-red-600 text-sm font-medium -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary w-full py-3 font-semibold rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            SIGN UP
          </button>

          <p className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
