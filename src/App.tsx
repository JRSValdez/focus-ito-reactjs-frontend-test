import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import LoginLayout from './layouts/LoginLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import Home from './pages/home'
import MovieDetail from './pages/movies/detail'
import MovieFavorites from './pages/movies/favorites'
import MovieSearch from './pages/movies/search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/favorites" element={<MovieFavorites />} />
          <Route path="/movie/search" element={<MovieSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
