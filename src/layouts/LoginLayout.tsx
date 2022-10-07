import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const LoginLayout = () => {
  return (
    <Grid
      container
      sx={{ px: 8, py: 4 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Outlet />
    </Grid>
  )
}

export default LoginLayout
