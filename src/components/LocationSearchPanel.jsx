import React from "react";
import _locationIcon from "../../public/icons/location.png";

const LocationSearchPanel = () => {
  const locatins = [
    "24B, Near Shubham's coding school, Ahmedabad's",
    "24A, Near prabhas's coding school, Mumbai's",
    "24L, Near kartik's coding school, nepal's",
    "24I, Near Ashavin's coding school, dilhi's",
  ];

  return (
    <div>
      {locatins.map(function (loc) {
        return <div className="flex items-center active:bg-stone-800 border-2 p-3 rounded-lg justify-start gap-6 my-2">
          <div className="h-8 w-8 flex items-center rounded-full justify-center">
            <img src={_locationIcon} />
          </div>
          <p className="active:text-white">{loc}</p>
        </div>;
      })}
    </div>
  );
};

export default LocationSearchPanel;
