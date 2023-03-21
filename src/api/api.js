import axios from 'axios'
// import queryString from 'query-string'
import { parse, stringify } from 'query-string/base'
import storage from '../helper/storage'

const api = axios.create({
  baseURL: 'http://hanamthai.alwaysdata.net/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Accept-Encoding': 'gzip, deflate, br'
  },
  timeout: 25000,
  // paramsSerializer: params => queryString.stringify(params)
  paramsSerializer: {
    encode: parse,
    serialize: stringify
  }
})

api.interceptors.request.use(async (config) => {
  const token = await storage.get('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  }, err => {
    throw err
  }
)

export default api
