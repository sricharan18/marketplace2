import React from 'react';
import {connect} from 'react-redux';

import Input from '../../input/input';

class WorkHistory extends React.Component {
    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z]+$/.test(value) && isValid;
        }

        if (rules.startDate) {
            if(Number(this.props.dob.split("-")[0])+15 <= Number(value.split("-")[0]))
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
                        change={this.handleChange.bind(this,"Designation" ,{})}
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
                        <Input 
                        divClass="form-group col-md-6" label="End Date" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter End Date", 
                                type:"date"}}
                        value={this.props.fields.EndDate.EndDate}
                        change={this.handleChange.bind(this,"EndDate" ,{required : true, endDate : true})}
                        inValid = {this.props.fields.EndDate.inValid}
                        error = {this.props.errors.EndDate}
                        elementType="input" 
                        />
                        <div class="form-group col-md-6">
                        <div class="form-check">
                            <label class="checkBoxContainer">Currently Studying
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
                        change={this.handleChange.bind(this,"WorkLocation" ,{required : true, workLocation : true})}
                        inValid = {this.props.fields.WorkLocation.inValid}
                        error = {this.props.errors.WorkLocation}
                        elementType="input" 
                        />
                </div>
                
                </div>
                <div class="modal-footer">
                <div class="btn-group NextFormButtons ModalNextFormButtons ">
                    <button class="common-btn commonOutlineBtn" onClick={this.props.resetDetails}>Reset</button>
                    <button class="common-btn commonBlueBtn" 
                    onClick = {this.props.formValid ? ()=>
                        {
                            this.props.addWorkDetails(this.props.fields)
                        }: () => {this.props.checkFormIsValid(); this.forceUpdate()}}>Save</button>
                </div>
                </div>
            </div>
     
        )
    }
}

const mapStateToProps = state => {
    return {
        dob:state.fields.DOB.DOB,
        fields:state.workDetails.fields,
        errors : state.workDetails.errors,
        formValid : state.workDetails.formValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val, data:'workDetails'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'workDetails'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'workDetails'}), 
        addWorkDetails : (val) => dispatch({type: "ADD_DETAILS", data : 'workDetails', val:val}),
        resetDetails : () => dispatch({type:"RESET_FORM", data : 'workDetails'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WorkHistory)