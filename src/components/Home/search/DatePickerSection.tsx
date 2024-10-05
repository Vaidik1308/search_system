import { DatePicker } from '@/components/reusable/DatePicker'
import React from 'react'


const DatePickerSection = () => {
  return (
    <div className='flex items-center w-[100%] gap-2 md:h-[60px] flex-col md:flex-row '>
      <DatePicker label='Departure'/>
      <DatePicker label='Return'/>
    </div>
  )
}

export default DatePickerSection