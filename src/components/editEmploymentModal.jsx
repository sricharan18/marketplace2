import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import $ from "jquery";

import Input from "./input/input";


class EditEmploymentModal extends React.Component {

    handleChange(field, event)
    {        
        var obj = {}
        obj[field] = event.target.value 
        this.props.changeState(field, obj)
    }
    
    handleSubmit(){
        var monthlyRate = 0
        var hourlyRate = 0
        var dailyRate = 0
        var engagementType = null, employmentType = null, locationType = null
        switch (this.props.fields.RateType.RateType){
            
            case "Daily Rate":
                dailyRate = Number(this.props.fields.Rate.Rate)
                break;
            case "Monthly Rate":
                monthlyRate = Number(this.props.fields.Rate.Rate)
                break;
            case  "Hourly Rate":
                hourlyRate = Number(this.props.fields.Rate.Rate)
                break;
            default:
                break;
        }

        if (this.props.fields.WorkType.WorkType){engagementType = this.props.fields.WorkType.WorkType}
        if (this.props.fields.EmploymentType.EmploymentType){employmentType = this.props.fields.EmploymentType.EmploymentType}
        if (this.props.fields.WorkLocation.WorkLocation){locationType = this.props.fields.WorkLocation.WorkLocation}
        var data = {
            availableFrom: this.props.fields.AvailableFrom.AvailableFrom,
            availableTo: this.props.fields.AvailableTill.AvailableTill,
            engagementType: engagementType,
            employmentType: employmentType,
            locationType: locationType,
            hourPerDay: Number(this.props.fields.WorkingHours.WorkingHours),
            monthlyRate : monthlyRate,
            dailyRate : dailyRate,
            hourlyRate : hourlyRate,
            worker : {
                id : localStorage.getItem("WorkerID"),
            },
            subCategory : JSON.parse(localStorage.getItem("subCat"))
        }

        console.log(data)


        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer '+ this.props.token
          }
          

        axios.post('http://localhost:9001/api/job-preferences/', data, {headers : headers})
        .then((response) => {
            console.log(response)
            console.log({city : this.props.fields.LocationPreference.LocationPreference, })
            axios.post('http://localhost:9001/api/locations', 
        {city : this.props.fields.LocationPreference.LocationPreference}, {headers : headers})
        .then((res) => {
            console.log(res); console.log({worker : response.data, location : res.data, prefrenceOrder : 1}); axios.post('http://localhost:9001/api/location-prefrences', {worker : response.data, location : res.data, prefrenceOrder : 1})})
            .catch((e) => console.log(e))
        }).catch((e) => console.log(e))

        $('#enterDetails').click();
    }

    render (){
        return (
            <div class="modal-content">
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
                                                <input class="form-check-input" type="radio" name="WorkTypeOptions" id="fullTime" value="FullTime" checked={this.props.fields.WorkType.WorkType=== "FullTime"} onChange={this.handleChange.bind(this,"WorkType",)}/>
                                                <label class="form-check-label" for="fullTime">Full Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="WorkTypeOptions" id="partTime" value="PartTime" checked={this.props.fields.WorkType.WorkType=== "PartTime"} onChange={this.handleChange.bind(this,"WorkType",)}/>
                                                <label class="form-check-label" for="partTime">Part Time</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputEmployType">Employnment Type</label>
                                        <div class="RadioBtn">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="EmploynmentTypeOptions" id="permanent" value="Permanent" checked={this.props.fields.EmploymentType.EmploymentType=== "Permanent"} onChange={this.handleChange.bind(this,"EmploymentType")}/>
                                                <label class="form-check-label" for="permanent">Permanent</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="EmploynmentTypeOptions" id="inlineRadio2" value="Contractual" checked={this.props.fields.EmploymentType.EmploymentType=== "Contractual"} onChange={this.handleChange.bind(this,"EmploymentType")}/>
                                                <label class="form-check-label" for="inlineRadio2">Contract</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputWorkLocation">Work Location</label>
                                        <div class="RadioBtn">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="WorkFromHome" checked={this.props.fields.WorkLocation.WorkLocation=== "WorkFromHome"} onChange={this.handleChange.bind(this,"WorkLocation")}/>
                                                <label class="form-check-label" for="inlineRadio1">Home</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="WorkFromOffice" checked={this.props.fields.WorkLocation.WorkLocation=== "WorkFromOffice"} onChange={this.handleChange.bind(this,"WorkLocation")}/>
                                                <label class="form-check-label" for="inlineRadio2">Office</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Both" checked={this.props.fields.WorkLocation.WorkLocation=== "Both"} onChange={this.handleChange.bind(this,"WorkLocation")}/>
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
                                    options = {["Select", "Hyderabad", "Noida",] }
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
                                    options = {["Select", "Daily Rate", "Monthly Rate", "Hourly Rate"] }
                                    value = {this.props.fields.RateType.RateType}
                                    change={this.handleChange.bind(this,"RateType",)}
                                    />
                                    
                                  </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                        <div class="btn-group NextFormButtons ModalNextFormButtons ">
                            <button class="common-btn commonBlueBtn" 
                            onClick = {() => {setTimeout(() => this.handleSubmit(),5)}}>Save</button>
                        </div>
                        </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fields: state.employmentQues.fields,
        errors : state.fields.errors,
        formValid : state.fields.formValid,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD", name:name, val:val, data : 'employmentQues'}), 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEmploymentModal);