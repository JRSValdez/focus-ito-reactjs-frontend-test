import React from 'react'
import { Grid } from '@mui/material'
import MovieTitle from './MovieTitle'

interface MovieOverviewProps {
  title: string
  overviewText: string
}

const MovieOverview = ({ overviewText, title }: MovieOverviewProps) => {
  return (
    <Grid container justifyContent="justify">
      <MovieTitle title={title} />
      <p className="overview-text">
        {overviewText ? overviewText.slice(50) : ''}{' '}
        {overviewText.length > 50 ? '...' : ''}
      </p>
    </Grid>
  )
}

export default MovieOverview
