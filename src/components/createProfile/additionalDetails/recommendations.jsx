import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";
import axios from 'axios';

import Input from '../../input/input';

class Recommendations extends React.Component {
    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z\s]+$/.test(value) && isValid;
        }

        if (rules.email) {
            isValid = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) && isValid)||(value==="");
            console.log(value)
        }

        if (rules.mobile) {
            isValid = (/^([0-9]{10})$/.test(value) && isValid)||(value==="");
        }
        return isValid
    }
    handleSubmit =async (editDetailsID) => {
        console.log(this.props.formValid)
        if (this.props.formValid){
            var data = {
                name: this.props.fields.Name.Name,
                email: this.props.fields.Email.Email,
                phone: this.props.fields.PhoneNumber.PhoneNumber,
            }

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.props.token
              }
            console.log(data)
              
            // this.props.addDetails(this.props.fields)
            data["worker"] = {id : localStorage.getItem("WorkerID")}

            if(editDetailsID.id !== null){
                data["id"] = editDetailsID.id
                 await axios.put('http://localhost:9001/api/refereces/' + editDetailsID.id, data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))
            } else {
                await axios.post('http://localhost:9001/api/refereces', data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))

                this.props.addDetails(this.props.fields)
            }

            axios.get('http://localhost:9001/api/refereces/worker/'+ localStorage.getItem("WorkerID")).then((res) => 
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
        obj[field]=event.target.value
        obj['inValid']=!k
        this.props.changeState(field, obj)
    }
    render(){
        return(    
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Recommendation Details</h5>
                </div>
                <div class="modal-body candidate-signup">

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-12" label="Name" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Name", 
                                type:"text"}}
                        value = {this.props.fields.Name.Name}
                        change={this.handleChange.bind(this,"Name" ,{required : true, name : true})}
                        inValid = {this.props.fields.Name.inValid}
                        error = {this.props.errors.Name}
                        elementType="input" 
                        />
                </div>
                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-12" label="Email" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Email", 
                                type:"text"}}
                        value={this.props.fields.Email.Email}
                        change={this.handleChange.bind(this,"Email" ,{email : true})}
                        inValid = {this.props.fields.Email.inValid}
                        error = {this.props.errors.Email}
                        elementType="input" 
                        />
                </div>

                <div class="form-row">
                    <Input 
                        divClass="form-group col-md-12" label="Phone Number" 
                        config = {{className :"form-control" ,
                                placeholder : "Enter Phone Number", 
                                type:"text"}}
                        value={this.props.fields.PhoneNumber.PhoneNumber}
                        change={this.handleChange.bind(this,"PhoneNumber" ,{mobile : true})}
                        inValid = {this.props.fields.PhoneNumber.inValid}
                        error = {this.props.errors.PhoneNumber}
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
        fields:state.recommendations.fields,
        errors : state.recommendations.errors,
        formValid : state.recommendations.formValid,
        editDetailsID : state.recommendations.edit,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val, data:'recommendations'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'recommendations'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'recommendations'}), 
        addDetails : (val) => dispatch({type: "ADD_DETAILS", data : 'recommendations', val:val}),
        resetForm : () => dispatch({type:"RESET_FORM", data : 'recommendations'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "recommendations"}),
        mapDatabaseToLocal : (res) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:'recommendations', res: res})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recommendations)