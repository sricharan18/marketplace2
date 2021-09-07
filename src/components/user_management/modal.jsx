import React from 'react';

import SignupAs from './signup/SignupAs';
import Signup from './signup/Signup';
import Signup2 from './signup/Signup2';
import OTP from './otp/otp';
import Success from './signup/Success';
import Login from './login/Login';

class Modal extends React.Component{
    state = {
        candidate : false,
        mobile : false,
        otp : false,
        success : false,
        mobNum : '',
        editable : false,
        login : false,
        signup: false,
        active: "Sign Up"
    }

    candidateSignup = () => {
        this.setState({ candidate: true})
    }

    signupMobile = () => {
        // const s = [...this.state.signup]
        // s[0].mobile = true;
        // const s = this.state.signup[0].mobile
        this.setState({ mobile : true })
    }

    OtpVerfication = async (mobNum1) => {
        await this.setState({ otp : true, mobNum: mobNum1 }, () => {})
        console.log(this.state.mobNum)
    }

    success = () => {
        this.setState({ success :  true})
    }

    editableTextbox = (val) => {
        const obj  = { }
        obj['editable'] = val
        this.setState(obj) 
    }

    back = (val) => {
        const obj  = { }
        obj[val] = false
        this.setState(obj)
    }

    goToSignup = async () => {
        await this.setState({signup : true, login : false})
    }

    setActive = (val) => {
        this.setState({active : val})
    }

    render() {
        let variable = null

        if(this.props.signUp === "true"){
            variable = <SignupAs candidate={this.candidateSignup}/>
            
        } else if(this.props.login === "true"){
            variable = <Login click={this.goToSignup} OtpVerfication={this.OtpVerfication} setActive={this.setActive}/>
        }

        if(this.state.signup === true){
            variable = <SignupAs candidate={this.candidateSignup}/>
        }

        if (this.state.candidate === true) {
            variable = <Signup signupMobile = { this.signupMobile } back = { this.back }/>
        }
        if (this.state.mobile === true) {
            // variable = <Signup2 back = { this.back } OtpVerfication = { this.OtpVerfication } mobNum = { this.setMobNum } />
            variable = <Signup2 back = { this.back } OtpVerfication = { this.OtpVerfication } setActive={this.setActive}/>
        }
        if (this.state.otp === true){
            variable = <OTP back = { this.back } mobNum={this.state.mobNum} editableTextbox = {this.editableTextbox} editable = { this.state.editable } success = { this.success } active={this.state.active}/>
        }
        if (this.state.success === true) {
            variable = <Success />
        }

        return (
            <div>
                { variable }
            </div>
        )
    }
}

export default Modal;