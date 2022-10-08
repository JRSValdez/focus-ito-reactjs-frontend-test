import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useVerifyAuth = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [])
  return true
}
