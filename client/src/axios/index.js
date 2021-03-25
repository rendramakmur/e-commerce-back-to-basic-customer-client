import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backtobasic-ecommerce.herokuapp.com'
})

export default instance
