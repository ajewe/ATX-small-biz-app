import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()

  const userLoggedIn = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000"
    history.push("/")
  };

  return (
    <Container maxWidth="sm">
      <form className="form-class" onSubmit={userLoggedIn}>
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Password" type="password"/>
        <Button
        type="submit"
        variant="contained" 
        style={{marginTop: "40px"}}>
          LOGIN
        </Button>
      </form>
    </Container>
  )
}

export default Login