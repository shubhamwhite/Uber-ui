import React, { useState } from "react";
import homeImage from "/homeImage/logo/Uber_logo_2018.svg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {CaptainDataContext} from "../context/CaptainContext";
import { URLS } from "../constant/urls";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${URLS.BASE_URL}${URLS.CAPTAIN_LOGIN}`,captainData)

    if(response.status === 200){
      const data = response.data
      console.log("data",data.data.token)
      setCaptain(data.data.captain)
      localStorage.setItem('token', data.data.token)
      navigate('/captain-home')
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          {" "}
          <img className="w-16 mb-10" src={homeImage} alt="Uber logo" />
        </Link>
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 ">
            {" "}
            What's our Captain's email{" "}
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-[14px] text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-800">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#ff4d21] flex items-center justify-center text-white font-semibold mb-10 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Signin as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
