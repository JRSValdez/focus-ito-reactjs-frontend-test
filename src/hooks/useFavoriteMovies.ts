import { useState } from 'react'
import { MovieProps } from '../utils/commonTypes'

const useFavoriteMovies = () => {
  const data: MovieProps[] = JSON.parse(localStorage.getItem('favorites') || '')

  const [favorites, setFavorites] = useState(data)

  const isFavorite = (movieId: string) => {
    if (favorites) return favorites.some((m: MovieProps) => m.id == movieId)
    return false
  }

  const addFavorite = (movie: MovieProps) => {
    const newFav = [...favorites, movie]
    console.log({ newFav })
    localStorage.setItem('favorites', JSON.stringify(newFav))
    setFavorites(newFav)
  }

  const removeFavorite = (movieId: string) => {
    console.log({ favorites, movieId })
    const filteredMovies = favorites.filter((f) => f.id != movieId)
    localStorage.setItem('favorites', JSON.stringify(filteredMovies))
    setFavorites(filteredMovies)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
}

export default useFavoriteMovies
