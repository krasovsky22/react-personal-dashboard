import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { PulseLoader } from 'react-spinners'

import './css/loader.scss'

const Loader = ({ active }) => {
  if (active) {
    return (
      <Jumbotron className="loader">
        <div className="pulse_loader">
          <PulseLoader color={'#123abc'} loading={true} />
          Loading...
        </div>
      </Jumbotron>
    )
  } else {
    return <div />
  }
}

export default Loader
