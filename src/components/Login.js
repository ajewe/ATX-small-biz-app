import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'

const Login = () => {

  const userLoggedIn = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000"
    console.log(document.cookie)
    window.location.replace("/")
  };

  return (
    <Container maxWidth="sm">
      <form className="login-form" onSubmit={userLoggedIn}>
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Password" type="password"/>
        <Button
        type="submit"
        variant="contained" 
        style={{marginTop: '40px'}}>
          LOGIN
        </Button>
      </form>
    </Container>
  )
}

export default Login