import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=asdfasdf56544';
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  //redux promise middleware will automatically resolve the promise that is returned
  //from axios and the resolved promise is returned as the payload in the reducer

  return {
    type: FETCH_POSTS,
    payload:request
  };
}
