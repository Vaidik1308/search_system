'use client'
import React, { useEffect, useState } from 'react'
import SingleFlightCard from './SingleFlightCard'
import Loader from '../reusable/Loader'
import { CardComp } from '../reusable/CardComp'
// import { Loader } from 'lucide-react'

type Props = {}

const FlightsCards =  (props: Props) => {
  // await wait(6000)
  const [loading, setLoading] = useState(true);                         
  useEffect(() => {
    const fetchData = () => {
      // Simulate a delay for loading
      setTimeout(() => {
        // setFlightsData(staticFlightsData); // Set static data after delay
        setLoading(false); // Set loading to false after data is set
      }, 4000); // 2 seconds delay
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
        <div className='flex justify-center items-center min-h-[70vh]'>
          {/* card component */}
          <CardComp/>
        </div>
      </div>
    )
  }
  return (
    <div className='w-[75%] mx-auto py-8 flex flex-col gap-6'>
        <h2 className='text-[#787B80] text-[18px]'>
            Showing 356 of 767 results
        </h2>
        <div className='flex flex-col gap-5'>
            <SingleFlightCard/>
            <SingleFlightCard/>
            <SingleFlightCard/>
            <SingleFlightCard/>
            <SingleFlightCard/>
        </div>
    </div>
  )
}

export default FlightsCards