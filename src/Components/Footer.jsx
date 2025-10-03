import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-6">
      {/* Main footer content in one row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 border-b border-white/30">
        
        {/* Social Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Social Links</h2>
          <ul className="flex gap-4 justify-center md:justify-start">
            <li className="hover:text-green-300 cursor-pointer"><FaWhatsapp size={20} /></li>
            <li className="hover:text-blue-300 cursor-pointer"><FaFacebook size={20} /></li>
            <li className="hover:text-pink-300 cursor-pointer"><FaInstagram size={20} /></li>
          </ul>
        </div>

        {/* Page Links */}
        <div className="text-center m-r-5">
          <h2 className="text-lg font-semibold mb-2">Pages</h2>
          <div className="flex gap-4 text-base">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/About" className="hover:text-gray-300">About</Link>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>

        
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold mb-2">Legal</h2>
          <p className="text-base hover:underline cursor-pointer">Terms & Policies</p>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="text-center text-sm bg-blue-700 mt-4 py-2">
        © 2025 Developed by <span className="font-bold">Shyam</span>
      </div>    
      </footer>
    )
}

export default Footer;
