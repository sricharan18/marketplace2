const initialState = {
    CategorySelected : "HealthCare",
    fields:{
        Name:'',
        Email:'',
        PhoneNumber:undefined,
        profilePic:undefined,
        Gender:'',
        DOB:'',
        Category:'HealthCare',
        Sub_Category:'Administration',
        ID_Proof:'',
        ID_Code:'',
        Status:'',
        Language:'',
        CurrentLocation:''
    },
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type){
        case "CHANGE_CATEGORY" : 
                newState.CategorySelected = action.val;
                let f={...newState.fields}
                f['Category']=action.val;
                if(action.val=='HealthCare'){
                    f['Sub_Category']='Administration'
                }
                else if(action.val=='Blue Collar'){
                    f['Sub_Category']='Driver'
                }
                else{
                    f['Sub_Category']='FrontEnd'
                }
                newState.fields=f
                break;
        case "CHANGE_FIELD":
                let f1={...newState.fields}
                f1[action.name]=action.val;
                newState.fields=f1
                break;
        default :
            break;
    }
    return newState
}

export default reducer;