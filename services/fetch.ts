import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const httpFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  headers: { Authorization: `Client ${apiKey}` }
})
