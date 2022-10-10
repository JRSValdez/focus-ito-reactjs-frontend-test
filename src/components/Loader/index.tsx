import React from 'react'
import Lottie from 'lottie-react'

interface LoaderProps {
  animation: any
}

const Loader = ({ animation }: LoaderProps) => {
  return (
    <div className="loader-container">
      <Lottie
        className="loader-animation"
        animationData={animation}
        loop={true}
        style={{ maxWidth: '200px' }}
      />
    </div>
  )
}

export default Loader
