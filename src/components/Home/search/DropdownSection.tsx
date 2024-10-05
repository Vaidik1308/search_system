"use client";
import { DropDown } from "@/components/reusable/DropDown";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import React, { useState } from "react";
import flightsData from '@/lib/db.json'


const DropdownSection = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  

  const handleFromChange = (value: string) => {
    console.log(value); 
    
    setFromLocation(value);
    if (value === toLocation) {
      setToLocation("");
      return
    }
};

const  handleToChange = (value: string) => {
    console.log(value); 
    setToLocation(value);
    if (value === fromLocation) {
      setFromLocation("");
      return
    }
  };
  const airportDataFormat = flightsData.airports.map(airport => {

      return {
        label:`${airport.city} (${airport.code}), ${airport.country}`,
        value:`${airport.city} (${airport.code}), ${airport.country}`,
      }

  }
  );

  const handleSwap = () => {
    if(toLocation || fromLocation){
        const temp = fromLocation;
        setFromLocation(toLocation);
        setToLocation(temp);
    }
};


  return (
    <div className="flex md:flex-row flex-col items-center gap-4 w-full md:w-[60%]">
      {/* combo box */}
      <DropDown data={airportDataFormat} value={fromLocation} onChange={handleFromChange} label="Where from?" />
      <div>
        {/* swap locations */}
        <Button onClick={handleSwap} className="bg-[#F5F7FA] rounded-full hover:bg-[#F5F7FA] size-[3.2rem] p-0 md:rotate-0 rotate-90">
          <ArrowRightLeft color="black" />
        </Button>
      </div>
      <DropDown data={airportDataFormat} value={toLocation} onChange={handleToChange} label="Where to?" />
    </div>
  );
};

export default DropdownSection;
