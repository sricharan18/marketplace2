import educationalDetails from "../components/createProfile/additionalDetails/educationalDetails";

const initialState = {
    CategorySelected : "HealthCare",
    goToAdditionalDetails : false,
    goToEmploymentDetails : false,
    fields:{
        Name: {Name : 'Charan', inValid : false},
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
            StartDate: "Enter valid Date",
            EndDate: "Enter valid Date"
        },
        errorsdup : {
            EmployerName: "Enter valid Name",
            StartDate: "Enter valid Date",
            EndDate: "Enter valid Date"
        },
        formValid: false,
    },
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

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
            } else {
                newState[action.data][action.data] = newState[action.data][action.data].concat(action.val)
                console.log(newState[action.data][action.data])
            }
            break;

        case "EDIT_DETAILS":
            newState[action.name].fields = newState[action.name][action.name][action.id]
            Object.keys(newState[action.name].errors).map((val) => {newState[action.name].errors[val] = ""})
            newState[action.name].errors = {}
            newState[action.name].edit.id = action.id
            break;

        case "RESET_FORM":
                var obj = Object.assign({}, newState[action.data].fields)
                Object.keys(obj).map((val, id) => { 
                        if(typeof(obj[val][val]) == "boolean"){obj[val][val] = false}
                        else {obj[val][val] = ""}})
                Object.keys(newState[action.data].fields).map((val, id) => {newState[action.data].fields[val].inValid = "false"})
                newState[action.data].fields = obj
                newState[action.data].formValid = false;
                break;
        case "DELETE_DETAILS":
            newState[action.name][action.name] = newState[action.name][action.name].filter((item, id) => id !== action.id)
            break;

        default :
            break;
    }
    return newState
}

export default reducer;