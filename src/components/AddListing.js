import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { addListing } from '../redux/actions'

const AddListing = () => {
  const history = useHistory()
  const allListings = useSelector(state => state.listings)
  const dispatch = useDispatch()

  const [ newListing, setNewListing ] = React.useState({
    businessName: "",
    description: "",
    address: "",
    operatingHours: "",
    display: true
  })

  const handleTextChange = e => {
    setNewListing({
      ...newListing,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const payload = { ...newListing }
    payload.id = allListings.length + 1
    dispatch(addListing(payload))
    alert('Listing added: ' + payload.businessName)
    history.push("/")
  }

  return (
    <Container maxWidth="sm">
      <form className="form-class" onSubmit={handleSubmit} >
        <TextField 
          id="standard-basic" 
          label="Name"
          name="businessName"
          value={newListing.businessName}
          onChange={handleTextChange} />
        <TextField 
          id="standard-basic" 
          label="Address"
          name="address"
          value={newListing.address}
          onChange={handleTextChange} />
        <TextField 
          id="standard-basic" 
          label="Hours (ex. 8AM - 9PM)"
          name="operatingHours"
          value={newListing.operatingHours}
          onChange={handleTextChange} />
        <TextField 
          id="standard-basic" 
          label="Description"
          name="description"
          value={newListing.description}
          onChange={handleTextChange} />
        <Button
          type="submit"
          variant="contained"
          style={{marginTop: "40px"}}>
          SAVE
        </Button>
      </form>
    </Container>
  )
}

export default AddListing