import React from 'react'
import notFoundAnimation from '../../assets/lottie/not-found-animation.json'
import Loader from '../../components/Loader'

const NotFound = () => {
  return <Loader maxWidth="600px" animation={notFoundAnimation} />
}

export default NotFound
