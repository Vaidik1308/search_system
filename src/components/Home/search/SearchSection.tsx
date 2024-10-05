import React from 'react'
import SearchBox from './SearchBox'

type Props = {}

const SearchSection = (props: Props) => {
  return (
    <section className=' w-full flex flex-col justify-start'>
        <div className='grid grid-cols-3 relative '>
            <div className=' aspect-[5/2] md:aspect-[15/7]  border-dashed border-l-[2px] border-gray-300  '></div>
            <div className='aspect-[15/7]  border-dashed border-l-[2px] border-r-[2px] border-gray-300 -'></div>
            <div className='aspect-[15/7] border-dashed border-r-[2px] border-gray-300 '></div>
            <h2 className='col-span-3 text-[1.5rem] md:text-[2.4rem] w-full text-center absolute bottom-0'>
                Good afternoon, Brian
            </h2>
        </div>
        <div className='shadow-md p-7 py-8 flex flex-col gap-6 border-gray-200 rounded-[10px] border-[1px]'>
            <div>
                <span className='bg-[#F5F7FA] font-semibold rounded-md p-3 px-10 tracking-wide'>
                    Flights
                </span>
            </div>
            <SearchBox/>
        </div>
    </section>
  )
}

export default SearchSection