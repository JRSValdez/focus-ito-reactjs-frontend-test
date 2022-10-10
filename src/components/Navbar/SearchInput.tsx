import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { InputOnChange, FormSubmit } from '../../utils/commonTypes'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer !important',
  zIndex: 10,
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const SearchInput = () => {
  const navigate = useNavigate()
  const [searchParam] = useSearchParams()

  const [search, setSearch] = useState(searchParam.get('search'))

  const handleSearch = (e: FormSubmit) => {
    e.preventDefault()
    console.log('search')
    if (search && search.length > 0) {
      navigate(`/movie/search?search=${search}`)
    }
  }

  const handleSearchChange = (e: InputOnChange) => {
    setSearch(e.target.value)
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon onClick={handleSearch} />
      </SearchIconWrapper>
      <form onSubmit={handleSearch}>
        <StyledInputBase
          placeholder="Search movie…"
          inputProps={{ 'aria-label': 'search', type: 'search' }}
          value={search}
          onChange={handleSearchChange}
        />
      </form>
    </Search>
  )
}

export default SearchInput
