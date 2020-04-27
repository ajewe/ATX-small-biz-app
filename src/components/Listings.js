import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'

const Listings = (props) => {
  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '40px'}}>
      <TableContainer style={{maxWidth: "80%"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="right">Hours</TableCell>
            {checkAuth() === true && <TableCell align="right">Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <Link to={`/listing/${listing.id}`}>{listing.businessName}</Link>
              </TableCell>
              <TableCell align="left">
                {listing.description}
              </TableCell>
              <TableCell align="left">
                {listing.address}
              </TableCell>
              <TableCell align="center">
                {listing.operatingHours}
              </TableCell>
              {/* if logged in show: */}
              {/* <TableCell align="center">
                trashcan icon
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Listings