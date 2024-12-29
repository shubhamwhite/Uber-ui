import React, { useState } from "react";
import homeImage from '/homeImage/logo/Uber_logo_2018.svg.png';
import {CaptainDataContext} from '../context/CaptainContext'
import { URLS } from "../constant/urls";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [first, setFirst]  = useState('')
  const [last, setLast]  = useState('')
  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      full_name: {
        first_name: first,
        last_name: last,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${URLS.BASE_URL}${URLS.CAPTAIN_REGISTER}`, captainData);
    console.log("response+++",response)

    if(response.status === 201){
      const data = response.data
      console.log("data",data.data.token)
      setCaptain(data.data.captain)
      localStorage.setItem('token', data.data.token)
      navigate('/captain-login')
    }

    setFirst('')
    setLast('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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


          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Motorcycle</option>
            </select>
          </div>

          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-sm placeholder:text-base"
          >
            Signup Captain
          </button>
          <p className="text-[14px] text-center">Already have an account? <Link to='/captain-login' className="text-blue-800">login here</Link></p>
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