import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { URLS } from "../constant/urls"; 

const CaptainProtactedWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

  
    useEffect(()=>{
      if (!token) {
        navigate("/captain-login");
      }
    },[token])
  
     axios.get(`${URLS.BASE_URL}${URLS.CAPTAIN_PROFILE}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
     }).then(response=>{
        if(response.status === 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
     }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
     })

    if(isLoading){
        return  ( <div> Loading... </div> )
    }

    return <>{children}</>;
}

export default CaptainProtactedWrapper