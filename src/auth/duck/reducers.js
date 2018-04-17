export const PROCESS_LOGIN = 'PROCESS_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_REDIRRECT = 'LOGIN_REDIRRECT'

export const INITIAL_STATE = {
  user: '',
  showSpinner: false,
  errors: [],
  redirrectUrl: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROCESS_LOGIN:
      return { ...state, showSpinner: true }

    case LOGIN_SUCCESS:
      return { ...state, showSpinner: false, user: action.username, redirrect_url: action.redirrect_url }
      
    case LOGIN_FAILURE:
    default:
      return state
  }
}

export const processLogin = () => {
  return dispatch => {
    dispatch({
      type: PROCESS_LOGIN
    })
  }
}

export const loginSuccess = user => {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      username: user
    })
  }
}

const saveUserInStorage = username => {
  localStorage.setItem('user', username)
  return dispatch => {
    dispatch(loginSuccess(username))
  }
}

export const login = (username, password) => {
  return dispatch => {
    dispatch(processLogin())

    setTimeout(_ => dispatch(saveUserInStorage(username)), 2000)
  }
}

export const checkIfLoggedIn = () => {
  const token = localStorage.getItem('user')
  return dispatch => {
    if (token) {
      dispatch(loginSuccess(token))
    }
  }
}
