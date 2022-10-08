import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useVerifyAuth } from '../hooks/useVerifyAuth'
const ProtectedLayout = () => {
  useVerifyAuth()
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>Layout Protected</div>
    </div>
  )
}

export default ProtectedLayout
