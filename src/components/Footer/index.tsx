import React from 'react'
import { Grid } from '@mui/material'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'

const Footer = () => {
  return (
    <footer className="navbar-bg">
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ py: 2 }}
        className="footer"
      >
        <span className="footer-title">
          <LocalMoviesIcon />
          MyMovies
        </span>
        <span className="footer-author-text">
          Author: <a href="https://github.com/JRSValdez">José Sifontes</a>
        </span>
      </Grid>
    </footer>
  )
}

export default Footer
