import React from "react";

function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Colored section */}
      <div className="flex-1 bg-[#20CBC4] flex items-center justify-center relative">
        <img src="/logo.png" alt="CoronelCare Logo" className="w-24" />
      </div>
      {/* White section with rounded left corners effect */}
      <div className="relative flex-1 bg-white flex flex-col items-center justify-center p-8 overflow-hidden">
        {/* Clip-path for rounded corner effect */}
        <div className="absolute inset-0 left-0 w-12 bg-[#20CBC4] clip-path-[polygon(0%_0%,_100%_0%,_50%_50%,_50%_50%)]"></div>
        <div className="relative ml-[-2px]">
          {" "}
          {/* Slight adjustment to overlap the border */}
          <h1 className="text-2xl font-bold text-blue-700 mb-4">CoronelCare</h1>
          <p className="text-sm text-gray-700 mb-6">
            Coronel MD Clinic Patient Management System
          </p>
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p className="text-sm mb-6">Hello! Let's get started.</p>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-6 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-sm text-center">
              Don't have an Account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
