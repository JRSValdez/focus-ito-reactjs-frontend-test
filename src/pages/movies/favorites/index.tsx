import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Grid } from '@mui/material'
import HeadTitle from '../../../components/HeadTitle'
import MovieList from '../../../components/Movies/MovieList'
import { PageTitle } from '../../../components/Texts'
import Loader from '../../../components/Loader'
import { useNavigate } from 'react-router-dom'
import useFavoriteMovies from '../../../hooks/useFavoriteMovies'
import movieAnimation from '../../../assets/lottie/movie-animation.json'

const TITLE = 'My favorite movies'

const FavoriteMovies = () => {
  const navigate = useNavigate()

  const { favorites } = useFavoriteMovies()

  return (
    <Grid container justifyContent="center" className="movies-bg">
      <HeadTitle pageName={TITLE} />
      {!favorites ? (
        <Loader animation={movieAnimation} />
      ) : (
        <>
          <PageTitle text={TITLE} />

          {favorites.length > 0 ? (
            <MovieList movies={favorites} />
          ) : (
            <Grid container justifyContent="center">
              <span>No favorite movies found</span>
            </Grid>
          )}
        </>
      )}
    </Grid>
  )
}

export default FavoriteMovies
