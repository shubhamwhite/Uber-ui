import React, { useState } from "react";
import homeImage from '/homeImage/logo/Uber_logo_2018.svg.png';
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <Link to='/'> <img className='w-16 mb-10' src={ homeImage } alt="Uber logo" /></Link>
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 "> What's your email </h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com" />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password" />
          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
          </button>
          <p className="text-[14px] text-center">New here? <Link to='/user-signup' className="text-blue-800">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link to='/captain-signin'
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-10 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
