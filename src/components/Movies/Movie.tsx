import React from 'react'
import { Grid, Card, CardContent, CardActionArea } from '@mui/material'
import MovieOverview from './MovieOverview'
import { MovieProps } from '../../utils/commonTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'

const Movie = (props: MovieProps) => {
  const navigate = useNavigate()

  const { id, title, poster_path, release_date, vote_average, overview } = props

  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <Grid container>
      <Card onClick={() => handleMovieClick(id)}>
        <CardActionArea>
          <LazyLoadImage
            effect={poster_path ? 'blur' : undefined}
            wrapperClassName="movie-list-poster-image"
            src={
              poster_path
                ? `${process.env.REACT_APP_TMDB_IMAGE_URL}${poster_path}`
                : undefined
            }
            placeholderSrc="https://via.placeholder.com/250x400.png?text=Poster+not+available"
            alt={title}
          />
          <CardContent className="movie-list-overview">
            <MovieOverview
              title={title}
              releaseDate={release_date}
              votesAverage={vote_average}
              overviewText={overview}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Movie
