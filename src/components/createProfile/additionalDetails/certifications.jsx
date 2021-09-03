import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";

import Input from '../../input/input';

class Certifications extends React.Component {
    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if(rules.issueYear){
            if(Number("2000-06-16".split("-")[0])+10 <= Number(value))
            {
                isValid=/^\d{4}$/.test(value) && isValid;
            }
            else{
                isValid=false;
            }
        }

        if(rules.expiryYear){
            if(Number(this.props.fields.IssueYear.IssueYear) <= Number(value))
            {
                isValid=/^\d{4}$/.test(value) && isValid;
            }
            else{
                isValid=false;
            }
        }

        return isValid
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
    handleChange(field, rules, event)
    {
        let k = this.handleValidation(event.target.value, rules)
        if (k){
            this.props.changeErrorState(field, true)
        } else {
            this.props.changeErrorState(field, false)
        }
        let obj={}
        obj[field]=event.target.value
        obj['inValid']=!k
        this.props.changeState(field, obj)
    }
    render(){
        return(    
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Certification Details</h5>
                </div>
                <div class="modal-body candidate-signup">

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-6" label="Name" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Certification Name", 
                                type:"text"}}
                        value = {this.props.fields.Name.Name}
                        change={this.handleChange.bind(this,"Name" ,{required : true,})}
                        inValid = {this.props.fields.Name.inValid}
                        error = {this.props.errors.Name}
                        elementType="input" 
                        />
                    <Input 
                        divClass="form-group col-md-6" label="Issuer" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Issuer", 
                                type:"text"}}
                        value={this.props.fields.Issuer.Issuer}
                        change={this.handleChange.bind(this,"Issuer" ,{required : true})}
                        inValid = {this.props.fields.Issuer.inValid}
                        error = {this.props.errors.Issuer}
                        elementType="input" 
                        />
                </div>

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-6" label="Issue Year" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Issue Year", 
                                type:"text"}}
                        value={this.props.fields.IssueYear.IssueYear}
                        change={this.handleChange.bind(this,"IssueYear" ,{required : true, issueYear : true})}
                        inValid = {this.props.fields.IssueYear.inValid}
                        error = {this.props.errors.IssueYear}
                        elementType="input" 
                        />
                        <Input 
                        divClass="form-group col-md-6" label="Expiry Year" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Expiry Year", 
                                type:"text"}}
                        value={this.props.fields.ExpiryYear.ExpiryYear}
                        change={this.handleChange.bind(this,"ExpiryYear" ,{expiryYear : true})}
                        inValid = {this.props.fields.ExpiryYear.inValid}
                        error = {this.props.errors.ExpiryYear}
                        elementType="input" 
                        />
                </div>
                
                </div>
                <div class="modal-footer">
                <div class="btn-group NextFormButtons ModalNextFormButtons ">
                    <button class="common-btn commonOutlineBtn" onClick={this.props.resetForm}>Reset</button>
                    <button class="common-btn commonBlueBtn" 
                    onClick = {() => {this.props.checkFormIsValid(); setTimeout(() => this.handleSubmit(),5)}}>Save</button>
                </div>
                </div>
            </div>
     
        )
    }
}

const mapStateToProps = state => {
    return {
        fields:state.certifications.fields,
        errors : state.certifications.errors,
        formValid : state.certifications.formValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val, data:'certifications'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'certifications'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'certifications'}), 
        addDetails : (val) => dispatch({type: "ADD_DETAILS", data : 'certifications', val:val}),
        resetForm : () => dispatch({type:"RESET_FORM", data : 'certifications'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "certifications"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Certifications)