'use client'
import React from 'react'
import { CardComp } from '../reusable/CardComp'
import Loader from '../reusable/Loader'


const LoaderContainer = () => {
  return (
    <div>
      <Loader />
      <div className='flex justify-center items-center min-h-[70vh]'>
        <CardComp/>
      </div>
    </div>
  )
}

export default LoaderContainer