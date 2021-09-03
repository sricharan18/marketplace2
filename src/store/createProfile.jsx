const initialState = {
    CategorySelected : "HealthCare",
    goToAdditionalDetails : false,
    goToEmploymentDetails : false,
    modalSelected : '',
    skills : {
        skills : ["Python", "Java", "Graphic design"],
        edit : {id : null}
    },
    portfolio : {
        portfolio : ['url1', 'url2'],
        edit : {id : null}
    },
    employmentQues : {
        fields : {
            AvailableFrom : {AvailableFrom : "",},
            AvailableTill : {AvailableTill : ""},
            WorkType : {WorkType : ""},
            EmploymentType : {EmploymentType : ""},
            WorkLocation : {WorkLocation : ""},
            LocationPreference : {LocationPreference : ""},
            WorkingHours : {WorkingHours : ""},
            Rate : {Rate : ""},
            RateType : {RateType : ""}
        },
        formValid: true,
    },
    fields:{
        fields:{
        Name: {Name : '', inValid : false},
        Email: {Email : '', inValid : false},
        PhoneNumber: {PhoneNumber : '', inValid : false},
        profilePic: undefined,
        Gender: {Gender : '', inValid : false},
        DOB: {DOB : '', inValid : false},
        Category:'HealthCare',
        Sub_Category:'Administration',
        ID_Proof: {ID_Proof : '',},
        ID_Code: {ID_Code : '',},
        Status: {Status : '',},
        Language: {Language : '',},
        CurrentLocation: {CurrentLocation : '',},
        },
        errors : {
            Name: "Enter valid Name",
            Email: "Enter valid email",
            PhoneNumber: "Enter valid mobile number",
            DOB: "Enter Date of birth",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Email: "Enter valid email",
            PhoneNumber: "Enter valid mobile number",
            DOB: "Enter Date of birth",
        },
        formValid: false,
    },
    educationalDetails :{
        fields : {
            Degree : {Degree : "", invalid : "false"},
            PassingYear : {PassingYear : "", invalid : 'false'},
            CurrentlyStudying : {CurrentlyStudying : false, invalid : 'false'},
            University : {University : "", invalid : 'false'},
            Grade : {Grade : "", invalid : 'false'},
        },

        educationalDetails : [{Degree : {Degree : "B.Tech1", invalid : "false"},
                                PassingYear : {PassingYear : "2022", invalid : 'false'},
                                CurrentlyStudying : {CurrentlyStudying : false, invalid : 'false'},
                                University : {University : "CVR", invalid : 'false'},
                                Grade : {Grade : "80%", invalid : 'false'}},
                                {Degree : {Degree : "B.Tech2", invalid : "false"},
                                PassingYear : {PassingYear : "2022", invalid : 'false'},
                                CurrentlyStudying : {CurrentlyStudying : false, invalid : 'false'},
                                University : {University : "CVR", invalid : 'false'},
                                Grade : {Grade : "80%", invalid : 'false'}},
                                {Degree : {Degree : "B.Tech3", invalid : "false"},
                                PassingYear : {PassingYear : "2022", invalid : 'false'},
                                CurrentlyStudying : {CurrentlyStudying : false, invalid : 'false'},
                                University : {University : "CVR", invalid : 'false'},
                                Grade : {Grade : "80%", invalid : 'false'}}
                            ],
        formValid: false,
        edit : {id : null},
        errors : {
            Degree: "Enter valid Degree",
            PassingYear: "Enter valid PassingYear",
            University: "Enter valid University",
            Grade: "Enter valid grade",
        },
        errorsdup : {
            Degree: "Enter valid Degree",
            PassingYear: "Enter valid PassingYear",
            University: "Enter valid University",
            Grade: "Enter valid grade",
        },
    },
    workDetails : {
        fields:{
            EmployerName : {EmployerName : "", invalid : "false"},
            Designation : {Designation : "", invalid : "false"},
            StartDate : {StartDate : "", invalid : "false"},
            EndDate : {EndDate : "", invalid : "false"},
            WorkLocation : {WorkLocation : "", invalid : "false"},
            CurrentlyStudying:{CurrentlyStudying : true,},
        },
        workDetails : [{
            EmployerName : {EmployerName : "TCS Company", invalid : "false"},
            Designation : {Designation : "UI Designer", invalid : "false"},
            StartDate : {StartDate : "2016-06-01", invalid : "false"},
            EndDate : {EndDate : "2018-06-01", invalid : "false"},
            WorkLocation : {WorkLocation : "Hyderabad", invalid : "false"},
            CurrentlyStudying:{CurrentlyStudying : false,},
        }],
        edit : {id : null},
        errors : {
            EmployerName: "Enter valid Name",
            Designation: "Enter valid Designation",
            StartDate: "Enter valid Date",
            EndDate: "Enter valid Date",
            WorkLocation: "Enter valid Work Location"
        },
        errorsdup : {
            EmployerName: "Enter valid Name",
            Designation: "Enter valid Designation",
            StartDate: "Enter valid Date",
            EndDate: "Enter valid Date",
            WorkLocation: "Enter valid Work Location"
        },
        formValid: false,
    },
    certifications : {
        fields:{
            Name : {Name : "", invalid : "false"},
            Issuer : {Issuer : "", invalid : "false"},
            IssueYear : {IssueYear : "", invalid : "false"},
            ExpiryYear : {ExpiryYear : "", invalid : "false"},
        },
        certifications : [{
            Name : {Name : "UI Design and Conceptualization", invalid : "false"},
            Issuer : {Issuer : "Layola School Of Design", invalid : "false"},
            IssueYear : {IssueYear : "2018", invalid : "false"},
            ExpiryYear : {ExpiryYear : "",invalid : "false"},
        }],
        edit : {id : null},
        errors : {
            Name: "Enter valid Name",
            Issuer: "Enter valid Issuer",
            IssueYear: "Enter valid IssueYear",
            ExpiryYear: "Enter valid ExpiryYear",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Issuer: "Enter valid Issuer",
            IssueYear: "Enter valid IssueYear",
            ExpiryYear: "Enter valid ExpiryYear",
        },
        formValid: false,
    },
    recommendations : {
        fields:{
            Name : {Name : "", invalid : "false"},
            Email : {Email : "", invalid : "false"},
            PhoneNumber : {PhoneNumber : "", invalid : "false"},
        },
        recommendations : [{
            Name : {Name : "Sai", invalid : "false"},
            Email : {Email : "sai@gmail.com", invalid : "false"},
            PhoneNumber : {PhoneNumber : "9949132471", invalid : "false"},
        }],
        edit : {id : null},
        errors : {
            Name: "Enter valid Name",
            Email: "",
            PhoneNumber: "",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Email: "",
            PhoneNumber: "",
        },
        formValid: false,
    },
}

