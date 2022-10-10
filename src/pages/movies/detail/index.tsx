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
  const [favoritesMovies, setFavoritesMovie] = useState<MovieProps[]>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [relatedMovies, setRelatedMovies] = useState<MovieProps[]>([])
  const params = useParams()

  const getMovieDetails = async () => {
    const { data, error: responseError, success } = await api.get<
      never,
      AxiosResponse
    >(`/movie/${params.movieId}`)

    if (success) {
      return data
    }
    return false
  }

  const getRelatedMovies = async () => {
    const { data, error: responseError, success } = await api.get<
      never,
      AxiosResponse
    >(`/movie/${params.movieId}/similar`)
    console.log({ data, responseError, success })

    if (success) {
      setRelatedMovies(data.results)
    }
    return false
  }

  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      const favorites: MovieProps[] = JSON.parse(
        localStorage.getItem('favorites') || '',
      )

      setIsFavorite(favorites.some((m) => m.id === params.movieId))

      setFavoritesMovie(favorites)
    } else {
      setIsFavorite(false)
    }

    if (params.movieId) {
      setLoading(true)

      getMovieDetails().then(async (movie) => {
        console.log({ movie })
        if (movie) {
          setMovieDetail(movie)

          await getRelatedMovies()
        }
        setLoading(false)
      })
    }
  }, [params])

  const saveToFavorites = () => {
    if (favoritesMovies.some((m) => m.id === params.movieId)) {
      console.log({ favClick: 9 })
      const updatedFavorites = favoritesMovies.filter(
        (m) => m.id !== params.movieId,
      )
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setFavoritesMovie(updatedFavorites)
      setIsFavorite(false)
    } else {
      const updatedFavorites = [...favoritesMovies, movieDetail]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setFavoritesMovie(updatedFavorites)
      setIsFavorite(true)
    }
  }

  return (
    <Grid container justifyContent="center" className="movies-bg">
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeadTitle pageName={movieDetail.title} />

          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <PageTitle text={movieDetail.title} />
            </Grid>
            <Grid item>
              <FavoriteIcon isFavorite={isFavorite} onClick={saveToFavorites} />
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
