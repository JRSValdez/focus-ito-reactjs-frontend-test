import React from 'react'
import Lottie from 'lottie-react'
import movieAnimation from '../../assets/lottie/movie-animation.json'

const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie
        className="loader-animation"
        animationData={movieAnimation}
        loop={true}
        style={{ maxWidth: '200px' }}
      />
    </div>
  )
}

export default Loader
