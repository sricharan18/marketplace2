import React from 'react';
import { connect } from 'react-redux';

import CollapsedEducation from './collapsedDetails/collapsedEducation';
import WorkHistory from './workHistory';

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
                    <a href="#" class="addDetails" data-toggle="modal" data-target="#enterDetails" onClick={() => {this.props.resetForm(); this.props.editAction()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    </a>
                </div>

                <div id={this.props.href} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={this.props.id}>
                <div class="panel-body">
                
                {this.props.fields.map((val,id) => (<CollapsedEducation val = {val} key={id} id={id}/>))}
                
                </div>
            </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        fields : state.educationalDetails.educationalDetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetForm : () => dispatch({type : "RESET_FORM", data : 'educationalDetails'}),
        editAction : () => dispatch({type : "EDIT_ACTION", data : "educationalDetails"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPanel);