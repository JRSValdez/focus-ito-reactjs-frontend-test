import React from 'react'
import { Grid, Card, CardContent, CardActionArea } from '@mui/material'
import MovieOverview from './MovieOverview'
import { MovieProps } from '../../utils/commonTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Movie = (props: MovieProps) => {
  const { title, poster_path, release_date, vote_average } = props
  return (
    <Grid container>
      <Card>
        <CardActionArea>
          <LazyLoadImage
            effect="blur"
            wrapperClassName="movie-list-poster-image"
            src={`${process.env.REACT_APP_TMDB_IMAGE_URL}${poster_path}`}
            alt={title}
          />
          <CardContent className="movie-list-overview">
            <MovieOverview
              title={title}
              overviewText={`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Movie
