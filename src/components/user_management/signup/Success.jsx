import React from 'react';
import './signup.css';

import { Link } from "react-router-dom";

class Success extends React.Component{
    // constructor(props)
    // {
    //     super(props);
    // }

    render(){
    return (
        <div>
            {/* <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle" style = {{ color : 'green', minWidth : '400px'}}>Success</h5>
                </div>
            </div> */}

        <div class="modal-content">
     
            <div class="modal-body verifyOTPModal">
            <div class="verifyOTPModalInner">
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="#32C26F">
                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                </svg>

                <h4>Success</h4>
                <p>Your account has been<br></br> created Successfully</p>
                <button type="button" class="Social-login-btn common-lightblue-button">Verify your Email Address</button>
                {/* <Link to="createProfile/basicDetails">Skip and Continue to Profile Creation</Link> */}
                <a href="http://localhost:3000/createProfile/basicDetails">Skip and Continue to Profile Creation</a>
                </div>
            </div>
       
        </div>

        </div>
    )
    }
}
 
export default Success;