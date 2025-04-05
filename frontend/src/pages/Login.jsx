import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      {/* Heading */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Name field (only in Sign Up) */}
      {currentState === "Login" ? null : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Full Name"
          required
        />
      )}

      {/* Email field */}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email Address"
        required
      />

      {/* Password field with toggle */}
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full px-3 py-2 border border-gray-800 pr-10"
          placeholder={
            currentState === "Login"
              ? "Enter your password"
              : "Set your password"
          }
          required
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>

      {/* Footer links */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
