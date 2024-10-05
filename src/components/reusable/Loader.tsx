import React from 'react'
import { BarLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className=""> {/* Ensure the loader is centered */}
    <BarLoader
        color="#3A6889"
        cssOverride={{
            color: 'linear-gradient(to right, #3A688980, #3A6889, #3A688980)'
        }}
        height={5}
        width={"100%"}
    />
  </div>
  )
}

export default Loader