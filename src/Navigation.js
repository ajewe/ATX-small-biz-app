import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <AppBar position="relative" style={{ background: '#3CB371' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>Austin Small Business</Typography>
        <Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" className="nav-anchor">Listings</Link>
            </li>
            
            {/* <li className="nav-list-item">
              Add
            </li> */}

            <li className="nav-list-item">
              {/* make the below conditionally rendered  */}
              {/* <Link to="/login">Login</Link> */}
              Login
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation