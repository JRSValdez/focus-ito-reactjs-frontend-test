import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

interface FavoriteIconProps {
  isFavorite: boolean
  onClick: React.MouseEventHandler
}

const FavoriteIcon = ({ isFavorite, onClick }: FavoriteIconProps) => {
  return isFavorite ? (
    <i title="Unmark as favorite" onClick={onClick}>
      <StarIcon className="favorite-icon favorite-icon-is-favorite" />
    </i>
  ) : (
    <i title="Mark as favorite" onClick={onClick}>
      <StarBorderIcon className="favorite-icon" />
    </i>
  )
}

export default FavoriteIcon
