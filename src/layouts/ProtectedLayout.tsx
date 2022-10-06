import React from 'react'
import { Outlet } from "react-router-dom";


const ProtectedLayout = () => {
  return (
    <div>
        <div>Layout Protected</div>
        <Outlet />
        <div>Layout Protected</div>
    </div>
  )
}

export default ProtectedLayout