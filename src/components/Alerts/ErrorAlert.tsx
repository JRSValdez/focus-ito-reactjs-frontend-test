import React from 'react'
import { Alert, Grid } from '@mui/material'

interface ErrorAlertProps {
  text: string
}

const ErrorAlert = ({ text }: ErrorAlertProps) => {
  return (
    <Grid container justifyContent="center" sx={{ my: 2 }}>
      <Alert severity="error">{text ? text : ''}</Alert>
    </Grid>
  )
}

export default ErrorAlert
