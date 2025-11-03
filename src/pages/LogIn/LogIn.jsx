import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-50 via-purple-400 to-purple-600 text-white font-manrope flex items-center justify-center px-4 z-0">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 3px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.10) 3px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl text-gray-800">
        <h2 className="text-3xl font-bold text-center text-purple-700">Welcome Back!</h2>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-700">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <Link to="/forgot-password" className="text-purple-700 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn bg-white text-purple-700 w-full py-3 rounded-lg font-semibold text-xl hover:bg-purple-500 hover:text-white hover:border-1 hover:scale-105 transition"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
