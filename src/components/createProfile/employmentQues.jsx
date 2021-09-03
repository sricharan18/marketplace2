import React from "react";
import { connect } from "react-redux";

import Input from "../input/input";
import SideNav from './sideNav';
import Header from '../header/header';


class EmploymentQues extends React.Component {

    handleChange(field, event)
    {        
        console.log(event)
        var obj = {}
        obj[field] = event.target.value 
        this.props.changeState(field, obj)
    }
    render (){
        return (
            <div>
        <Header />
        <section className="mainbgColor create-profile-section">
        <div className="container-fluid">
            <div className="row">
                <SideNav additionalPage = {this.props.additionalPage} employmentPage = {this.props.employmentPage}/>
            <div class="col-md-9">
                    <div class="CreateProfileForm">
                        <div class="profileHeadSec">
                            <h4>Create Profile</h4>
                        </div>

                        <div class="FormSec employerDetails">
                            <form>
                                <div class="form-row">
                                    <Input 
                                    divClass="form-group col-md-6" label="Available From" 
                                    config = {{className :"form-control" ,
                                            placeholder : "Enter Date", 
                                            type:"date"}}
                                    value = {this.props.fields.AvailableFrom.AvailableFrom}
                                    change={this.handleChange.bind(this,"AvailableFrom")}
                                    elementType="input" 
                                    />
                                    <Input 
                                    divClass="form-group col-md-6" label="Available Till" 
                                    config = {{className :"form-control" ,
                                            placeholder : "Enter Date", 
                                            type:"date"}}
                                    value = {this.props.fields.AvailableTill.AvailableTill}
                                    change={this.handleChange.bind(this,"AvailableTill")}
                                    elementType="input" 
                                    />
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputworkType">Work Type</label>
                                        <div class="RadioBtn">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="WorkTypeOptions" id="fullTime" value="option1" onChange={this.handleChange.bind(this,"WorkType",)}/>
                                                <label class="form-check-label" for="fullTime">Full Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="WorkTypeOptions" id="partTime" value="option2" onChange={this.handleChange.bind(this,"WorkType",)}/>
                                                <label class="form-check-label" for="partTime">Part Time</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputEmployType">Employnment Type</label>
                                        <div class="RadioBtn">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="EmploynmentTypeOptions" id="permanent" value="option1" onChange={this.handleChange.bind(this,"EmploymentType")}/>
                                                <label class="form-check-label" for="permanent">Permanent</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="EmploynmentTypeOptions" id="inlineRadio2" value="option2" onChange={this.handleChange.bind(this,"EmploymentType")}/>
                                                <label class="form-check-label" for="inlineRadio2">Contract</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputWorkLocation">Work Location</label>
                                        <div class="RadioBtn">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={this.handleChange.bind(this,"WorkLocation")}/>
                                                <label class="form-check-label" for="inlineRadio1">Home</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={this.handleChange.bind(this,"WorkLocation")}/>
                                                <label class="form-check-label" for="inlineRadio2">Office</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={this.handleChange.bind(this,"WorkLocation")}/>
                                                <label class="form-check-label" for="inlineRadio2">Both</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">

                                    <Input 
                                    divClass="form-group col-md-6" label="Location Preference" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select"
                                    options = {["Select", "Blue Collar", "IT"] }
                                    value = {this.props.fields.LocationPreference.LocationPreference}
                                    change={this.handleChange.bind(this,"LocationPreference",)}
                                        />

                                    <Input 
                                    divClass="form-group col-md-6" label="Working hours" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select"
                                    options = {["Select", 4, 5, 6, 7, 8, 9, 10, 11, 12] }
                                    value = {this.props.fields.WorkingHours.WorkingHours}
                                    change={this.handleChange.bind(this,"WorkingHours",)}
                                    />
                                  </div>

                                  <div class="form-row">
                                    <Input 
                                    divClass="form-group col-md-6" label="Rate" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select"
                                    options = {["Select", 4, 5, 6, 7, 8, 9, 10, 11, 12] }
                                    value = {this.props.fields.Rate.Rate}
                                    change={this.handleChange.bind(this,"Rate",)}
                                    />

                                    <Input 
                                    divClass="form-group col-md-6" label="Rate Type" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select"
                                    options = {["Select", 4, 5, 6, 7, 8, 9, 10, 11, 12] }
                                    value = {this.props.fields.RateType.RateType}
                                    change={this.handleChange.bind(this,"RateType",)}
                                    />
                                    
                                  </div>

                            </form>
                        </div>
                      
                    </div>
                    <div class="btn-group NextFormButtons">
                        <button class="common-btn commonOutlineBtn">Draft</button>
                        <button class="common-btn commonBlueBtn" onClick={() => console.log(this.props.fields)}>Save & Next</button>
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
        fields: state.employmentQues.fields,
        errors : state.fields.errors,
        formValid : state.fields.formValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD", name:name, val:val, data : 'employmentQues'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'fields'}), 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmploymentQues);
