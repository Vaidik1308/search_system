import FlightsCards from '@/components/flghts/FlightsCards'
import LoaderContainer from '@/components/flghts/LoaderContainer'
import React, { Suspense } from 'react'
// import wait from 'wait'

const FlightsPage = async () => {

  // await wait(6000)
  
  return (
    <div className='w-full'>
      <Suspense fallback={<LoaderContainer/>}>
          <FlightsCards/>
      </Suspense>
    </div>
  )
}

export default FlightsPage