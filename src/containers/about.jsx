import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <div>
    <NavLink to="/dashboard/main" className="nav-link" activeClassName="active">
      <p>Dashboard</p>
    </NavLink>
    <h1>Test Main Page</h1>
    <p>Hello World</p>
  </div>
)
