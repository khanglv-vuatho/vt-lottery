import ToastComponent from '@/components/ToastComponent'

import axios, { AxiosResponse } from 'axios'

const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL
}

const instance = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 30000 // 30 seconds
})

const urlExceptAuthorization = ['Authenticate']

const getLangFromUrl = () => {
  // const lang = useSelector((state: any) => state.lang)
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang') || 'vi'
  return lang
}

const authorization = async () => {
  let token
  if (import.meta.env.MODE === 'development') {
    token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5MiwiZnVsbF9uYW1lIjoiIiwicHJvZmlsZV9waWN0dXJlIjoiaHR0cHM6Ly9jZG4tc2FuZGJveC52dWF0aG8uY29tL2ltYWdlL2I3NThhNzRjLTkzZmEtNDgwZi1iZGJlLWY4MDM2ZTY5YjBlOF8xNzI1NjA3NjY5OTQ2LmpwZyIsInJlZl9pZCI6Miwia3ljX3N0YXR1cyI6Miwid29ya2VyX3N0YXR1cyI6Miwic2Vzc2lvbl9sb2dpbnMiOlt7IklQIjoiMTkyLjE2OC4wLjc3IiwiZGV2aWNlIjoiMTcyNTYxMzM4MzIyNiIsInRpbWUiOjE3MjU2MTMzODMyMjZ9XSwiaWF0IjoxNzI1NjEzMzgzfQ.vwzL7TrmhWPFEG_gs2UXR81Wwk1tPVJlg3MErwVAteg'
  } else {
    const queryParams = new URLSearchParams(location.search)
    token = queryParams?.get('token')
  }

  const lang = getLangFromUrl()

  if (token) {
    return { Authorization: 'Bearer ' + token, deviceId: '1718159750996', 'Accept-Language': lang }
  } else {
    return {
      'Accept-Language': lang
    }
  }
}

const getUrl = (config: any) => {
  if (config?.baseURL) {
    return config?.url.replace(config?.baseURL, '')
  }
  return config?.url
}

// Intercept all request
instance.interceptors.request.use(
  async (config: any) => {
    const url = getUrl(config)

    if (!urlExceptAuthorization.includes(url)) {
      const authHeader = await authorization()

      config.headers = {
        ...config.headers,
        ...authHeader
      } as any
    }
    if (process.env.NODE_ENV !== 'production') {
      console.log(`%c Request: ${config?.method?.toUpperCase()} - ${getUrl(config)}:`, 'color: #0086b3; font-weight: bold', config)
    }
    return config
  },

  (error: any) => Promise.reject(error)
)

// Intercept all responses
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`%c Response: ${response?.status} - ${getUrl(response?.config)}:`, 'color: #008000; font-weight: bold', response)
    }

    return response.data
  },
  (error: any) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error?.response) {
        ToastComponent({
          message: error?.response?.data?.message || 'Something went wrong, please try again',
          type: 'error'
        })

        if (error?.response?.data?.status === 401) {
          window.location.href = '/invalid'
        }
      } else if (error?.request) {
        console.log('====== Timeout =====')
      } else {
        console.log('====== Internal Server Error! =====')
      }
    }

    return Promise.reject(error)
  }
)

export default instance
