import React, { useState } from "react";
import homeImage from '/homeImage/logo/Uber_logo_2018.svg.png';
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [first, setFirst]  = useState('')
  const [last, setLast]  = useState('')
  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        first: first,
        last: last,
      },
      email: email,
      password: password
    })
    console.log(userData,"+++++++++")
    setFirst('')
    setLast('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
       <Link to='/'> <img className='w-16 mb-10' src={ homeImage } alt="Uber logo" /></Link>
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2 "> What's our Captain's Full Name </h3>
          <div className="flex gap-4">
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
            type="text"
            placeholder="first name" 
            value={first}
            onChange={(e)=>{
                setFirst(e.target.value)
            }}
          />
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
            type="text"
            placeholder="last name" 
            value={last}
            onChange={(e)=>{
                setLast(e.target.value)
            }}
          />
          </div>

          <h3 className="text-base font-medium mb-2 "> What's our Captain's Email </h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm"
            type="email"
            placeholder="email@example.com" 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} 
            />
          <h3 className="text-base font-medium mb-2">Enter the Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm"
            type="password"
            placeholder="password" 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-sm placeholder:text-base"
          >
            Signup Captain
          </button>
          <p className="text-[14px] text-center">Already have an account? <Link to='/captain-signin' className="text-blue-800">login here</Link></p>
        </form>
      </div>
      <div>
        <p className="text-[10px] mb-10">
        For Uber captains, implementing <span className="underline">Google reCAPTCHA during registration ensures that only verified</span> drivers can sign up, preventing fraudulent activity and enhancing the overall security of the platform.
        </p>
      </div>
      {/* <div>
        <Link to='/captain-signup'
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-10 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Signup as Captain
        </Link>
      </div> */}
    </div>
  );
}

export default CaptainSignup