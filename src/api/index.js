import axios from 'axios';

const postsUrl = 'https://www.reddit.com/r/politics.json';

class Api {
  static getPosts(filter) {
    axios.get(postsUrl, {
        params: filter
      })
      .then(response => response.data)
      .catch(error => error);
  }
}

export default Api;