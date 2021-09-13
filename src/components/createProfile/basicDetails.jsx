import React from 'react';
import './createprofile.css';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';

import UploadImage from '../uploadImage/uploadImage';
import Input from '../input/input';
import SideNav from './sideNav';
import Header from '../header/Header';

class BasicDetails extends React.Component{

    subCategory = null
    subCategoryIDs = []
    state = {
        sub_options : []
    }
    CategoryOptions = []
    CategoryIDs =[]

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

    componentWillMount(){
        if (localStorage.getItem("WorkerID") !== null){
            axios.get('http://localhost:9001/api/workers/profile/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
                {
                console.log(res)
                this.props.mapDatabaseToLocal("fields",res.data.worker,)
                })

        } else {
            this.props.getEmail()
        }

        axios.get('http://localhost:9001/api/allcategories', {headers : this.headers}).then((res) => 
        {
            this.CategoryOptions = res.data.map((item, id) => {return item.name})
            this.forceUpdate()
            this.CategoryIDs = res.data.map((item, id) => {return item.id})
        })

        console.log(this.props.fields.Category)

    }

    handleSubmit = async () => {
        console.log(this.props.formValid)

        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer '+ localStorage.getItem("token")
          }

        console.log(headers)

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
            // if(localStorage.getItem("isBasicFilled") === "false"){
                await axios.post('http://localhost:9001/api/workers', data, {headers : headers})
            .then((response) => {console.log(response); localStorage.setItem("WorkerID", response.data.id)}).catch((e) => console.log(e))

            
                // await axios.post('http://localhost:9001/api/categories', {isParent : true, name : this.props.fields.Category.Category},
                //     {headers : headers})
                // .then((response) => 
                    
                //     {
                //     console.log(response)
                //     axios.post('http://localhost:9001/api/categories', {isParent : false, name : this.props.fields.Sub_Category.Sub_Category, parent : response.data},
                //         {headers : headers})
                //     .then((response) => {console.log(response)}).catch((e) => console.log(e))  
                // }).catch((e) => console.log(e))  
            // } else {
            //     data["id"] = localStorage.getItem("WorkerID")
            //     await axios.put('http://localhost:9001/api/workers/'+localStorage.getItem("WorkerID"), data, {headers : headers})
            // .then((response) => {console.log(response);}).catch((e) => console.log(e))
            // }            


            this.props.history.push('/createProfile/additionalDetails')
            localStorage.setItem("isBasicFilled" , true)


        } else {
            this.forceUpdate()
        }
    }


    handleSubCategory = async (id , event) => {
        await axios.get('http://localhost:9001/api/allsubcategories/'+id, {headers : this.headers}).then((res) => 
    {
        console.log(res)
        this.setState({sub_options : res.data.map((item, id) => {return item.name})})
        this.subCategoryIDs = res.data.map((item) => {return item})

        this.subCategory = <Input 
                divClass="form-group col-md-4" label="Sub-Category" 
                config = {{className :"form-control form-select" ,}}
                elementType="select"
                options = {this.state.sub_options} change={(event) => {this.handleChange("Sub_Category", {}, event); localStorage.setItem("subCat",JSON.stringify(this.subCategoryIDs[this.state.sub_options.indexOf(event.target.value)]))}}/>
        this.forceUpdate()
    })
    }
    
    render(){

    return (
        <div>
        <Header />
        <section className="mainbgColor create-profile-section">
        <div className="container-fluid">
            <div className="row">
            <SideNav page='basicDetails' additionalPage = {this.props.additionalPage} employmentPage = {this.props.employmentPage}/>
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
                                         {console.log(this.props.fields.profilePic)}
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
                                        options = {this.CategoryOptions}
                                        value = {this.props.fields.Category}
                                        change={(event) => {this.props.setCategory(event ); this.handleSubCategory(this.CategoryIDs[this.CategoryOptions.indexOf(event.target.value)])}}/>

                                        { this.subCategory }

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
                                            options = {["Select", "English", "Hindi", "Telugu", 
                                            "Tamil", "Others"] }
                                            value = {this.props.fields.Language.Language}
                                            inValid = {this.props.fields.Language.inValid}
                                            change={this.handleChange.bind(this,"Language",{select : true})}/>
                                        
                                    </div>

                                    <Input 
                                    divClass="form-group" label="Current Location" 
                                    config = {{className :"form-control form-select" ,}}
                                    elementType="select" name="Location"
                                    options = {["Select", "Delhi", "Mumbai", "Hyderabad", 
                                    "Noida", "Others"] }
                                    value={this.props.fields.CurrentLocation.CurrentLocation}
                                    inValid = {this.props.fields.CurrentLocation.inValid}
                                    change={this.handleChange.bind(this,"CurrentLocation",{select : true})}/>

                                </form>
                            </div>
                        
                        </div>
                        <div className="btn-group NextFormButtons">
                            <button className="common-btn commonOutlineBtn">Draft</button>
                            <button className="common-btn commonBlueBtn" onClick = {() => {this.props.checkFormIsValid(); setTimeout(() => this.handleSubmit(),5)}}>Save & Next</button>
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
        sel : state.CategorySelected,
        fields: state.fields.fields,
        errors : state.fields.errors,
        formValid : state.fields.formValid,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", item : event.target.value}),
        changeState : (name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val,data : 'fields'}),
        goToAdditionalDetails : () => dispatch({type: "ADDITIONAL_DETAILS"}),
        changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'fields'}),
        checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'fields'}), 
        onFilled : () => dispatch({type: "ON_FILLED", data : 'basic'}),
        // workerId: (id) => dispatch({type : "SET_WORKER_ID", id : id})
        getEmail : () => dispatch({type: "GET_EMAIL"}),
        mapDatabaseToLocal : (name,res,res2) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:name, res: res, res2: res2})
    }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(BasicDetails);