import {
  LOGOUT,
  LOGIN
} from './actions';

const initState = {
  user: {
    username: ''
  },
  token: 'hsjdhsk=34948230hsdhskf-sjfkshfk' // null = chưa đăng nhập
}

export default function userReducer(state = initState, action) {
  console.log("userReducer run", action);
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        token: ''
      }
    case LOGIN:
      return {
        ...state,
        user: {
          username: action.payload.username
        },
        token: 'hsjdhsk=34948230hsdhskf-sjfkshfk' + action.payload.username
      }
    default:
      return state;
  }
}
