import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'
import DropdownSection from './DropdownSection'
import DatePickerSection from './DatePickerSection'

type Props = {}

const SearchBox = (props: Props) => {
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex w-full items-center gap-5'>
            <DropdownSection/>
            <DatePickerSection/>
        </div>
        <div className='w-full flex justify-end'>
            <Button className='bg-[#003E39] text-[1rem] flex items-center gap-3 px-16 py-6 w-fit group'>
                <Search className='group-hover:scale-125 group-hover:rotate-12 duration-300' size={19}/>
                <span>Search flights</span>
            </Button>
        </div>
    </div>
  )
}

export default SearchBox