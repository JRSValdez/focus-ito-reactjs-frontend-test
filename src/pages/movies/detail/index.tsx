import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import HeadTitle from '../../../components/HeadTitle'
import { PageTitle, PageSubtitle } from '../../../components/Texts'
import { useParams } from 'react-router-dom'
import api from '../../../apis/TMDBApi'
import Loader from '../../../components/Loader'
import { AxiosResponse } from '../../../utils/commonTypes'
import MovieList from '../../../components/Movies/MovieList'
import { MovieProps } from '../../../utils/commonTypes'
import ListInfo from '../../../components/ListInfo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import FavoriteIcon from '../../../components/Movies/FavoriteIcon'
import useFavoriteMovies from '../../../hooks/useFavoriteMovies'
import movieAnimation from '../../../assets/lottie/movie-animation.json'

const MovieDetail = () => {
  const [loading, setLoading] = useState(false)
  const [movieDetail, setMovieDetail] = useState<MovieProps>({
    id: '',
    title: '',
    poster_path: '',
    release_date: '',
    vote_average: '',
    overview: '',
  })
  const [relatedMovies, setRelatedMovies] = useState<MovieProps[]>([])
  const { movieId } = useParams()
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteMovies()

  const isCurrentFavorite = isFavorite(movieId ? movieId : '0')

  const getMovieDetails = async (movieId: string) => {
    const { data, error: responseError, success } = await api.get<
      never,
      AxiosResponse
    >(`/movie/${movieId}`)

    if (success) {
      return data
    }
    return false
  }

  const getRelatedMovies = async (movieId: string) => {
    const { data, error: responseError, success } = await api.get<
      never,
      AxiosResponse
    >(`/movie/${movieId}/similar`)

    if (success) {
      return data.results
    }
    return false
  }
  useEffect(() => {
    if (movieId && movieId != movieDetail.id) {
      setLoading(true)
      getMovieDetails(movieId).then((movie) => {
        if (movie) {
          setMovieDetail(movie)
          getRelatedMovies(movie.id).then((movies) => {
            if (movies) {
              setRelatedMovies(movies)
            }
            setLoading(false)
          })
        }
      })
    }
  }, [movieId])

  return (
    <Grid container justifyContent="center" className="movies-bg">
      {loading ? (
        <Loader animation={movieAnimation} />
      ) : (
        <>
          <HeadTitle pageName={movieDetail.title} />

          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <PageTitle text={movieDetail.title} />
            </Grid>
            <Grid item>
              <FavoriteIcon
                isFavorite={isCurrentFavorite}
                onClick={() =>
                  isCurrentFavorite
                    ? removeFavorite(movieId ? movieId : '0')
                    : addFavorite(movieDetail)
                }
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4}>
              <LazyLoadImage
                effect="blur"
                wrapperClassName="movie-list-poster-image"
                src={`${process.env.REACT_APP_TMDB_BIG_IMAGE_URL}${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <p className="movie-detail-overview-text">
                {movieDetail.overview}
              </p>
              <ListInfo
                movie={movieDetail}
                properties={[
                  'vote_average',
                  'homepage',
                  'original_title',
                  'release_date',
                  'tagline',
                  'status',
                  'vote_count',
                ]}
              />
            </Grid>
          </Grid>
          <PageSubtitle text="Similar movies" />
          <MovieList movies={relatedMovies} />
        </>
      )}
    </Grid>
  )
}

export default MovieDetail
