import React, { useState, useContext } from "react";
import homeImage from "/homeImage/logo/Uber_logo_2018.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { URLS } from "../constant/urls";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try { 
      const response = await axios.post(
        `${URLS.BASE_URL}${URLS.USER_LOGIN}`,
        userData
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data,"+++++++-----+++++++")
        setUser(data.data.message);
        localStorage.setItem('token',data.data.token)
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
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
          <h3 className="text-lg font-medium mb-2 "> What's your email </h3>
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
            New here?{" "}
            <Link to="/user-signup" className="text-blue-800">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-10 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
