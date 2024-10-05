'use client'
import React, { useEffect, useState } from 'react';
import LoaderContainer from '@/components/flghts/LoaderContainer';
import FlightsCards from '@/components/flghts/FlightsCards'; // Directly import the component

const FlightsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 6 seconds to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full'>
      {loading ? (
        <LoaderContainer /> // Show loader for 6 seconds
      ) : (
        <FlightsCards /> // Show flight cards after 6 seconds
      )}
    </div>
  );
};

export default FlightsPage;
