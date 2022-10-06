import React, { useState } from 'react'
import api from '../../apis/authAPI'
import {
  InputOnChange,
  FormSubmit,
  AxiosResponse,
} from '../../utils/commonTypes'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)

  const handleFormChange = (e: InputOnChange) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    const { data, error: responseError, success } = await api.post<
      never,
      AxiosResponse
    >('/login', formData)

    if (success) {
      //go to home
    } else {
      setError(responseError)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div>{'Error'}</div>}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login
