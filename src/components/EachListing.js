import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

const EachListing = (props) => {
  const listingId = props.match.params.id
  
  const findListing = (state) => {
    return state.listings.find(l => l.id == listingId)
  }

  const chosenListing = useSelector(state => findListing(state))

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