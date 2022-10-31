import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { register } from '../../features/auth/authSlice'
import { ILogin, IRegister } from '../../features/auth/models'
import { DropDownMenu } from '../components/dropdown'

const Register = () => {

  const dispatch = useAppDispatch();

  const { isSuccess, isAuthenticated, isError, isLoading, message, } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')






  const onSubmitHandler = (e: { preventDefault: () => void; }) => {


    if (username.length === 0 || password.length === 0 || password.length < 8) return;


    e.preventDefault();



    const loginUser: IRegister = {
      first_name: username, email: username, password,
    };

    dispatch(register(loginUser));
    console.log(loginUser)
    
    if (isError) {
      console.log("ERROR")

    }
    else{
      navigate('/signin');
    }
  };

  return (
    <div className='container w-[510px] h-auto mt-5 flex-col bg-[#ffffff] overflow-y-hidden'>
      <div>
        <h1 className='mb-2 text-4xl font-bold'>Join Navigly
          </h1>
      <p className='mb-4 text-base text-gray-500'>
          Please Sign up with your account.
      </p>
      </div>
      <div/>
      <form className='flex flex-col text-gray-500' onSubmit={onSubmitHandler}>
        <div className='my-4 h-30'>
          <label>
            Email Address*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <span className="mr-4">
              <FaEnvelope color='rgb(107 ,114, 128)' />
            </span>
            <input 
            onChange={e => setUsername(e.target.value)}
            value={username}
            type="email" className="w-full bg-[#f5f7f9] h-[30px] outline-none" placeholder="E-mail" />
          </div>
        </div>
        <div className='mb-4 h-30'>
          <label>
            Phone Number*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <DropDownMenu list={["Country","Afghanstan", "Ethopia", "Kenya"]}/>
            <input type="number" className="w-full bg-[#f5f7f9] h-[30px] outline-none" placeholder="Your phone number" />

          </div>
        </div>
        <div className='mb-4 h-30'>
          <label>
            Password*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <span className="mr-4">
              <FaLock />
            </span>
            <input type="password" className="w-full bg-[#f5f7f9] h-[30px] outline-none" placeholder="Password" />

          </div>
        </div>
        <div className='mb-4 h-30'>
          <label>
            Confirm Password*
          </label>
          <div className="w-full h-[50px] bg-[#f5f7f9] flex items-center justify-evenly p-4 my-2 rounded-[5px]">
            <span className="mr-4">
              <FaLock />
            </span>
            <input type="password" value={password} onChange={e=> setPassword(e.target.value)} className="w-full bg-[#f5f7f9] h-[30px] outline-none" placeholder="Password" />

          </div>
          <p className='text-xs'>Your password must be 8 characters at least</p>
        </div>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center h-16 justify-evenly'>
            <input type="checkbox" />
            <label className='ml-3 text-sm'>
              By signing up, you agree to the<span className='ml-2 text-blue-700 underline cursor-pointer'>terms of service</span>
            </label>

          </div>
          
        </div>
        <div className='flex flex-col items-center justify-center mb-4 h-30'>
          <button className='h-[40px] w-full bg-blue-700 text-white text-sm font-semibold rounded-[5px]' type='submit'>
            Sign Up
          </button>
          <p className='flex items-center justify-center h-20 text-sm'>
            Already have an account?  <span className='ml-2 text-blue-700 underline cursor-pointer'><NavLink to={'/signin'}>Sign in here</NavLink></span>
          </p>

        </div>

      </form>

    </div>
  )
}

export default Register
