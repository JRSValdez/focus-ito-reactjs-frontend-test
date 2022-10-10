import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const NotFoundLayout = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      className="login-page"
    >
      <Outlet />
    </Grid>
  )
}

export default NotFoundLayout
