import axios from 'axios'


const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '1f3dd018';
const searchByTitle = (title,callback) => {
  axios.get(`${API_URL}?&apikey=${API_KEY}&t=${title}`).then(callback);
}

export default {searchByTitle};