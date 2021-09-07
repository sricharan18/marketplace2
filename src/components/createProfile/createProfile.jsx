import React from 'react';
import Header from '../header/Header';
import './createprofile.css';
import { connect } from 'react-redux';


import BasicDetails from './basicDetails';
import AdditionalDetails from './additionalDetails/additionalDetails';
import SideNav from './sideNav';

class CreateProfile extends React.Component{

    render(){

        let component = null
        if (this.props.additionalPage) {
            component = <BasicDetails />
        } else {
            component = <AdditionalDetails />
        }
       
    return (
        <div>
            <Header />
            <section className="mainbgColor create-profile-section">
            <div className="container-fluid">
                <div className="row">
                    <SideNav additionalPage = {this.props.additionalPage} employmentPage = {this.props.employmentPage}/>
                    
                    { component }
                </div>
            </div>
        </section>
        </div>
        
    )
    }
}

const mapStateToProps = state => {
    return {
        additionalPage : state.goToAdditionalDetails,
        employmentPage : state.goToEmploymentDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // setCategory : (event) => dispatch({type : "CHANGE_CATEGORY", val : event.target.value}),
        // changeState:(name,val)=> dispatch({type:"CHANGE_FIELD",name:name,val:val})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);