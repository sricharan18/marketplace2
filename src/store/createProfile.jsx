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
        Name : {Name : "", invalid : "false"},
        educationalDetails : [],

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
        workDetails : [],
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
            newState[action.data].push(action.val)
            break;
        default :
            break;
    }
    return newState
}

export default reducer;