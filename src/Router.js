import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import EachListing from './containers/EachListing'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Listings} />
      <Route path="/listing/:id" component={EachListing} />
    </Switch>
  )
}

export default Router