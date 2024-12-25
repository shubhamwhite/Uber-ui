import React from "react";
import { URLS } from "../constant/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogOut = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Immediately perform the logout when the component renders
  if (!token) {
    navigate('/user-login');
  } else {
    axios.post(`${URLS.BASE_URL}${URLS.USER_LOGOUT}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Logged out successfully.");
          localStorage.removeItem("token");
          navigate("/user-login");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        // Optional: Handle failed logout case, e.g., navigate to login anyway
        navigate("/user-login");
      });
  }

  return <div>UserLogOut</div>;
};

export default UserLogOut;
