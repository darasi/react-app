import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';

const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' }
});

const Api = {
  user: {
    getUsers: (filter = null) => instance.get('/users', { params: filter }).then(res => res.data),
    register: (data = null) => instance.post("/register", data).then(res => res.data)
  }
}

export default Api;