import React from "react";
import { connect } from 'react-redux';

import Certifications from "./certifications";
import EducationalDetails from "./educationalDetails";
import WorkHistory from "./workHistory";
import Recommendations from "./recommendations";
import EditEmploymentModal from "../../editEmploymentModal";

class Modal extends React.Component {

    render(){
        let modal=null
        switch(this.props.modalSelected)
        {
            case "educationalDetails":
                modal=(<EducationalDetails/>)
                break
            case "certifications":
                modal=(<Certifications/>)
                break
            case "workDetails":
                modal=(<WorkHistory />)
                break
            case "recommendations":
                modal=(<Recommendations/>)
                break
            case "employmentDetails":
                modal=(<EditEmploymentModal/>)
                break
        }
        return (
            <span>
                {modal}
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        modalSelected : state.modalSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
         
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal)