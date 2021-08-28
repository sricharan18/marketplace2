import React from 'react';
import Header from '../header/header';
import './createprofile.css';
import { connect } from 'react-redux';
import UploadImage from '../uploadImage/uploadImage';
import SideNav from './sideNav';
import Input from '../input/input'
class CreateProfile extends React.Component{
    sub_options = null
    handleChange(field,event)
    {
        event.preventDefault();
        if(field=='profilePic')
        {
            this.props.changeState(field,event.target.files[0])
        }
        else{
            this.props.changeState(field,event.target.value)
        }
    }
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
                className="form-control" 
                elementType="select" name="Sub-Category"
                options = {this.sub_options} onChange={this.handleChange.bind(this,"Sub_Category")}/>
    return (
        <div>
            <Header />
            <section className="mainbgColor create-profile-section">
            <div className="container-fluid">
                <div className="row">
                    <SideNav />

                    <div className="col-md-9">
                        <div className="CreateProfileForm">
                            <div className="profileHeadSec">
                                <h4>Create Profile</h4>
                            </div>

                            <div className="FormSec basicDetails">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-9">
                                            <Input 
                                            divClass="form-group" label="Name" 
                                            className="form-control" 
                                            placeholder="Enter your Name"
                                            elementType="input" 
                                            type="name" onChange={this.handleChange.bind(this,"Name")}/>
                                            <div className="form-row">
                                                <Input 
                                                divClass="form-group col-md-6" label="Email Address" 
                                                className="form-control" 
                                                placeholder="user@gmail.com"
                                                elementType="input" 
                                                type="text" disabled={true} onChange={this.handleChange.bind(this,"Email")}/>

                                                <Input 
                                                divClass="form-group col-md-6" label="Phone Number" 
                                                className="form-control" 
                                                placeholder="8976543224"
                                                elementType="input" 
                                                type="text" disabled={true} onChange={this.handleChange.bind(this,"PhoneNumber")}/>

                                            </div>
                                            <div className="form-group">
                                                <label for="inputGender">Gender</label>
                                            <div className="RadioBtn">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={this.handleChange.bind(this,"Gender")}/>
                                                        <label className="form-check-label" for="inlineRadio1">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={this.handleChange.bind(this,"Gender")}/>
                                                        <label className="form-check-label" for="inlineRadio2">Female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Other" onChange={this.handleChange.bind(this,"Gender")}/>
                                                        <label className="form-check-label" for="inlineRadio2">Other</label>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                         <UploadImage onChange={this.handleChange.bind(this,"profilePic")}/>
                                    </div>

                                    <div className="form-row">
                                        <Input 
                                        divClass="form-group col-md-4" label="Date of Birth" 
                                        className="form-control" 
                                        elementType="input" 
                                        type="date" onChange={this.handleChange.bind(this,"DOB")}/>

                                        <Input 
                                        divClass="form-group col-md-4" label="Category" 
                                        className="form-control" 
                                        elementType="select" name="Category"
                                        options = {["HealthCare", "Blue Collar", "IT"] }
                                        onChange={this.props.setCategory} />

                                        { subCategory }

                                    </div>

                                    <div className="form-row">
                                        <div className="form-row col-md-4">
                                            <Input 
                                            divClass="form-group col-md-9" label="ID Proof" 
                                            className="form-control" 
                                            elementType="select" name="ID Proof"
                                            options = {["Select", "Aadhar", "PAN"] }
                                            onChange={this.handleChange.bind(this,"ID_Proof")} />

                                            <Input 
                                            divClass="form-group col-md-3" label="ID Code" 
                                            className="form-control" 
                                            elementType="input" name="ID Proof"
                                            type="text"
                                            onChange={this.handleChange.bind(this,"ID_Code")}
                                             />

                                        </div>
                                            <Input 
                                            divClass="form-group col-md-4" label="Status" 
                                            className="form-control" 
                                            elementType="select" name="Status"
                                            options = {["Enter Status", "Blue Collar", "IT"] }
                                            onChange={this.handleChange.bind(this,"Status")}
                                             />

                                            <Input 
                                            divClass="form-group col-md-4" label="Language" 
                                            className="form-control" 
                                            elementType="select" name="Language"
                                            options = {["Enter Language", "English", "Physician", "Surgeon", 
                                            "Technical", "Others"] }
                                            onChange={this.handleChange.bind(this,"Language")}/>
                                        
                                    </div>

                                    <Input 
                                    divClass="form-group" label="Current Location" 
                                    className="form-control" 
                                    elementType="select" name="Location"
                                    options = {["Enter Language", "English", "Physician", "Surgeon", 
                                    "Technical", "Others"] }
                                    onChange={this.handleChange.bind(this,"CurrentLocation")}/>

                                </form>
                            </div>
                        
                        </div>
                        <div className="btn-group NextFormButtons">
                            <button className="common-btn commonOutlineBtn">Draft</button>
                            <button className="common-btn commonBlueBtn" onClick={()=>console.log(this.props.fields)}>Save & Next</button>
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
        fields:state.fields
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", val : event.target.value}),
        changeState:(name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);