const reducer = (state = initialState, action) => {
    // const newState = {...state}
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type){

        case "CHANGE_CATEGORY" : 
                newState.CategorySelected = action.val;
                let f={...newState.fields}
                f['Category']=action.val;
                if(action.val  ==='HealthCare'){
                    f['Sub_Category']='Administration'
                }
                else if(action.val==='Blue Collar'){
                    f['Sub_Category']='Driver'
                }
                else{
                    f['Sub_Category']='FrontEnd'
                }
                newState.fields=f
                break;

        case "CHANGE_FIELD":
                let f1={...newState[action.data].fields}
                f1[action.name]=action.val;
                newState[action.data].fields=f1
                break;

        case "ADDITIONAL_DETAILS":
                newState.goToAdditionalDetails = true;
                break;

        case "IS_FORM_VALID":
                var keys = Object.keys(newState[action.data].errors);
                var c = 0
                for (var i=0; i < keys.length; i++){
                    var t = keys[i]
                    if(newState[action.data].errors[t] !== ""){
                        c = 1
                        newState[action.data].fields[t].inValid = true
                        console.log(newState[action.data].errors[t])
                    }
                }
                if ( c === 0){
                    newState[action.data].formValid = true
                }
                // console.log(newState.fields.formValid)
                break;

        case "CHANGE_ERROR_STATE":
                if (action.val){
                    newState[action.data].errors[action.field] = ""
                } else {
                    newState[action.data].errors[action.field] = newState[action.data].errorsdup[action.field]
                }
                break;

        case "ADD_DETAILS":
            let edit = newState[action.data].edit.id
            if (edit !== null){
                newState[action.data][action.data] = newState[action.data][action.data].map((item, id) => {if(id===edit){return action.val} else{return item}})
                newState[action.data].edit.id = null
                newState[action.data].errors = newState[action.data].errorsdup
            } else {
                newState[action.data][action.data] = newState[action.data][action.data].concat(action.val)
                console.log(newState[action.data][action.data])
            }
            break;
        case "DELETE_DETAILS":
            newState[action.name][action.name] = newState[action.name][action.name].filter((item, id) => id !== action.id)
             
            break;

        case "EDIT_DETAILS":
            var obj1 = JSON.parse(JSON.stringify(newState[action.name][action.name][action.id]));
            // var ob = Object.assign({}, newState.educationalDetails.educationalDetails[action.id])
            newState[action.name].fields = obj1
            Object.keys(newState[action.name].errors).map((val) => {newState[action.name].errors[val] = ""})
            // newState.educationalDetails.errors = {}
            newState[action.name].edit.id = action.id
            break;

        case "RESET_FORM":
            if(action.data)
            {
            var obj = JSON.parse(JSON.stringify(newState[action.data].fields));
            Object.keys(obj).map((val, id) => { 
                    if(typeof(obj[val][val]) == "boolean"){obj[val][val] = false}
                    else {obj[val][val] = ""}})
            Object.keys(newState[action.data].fields).map((val, id) => {newState[action.data].fields[val].inValid = "false"})
            newState[action.data].fields = obj
            newState[action.data].formValid = false;
            newState[action.data].errors = newState[action.data].errorsdup
            }
            break;

        case "EDIT_ACTION":
            if(action.data)
            {
            newState[action.data].edit.id = null
            newState[action.data].errors = newState[action.data].errorsdup
            }
            break;
        case "CHANGE_MODAL":
            newState.modalSelected=action.modal;
            break
        default :
            break;
    }
    return newState
}

export default reducer;