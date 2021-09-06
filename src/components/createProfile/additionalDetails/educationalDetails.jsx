import React from 'react';
import { connect } from 'react-redux';
import $ from "jquery";
import axios from "axios";

import Input from '../../input/input'

class EducationalDetails extends React.Component {

    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z\s]+$/.test(value) && isValid;
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

    handleSubmit = async (editDetailsID) => {
        if (this.props.formValid){
            var data = {
                degreeName: this.props.fields.Degree.Degree,
                institute: this.props.fields.University.University,
                isComplete: this.props.fields.CurrentlyStudying.CurrentlyStudying,
                yearOfPassing: this.props.fields.PassingYear.PassingYear,
                marks: this.props.fields.Grade.Grade,
            }

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.props.token
              }
            
            console.log(data)

            $('#enterDetails').click();

            if(editDetailsID.id !== null){
                data["id"] = editDetailsID.id
                data["worker"] = {id : localStorage.getItem("WorkerID")}
                await axios.put('http://localhost:9001/api/educations/' + editDetailsID.id, data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))
            } else {
                data["worker"] = {id : localStorage.getItem("WorkerID")}
                await axios.post('http://localhost:9001/api/educations', data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))

                this.props.addDetails(this.props.fields)
            }

            await axios.get('http://localhost:9001/api/educations/worker/'+ localStorage.getItem("WorkerID")).then((res) => 
            {
                this.props.mapDatabaseToLocal(res.data)
            })

            
        } else {
            this.forceUpdate()
        }
    }

    render(){
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
                            </div>
                            
                            </div>
                            <div class="modal-footer">
                            <div class="btn-group NextFormButtons ModalNextFormButtons ">
                                <button class="common-btn commonOutlineBtn" onClick = {() => {this.props.resetForm(); }}>Reset</button>
                                <button class="common-btn commonBlueBtn" onClick = {() => {this.props.checkFormIsValid(); setTimeout(() => this.handleSubmit(this.props.editDetailsID),5)} }>Save</button>
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
        editDetailsID : state.educationalDetails.edit,
        token: state.token,
        workerID : state.workerID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD", name:name, val:val, data : 'educationalDetails'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'educationalDetails'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'educationalDetails'}), 
        addDetails : (fields) => dispatch({type : "ADD_DETAILS", val : fields, data : 'educationalDetails'}),
        resetForm : () => dispatch({type : "RESET_FORM", data : 'educationalDetails'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "educationalDetails"}),
        mapDatabaseToLocal : (res) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:'educationalDetails', res: res})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationalDetails);