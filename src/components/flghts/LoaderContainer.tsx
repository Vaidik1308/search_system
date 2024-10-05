'use client'
import React from 'react'
import { CardComp } from '../reusable/CardComp'
import Loader from '../reusable/Loader'
import Image from 'next/image'


const LoaderContainer = () => {
  return (
    <div>
      <Loader />
      <div className='flex flex-col relative justify-center items-center min-h-[70vh] gap-3 my-2'>
        {
            [1,2,3,4,5].map((item) => (
                <Image key={item} src={"/flights_logo/lazy_load.svg"} width={200} height={200} alt='lazy_load' className='w-[75%] mx-auto h-auto' />
            ))
        }
        <div className='absolute  z-[5] top-[5%] flex justify-center items-center  left-0 right-0'>
            <CardComp/>
        </div>
      </div>
    </div>
  )
}

export default LoaderContainer