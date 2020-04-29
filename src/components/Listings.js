import React from 'react'
import { Link } from 'react-router-dom'
import { checkAuth } from '../checkAuth'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Listings = (props) => {

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
              {checkAuth() === true && 
                <TableCell align="center">
                  <FontAwesomeIcon 
                    icon={faTrashAlt}
                    style={{color: "red"}}
                    onClick={() => props.removeListing(i)}
                  />
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Listings