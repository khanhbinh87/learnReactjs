// Là plain object co thuộc type quan trọng { type }
// Là một function retur nveef plan object
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';

function actLogout() {
  console.log("dispatch actLogout");
  return {
    type: LOGOUT
  }
}
function actLogin({ username, password }) {
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  }
}

export {
  // Action Types
  LOGOUT, LOGIN,

  // Action Function
  actLogout,
  actLogin
}