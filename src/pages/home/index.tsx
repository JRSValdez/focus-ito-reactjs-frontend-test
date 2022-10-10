import React, { useState } from 'react'
import useSWR from 'swr'
import { Grid, Pagination } from '@mui/material'
import HeadTitle from '../../components/HeadTitle'
import { getSWRFetcher } from '../../utils/swr/getFetcher'
import MovieList from '../../components/Movies/MovieList'
import { UnknownChangeEvent } from '../../utils/commonTypes'
import { PageTitle } from '../../components/Texts'
import Loader from '../../components/Loader'
import { useNavigate } from 'react-router-dom'
const TITLE = 'Popular movies'
const MAX_TOTAL_PAGES = process.env.REACT_APP_MAX_MOVIES_TOTAL_PAGES || 500

const Home = () => {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)

  const { data: response, error } = useSWR(
    `/movie/popular?page=${currentPage}`,
    getSWRFetcher,
  )

  const data = response?.data

  const handlePageChange = (event: UnknownChangeEvent, page: number) => {
    setCurrentPage(page)
  }

  return (
    <Grid container justifyContent="center" className="movies-bg">
      <HeadTitle pageName={TITLE} />
      {!data ? (
        <Loader />
      ) : (
        <>
          <PageTitle text={TITLE} />
          <MovieList movies={data?.results} />
          <Pagination
            sx={{ mt: 4 }}
            count={
              data?.total_pages
                ? data.total_pages > MAX_TOTAL_PAGES
                  ? MAX_TOTAL_PAGES
                  : data.total_pages
                : 0
            }
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </>
      )}
    </Grid>
  )
}

export default Home
