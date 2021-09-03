import React from 'react';
import { connect } from 'react-redux';

import CollapsedSkills from './collapsedDetails/collapsedSkills';


class DetailsPanel2 extends React.Component{

    handleKeyPress = (event) => {
        // event.preventDefault()
        if (event.key === 'Enter') {
            this.props.addDetails(event.target.value, this.props.data)
          }
    }


    render(){

        var variable = null

        if(this.props.data === "skills") {
            variable = this.props.skill.map((item, id) => (<CollapsedSkills item={item} key={id} id={id} data={this.props.data}/>))
        } else {
            variable = this.props.portfolio.map((item, id) => (<CollapsedSkills item={item} key={id} id={id} data={this.props.data}/>))
        }

        return (
            
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id={this.props.id} >
                    <h4 class="panel-title" data-toggle="collapse" data-parent="#accordion" href={'#'+this.props.href} aria-expanded="false" aria-controls={this.props.href}>
                    <a class="collapsed">
                        {this.props.title}
                    </a>
                    </h4>

                    <a href="#" class="addDetails">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    </a>
        
                </div>
                <div id={this.props.href} class="panel-collapse collapse" role="tabpanel" aria-labelledby={this.props.id}>
                    <div class="panel-body">
                    {variable}

                    <div class="AddSkillsTextbox paddX15" id="AddSkills">
                        <input type="text" class="form-control" id="inputAddPortfolio" placeholder={this.props.placeholder} onKeyPress={this.handleKeyPress}/>
                    </div>


                    </div>
                </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        skill : state.skills.skills,
        portfolio : state.portfolio.portfolio,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDetails : (fields, data) => dispatch({type : "ADD_DETAILS", val : fields, data : data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPanel2);