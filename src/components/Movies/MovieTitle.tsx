import React from 'react'
import { Grid } from '@mui/material'

interface MovieTitleProps {
  title: string
}

const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <Grid container justifyContent="start">
      <h3 className="movie-list-title">{title}</h3>
    </Grid>
  )
}

export default MovieTitle
