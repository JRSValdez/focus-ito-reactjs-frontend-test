import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const LoginLayout = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      className="login-page login-bg"
    >
      <Outlet />
    </Grid>
  )
}

export default LoginLayout
