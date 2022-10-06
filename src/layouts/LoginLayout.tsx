import React from 'react'
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
        <div>Layout Login</div>
        <Outlet />
        <div>Layout Login</div>
    </div>
  )
}

export default LoginLayout