import React from 'react'
import { Grid } from '@mui/material'
import Movie from './Movie'

import { MovieProps } from '../../utils/commonTypes'

interface MovieListProps {
  movies: MovieProps[]
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Grid container>
      {movies.map((movie, key) => (
        <Grid key={`movie_${key}`} item sx={{ p: 2 }} xs={12} sm={4} md={3}>
          <Movie {...movie} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieList
