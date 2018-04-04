import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions(
  {
    processLogin: [],
    loginSuccess: ['username'],
    loginFailure: ['error']
  },
  {}
)

export { Creators, Types }
