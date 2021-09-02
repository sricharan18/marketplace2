import React from 'react';
import { connect } from 'react-redux';

import CollapsedEducation from './collapsedDetails/collapsedEducation';
import CollapsedWorkDetails from './collapsedDetails/collapsedWorkDetails';

class DetailsPanel extends React.Component {
    render(){
        return (
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id={this.props.id} >
                    <h4 class="panel-title" href={'#'+this.props.href} data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls={this.props.href}>
                    <a class="collapsed">
                        {this.props.title}
                    </a>
                    </h4>
                    <a href="#" class="addDetails" data-toggle="modal" data-target="#enterDetails">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    </a>
                </div>
                {this.props.href==='collapseOne'&&
                <div id={this.props.href} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={this.props.id}>
                <div class="panel-body">
                
                {this.props.fields.map((val,id) => (<CollapsedEducation val = {val} key={id} id={id}/>))}

                </div>
            </div>}
            {this.props.href==='collapseThree'&&
            <div id={this.props.href} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={this.props.id}>
                <div class="panel-body">
                
                {this.props.workDetailsFields.map((val,id) => (<CollapsedWorkDetails val = {val} key={id} id={id}/>))}

                </div>
            </div>}
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        fields : state.educationalDetails.educationalDetails,
        workDetailsFields : state.workDetails.workDetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // changeState : (name,val)=> dispatch({type:"CHANGE_FIELD", name:name, val:val, data : 'educationalDetails'}),
        // changeErrorState : (field, val) => dispatch({type : "CHANGE_ERROR_STATE", field : field, val : val, data : 'educationalDetails'}),
        // checkFormIsValid : () => dispatch({type: "IS_FORM_VALID", data : 'educationalDetails'}), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPanel);