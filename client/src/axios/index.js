import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backtobasic-ecommerce.web.app'
})

export default instance
