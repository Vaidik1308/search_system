'use client'
import * as React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import { ClipLoader } from "react-spinners";

export const CardComp = () => {
  const [loading, setLoading] = React.useState(true);
  const [ticks, setTicks] = React.useState([false, false, false]);

  React.useEffect(() => {
    const tickInterval = setInterval(() => {
      setTicks((prevTicks) => {
        const nextTicks = [...prevTicks];
        const nextIndex = nextTicks.indexOf(false);
        if (nextIndex !== -1) {
          nextTicks[nextIndex] = true;
        }
        return nextTicks;
      });
    }, 1000); 

    const loadingTimeout = setTimeout(() => {
      clearInterval(tickInterval);
      setLoading(false); 
    }, 4000); 

    return () => {
      clearInterval(tickInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <Card className="w-[400px]">
      <CardContent className="flex flex-col items-center w-full">
        <Image src={"/flights_logo/gif.svg"} alt="gif" width={150} height={150} />
        <div className="w-[80%] mx-auto">
          {ticks.map((tick, index) => (
            <div key={index} className="flex items-center gap-4 p-0.5 justify-start">
              {loading && !tick ? (
                <ClipLoader size={14} color="#3A6889" />
              ) : (
                <div className="rounded-full border-green-700 border-solid border-[2px] w-fit">
                  <Check strokeWidth={3} className="text-green-700 font-bold p-0.5" size={14} />
                </div>
              )}
              <span className="text-[18px] mt-0.5 text-[#787B80] tracking-wider">
                {index === 0
                  ? "Searching 400+ flights"
                  : index === 1
                  ? "Attaching company rules"
                  : "Serving best results"}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};