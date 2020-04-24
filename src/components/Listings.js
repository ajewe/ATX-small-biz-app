import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'

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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {listing.businessName}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Listings