import React from 'react'
import { Container } from '@material-ui/core';

const EachListing = (props) => {
  const listingId = props.match.params.id
  const chosenListing = props.listings.find(l => l.id == listingId)

  return (
    <Container maxWidth="sm">
      <h2>{chosenListing.businessName}</h2>
      <h3>{chosenListing.address}</h3>
      <h3>{chosenListing.operatingHours}</h3>
      <p>{chosenListing.description}</p>
    </Container>
  )
}
export default EachListing