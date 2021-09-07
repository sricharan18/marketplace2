import React from 'react';
import { connect } from 'react-redux';

class SideNav extends React.Component {
    render() {
        return (
            <div className="col-md-3">
                <ul className="ProfileStepTabsList">
                    <li>
                        <div className={(localStorage.getItem("isBasicFilled") === "true")? "ProfileStepTab filled": (this.props.page==='basicDetails') ? "ProfileStepTab active" : "ProfileStepTab"}>
                            <h6>Basic Details</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                    <li>
                        <div className={(localStorage.getItem("isAdditionalFilled") === "true")? "ProfileStepTab filled": (this.props.page==='additionalDetails') ? "ProfileStepTab active" : "ProfileStepTab"}>
                            <h6>Additional Details</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                    <li>
                        <div className={(localStorage.getItem("isEmployFilled") === "true")? "ProfileStepTab filled": (this.props.page==='employmentDetails') ? "ProfileStepTab active" : "ProfileStepTab"}>
                            <h6>Employment Questions</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        basic : state.isBasicDetailsFilled,
        additional: state.isAdditionalDetailsFilled,
        employment : state.isEmploymentDetailsFilled,
    }
}
export default connect(mapStateToProps) (SideNav);