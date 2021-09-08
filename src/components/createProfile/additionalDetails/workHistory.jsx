import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";
import axios from 'axios';

import Input from '../../input/input';

class WorkHistory extends React.Component {
    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z\s]+$/.test(value) && isValid;
        }

        if (rules.startDate) {
            if(Number('2000-06-16'.split("-")[0])+15 <= Number(value.split("-")[0]))
            {
                isValid=true;
            }
            else{
                isValid=false;
            }
        }
        if (rules.endDate) {
            if(Date.parse(this.props.fields.StartDate.StartDate) <= Date.parse(value))
            {
                isValid=true;
            }
            else{
                isValid=false;
            }
        }
        return isValid
    }
    handleSubmit = async(editDetailsID) => {
        console.log(this.props.formValid)
        if (this.props.formValid){
            var data = {
                companyName: this.props.fields.EmployerName.EmployerName,
                jobTitle: this.props.fields.Designation.Designation,
                startDate: this.props.fields.StartDate.StartDate,
                endDate: this.props.fields.EndDate.EndDate,
                isCurrent: this.props.fields.CurrentlyStudying.CurrentlyStudying,
                employeeLocations: this.props.fields.WorkLocation.WorkLocation,
            }

            const headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer '+ this.props.token
              }

            console.log(data)

            data["worker"] = {id : localStorage.getItem("WorkerID")}
              
            // this.props.addDetails(this.props.fields)

            if(editDetailsID.id !== null){
                data["id"] = editDetailsID.id
                
                 await axios.put('http://localhost:9001/api/employments/' + editDetailsID.id, data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))
            } else {
                await axios.post('http://localhost:9001/api/employments', data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))

                this.props.addDetails(this.props.fields)
            }

            axios.get('http://localhost:9001/api/employments/worker/'+ localStorage.getItem("WorkerID")).then((res) => 
            {
                this.props.mapDatabaseToLocal(res.data)
            })
            $('#enterDetails').click();
        } else {
            this.forceUpdate()
        }
    }
    handleChange(field, rules, event)
    {
        let k = this.handleValidation(event.target.value, rules)
        if (k){
            this.props.changeErrorState(field, true)
        } else {
            this.props.changeErrorState(field, false)
        }
        let obj={}
        if(event.target.type==='checkbox')
        {
            obj[field]=event.target.checked
        }
        else{
            obj[field]=event.target.value
        }
        obj['inValid']=!k
        this.props.changeState(field, obj)
    }
    render(){
        return(    
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Work Details</h5>
                </div>
                <div class="modal-body candidate-signup">

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-6" label="Employer Name" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Employer Name", 
                                type:"text"}}
                        value = {this.props.fields.EmployerName.EmployerName}
                        change={this.handleChange.bind(this,"EmployerName" ,{required : true, name : true})}
                        inValid = {this.props.fields.EmployerName.inValid}
                        error = {this.props.errors.EmployerName}
                        elementType="input" 
                        />
                    <Input 
                        divClass="form-group col-md-6" label="Designation" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Designation", 
                                type:"text"}}
                        value={this.props.fields.Designation.Designation}
                        change={this.handleChange.bind(this,"Designation" ,{required : true})}
                        inValid = {this.props.fields.Designation.inValid}
                        error = {this.props.errors.Designation}
                        elementType="input" 
                        />
                </div>

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-6" label="Start Date" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Start Date", 
                                type:"date"}}
                        value={this.props.fields.StartDate.StartDate}
                        change={this.handleChange.bind(this,"StartDate" ,{required : true, startDate : true})}
                        inValid = {this.props.fields.StartDate.inValid}
                        error = {this.props.errors.StartDate}
                        elementType="input" 
                        />
                    <div class=" col-md-6">
                    <div class="form-row">
                    {!this.props.fields.CurrentlyStudying.CurrentlyStudying&&<Input 
                        divClass="form-group col-md-6" label="End Date" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter End Date", 
                                type:"date"}}
                        value={this.props.fields.EndDate.EndDate}
                        change={this.handleChange.bind(this,"EndDate" ,{required : true, endDate : true})}
                        inValid = {this.props.fields.EndDate.inValid}
                        error = {this.props.errors.EndDate}
                        elementType="input"
                        />}
                        <div class="form-group col-md-6">
                        <div class="form-check">
                            <label class="checkBoxContainer">Currently Working
                                <input type="checkbox" checked={this.props.fields.CurrentlyStudying.CurrentlyStudying} onChange={this.handleChange.bind(this,"CurrentlyStudying",{})}/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-12" label="Work Location" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Work Location", 
                                type:"text"}}
                        value={this.props.fields.WorkLocation.WorkLocation}
                        change={this.handleChange.bind(this,"WorkLocation" ,{required : true,})}
                        inValid = {this.props.fields.WorkLocation.inValid}
                        error = {this.props.errors.WorkLocation}
                        elementType="input" 
                        />
                </div>
                
                </div>
                <div class="modal-footer">
                <div class="btn-group NextFormButtons ModalNextFormButtons ">
                    <button class="common-btn commonOutlineBtn" onClick={this.props.resetForm}>Reset</button>
                    <button class="common-btn commonBlueBtn" 
                    onClick = {() => {this.props.checkFormIsValid(); setTimeout(() => this.handleSubmit(this.props.editDetailsID),5)}}>Save</button>
                </div>
                </div>
            </div>
     
        )
    }
}

const mapStateToProps = state => {
    return {
        fields:state.workDetails.fields,
        errors : state.workDetails.errors,
        formValid : state.workDetails.formValid,
        editDetailsID : state.workDetails.edit,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val, data:'workDetails'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'workDetails'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'workDetails'}), 
        addDetails : (val) => dispatch({type: "ADD_DETAILS", data : 'workDetails', val:val}),
        resetForm : () => dispatch({type:"RESET_FORM", data : 'workDetails'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "workDetails"}),
        mapDatabaseToLocal : (res) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:'workDetails', res: res})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WorkHistory)