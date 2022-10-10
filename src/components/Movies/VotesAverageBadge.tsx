import React from 'react'
import { styled } from '@mui/material/styles'
import { Badge } from '@mui/material'

interface VotesAverageBadgeI {
  votesAverage: string
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: -10,
    left: 0,

    padding: '0 8px',
    backgroundColor: '#000851',
  },
}))

const VotesAverageBadge = ({ votesAverage }: VotesAverageBadgeI) => {
  return (
    <i title="Vote Average" className="votes-average-badge-container">
      <span>{votesAverage}</span>
    </i>
  )
}

export default VotesAverageBadge
