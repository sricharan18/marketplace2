import React from 'react';
import {Header} from '../../header/Header'
import {Link} from 'react-router-dom'
import './signup.css';
import { Home } from '../../home/home';
import {Back} from '../../back_btn/Back'

class Signup extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
    return (
        <div>
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" onClick = { () => this.props.back('candidate') }>
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                    Sign Up
                </h5>
                <p>Enter your Mobile Number and Continue</p>
                </div>
                <div class="modal-body candidate-signup">
                    <div class="form-group">
                        <label for="MobileNumber" style={{ marginBottom : '8px' }}>Mobile Number</label>
                        <input onClick = {this.props.signupMobile} type="text" class="form-control" id="MobileNumber" placeholder="Enter your mobile number" required />
                        <div class="invalid-feedback">
                        Please provide a number.
                        </div>
                    </div>
                    <p style={{marginBottom : 0, marginTop: '14px'}}>Or</p>

                    <div class="btn-group">
                        <button type="button" class="Social-login-btn fb-button">Login with Facebook</button>
                        <button type="button" class="Social-login-btn Google-button">Login with Google</button>
                    </div>
                </div>
                <div class="modal-footer">
                <p>I have already an Account <a href="#">Sign In</a></p>
                </div>
        </div>
        </div>
    )
    }
}
 
export default Signup;