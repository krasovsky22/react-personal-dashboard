import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loader from '~helpers/Loader.jsx'

const LogoutComponent = ({ logout, logoutCompleted }) => {
  if (logoutCompleted) {
    return <Redirect to="/login" />
  } else {
    //process logout
    logout()
    return (
      <div>
        <Loader active={true} message="Logging out" />
      </div>
    )
  }
}

//@ts-ignore
export default LogoutComponent
