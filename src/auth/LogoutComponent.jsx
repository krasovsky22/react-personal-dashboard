import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const LogoutComponent = ({ logout, logoutCompleted }) => {
  if (logoutCompleted) {
    return <Redirect to="/login" />
  } else {
    //process logout
    logout()
    return <div>logging out...</div>
  }
}

//@ts-ignore
export default LogoutComponent
