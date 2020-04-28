import React from 'react'
import cookie from 'cookie'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
  }

  return (
    <AppBar position="relative" style={{ background: '#3CB371' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>Austin Small Business</Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="nav-anchor">Listings</Link>
          </li>
          {checkAuth() === true ?
            <>
              <li className="nav-list-item">
                <Link to="/add" className="nav-anchor">Add</Link>
              </li>
              <li className="nav-list-item"
                  onClick={()=> {
                    document.cookie = "loggedIn="
                    window.location.replace("/")
                  }}>
                Logout
              </li>
            </>
          :
            <li className="nav-list-item">
              <Link to="/login" className="nav-anchor">Login</Link>
            </li>
          }
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation