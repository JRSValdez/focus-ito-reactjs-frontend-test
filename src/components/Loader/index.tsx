import React from 'react'
import Lottie from 'lottie-react'

interface LoaderProps {
  animation: any
  maxWidth?: string
}

const Loader = ({ animation, maxWidth = '200px' }: LoaderProps) => {
  return (
    <div className="loader-container">
      <Lottie
        className="loader-animation"
        animationData={animation}
        loop={true}
        style={{ maxWidth: maxWidth }}
      />
    </div>
  )
}

export default Loader
