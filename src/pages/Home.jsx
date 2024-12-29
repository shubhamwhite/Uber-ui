import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {useGSAP} from '@gsap/react' 
import homeImage from "/homeImage/logo/Uber_logo_2018.svg.png";
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(()=>{
     if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        // opacity:1
        padding: 24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
     }else{
      gsap.to(panelRef.current,{
        height: '0%',
        // opacity:1
        padding: 24
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
     }
  },[panelOpen])

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src={homeImage}
        alt="Uber logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="bg-white h-[30%] p-6 relative">
        <h5 ref={panelCloseRef} onClick={()=>{
          setPanelOpen(false)
        }} className="absolute opacity-0 top-6 right-6 text-3xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
        
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 bg-gray-800 left-10 top-[45%] rounded-full"></div>
            <input
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            ></input>
            <input
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            ></input>
          </form>
        </div>
        
        <div ref={panelRef} className="h-0 bg-white ">
              <LocationSearchPanel></LocationSearchPanel>

        </div>
      </div>
    </div>
  );
};

export default Home;
