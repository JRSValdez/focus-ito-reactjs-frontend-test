import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import HeadTitle from '../../../components/HeadTitle'
import MovieList from '../../../components/Movies/MovieList'
import { PageTitle } from '../../../components/Texts'
import Loader from '../../../components/Loader'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AxiosResponse } from '../../../utils/commonTypes'
import movieAnimation from '../../../assets/lottie/movie-animation.json'
import api from '../../../apis/TMDBApi'
import { MovieProps } from '../../../utils/commonTypes'

const TITLE = 'Search results'

const SerachMovies = () => {
  const navigate = useNavigate()
  const [search] = useSearchParams()

  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const searchMovies = async (query: string) => {
    setLoading(true)
    const { success, error, data } = await api.get<never, AxiosResponse>(
      `/search/movie?query=${query}`,
    )

    if (success) {
      setMovies(data.results)
    }

    setLoading(false)
  }

  useEffect(() => {
    const query: string | null = search.get('search')
      ? search.get('search')
      : ''
    if (query) {
      searchMovies(query)
    }
  }, [search])

  return (
    <Grid container justifyContent="center" className="movies-bg">
      <HeadTitle pageName={TITLE} />
      {loading ? (
        <Loader animation={movieAnimation} />
      ) : (
        <>
          <PageTitle text={`${TITLE} for "${search.get('search')}"`} />

          {movies.length > 0 ? (
            <MovieList movies={movies} />
          ) : (
            <Grid container justifyContent="center">
              <span>No movies were found</span>
            </Grid>
          )}
        </>
      )}
    </Grid>
  )
}

export default SerachMovies
