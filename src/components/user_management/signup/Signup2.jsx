import React from 'react';
import {Header} from '../../header/Header'
import {Link} from 'react-router-dom'
import './signup.css';
import {connect} from 'react-redux'
import { Home } from '../../home/home';
import {Back} from '../../back_btn/Back';
import axios from 'axios';

class Signup2 extends React.Component{
    constructor(props)
    {
        super(props);
        this.mobileNumber = ''
    }

    validateMobileNo = (event) => {
        event.preventDefault();
        const reg=/^\d{10}$/;
        this.mobileNumber = event.target.value
        // console.log(this.mobileNumber)
    }

    componentWillUnmount () {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
          }

        localStorage.setItem("email",this.mobileNumber)

        const data = {         
          "email": this.mobileNumber,
          "login": this.mobileNumber,
        }
        
        
        axios.post("http://localhost:9001/api/admin/users", data, 
        {headers : headers}).then((response) => {
            console.log(response)
            if (response.data.activated){
                localStorage.setItem("userID", response.data.id)
                this.props.setActive("Login")
            }
          }).catch((error) => {
              console.log(error)
          })

    }

    // validateMobileNo(event){
    //     event.preventDefault();
    //     const reg=/^\d{10}$/;
    //     console.log(this.mobileNumber)
    //     console.log(event.target.value)
    //     if(!reg.test(event.target.value))
    //     {
    //         this.props.changeStateOnError(event.target.value)
    //     }
    //     else{
    //         this.props.changeStateOnNoError(event.target.value)
    //     }
    // }
    render(){
    return (
        // <div>
        // <Link to='/'><div className='box' onClick={this.props.initializeState}></div></Link>
        // <Header/>
        // <Home/>
        // <div className='card'>
        //     <span onClick={this.props.initializeState}><Back/></span>
        //     <div className='sign_up1'>Sign Up</div>
        //     <div className='enter_mobno_cont'>Continue using Mobile</div>
        //     <div className='mobno_box'>
        //     <div className='enter_mobno'>
        //     Mobile Number
        //     </div>
        //     <div className={(this.props.error===null)?'mobno':'mobno-err'}>
        //         <div className='country_code'>+91</div>
        //         <input className={(this.props.error===null)?'ph':'ph-err'} placeholder='Enter your Mobile Number' value={this.props.val} onChange={this.validateMobileNo.bind(this)}/>
        //     </div>
        //     </div>
        //     <div className='error'>{this.props.error}</div>
        //     {(this.props.error===null&&this.props.val!=='')?<Link to='/otp'><div className='continue_box'><span className='continue'>Continue</span></div></Link>:<div className='continue_box'><span className='continue'>Continue</span></div>}
        //     <div className='footer'>
        //         <span className='foot_txt'>I have already an Account</span>
        //         <Link to='/login' className='signin'>Sign In</Link>
        //     </div>
        // </div>
        // </div>
        <div>
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" onClick = { () => this.props.back('mobile') }>
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                    Sign Up
                </h5>
                <p>Continue using Mobile</p>
                </div>
                <div class="modal-body candidate-signup">
                    <div class="form-group">
                        <label for="MobileNumber" style={{ marginBottom : '8px' }}>Mobile Number</label>
                        <input onChange={(e) => this.validateMobileNo(e)} type="text" class="form-control" id="MobileNumber" placeholder="Enter your mobile number" required />
                        <div class="invalid-feedback">
                        Please provide a number.
                        </div>
                    </div>

                    <div class="btn-group">
                        {/* <button type="button" class="Social-login-btn fb-button" onClick = { () => this.props.back('mobile') }>Back</button> */}
                        <button type="button" class="Social-login-btn common-lightblue-button wid100" onClick = {() => {this.props.OtpVerfication(this.mobileNumber);this.props.setActive("Sign Up")}}>Continue</button>
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
// const mapStatetoProps = state => {
//     return {
//         error:state.error,
//         val:state.val
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         changeStateOnError:(msg)=> dispatch({type:"error",msg:msg}),
//         changeStateOnNoError:(msg)=> dispatch({type:"noerror",msg:msg}),
//         initializeState:()=> dispatch({type:"init"})
//     };
// };

// export default connect(mapStatetoProps,mapDispatchToProps)(Signup2);
export default Signup2;