import React from 'react'

interface PageSubtitleProps {
  text: string
}

const PageSubtitle = ({ text }: PageSubtitleProps) => {
  return <h2 className="page-subtitle">{text}</h2>
}

export default PageSubtitle
