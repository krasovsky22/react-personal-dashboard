export const PROCESS_LOGIN = 'PROCESS_LOGIN'
export const PROCESS_LOGOUT = 'PROCESS_LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const INITIAL_STATE = {
  user: '',
  showSpinner: false,
  errors: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROCESS_LOGIN:
      return { ...state, showSpinner: true }

    case PROCESS_LOGOUT:
      console.log('here')

      return { ...INITIAL_STATE, logoutCompleted: true }

    case LOGIN_SUCCESS:
      return { ...state, showSpinner: false, user: action.username }

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

export const processLogout = dispatch => {
  return setTimeout(
    _ =>
      dispatch({
        type: PROCESS_LOGOUT
      }),
    2000
  )
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

export const logout = () => {
  localStorage.removeItem('user')
  return dispatch => {
    dispatch(processLogout)
  }
}

export const checkIfLoggedIn = () => {
  return (dispatch, getState) => {
    const { user } = getState().security
    //make sure we are not logged in
    if (!user) {
      const token = localStorage.getItem('user')
      if (token) {
        dispatch(loginSuccess(token))
      }
    }
  }
}
