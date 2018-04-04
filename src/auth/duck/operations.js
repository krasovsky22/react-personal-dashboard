import { Creators } from './actions'

const processLogin = Creators.processLogin
const loginSuccess = Creators.loginSuccess

const saveUserInStorage = username => {
  localStorage.setItem('user', username)
  return dispatch => {
    dispatch(loginSuccess(username))
  }
}

const login = (username, password) => {
  return dispatch => {
    dispatch(processLogin())

    setTimeout(_ => dispatch(saveUserInStorage(username)), 2000)
  }
}

const checkIfLoggedIn = () => {
  const token = localStorage.getItem('user')
  console.log('token', token)
  console.log('validation token', token)
  return dispatch => {
    dispatch(loginSuccess(token))
  }
}
export default {
  login,
  checkIfLoggedIn
}
