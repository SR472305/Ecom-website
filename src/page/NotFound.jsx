import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-white px-4">
      
      {/* 404 Heading */}
      <h1 className="text-7xl font-extrabold text-cyan-400 mb-4">404</h1>
      
      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Styled Button */}
      <Link
        to="/"
        className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl font-semibold backdrop-blur-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
      >
        Go back Home
      </Link>

      {/* Optional: small design touch */}
      <div className="mt-12">
        <div className="w-32 h-1 bg-cyan-400 rounded-full mx-auto animate-pulse"></div>
      </div>
    </div>
  )
}

export default NotFound
