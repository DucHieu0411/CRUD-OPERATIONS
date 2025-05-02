import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-200">
      <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-8 w-full max-w-md h-[550px] justify-between">
        <div className="mb-6 w-[342px] h-[39px] flex items-center justify-center mx-auto">
          <h1 className="text-xl font-bold flex items-center">
            <span className="h-5 w-1 bg-yellow-500 mr-2 rounded-sm"></span>
            <span className="font-bold text-3xl">CRUD OPERATIONS</span>
          </h1>
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-1">SIGN IN</h2>
          <p className="text-center font-medium text-[#6C6C6C] text-sm mb-2">
            Enter your credentials to access your account
          </p>
        </div>
        <form>
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#6C6C6C] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-[#CDCDCD]"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#6C6C6C] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-[#CDCDCD]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md font-medium hover:bg-yellow-600 transition cursor-pointer"
          >
            SIGN IN
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password?{" "}
          <a href="#" className="text-yellow-500 hover:underline">
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
