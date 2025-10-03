import React from 'react'
import lift from '../Image/lift manchime.jpg'
import mixer from '../Image/mixer manchie.webp'
import mini from '../Image/string machine.jpg'
import palti from '../Image/palti machince.jpg'
import rajkot from '../Image/rajkot.webp'
import scissor from '../Image/scissor.jpeg'

const Service = () => {
  const services = [
    {
      name: 'Lift Machine',
      img: lift,
      desc: 'Installation, repair, and maintenance of lift machines for industrial and residential use.'
    },
    {
      name: 'Mixer Machine',
      img: mixer,
      desc: 'We repair and supply mixer machines with high performance and durability.'
    },
    {
      name: 'Mini Concrete Mixer',
      img: mini,
      desc: 'Compact and efficient mini mixers, perfect for small construction projects.'
    },
    {
      name: 'Tilting Mini Concrete Machine',
      img: palti,
      desc: 'Easy-to-use tilting concrete mixers for faster and smoother construction work.'
    },
    {
      name : 'Rajkot Construction lift machince',
      img : rajkot,
      desc: 'Easy-to-use tilting concrete mixers for faster and smoother construction work.'
    },

    {
      name : 'Rajkot Construction lift machince',
      img : scissor,
      desc: 'Easy-to-use tilting concrete mixers for faster and smoother construction work.'
    }


  ]

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services & Products</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We provide high-quality mechanical engineering works, repairs, and custom solutions.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="p-6 bg-white shadow rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold text-lg">⚙️ Expert Engineers</h3>
            <p className="text-sm mt-2">Skilled professionals with years of experience in mechanical works.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold text-lg">⚡ Quick Service</h3>
            <p className="text-sm mt-2">Fast turnaround time without compromising on quality.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold text-lg">💰 Affordable Pricing</h3>
            <p className="text-sm mt-2">Transparent rates with value-for-money solutions.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold text-lg">✅ Reliable Support</h3>
            <p className="text-sm mt-2">Dedicated support for all types of machinery repairs.</p>
          </div>
        </div>
      </div>

      {/* Testimonials (Optional) */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 shadow rounded-xl">
            <p className="italic">"Excellent service! My mixer machine was fixed in no time and works like new."</p>
            <h4 className="mt-3 font-semibold">- Rajesh K.</h4>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <p className="italic">"Professional team and very affordable pricing. Highly recommend their services!"</p>
            <h4 className="mt-3 font-semibold">- Anita P.</h4>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="mt-2">Need a service? Contact us today!</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            📞 
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Service
