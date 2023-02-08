import axios from 'axios'
import queryString from 'query-string'
import storage from '../helper/storage'

const api = axios.create({
  baseURL: 'https://mtm-api-staging.herokuapp.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  },
  paramsSerializer: params => queryString.stringify(params)
})

api.interceptors.request.use(async (config) => {
  const token = await storage.get('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
})

api.interceptors.response.use(
  (response) => {
    return response.data
  }, err => {
    throw err.response.data.error
  }
)

export default api
