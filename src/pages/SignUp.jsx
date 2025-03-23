import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signed Up with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition-all duration-300">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-200 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
