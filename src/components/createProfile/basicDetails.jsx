import React from 'react';
import './createprofile.css';
import { connect } from 'react-redux';

import UploadImage from '../uploadImage/uploadImage';
import Input from '../input/input'

class BasicDetails extends React.Component{
    sub_options = null

    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z]+$/.test(value) && isValid;
        }

        if (rules.email) {
            isValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) && isValid;
        }

        if (rules.mobile) {
            isValid = /^([0-9]{10})$/.test(value) && isValid;
        }

        if (rules.select) {
            isValid = value !== "Select" && isValid;
        }
        return isValid
    }

    handleChange(field, rules, event)
    {
        let k = this.handleValidation(event.target.value, rules)
        if (k){
            this.props.changeErrorState(field, true)
        } else {
            this.props.changeErrorState(field, false)
        }
        
        if(field === 'profilePic')
        {
            const replacer = [];
            for (const key in event.target.files[0]) {
                replacer.push(key);
            }
            this.props.changeState(field,JSON.stringify(event.target.files[0], replacer))
        }
        else{
            this.props.changeState(field, {field : event.target.value, inValid : !k})
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
                config = {{className :"form-control" ,}}
                elementType="select"
                options = {this.sub_options} change={this.handleChange.bind(this,"Sub_Category", {})}/>
    return (

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
                                            config = {{className :"form-control" ,
                                                    placeholder : "Enter your Name", 
                                                    type:"name"}}
                                            change={this.handleChange.bind(this,"Name" ,{required : true, name : true})}
                                            inValid = {this.props.fields.Name.inValid}
                                            error = {this.props.errors.Name}
                                            elementType="input" 
                                            />

                                            <div className="form-row">
                                                <Input 
                                                divClass="form-group col-md-6" label="Email Address" 
                                                config = {{className :"form-control" ,
                                                    placeholder : "user@gmail.com", 
                                                    type:"text"}}
                                                elementType="input" 
                                                change={this.handleChange.bind(this,"Email" ,
                                                {required : true, email : true})} 
                                                error = {this.props.errors.Email}
                                                inValid = {this.props.fields.Email.inValid}
                                                />

                                                <Input 
                                                divClass="form-group col-md-6" label="Phone Number" 
                                                config = {{className :"form-control" ,
                                                    placeholder : "+91 XXX-XXX-XXXX", 
                                                    type:"text"}}
                                                elementType="input" 
                                                inValid = {this.props.fields.PhoneNumber.inValid}
                                                error = {this.props.errors.PhoneNumber}
                                                change={this.handleChange.bind(this,"PhoneNumber",{required : true, mobile : true})}/>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputGender">Gender</label>
                                            <div className="RadioBtn">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={this.handleChange.bind(this,"Gender", {})}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={this.handleChange.bind(this,"Gender", {})}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Other" onChange={this.handleChange.bind(this,"Gender", {})}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Other</label>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                         <UploadImage onChange={this.handleChange.bind(this,"profilePic", {})}/>
                                    </div>

                                    <div className="form-row">
                                        <Input 
                                        divClass="form-group col-md-4" label="Date of Birth" 
                                        config = {{className :"form-control" , 
                                                    type:"date"}}
                                        elementType="input" 
                                        change={this.handleChange.bind(this,"DOB",{required : true})}
                                        inValid = {this.props.fields.DOB.inValid}
                                        error = {this.props.errors.DOB}/>

                                        <Input 
                                        divClass="form-group col-md-4" label="Category" 
                                        config = {{className :"form-control form-select" ,}}
                                        elementType="select"
                                        options = {["HealthCare", "Blue Collar", "IT"] }
                                        change={this.props.setCategory}/>

                                        { subCategory }

                                    </div>

                                    <div className="form-row">
                                        <div className="form-row col-md-4">
                                            <Input 
                                            divClass="form-group col-md-9" label="ID Proof" 
                                            config = {{className :"form-control" ,}}
                                            elementType="select"
                                            options = {["Select", "SSN", "Passport"] }
                                            inValid = {this.props.fields.ID_Proof.inValid}
                                            change={this.handleChange.bind(this,"ID_Proof",{select : true})} />

                                            <Input 
                                            divClass="form-group col-md-3" label="ID Code" 
                                            config = {{className :"form-control" , type: "text"}}
                                            elementType="input"
                                            inValid = {this.props.fields.ID_Code.inValid}
                                            change={this.handleChange.bind(this,"ID_Code",{required : true})}
                                             />

                                        </div>
                                            <Input 
                                            divClass="form-group col-md-4" label="Status" 
                                            config = {{className :"form-control" ,}}
                                            elementType="select"
                                            options = {["Select", "Blue Collar", "IT"] }
                                            inValid = {this.props.fields.Status.inValid}
                                            change={this.handleChange.bind(this,"Status",{select : true})}
                                             />

                                            <Input 
                                            divClass="form-group col-md-4" label="Language" 
                                            config = {{className :"form-control" ,}}
                                            elementType="select" 
                                            options = {["Select", "English", "Physician", "Surgeon", 
                                            "Technical", "Others"] }
                                            inValid = {this.props.fields.Language.inValid}
                                            change={this.handleChange.bind(this,"Language",{select : true})}/>
                                        
                                    </div>

                                    <Input 
                                    divClass="form-group" label="Current Location" 
                                    config = {{className :"form-control" ,}}
                                    elementType="select" name="Location"
                                    options = {["Select", "English", "Physician", "Surgeon", 
                                    "Technical", "Others"] }
                                    inValid = {this.props.fields.CurrentLocation.inValid}
                                    change={this.handleChange.bind(this,"CurrentLocation",{select : true})}/>

                                </form>
                            </div>
                        
                        </div>
                        <div className="btn-group NextFormButtons">
                            <button className="common-btn commonOutlineBtn">Draft</button>
                            <button className="common-btn commonBlueBtn" 
                            onClick = {this.props.formValid ? ()=>
                                {localStorage.setItem("Basic Details",JSON.stringify(this.props.fields))
                               this.props.goToAdditionalDetails(); }: () => {this.props.checkFormIsValid(); this.forceUpdate()}}>
                                Save & Next
                            </button>
                        </div>
                    </div>
        
    )
    }
}

const mapStateToProps = state => {
    return {
        sel : state.CategorySelected,
        fields: state.fields,
        errors : state.fields.errors,
        formValid : state.fields.formValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", val : event.target.value}),
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val,data : 'fields'}),
        goToAdditionalDetails : () => dispatch({type: "ADDITIONAL_DETAILS"}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'fields'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'fields'}), 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BasicDetails);