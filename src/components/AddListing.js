import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const AddListing = (props) => {
  const history = useHistory()

  const [ newListing, setNewListing ] = React.useState({
    businessName: "",
    description: "",
    address: "",
    operatingHours: ""
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
    payload.id = props.listings.length + 1
    props.addListing(payload)
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