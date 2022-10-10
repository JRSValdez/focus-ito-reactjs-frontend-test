import React from 'react'
import { Grid } from '@mui/material'
import VotesAverageBadge from './VotesAverageBadge'

interface MovieTitleProps {
  title: string
  votesAverage: string
}

const MovieTitle = ({ title, votesAverage }: MovieTitleProps) => {
  return (
    <Grid container justifyContent="start" className="movie-title-container">
      <h3 className="movie-list-title">{title}</h3>
      <VotesAverageBadge votesAverage={votesAverage} />
    </Grid>
  )
}

export default MovieTitle
