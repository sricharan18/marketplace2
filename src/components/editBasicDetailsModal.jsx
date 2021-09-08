import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import $ from "jquery";

import Input from "./input/input";
import UploadImage from "./uploadImage/uploadImage";


class EditBasicDetailsModal extends React.Component {
    sub_options = null

    handleValidation(value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.name) {
            isValid = /^[A-Za-z\s]+$/.test(value) && isValid;
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
            var obj = {}
            obj[field] = event.target.value 
            obj['inValid'] = !k
            this.props.changeState(field, obj)
        }
    }
    componentDidMount(){
        // try{
        //     $('.modal-backdrop').hide();
        //     // $('#signUp').click();
        //   } catch(err){
  
        //   }
        if (localStorage.getItem("WorkerID") !== null){
            // axios.get('http://localhost:9001/api/workers/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
            // {
                
            // })
            axios.get('http://localhost:9001/api/workers/profile/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
                {
                console.log(res)
                this.props.mapDatabaseToLocal("fields",res.data.worker,)
                })

        } else {
            this.props.getEmail()
        }

    }

    handleSubmit = async () => {
         
        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer '+ localStorage.getItem("token")
          }
 
        if (this.props.formValid){
            var data = {
                firstName: this.props.fields.Name.Name,
                email: this.props.fields.Email.Email,
                primaryPhone: this.props.fields.PhoneNumber.PhoneNumber,
                gender: this.props.fields.Gender.Gender,
                dateOfBirth: this.props.fields.DOB.DOB,
                idProof: this.props.fields.ID_Proof.ID_Proof,
                idCode: this.props.fields.ID_Code.ID_Code,
                status: this.props.fields.Status.Status,
                language: this.props.fields.Language.Language,
                workerLocation: this.props.fields.CurrentLocation.CurrentLocation,
                lastName : "",

            }
              
            console.log(data)
            
            await axios.post('http://localhost:9001/api/workers', data, {headers : headers})
            .then((response) => {console.log(response); localStorage.setItem("WorkerID", response.data.id)}).catch((e) => console.log(e))

            
            await axios.post('http://localhost:9001/api/categories', {isParent : true, name : this.props.fields.Category.Category},
                {headers : headers})
            .then((response) => 
                
                {
                console.log(response)
                axios.post('http://localhost:9001/api/categories', {isParent : false, name : this.props.fields.Sub_Category.Sub_Category, parent : response.data},
                    {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))  
            }).catch((e) => console.log(e))  
            $('#enterDetails').click();

        }
    }

    render (){
        if (this.props.sel === "HealthCare") {
            this.sub_options = ["Administration", "Nursing", "Physician", "Surgeon", "Technical", "Others"]
        } else if (this.props.sel === "Blue Collar") {
            this.sub_options = ["Driver", "Plumber", "Others"]
        } else {
            this.sub_options = ["FrontEnd", "BackEnd", "Full Stack", "Data Science", "Dev-Ops", "Cyber Security", "Others"]
        }

        const subCategory = <Input 
                divClass="form-group col-md-4" label="Sub-Category" 
                config = {{className :"form-control form-select" ,}}
                elementType="select"
                options = {this.sub_options} change={this.handleChange.bind(this,"Sub_Category", {})}/>
        return (
            <div class="modal-content">
                  <div className="FormSec basicDetails">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-9">
                                            <Input 
                                            divClass="form-group" label="Name" 
                                            config = {{className :"form-control" ,
                                                    placeholder : "Enter your Name", 
                                                    type:"name"}}
                                            value = {this.props.fields.Name.Name}
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
                                                value = {this.props.fields.Email.Email}
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
                                                value = {this.props.fields.PhoneNumber.PhoneNumber}
                                                inValid = {this.props.fields.PhoneNumber.inValid}
                                                error = {this.props.errors.PhoneNumber}
                                                change={this.handleChange.bind(this,"PhoneNumber",{required : true, mobile : true})}/>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputGender">Gender</label>
                                            <div className="RadioBtn">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" checked={this.props.fields.Gender.Gender=== "Male"} onChange={this.handleChange.bind(this,"Gender", {})}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" checked={this.props.fields.Gender.Gender === "Female"} onChange={this.handleChange.bind(this,"Gender", {})}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Other" checked={this.props.fields.Gender.Gender === "Other"} onChange={this.handleChange.bind(this,"Gender", {})}/>
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
                                        value = {this.props.fields.DOB.DOB}
                                        change={this.handleChange.bind(this,"DOB",{required : true})}
                                        inValid = {this.props.fields.DOB.inValid}
                                        error = {this.props.errors.DOB}/>

                                        <Input 
                                        divClass="form-group col-md-4" label="Category" 
                                        config = {{className :"form-control form-select" ,}}
                                        elementType="select"
                                        options = {["HealthCare", "Blue Collar", "IT"] }
                                        value = {this.props.fields.Category}
                                        change={this.props.setCategory}/>

                                        { subCategory }

                                    </div>

                                    <div className="form-row">
                                        <div className="form-row col-md-4">
                                            <Input 
                                            divClass="form-group col-md-9" label="ID Proof" 
                                            config = {{className :"form-control form-select" ,}}
                                            elementType="select"
                                            options = {["Select", "SSN", "Passport"] }
                                            value = {this.props.fields.ID_Proof.ID_Proof}
                                            inValid = {this.props.fields.ID_Proof.inValid}
                                            change={this.handleChange.bind(this,"ID_Proof",{select : true})} />

                                            <Input 
                                            divClass="form-group col-md-3" label="ID Code" 
                                            config = {{className :"form-control" , type: "text"}}
                                            elementType="input"
                                            value = {this.props.fields.ID_Code.ID_Code}
                                            inValid = {this.props.fields.ID_Code.inValid}
                                            change={this.handleChange.bind(this,"ID_Code",{required : true})}
                                             />

                                        </div>
                                            <Input 
                                            divClass="form-group col-md-4" label="Status" 
                                            config = {{className :"form-control form-select" ,}}
                                            elementType="select"
                                            options = {["Select", "Blue Collar", "IT"] }
                                            value = {this.props.fields.Status.Status}
                                            inValid = {this.props.fields.Status.inValid}
                                            change={this.handleChange.bind(this,"Status",{select : true})}
                                             />

                                            <Input 
                                            divClass="form-group col-md-4" label="Language" 
                                            config = {{className :"form-control form-select" ,}}
                                            elementType="select" 
                                            options = {["Select", "English", "Physician", "Surgeon", 
                                            "Technical", "Others"] }
                                            value = {this.props.fields.Language.Language}
                                            inValid = {this.props.fields.Language.inValid}
                                            change={this.handleChange.bind(this,"Language",{select : true})}/>
                                        
                                    </div>

                                    <Input 
                                    divClass="form-group" label="Current Location" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select" name="Location"
                                    options = {["Select", "English", "Physician", "Surgeon", 
                                    "Technical", "Others"] }
                                    value={this.props.fields.CurrentLocation.CurrentLocation}
                                    inValid = {this.props.fields.CurrentLocation.inValid}
                                    change={this.handleChange.bind(this,"CurrentLocation",{select : true})}/>

                                </form>
                            </div>    
                            <div class="modal-footer">
                        <div class="btn-group NextFormButtons ModalNextFormButtons ">
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
        sel : state.CategorySelected,
        fields: state.fields.fields,
        errors : state.fields.errors,
        formValid : state.fields.formValid,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", val : event.target.value}),
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val,data : 'fields'}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'fields'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'fields'}), 
        getEmail : () => dispatch({type: "GET_EMAIL"}),
        mapDatabaseToLocal : (name,res,res2) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:name, res: res, res2: res2})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBasicDetailsModal);