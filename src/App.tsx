import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import LoginLayout from './layouts/LoginLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import NotFoundLayout from './layouts/NotFoundLayout'
import Home from './pages/home'
import MovieDetail from './pages/movies/detail'
import MovieFavorites from './pages/movies/favorites'
import MovieSearch from './pages/movies/search'
import NotFound from './pages/notfound'

function App() {
  return (
    <BrowserRouter basename="/focus-ito-reactjs-frontend-test/">
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/favorites" element={<MovieFavorites />} />
          <Route path="/movie/search" element={<MovieSearch />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/*" element={<NotFoundLayout />}>
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
