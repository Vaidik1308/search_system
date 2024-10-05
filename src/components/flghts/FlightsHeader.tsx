import React from 'react'
import { SheetDrop } from '../reusable/SheetDrop'
import SearchBox from '../Home/search/SearchBox'
import { Button } from '../ui/button'
import { Search, X } from 'lucide-react'
import Link from 'next/link'



const FlightsHeader = () => {
  const openButton = (
      <div className='border-[1px] text-[1rem] rounded-sm py-2 md:py-0  md:rounded-full md:w-fit px-2 border-solid border-[#E6E8EB] md:h-[50px] md:divide-x-2 grid grid-cols-2 md:flex w-full items-center md:justify-start cursor-pointer'>
        <div className='md:px-3 text-[16px] flex flex-col md:flex-row  justify-start md:items-center gap-1 p-1'>
          <span className='text-[#001F1D] font-[600]'>CDG </span>
          <span className='text-[#787B80]'>Paris Charles De Gu...</span>
        </div>
        <div className='text-[16px] flex justify-start md:items-center gap-1 px-3 flex-col md:flex-row'>
          <span className='text-[#001F1D] font-[600]'>DXB </span>
          <span className='text-[#787B80]'>Dubai International....</span>
        </div>
        <div className='px-3'>
          <span className='text-[#001F1D] font-[600] text-[16px] '>Jun 25 - Jul 2</span>
        </div>
        <div className='flex justify-end items-center pl-3'>
          <div className='bg-[#E5EBEB] size-[34px] flex justify-center items-center rounded-full p-2'>
            <Search  className='' color='#003E39'/>
          </div>
        </div>
      </div>
    
  )
  return (
    <header className='md:w-[75%] mx-auto py-2 px-1 md:py-10 flex md:flex-row  flex-col-reverse justify-between items-start gap-2 md:items-center'>
        <div className='md:w-[60%] my-5 md:my-0'>
          <SheetDrop openButton={openButton} side='top'>
            <div className='w-[75%] mx-auto grid gap-4 py-4 '>
              <SearchBox/>
            </div>
          </SheetDrop>
        </div>
        <div>
          <Button asChild variant={"outline"} className='border-[#E6E8EB] border-solid border-[1px] rounded-full size-10 p-2 cursor-pointer'>
            <Link href={"/"}>
              <X size={20} className='text-[#787B80]'/>
            </Link>
          </Button>
        </div>
    </header>
  )
}

// ... existing code ...

export default FlightsHeader