import React from 'react';
import {Header} from '../../header/Header'
import {Link} from 'react-router-dom'
import './login.css';
import { Home } from '../../home/home';
import { Back } from '../../back_btn/Back';
import {connect} from 'react-redux';
import axios from 'axios';

class Login extends React.Component{
    constructor(props)
    {
        super(props)
    }

    mobileNumber = null
    validateMobileNo(event){
        event.preventDefault();
        this.mobileNumber = event.target.value
        // const reg=/^\d{10}$/;
        // if(!reg.test(event.target.value))
        // {
        //     this.props.changeStateOnError(event.target.value)
        // }
        // else{
        //     this.props.changeStateOnNoError(event.target.value)
        // }
    }

    // componentWillUnmount () {

    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'JWT fefege...'
    //       }

    //     const data = {         
    //       "email": this.mobileNumber,
    //       "login": this.mobileNumber
    //     }
        
        
    //     axios.post("http://localhost:9001/api/admin/users", data, 
    //     {headers : headers}).then((response) => {
    //         console.log("Login",response)
    //         // localStorage.setItem("userID", response.data.id)
    //         if (response.data.activated === false){
    //             this.props.setActive("Sign Up")
    //         }
    //       }).catch((error) => {
    //           console.log(error)
    //       })

    // }
    render(){
    return (
        // <div>
        // <div className='card'>
        //     {/* <span onClick={this.props.initializeState}><Back/></span> */}
        //     <div className='_login'>Log In</div>
        //     <div className='continue_using_mobile'>Continue using Mobile</div>
        //     <div className='phno'>Phone Number</div>
        //     <div className={(this.props.error===null)?'mobno':'mobno-err'}>
        //         <div className='country_code'>+91</div>
        //         <input className={(this.props.error===null)?'ph':'ph-err'} placeholder='Enter your Mobile Number' value={this.props.val} onChange={this.validateMobileNo.bind(this)}/>
        //     </div>
        //     <div className='error'>{this.props.error}</div>
        //     {(this.props.error===null&&this.props.val!=='')?<Link to='/otp'><div className='cont_box'><span className='cont'>Continue</span></div></Link>:<div className='cont_box'><span className='cont'>Continue</span></div>}
        //     <div className='footer'>
        //         <span className='foot_txt'>I don't have an Account</span>
        //         <Link to='/signup' className='sign_up'>Sign Up</Link>
        //     </div>
        // </div>
        // </div>
        <div>
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Log In</h5>
                {/* <p>Continue using Mobile</p> */}
                </div>
                <div class="modal-body candidate-signup">
                    <div class="form-group">
                        <label for="MobileNumber" style={{ marginBottom : '8px' }}>Email</label>
                        <input onChange={(e) => this.validateMobileNo(e)} type="text" class="form-control" id="MobileNumber" placeholder="Enter your email" required />
                        <div class="invalid-feedback">
                        Please provide valid email.
                        </div>
                    </div>

                    <div class="btn-group">
                        {/* <button type="button" class="Social-login-btn fb-button" onClick = { () => this.props.back('mobile') }>Back</button> */}
                        <button type="button" class="Social-login-btn Google-button" style={{width: '100%'}} onClick = {() => {this.props.OtpVerfication(this.mobileNumber); this.props.setActive("Login")}}>Continue</button>
                    </div>
                </div>
                <div class="modal-footer">
                <p>Don't have Account? <a href="#" onClick={this.props.click}>Sign Up</a></p>
                </div>
        </div>
        </div>
    )
    }
}
const mapStatetoProps = state => {
    return {
        error:state.error,
        val:state.val
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeStateOnError:(msg)=> dispatch({type:"error",msg:msg}),
        changeStateOnNoError:(msg)=> dispatch({type:"noerror",msg:msg}),
        initializeState:()=> dispatch({type:"init"})
    };
};

export default connect(mapStatetoProps,mapDispatchToProps)(Login);