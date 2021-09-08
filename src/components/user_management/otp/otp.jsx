import React from 'react';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom";


class OTP extends React.Component{
    constructor(props)
    {
        super(props);
        this.interval = null;
        this.otp = null;
        this.attempts = 2;
    }

    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
            this.interval=setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(this.interval)
                this.props.editableTextbox(true)
                document.querySelector('#otp_attempts').innerHTML=""
                document.querySelector('.otp_timer').innerHTML="Your OTP has expired"

            }
        },1000);
    }

    onOtpChange(event)
    {
        event.preventDefault();
        // this.props.changeStateOnOtpChange(event.target.value)
        this.otp = event.target.value
    }

    onOtpResend = () =>
    {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
          }

        const data = {         
          "email": this.props.mobNum,
          "login": this.props.mobNum,
          "activated": false        
        }
        
        
        axios.post("http://localhost:9001/api/admin/users", data, 
        {headers : headers}).then((response) => {
            console.log(response)
          }).catch((error) => {
              console.log(error)
          })

        document.querySelector('.otp_timer').innerHTML="Your OTP will expire in - <span id='time'>10:00</span>"
        clearInterval(this.interval)
        this.startTimer(599,document.querySelector('#time'))
        this.props.editableTextbox(false)
        document.querySelector('#otp_attempts').innerHTML=""
        
    }

    verifyOtp = async () => {
        const headers = {
            'Content-Type': 'application/json',
          }

        const data = {
            "email": this.props.mobNum,
            "otp": this.otp
        }
        
        
        await axios.post("http://localhost:9001/api/admin/users/authenticate", data, 
        {headers : headers}).then((response) => {
            console.log(response)
            console.log(response.data)
            if (response.data === true) {
                this.props.success()

                axios.get("http://localhost:9001/api/workers/get/" + localStorage.getItem("userID"),).then(
                    (res) => {console.log(res) ; localStorage.setItem("WorkerID", res.data.id) }
                ).catch(err => console.log(err))

                axios.post("http://localhost:9001/api/authenticate", {"username" : this.props.mobNum, "password": "1234"}).then(
                    (res) => {console.log(res) ; localStorage.setItem("token", res.data.id_token); console.log(localStorage.getItem("token"))}
                ).catch(err => console.log(err))

                if (localStorage.getItem("userID") !== null){
                    this.props.history.push('/viewProfile')
                  }
            } else {
                document.querySelector('#otp_attempts').innerHTML="You have "+ this.attempts +" more attempts"
                if (this.attempts !== 0){
                    this.attempts = this.attempts - 1
                } else {
                    this.props.editableTextbox(true)
                }
                
            }
          }).catch((error) => {
              console.log(error)
          })

    }

    componentDidMount()
    {   
        this.startTimer(599,document.querySelector('#time'))
        this.props.editableTextbox(false)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render(){
    return (
        <div>
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" onClick = { () => this.props.back('otp') }>
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>  
                    {this.props.active}
                </h5>
                <p>Enter the 4-digit code sent to <br></br> +91 XXXXXXX890</p>
                <div className="error otp_timer">Your OTP will expire in - <span id="time">10:00</span></div>
                <div style={{ color: 'red', fontSize: '13px'}} id="otp_attempts"></div>
                </div>
                <div class="modal-body candidate-signup">
                    <div class="form-group">
                        <label for="MobileNumber" style={{ marginBottom : '8px' }}>Enter OTP</label>
                        <input onChange = {this.onOtpChange.bind(this)} type="text" class="form-control" id="MobileNumber" placeholder="Enter OTP" disabled = {this.props.editable}/>
                        <div class="invalid-feedback">
                        Please provide a number.
                        </div>
                    </div>

                    <div class="btn-group">
                        {(this.props.active === "Sign Up") ? <button type="button" class="Social-login-btn common-lightblue-button wid100" onClick = { this.verifyOtp }>Verify</button>: 
                        // <Link to="/viewProfile" class="Social-login-btn common-lightblue-button wid100"><button type="button" class="Social-login-btn common-lightblue-button wid100" onClick = { this.verifyOtp }>Verify</button></Link>
                        <button type="button" class="Social-login-btn common-lightblue-button wid100" onClick = { this.verifyOtp }>Verify</button>
                        }
                    {/* <button type="button" class="Social-login-btn fb-button" onClick = { () => this.props.back('otp') }>Back</button> */}
                        
                    </div>
                </div>
                <div class="modal-footer">
                <p>Didn't recieve the OTP? <a href="#" onClick = { this.onOtpResend }>Resend</a></p>
                </div>
        </div>
        </div>
    )
    };
}
 
export default withRouter(OTP);