import React, { useState } from "react";
import reg from "../assets/reg.jpeg";

const Register = () => {
  const [isRegister, setIsRegister] = useState(false); // true for Register, false for Login

  return (
    <div className="lg:flex md:grid grid h-screen lg:px-16 md:px-8 px-5 mt-5">
      {/* Left side with background image */}
      <div
        className="lg:w-1/2 bg-cover bg-center lg:flex md:hidden hidden justify-center items-center"
        style={{ backgroundImage: `url(${reg})` }}
      >
        <div className="bg-[#000] bg-opacity-45 w-full h-full grid justify-center items-center p-4 rounded-lg shadow-md">
          {/* Logo */}
          <img src="/path/to/your/logo.png" alt="Logo" className="w-20 h-20" />
        </div>
      </div>

      {/* Right side with form */}
      <div className="lg:w-1/2 bg-white flex flex-col justify-center items-start lg:p-12 md:p-12 p-5">
        {/* Toggle between Login and Register */}
        <div className="flex justify-end w-full mb-4">
          <button
            className={`mr-4 ${
              !isRegister
                ? "bg-main text-white font-bold Soralight px-4 rounded-lg"
                : "text-gray-500"
            }`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={`${
              isRegister
                ? "bg-main text-white font-bold Soralight"
                : "text-gray-500"
            } py-2 px-4 rounded-md`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        {/* Conditional rendering based on isRegister */}
        <h2 className="text-3xl font-bold mb-2 Soralight">
          {isRegister ? "Welcome" : "Welcome Back"}
        </h2>
        <p className="text-gray-600 mb-8 Soralight">
          {isRegister
            ? "Please register to your account"
            : "Please login to your account"}
        </p>

        {/* Form */}
        <form className="w-full">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full mb-4 p-3 border Soralight border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          />
          {isRegister && (
            <>
              <input
                type="text"
                placeholder="Enter Your Organisation Name"
                className="w-full mb-4 p-3 Soralight border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              />
              <input
                type="text"
                placeholder="Enter Your School Name"
                className="w-full mb-8 p-3 Soralight border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              />
            </>
          )}
          <button className="bg-main text-white Soralight w-full py-3 rounded-md">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
