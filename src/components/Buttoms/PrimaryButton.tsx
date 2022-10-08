import React from 'react'
import { Grid, Button } from '@mui/material'

interface PrimaryButtonProps {
  text: string
  icon: React.ReactNode
  type: string
}

const PrimaryButton = ({ text, icon, type = 'buttom' }: PrimaryButtonProps) => {
  return (
    <Grid container justifyContent="center">
      <Button href="" type={type} variant="contained" endIcon={icon}>
        {text}
      </Button>
    </Grid>
  )
}

export default PrimaryButton
