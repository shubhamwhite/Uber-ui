import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import homeImage from "/homeImage/logo/Uber_logo_2018.svg.png";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import _vehicleImage from "../../public/icons/tuk-tuk_1048345.png";
import _schooter from "../../public/icons/scooter_3842177.png"
import _car from "../../public/icons/vehicle_12732635.png"
import _usercapacityicon from "../../public/icons/usercapacityicon.png";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        // opacity:1
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        // opacity:1
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
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
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-3xl"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            {/* <div className="line absolute h-12 w-1 bg-gray-800 left-10 top-[52%] rounded-full"></div> */}
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            ></input>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            ></input>
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white ">
          {/* LocationSearch component */}
          <LocationSearchPanel></LocationSearchPanel>
        </div>
      </div>
      <div className="fixed z-10 py-3 px-8 translate-y-full bg-white bottom-0 w-full">
       <h3 className="text-2xl font-semibold mb-3">Choose vehicle</h3>
        <div className="flex border-2 border-gray-500 active:bg-gray-100 mb-2 rounded-lg p-3  items-center justify-between w-full">
          <img className="h-12" src={_vehicleImage} alt="vehicle image" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              UberAuto
              <span className="inline-block">
                <img
                  className="h-3 ml-2"
                  src={_usercapacityicon}
                  alt="_usercapacityicon"
                />
              </span> 
              <span className="text-base ml-1">3</span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact ride
            </p>
          </div>
          <h2 className="text-2xl font-semibold">₹410.5</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
