import React, { use, useEffect, useState } from 'react'
import { login } from '../redux/features/Authslice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{ User, error, isloggingin } = useSelector((state) => state.auth)


  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }))
    console.log(username, password);

  }

   
  useEffect(() => {

    if(User){
      navigate('/');
    }
    // handlelogin()
  },[User , navigate])

  return (
    <div>
      <form action="" onSubmit={handlelogin} className='border p-5 m-5 flex flex-col gap-3 w-80 rounded-2xl mx-auto shadow-lg' >
        <input type="text" placeholder="Username" required onChange={(e) => { setusername(e.target.value) }}
          className='border p-2' />
        <input type="password" placeholder="Password" required onChange={(e) => { setpassword(e.target.value) }}
          className='border p-2' />

        {isloggingin && <p className='text-green-500'>Logging in...</p>}
        {error && <p className='text-red-500'>{error}</p>}

        <button type="submit" className='bg-blue-500 text-white p-2'>Login</button>
        <p className='text-center'>If you don't have an account, <a href="/register" className='text-blue-500'>register here</a></p>
      </form>
    </div>
  )
}

export default Login
