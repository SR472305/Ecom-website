import React from 'react'

const Register = () => {
  return (
    <div>
      <form action="" className='border p-5 m-5 flex flex-col gap-3 w-80 rounded-2xl mx-auto shadow-lg'>
        <input type="text" placeholder="Name" required className='border p-2' />
        <input type="email" placeholder="Email" required className='border p-2' />
        <input type="password" placeholder="Password" required className='border p-2' />
        <input type="text" placeholder='Confirm Password' required className='border p-2' />
        <button type="submit" className='bg-blue-500 text-white p-2'>Register</button>
        <p className='text-center'>If you already have an account, <a href="/login" className='text-blue-500'>login here</a></p>
      </form>
    </div>
  )
}

export default Register
