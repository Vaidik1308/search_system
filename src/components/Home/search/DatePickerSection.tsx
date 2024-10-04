import { DatePicker } from '@/components/reusable/DatePicker'
import React from 'react'

type Props = {}

const DatePickerSection = (props: Props) => {
  return (
    <div className='flex items-center w-[40%] gap-2 h-[60px]'>
      <DatePicker label='Departure'/>
      <DatePicker label='Return'/>
    </div>
  )
}

export default DatePickerSection