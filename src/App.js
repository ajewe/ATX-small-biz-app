import React from 'react';
import './App.css';
import Navigation from './Navigation'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/ATX-small-biz-app'}>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
