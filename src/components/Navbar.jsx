import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          CountDown
        </Link>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/about" className="text-white px-4">About</Link>
          <Link to="/contact" className="text-white px-4">Contact</Link>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="text-white px-4"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white px-4">Login</Link>
              <Link to="/signup" className="text-white px-4">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
