import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { checkAuth } from './checkAuth'
import Listings from './components/Listings'
import EachListing from './components/EachListing'
import Login from './components/Login'
import AddListing from './components/AddListing'

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth() === true ?
        <Component {...props} />
        :
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      }
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Listings} />
      <Route path="/listing/:id" component={EachListing} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  )
}

export default Router