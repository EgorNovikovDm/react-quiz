import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-generate-default-rtdb.firebaseio.com/'
})