
import React from 'react'
import axios from "axios";
import firebase from '../firebase'

import { useEffect , useState } from "react";
import { Box , Button } from "@mui/material";
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { Navigate } from "react-router-dom";
 
const ariaLabel = { 'aria-label': 'description' };

class Ragister  extends React.Component{
  state = { user: null, error: null };
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      this.setState({ user });
      
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      this.setState({ error });
    });
  }
  render() {
    let { user, error } = this.state;
    return (
      
      <Box  style={{color:"white"}}

            sx={{
              '& > :not(style)': { m: 5, mb:-1 ,ml:10 , width: '350px' },
              margin:"auto" , mt :20 ,  height:"550px" , border:"1px solid transparent", width:"500px" , backgroundColor:"#171f30", color:"white"}}
          
          >
          
          <Box display={"flex"} sx={{justifyContent:"space-between"}}><h3 style={{ marginTop:"10px"}}>LogIn to Continue</h3> <CloseIcon style={{ marginTop:"10px"}}/></Box>
          {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/" replace={true} />
        )}
          <Button variant="outlined" sx={{fontWeight:"bold"}}>Have a Facebook/Email account?</Button>
           <h3 style={{marginTop:"50px"}}>Continue Using Phone</h3>
              <form onSubmit={this.onSignInSubmit}>
              <div id="sign-in-button"></div>
              <Input placeholder="Enter your number here" sx={{color:"white"}} type='number' name="mobile" onChange={this.handleChange} inputProps={ariaLabel} />
              <Button  variant="contained" disableElevation type='submit' > 
          
                Send Otp
              </Button>  
              </form>
              <h2>Enter OTP</h2>
              <form onSubmit={this.onSubmitOTP}>
                <Input placeholder="Ente OTP here" sx={{color:"white"}} type='number' name="otp"  onChange={this.handleChange} inputProps={ariaLabel} />
                <Button  variant="contained" disableElevation  type='submit'> 
          
                Submit
              </Button>
              </form>
              
      </Box>
    )
  }
}
export default Ragister;
