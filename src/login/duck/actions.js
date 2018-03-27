import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
    loginRequest: ['username', 'password'],
    loginSuccess: ['username'],
    loginFailure: ['error'],
}, {});

export { Creators, Types };