import React, { Component } from 'react';
import {Header} from '../../header/Header'
import {Link} from 'react-router-dom'
import './signup.css';
import { Home } from '../../home/home';
import {Back} from '../../back_btn/Back'

class SignupAs extends Component{
    constructor(props)
    {
        super(props);
    }


    render(){
    return (
        <div>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Sign Up</h5>
                    <p style={{ marginBottom: 0 }}>Who are you?</p>
                        {/* <!-- <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> --> */}
                </div>
                <div className="modal-body">
                <div className="signUpCategory">
                    <a onClick={this.props.candidate} style={{ textDecoration: 'none' }} className="Category" data-toggle="modal" data-target="#candidateSignUp">
                    <div className="CategoryIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#007BFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"/></svg>
                        </div> 
                    <div className="categoryName">
                        <h6>Candidate</h6>
                        <p>I am a freelancer or independent contractor looking for jobs</p>
                    </div>
                    </a>
                    <a href="#" style={{ textDecoration: 'none' }} className="Category">
                        <div className="CategoryIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#007BFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                        </div> 
                        <div className="categoryName">
                            <h6>Employer</h6>
                            <p>I have a company, looking for talents</p>
                        </div>
                    </a>
                    <a href="#" style={{ textDecoration: 'none' }} className="Category">
                        <div className="CategoryIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#007BFF"><rect fill="none" height="24" width="24"/><path d="M16,7c0,2.21-1.79,4-4,4S8,9.21,8,7s1.79-4,4-4S16,4.79,16,7z M7,13c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S9.21,13,7,13 z M17,13c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S19.21,13,17,13z"/></svg>
                        </div> 
                        <div className="categoryName">
                            <h6>Vendor</h6>
                            <p>I am a supplier, needs to submit my resumes</p>
                        </div>
                    </a>
                </div>
                </div>
                <div className="modal-footer">
                <p>I have already an Account <a href="#">Sign In</a></p>
                </div>
            </div>
        </div>
    )
    }
}
 
export default SignupAs;