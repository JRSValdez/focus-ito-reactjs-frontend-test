import axios,{AxiosError, AxiosResponse,AxiosRequestConfig} from 'axios'


const handleError = (error:AxiosError)  => {
    if (!error.response) {
      return { error:'UNHANDLED ERROR', data:{}}
    } else {
      if (error != null && error.response != null) {
        if (error.response.status === 401) {
          //invalid Token. Redirect to login
          api.defaults.headers.common['Authorization'] = ''
          localStorage.removeItem('token')
          window.location.href = '/login'
          return {success:false, error: error.response.data,data:{}}
        } else {
          return {success:false, error: error.response.data,data:{}}
        }
      } else {
      return {success:false, error:'UNHANDLED ERROR', data:{}}
      }
    }
  }
  
  const api = axios.create({
    baseURL: process.env.REACT_APP_AUTH_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 15000,
  })
  
  api.interceptors.request.use(function (config:any) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config
  })
  
  api.interceptors.response.use(
    function (response:AxiosResponse) {
      return {success:true , ...response.data}
    },
    function (error:AxiosError) {
      return handleError(error)
    },
  )
  
  export default api
  