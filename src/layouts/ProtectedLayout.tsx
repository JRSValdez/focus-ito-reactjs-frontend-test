import React from 'react'
import { Grid, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useVerifyAuth } from '../hooks/useVerifyAuth'
const ProtectedLayout = () => {
  useVerifyAuth()
  return (
    <Grid container className="movies-bg" direction="column">
      <Navbar />
      <Container sx={{ mt: 2 }} className="page-container">
        <Outlet />
      </Container>
      <Footer />
    </Grid>
  )
}

export default ProtectedLayout
