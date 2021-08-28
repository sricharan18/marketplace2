import React from 'react';

class SideNav extends React.Component {
    render() {
        return (
            <div className="col-md-3">
                <ul className="ProfileStepTabsList">
                    <li>
                        <a href="#" className="ProfileStepTab active ">
                            <h6>Basic Details</h6>
                            <span>Here you can fill your basic info</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ProfileStepTab">
                            <h6>Additional Details</h6>
                            <span>Here you can fill your basic info</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ProfileStepTab">
                            <h6>Employment Questions</h6>
                            <span>Here you can fill your basic info</span>
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}

export default SideNav;