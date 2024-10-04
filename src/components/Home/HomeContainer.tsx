import React from 'react'
import SearchSection from './search/SearchSection'

type Props = {}

const HomeContainer = (props: Props) => {
  return (
    <div className='px-5 w-[75%] mx-auto'>
        <SearchSection/>
    </div>
  )
}

export default HomeContainer