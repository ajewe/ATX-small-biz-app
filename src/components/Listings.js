import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { checkAuth } from '../checkAuth'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removeListing } from '../redux/actions'

const Listings = () => {
  const allListings = useSelector(state => state.listings)
  const dispatch = useDispatch()

  const listingsToShow = allListings.filter(listing => listing.display === true)

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
          {listingsToShow.map((listing, i) => (
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
                    onClick={() => dispatch(removeListing(listing.id))}
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