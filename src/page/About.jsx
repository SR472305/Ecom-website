import React from 'react'
import Expert from '../Image/expert2.png'

const About = () => {
  return (
    <div className="m-10">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-300 rounded-2xl p-10 shadow-lg">
        
        {/* Left Side - Image (hidden on small screens) */}
        <div className="md:w-1/3 hidden md:block">
          <img 
            src={Expert} 
            alt="Expert mechanic" 
            className="rounded-2xl shadow-md w-full h-100"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-2/3 md:pl-10 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to <strong>LEW</strong>
          </h1>

          <h3 className="text-lg mb-4">
            Your one-stop destination for reliable and professional automobile mechanical services.
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            With over 20 years of experience, we specialize in the maintenance and repair 
            of all types of heavy vehicles and construction machines — especially those 
            with diesel engines.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We have well-experienced workers with high skills in Mechanical Engineering, 
            ensuring top-quality service for your vehicles and machinery.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
