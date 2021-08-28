const initialState = {
    CategorySelected : "HealthCare",
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type){
        case "CHANGE_CATEGORY" : 
                newState.CategorySelected = action.val;
                break;
        default :
            break;
    }
    return newState
}

export default reducer;