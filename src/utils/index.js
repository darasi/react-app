import axios from "axios";
import jwtDecode from 'jwt-decode';

export const setAuthorizationHeader =  (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export const decodedUser =  (token = null) => token ? jwtDecode(token) : {};