import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import EachListing from './containers/EachListing'
import Login from './components/Login'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Listings} />
      <Route path="/listing/:id" component={EachListing} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default Router