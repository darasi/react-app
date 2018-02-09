import axios from 'axios';

export const apiUrl = 'http://localhost:8000/api';
export const checkoutSuccessUrl = 'http://localhost:8080/checkout/success';
export const checkoutCancelUrl = 'http://localhost:8080/checkout/cancel';

const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' }
});

const Api = {
  user: {
    getUsers: (filter = null) => instance.get('/users', { params: filter }).then(res => res.data),
    register: (data = null) => instance.post("/register", data).then(res => res.data),
    login: (data = null) => instance.post("/login", data).then(res => res.data),
    current_user: (data = null) => instance.post("/current_user", data).then(res => res.data),
    logout: () => instance.post("/logout").then(res => res.data),
  },
  checkout: {
    paypal: (data = null) => instance.post("/checkout/paypal", data).then(res => res.data)
  }
}

export default Api;