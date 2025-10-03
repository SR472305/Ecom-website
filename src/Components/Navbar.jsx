import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">LEW</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/Service" className="hover:text-gray-300">Service</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link to="/Login">
              <button className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
                Login
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 text-lg bg-blue-500 rounded-lg">
          <li>
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/Service" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Service</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
                Sign/Login
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
