"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };
  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);

    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("")
    }
  };

  const handleConfirmPasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return(
    <div className="bg-white flex w-screen h-screen font-[Sanchez]">
      <div className="p-10 flex mb-36 items-center justify-center mt-3 ml-12 bg-white w-1/2">
        <div className="text-center">
          <div className="text-black text-5xl mb-8 ml-48">Sign up</div>
          <div className="text-neutral-500 text-3xl ml-48 mb-12">Welcome to Gaugeguardian</div>
          <form className="space-y-8 ml-48 ">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal  font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-[520px] h-[55px] text-black text-xl  font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
              required
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full md:w-[520px] h-[55px] px-4 py-2 text-xl font-normal font-['Sanchez'] border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary pr-12"
                required
              />
              <span
                className="absolute right-24 top-4 cursor-pointer"
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisible ? <FaEye />  :<FaEyeSlash /> }
              </span>
            </div>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full md:w-[520px] h-[55px] px-4 py-2 text-xl font-normal font-['Sanchez'] border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary pr-12"
                required
              />
              <span
                className="absolute right-24 top-4 cursor-pointer"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {confirmPasswordVisible ?<FaEye /> : <FaEyeSlash /> }
                
              </span>
            </div>
            <div id="passwordError" className="text-red-500 mt-2">
              {passwordError}
            </div>

            <button className="w-[516px] h-[58px] bg-orange-500 top-24 text-white py-2 ext-white text-xl font-normal font-['Sanchez'] rounded hover:bg-orange-600">
              Create an Account
            </button>
          </form>
          <p className="mt-4 text-black-500 mr-10 text-black text-xl font-normal font-['Sanchez']">
            Already have an account?
            <Link href="/login">
              <span className="text-blue-500">Login</span>
              </Link>
          </p>
        </div>
      </div>
      <div className="bg-blue-500 w-[696px] h-[982px]text-white p-10 flex flex-col ml-48">
        <div className="text-left mb-4 mt-48 mr-12 text-white">
          <h2 className="text-5xl mb-2 ml-12">Making</h2>
          <h2 className="text-5xl mb-2 ml-12">Calibration</h2>
          <h2 className="text-5xl mb-2 ml-12">Process Easier</h2>
        </div>
        <div className="ml-36 mb-12 text-white">
          <p className="text-2xl mt-4 ml-4">
            Our vision is to enable meteorologists in Kenya to provide accurate data disaster
            and weather forecasts in disaster-prone areas.
          </p>
        </div>
        <div className="w-96 h-1.5 relative bg-white ml-64 mt-12"></div>
      </div>
    </div>
  );
};

export default Signup;