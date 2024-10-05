import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { SheetDrop } from '../reusable/SheetDrop'
import { SheetClose } from '../ui/sheet'
import { ArrowLeft } from 'lucide-react'
import TimeLine from '../reusable/TimeLine'


const openButton = (
    <div className='  border-solid border-[1px] border-[#E6E8EB] rounded-[7px]  flex divide-y-2 md:divide-y-0  duration-200 hover:bg-zinc-100 cursor-pointer flex-col md:flex-row'>
        <div className='flex flex-col justify-between gap-8 md:w-[80%] px-2 md:px-8 py-4 md:border-r-[1px] border-[#E6E8EB] border-solid'>
            <div className='flex justify-between md:items-end items-center md:flex-row flex-col md:gap-0 gap-2'>
                <div className='flex items-start gap-1 flex-col'>
                    <span className='text-[13px] font-[500]'>Thu 25 Jun</span>
                    <div className='flex items-center gap-5'>
                        <div className='border-[1px] border-solid border-[#E6E8EB] size-[44px] flex justify-center items-center rounded-[8px] p-0.5'>
                            <Image src={"/flights_logo/emirates.svg"} alt='emirates' width={44} height={44} className=' '/>
                        </div>
                        <div>
                            <p className='text-[#787B80] text-[13px]'>Emirates • AT 4334</p>
                            <h6 className='text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h6>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between flex-row items-start md:items-end gap-2 w-full md:gap-10 md:w-1/3 divide-x-2 md:divide-x-0'>
                    <div>
                        <p className='text-[#787B80] text-[14px]'>CDG - DXB</p>
                        <h6 className='text-[#001F1D] text-[18px]'>2h 10min</h6>
                    </div>
                    <div className='md:w-1/2 pl-2 md:pl-0'>
                        <p className='text-[#787B80] text-[14px]'>6h 32m in Lisbon, P...</p>
                        <h6 className='text-[#001F1D] text-[18px]'>Non stop</h6>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2'>
                <div className='flex items-center gap-5'>
                    <div className='border-[1px] border-solid border-[#E6E8EB] size-[44px] flex justify-center items-center rounded-[8px] p-0.5'>
                            <Image src={"/flights_logo/lufthansa.svg"} alt='emirates' width={44} height={44} className=' '/>
                        </div>
                    <div className='relative'>
                        <p className='text-[#787B80] text-[13px]'>Lufthansa • AT 4334</p>
                        <h6 className='text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h6>
                        <span className='absolute  text-[#962828F9] text-[12px] font-[500] top-0 right-0   md:-right-[28%] md:bottom-[20%]'>+1 day</span>
                    </div>
                </div>
                <div className='flex justify-start md:justify-between items-start divide-x-2 md:divide-x-0 md:items-end gap-2 md:gap-10 w-full md:w-1/3'>
                    <div>
                        <p className='text-[#787B80] text-[14px]'>CDG - DXB</p>
                        <h6 className='text-[#001F1D] text-[18px]'>2h 10min</h6>
                    </div>
                    <div className='md:w-1/2 pl-2 md:pl-0'>
                        <h6 className='text-[#001F1D] text-[18px]'>Non stop</h6>
                    </div>
                </div>
            </div>
        </div>
        <div  className='md:w-[20%] flex justify-center items-end px-2 md:mt-12 py-2 w-full h-full'>
            <div className='flex flex-col gap-4 w-full h-full'>
                <div className='px-2'>
                    <p className='text-[#787B80] text-[14px]'>from</p>
                    <h6 className='text-[#001F1D] text-[18px]'>AED 2,456.90</h6>
                </div>
                <Button className='bg-[#003E39] hover:bg-[#003E39] w-[95%] mx-auto text-[18px] font-[500]'>
                    Select
                </Button>
            </div>
        </div>
    </div>
)

const SingleFlightCard = () => {
  return (
    <SheetDrop className='min-w-[45vw] h-[95vh] mx-4 rounded-lg my-auto' side='right' openButton={openButton}>
        <SheetClose className='size-[28px] p-1 flex justify-center items-center focus:outline-none bg-[#F5F7FA] rounded-full'>
            <ArrowLeft color='#484A4D'/>
        </SheetClose>
        <div className='text-[20px] border-b-[1px] py-5 min-h-fit border-[#E6E8EB] pt-6 font-[500]'>
            <h3>Flights Details</h3>
        </div>
        <div>
            <TimeLine/>
        </div>
    </SheetDrop>
  )
}

export default SingleFlightCard