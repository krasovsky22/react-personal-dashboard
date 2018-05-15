import { addAlert } from './template/Alert/duck/reducers'

export const throwAlert = ({ type, message }) => addAlert({ type, message })
