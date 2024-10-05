
import SingleFlightCard from './SingleFlightCard'
import wait from 'wait'


const FlightsCards = async () => {
  await wait(4000)
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