import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import uuid from 'node-uuid'
import PrivateRouteContainer from '~securedContent/PrivateRouteContainer'

import Routes from './Routes'

/*We will just generate routers here */
const PrivateRouter = () => {
  let outputDiv = []
  let index = 0
  for (const Route in Routes) {
    /* switch Route */
    if (Routes[Route].length > 1) {
      const switchId = Routes[Route].reduce((newVal, current) => newVal + '_' + current, '')
      const tRoute = (
        <Switch key={btoa(switchId)}>
          {Routes[Route].map(function (switchRoute, key) {
            index++
            return <PrivateRouteContainer key={btoa(switchRoute.path)} exact path={switchRoute.path} component={switchRoute.Component} />
          })}
        </Switch>
      )
      outputDiv.push(tRoute)
    } else {
      /* Regular Private Route */
      for (const switchRoute in Routes[Route]) {
        const uniqueKey = btoa(Routes[Route][switchRoute].path)
        outputDiv.push(<PrivateRouteContainer key={uniqueKey} exact path={Routes[Route][switchRoute].path} component={Routes[Route][switchRoute].Component} />)
        index++
      }
    }
  }
  return <div>{outputDiv}</div>
}

export default PrivateRouter
