import React from 'react'
import { URLS } from "../constant/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogOut = () => {
    const token = localStorage.getItem("token");
      const navigate = useNavigate();

      if (!token) {
        navigate('/captain-login');
      } else {
        axios.post(`${URLS.BASE_URL}${URLS.CAPTAIN_LOGOUT}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              console.log("Logged out successfully.");
              localStorage.removeItem("token");
              navigate("/captain-login");
            }
          })
          .catch((error) => {
            console.error("Logout failed:", error);
            navigate("/captain-login");
          });
      }

  return (
    <div>CaptainLogOut</div>
  )
}

export default CaptainLogOut