import React from 'react';
import { connect } from 'react-redux';
import $ from "jquery";

import Input from '../../input/input'

class EducationalDetails extends React.Component {

    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z]+$/.test(value) && isValid;
        }

        if (rules.year) {
            isValid = /^\d{4}$/.test(value) && isValid;
        }

        if (rules.grade) {
            isValid = value[0] !== '-' && isValid;
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

        var obj = {}
        obj[field] = event.target.value 
        obj['inValid'] = !k

        this.props.changeState(field, obj)
    }

    handleSubmit() {
        console.log(this.props.formValid)
        if (this.props.formValid){
            this.props.addDetails(this.props.fields)
            $('#enterDetails').click();
        } else {
            this.forceUpdate()
        }
    }

    componentWillUnmount = () => {
        console.log("Unmounted")
        this.props.editAction()
    }

    render(){
        console.log(this.props.fields)
        return(
            <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Educational Details</h5>
                            </div>
                            <div class="modal-body candidate-signup">

                            <div class="form-row">
                                <Input 
                                divClass="form-group col-md-6" label="Degree" 
                                config = {{className :"form-control" ,
                                        placeholder : "Enter Degree", 
                                        type:"text", }}
                                value = {this.props.fields.Degree.Degree}
                                change={this.handleChange.bind(this,"Degree" ,{required : true})}
                                inValid = {this.props.fields.Degree.inValid}
                                error = {this.props.errors.Degree}
                                elementType="input" 
                                />

                                <div class="col-md-6">
                                <div class="form-row">
                                    <Input 
                                    divClass="form-group col-md-6" label="Passing Year" 
                                    config = {{className :"form-control" ,
                                            placeholder : "Enter Passing Year", 
                                            type:"text", }}
                                    value = {this.props.fields.PassingYear.PassingYear}
                                    change={this.handleChange.bind(this,"PassingYear" ,{required : true, year : true})}
                                    inValid = {this.props.fields.PassingYear.inValid}
                                    error = {this.props.errors.PassingYear}
                                    elementType="input" 
                                    />
                                    {/* <div class="form-group col-md-6">
                                    <label for="inputYear">Passing Year</label>
                                    <input id="inputYear" class="form-control" type="text" placeholder="Enter Passing Year" />
                                    </div> */}
                                    <div class="form-group col-md-6">
                                    <div class="form-check">
                                        <label class="checkBoxContainer">Currently Studying
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <Input 
                                    divClass="form-group col-md-6" label="University" 
                                    config = {{className :"form-control" ,
                                            placeholder : "Enter University", 
                                            type:"text", }}
                                    value = {this.props.fields.University.University}
                                    change={this.handleChange.bind(this,"University" ,{required : true})}
                                    inValid = {this.props.fields.University.inValid}
                                    error = {this.props.errors.University}
                                    elementType="input" 
                                    />
                                {/* <div class="form-group col-md-6">
                                <label for="inputUniversity">University</label>
                                <input id="inputUniversity" class="form-control" type="text" placeholder="Enter University Name" />
                                </div> */}
                                <Input 
                                    divClass="form-group col-md-6" label="Grade" 
                                    config = {{className :"form-control" ,
                                            placeholder : "Enter Grade", 
                                            type:"text", }}
                                    value = {this.props.fields.Grade.Grade}
                                    change={this.handleChange.bind(this,"Grade" ,{required : true, grade : true})}
                                    inValid = {this.props.fields.Grade.inValid}
                                    error = {this.props.errors.Grade}
                                    elementType="input" 
                                    />
                                {/* <div class="form-group col-md-6">
                                <label for="inputGrade">Grade</label>
                                <input id="inputGrade" class="form-control" type="text" placeholder="Enter Grade" />
                                </div> */}
                            </div>
                            
                            </div>
                            <div class="modal-footer">
                            <div class="btn-group NextFormButtons ModalNextFormButtons ">
                                <button class="common-btn commonOutlineBtn" onClick = {() => {this.props.resetForm(); }}>Reset</button>
                                <button class="common-btn commonBlueBtn" onClick = {() => {this.props.checkFormIsValid(); setTimeout(() => this.handleSubmit(),5)} }>Save</button>
                            </div>
                            </div>
                        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fields : state.educationalDetails.fields,
        errors : state.educationalDetails.errors,
        formValid : state.educationalDetails.formValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD", name:name, val:val, data : 'educationalDetails'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'educationalDetails'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'educationalDetails'}), 
        addDetails : (fields) => dispatch({type : "ADD_DETAILS", val : fields, data : 'educationalDetails'}),
        resetForm : () => dispatch({type : "RESET_FORM", data : 'educationalDetails'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "educationalDetails"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationalDetails);