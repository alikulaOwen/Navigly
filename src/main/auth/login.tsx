import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from '../../features/auth/authSlice';
import { ILogin } from '../../features/auth/models';

const Login = () => {


  const dispatch = useAppDispatch();

  const { isSuccess, isAuthenticated, isError, isLoading, message, } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')



  useEffect(() => {
    if (!isAuthenticated) return;


    navigate('/app')

  }, [isAuthenticated, isError, message, navigate]);
  

 




  const onSubmitHandler = (e: { preventDefault: () => void; }) =>{
    

    if (username.length === 0 || password.length === 0 ||  password.length < 8 ) return;


    e.preventDefault();



    const loginUser: ILogin = {
      username,password,
    };

    dispatch(login(loginUser));
    console.log(loginUser)
    if (isError) {
     console.log("ERROR")

    }
  };


  return (
    <div className='container w-[512px] h-auto mt-5 flex-col bg-[#ffffff]'>
        <h1 className='mb-2 text-4xl font-bold'>Log in to Navigly</h1>
        <p className='mb-4 text-base text-gray-500'>
            Welcome back! Please log in with your account details.
        </p>
      <form className='flex flex-col text-gray-500' onSubmit={onSubmitHandler}>
        <div className='my-4 h-30'>
          <label>
            Email Address*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <span className="mr-4">
              <FaEnvelope/>
            </span>
            <input type='email' onChange={
             e => setUsername(e.target.value)
            } value={username} className="w-full bg-[#f5f7f9] h-[30px] outline-none" placeholder="E-mail" />
          </div>
        </div>
        <div className='mb-4 h-30'>
          <label>
            Password*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <span className="mr-4">
              <FaLock/>
            </span>
            <input onChange={e => setPassword(e.target.value)} type="password" 
            className="w-full bg-[#f5f7f9] h-[30px] outline-none" value={password} placeholder="Password" />
            
          </div>
          <p className='text-xs'>Your password must be 8 characters at least</p>
        </div>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center h-16 justify-evenly'>
            <input type="checkbox" />
            <label className='ml-3 text-sm'>

              Remember me
            </label>

          </div>
          <div>
            <p className='text-sm underline'><a href='#'>Forgot password?</a></p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mb-4 h-30'>
          <button className='h-[40px] w-full bg-blue-700 text-white text-sm font-semibold rounded-[5px]' type={'submit'}>
            Login
          </button>
          <p className='flex items-center justify-center h-20 text-sm'>
            Don't have an account?  <span className='ml-2 text-blue-700 underline cursor-pointer'><NavLink to={'register'}>Signup here</NavLink></span>
          </p>
          
        </div>
             
        </form>

    </div>
  )

   
}

export default Login
