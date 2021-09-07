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
                <h5 class="modal-title" id="exampleModalLongTitle">Sign Up</h5>
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