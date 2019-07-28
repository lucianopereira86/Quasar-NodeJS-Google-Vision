import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'http://localhost:3000/api/'
  })
}
