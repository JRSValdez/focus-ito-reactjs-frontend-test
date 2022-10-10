import React from 'react'
import { MovieProps } from '../../utils/commonTypes'

interface InfoListProps {
  movie: MovieProps
  properties: string[]
}

const InfoList = ({ movie, properties }: InfoListProps) => {
  const info = Object.entries(movie)

  return (
    <ul className="movie-detail-info-list">
      {info.map(([infoName, infoValue], key) => {
        if (properties.includes(infoName) && infoValue)
          return (
            <li key={`movie_info_${key}`}>
              <span>{infoName.split('_').join(' ')}</span>
              <span>{infoValue}</span>
            </li>
          )
      })}
    </ul>
  )
}

export default InfoList
