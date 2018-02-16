import axios from 'axios';

export const apiUrl = process.env.API_URL;
export const checkoutSuccessUrl = process.env.SUCCESS_CHECKOUT_URL;
export const checkoutCancelUrl = process.env.CANCEL_CHECKOUT_URL;

const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' }
});

const Api = {
  user: {
    getUsers: (filter = null) => instance.get('/users', { params: filter }).then(res => res.data),
    register: (data = null) => instance.post('/register', data).then(res => res.data),
    login: (data = null) => instance.post('/login', data).then(res => res.data),
    current_user: (data = null) => instance.post('/current_user', data).then(res => res.data),
    logout: () => instance.post('/logout').then(res => res.data)
  },
  checkout: {
    paypal: (data = null) => instance.post('/checkout/paypal', data).then(res => res.data)
  }
};

export default Api;
