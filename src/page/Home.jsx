import React from 'react'
import Machinceman from '../Image/machine_man.png'
import About from './About'
import Contact from './Contact'
import Service from './Service'
// import { Contact } from 'lucide-react'

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-10 ">

        {/* Left side - Text */}
        <div className="text-left md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Welcome to service center</h1>
          <h3 className="text-lg text-gray-600">How we can help you</h3>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Machinceman}
            alt="Service Center"
            className="w-180 h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <About />
      <Service />
      <Contact />
    </>
  )
}

export default Home
