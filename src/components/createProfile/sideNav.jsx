import React from 'react';

class SideNav extends React.Component {
    render() {
        return (
            <div className="col-md-3">
                <ul className="ProfileStepTabsList">
                    <li>
                        <div className={this.props.additionalPage ? "ProfileStepTab filled" : "ProfileStepTab active"}>
                            <h6>Basic Details</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                    <li>
                        <div className={this.props.employmentPage ? "ProfileStepTab filled" : this.props.additionalPage ? "ProfileStepTab active ": "ProfileStepTab"}>
                            <h6>Additional Details</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                    <li>
                        <div className="ProfileStepTab">
                            <h6>Employment Questions</h6>
                            <span>Here you can fill your basic info</span>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}

export default SideNav;