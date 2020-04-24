import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Listings} />
    </Switch>
  )
}

export default Router