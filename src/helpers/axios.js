import axios from 'axios'

let defaultURL = process.env.VUE_APP_URL

export default axios.create({
  baseURL: defaultURL
})
