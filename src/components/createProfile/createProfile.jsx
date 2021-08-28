import React from 'react';
import Header from '../header/header';
import './createprofile.css';
import { connect } from 'react-redux';

import SideNav from './sideNav';
import Input from '../input/input'

class CreateProfile extends React.Component{

    sub_options = null

    render(){

        if (this.props.sel === "HealthCare") {
            this.sub_options = ["Administration", "Nursing", "Physician", "Surgeon", "Technical", "Others"]
        } else if (this.props.sel === "Blue Collar") {
            this.sub_options = ["Driver", "Plumber", "Others"]
        } else {
            this.sub_options = ["FrontEnd", "BackEnd", "Full Stack", "Data Science", "Dev-Ops", "Cyber Security", "Others"]
        }

        const subCategory = <Input 
                divClass="form-group col-md-4" label="Sub-Category" 
                class="form-control" 
                elementType="select" name="Sub-Category"
                options = {this.sub_options} />
    return (
        <div>
            <Header />
            <section class="mainbgColor create-profile-section">
            <div class="container-fluid">
                <div class="row">
                    <SideNav />

                    <div class="col-md-9">
                        <div class="CreateProfileForm">
                            <div class="profileHeadSec">
                                <h4>Create Profile</h4>
                            </div>

                            <div class="FormSec basicDetails">
                                <form>
                                    <div class="form-row">
                                        <div class="col-md-9">
                                            <Input 
                                            divClass="form-group" label="Name" 
                                            class="form-control" 
                                            placeholder="Enter your Name"
                                            elementType="input" 
                                            type="name"/>

                                            <div class="form-row">
                                                <Input 
                                                divClass="form-group col-md-6" label="Email Address" 
                                                class="form-control" 
                                                placeholder="user@gmail.com"
                                                elementType="input" 
                                                type="text" disabled={true}/>

                                                <Input 
                                                divClass="form-group col-md-6" label="Phone Number" 
                                                class="form-control" 
                                                placeholder="8976543224"
                                                elementType="input" 
                                                type="text" disabled={true}/>

                                            </div>
                                            <div class="form-group">
                                                <label for="inputGender">Gender</label>
                                            <div class="RadioBtn">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                        <label class="form-check-label" for="inlineRadio2">Other</label>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="profilePic">
                                                <div class="uploadProfilePic">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#007BFF">
                                                        <path d="M24 24H0V0h24v24z" fill="none"/><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/>
                                                    </svg>
                                                    <h6>+ Choose Photo</h6>
                                                    <span>Please select the photo you want to upload</span>
                                                    <input type="file" class="form-control-file choose-pic" id="exampleFormControlFile1" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <Input 
                                        divClass="form-group col-md-4" label="Date of Birth" 
                                        class="form-control" 
                                        elementType="input" 
                                        type="date"/>

                                        <Input 
                                        divClass="form-group col-md-4" label="Category" 
                                        class="form-control" 
                                        elementType="select" name="Category"
                                        options = {["HealthCare", "Blue Collar", "IT"] }
                                        onChange={this.props.setCategory} />

                                        { subCategory }

                                    </div>

                                    <div class="form-row">
                                        <div class="form-row col-md-4">
                                            <Input 
                                            divClass="form-group col-md-9" label="ID Proof" 
                                            class="form-control" 
                                            elementType="select" name="ID Proof"
                                            options = {["Select", "Aadhar", "PAN"] }
                                             />

                                            <Input 
                                            divClass="form-group col-md-3" label="ID Code" 
                                            class="form-control" 
                                            elementType="input" name="ID Proof"
                                            type="text"
                                             />

                                        </div>
                                            <Input 
                                            divClass="form-group col-md-4" label="Status" 
                                            class="form-control" 
                                            elementType="select" name="Status"
                                            options = {["Enter Status", "Blue Collar", "IT"] }
                                             />

                                            <Input 
                                            divClass="form-group col-md-4" label="Language" 
                                            class="form-control" 
                                            elementType="select" name="Language"
                                            options = {["Enter Language", "English", "Physician", "Surgeon", 
                                            "Technical", "Others"] }/>
                                        
                                    </div>

                                    <Input 
                                    divClass="form-group" label="Current Location" 
                                    class="form-control" 
                                    elementType="select" name="Location"
                                    options = {["Enter Language", "English", "Physician", "Surgeon", 
                                    "Technical", "Others"] }/>

                                </form>
                            </div>
                        
                        </div>
                        <div class="btn-group NextFormButtons">
                            <button class="common-btn commonOutlineBtn">Draft</button>
                            <button class="common-btn commonBlueBtn">Save & Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
    }
}

const mapStateToProps = state => {
    return {
        sel : state.CategorySelected,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", val : event.target.value})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);