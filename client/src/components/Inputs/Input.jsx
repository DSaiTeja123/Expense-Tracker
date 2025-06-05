import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white transition focus-within:ring-2 focus-within:ring-purple-500">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          value={value}
          onChange={onChange}
          autoComplete={type === "password" ? "current-password" : "off"}
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 hover:text-purple-600 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
