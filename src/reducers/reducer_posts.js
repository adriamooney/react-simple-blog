import  {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;

      //this code does same as above, using key interpolation
      //whatever the value in the square brackets is, make a new key with that value,
      //and set its value to action.payload.data
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      // console.log(action.payload.data);  // [post1, post2, post3]
        //we want {4: {post}, 5: {post}}
        //use mapKeys to achieve that
        console.log(action.payload.data);
       return  _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
