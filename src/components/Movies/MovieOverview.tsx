import React from 'react'
import { Grid } from '@mui/material'
import MovieTitle from './MovieTitle'
import moment from 'moment'

interface MovieOverviewProps {
  title: string
  overviewText: string
  releaseDate: string
  votesAverage: string
}

const MovieOverview = ({
  overviewText,
  title,
  releaseDate,
  votesAverage,
}: MovieOverviewProps) => {
  const date = moment(releaseDate).format('MMM Do YYYY')
  return (
    <Grid container justifyContent="justify">
      <MovieTitle title={title} votesAverage={votesAverage} />
      <span className="movie-release-date-text">{date}</span>
      <p className="overview-text">
        {overviewText ? overviewText.substring(0, 65) : ''}{' '}
        {overviewText.length > 65 ? '...' : ''}
      </p>
    </Grid>
  )
}

export default MovieOverview
