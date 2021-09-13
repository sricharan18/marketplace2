import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CollapsedSkills from './collapsedDetails/collapsedSkills';


class DetailsPanel2 extends React.Component{

    handleKeyPress = async (event) => {
        // event.preventDefault()
        if (event.key === 'Enter') {

            var data = null

            const headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer '+ this.props.token
              }
            if(this.props.data === "skills"){
                data = {
                    skillName: event.target.value,
                    worker : {
                        id: localStorage.getItem("WorkerID"),
                    }
                }            
                

                await axios.post('http://localhost:9001/api/skills-masters', data, {headers : headers})
                .then((response) => 
                {console.log(response); axios.patch("http://localhost:9001/api/workers/"+localStorage.getItem("WorkerID"),
                 data={skills : [response.data], id : localStorage.getItem("WorkerID")}, {headers : {"Content-Type" : "application/merge-patch+json"}})}).catch((e) => console.log(e))

                axios.get('http://localhost:9001/api/skills-masters/worker/'+localStorage.getItem("WorkerID")).then((res) => 
                {
                    this.props.mapDatabaseToLocal(res.data, this.props.data)
                })

            } else {
                data = {
                    portfolioURL: event.target.value,
                    worker : {
                        id: localStorage.getItem("WorkerID"),
                    }
                }

                await axios.post('http://localhost:9001/api/portfolios', data, {headers : headers})
                .then((response) => {console.log(response)}).catch((e) => console.log(e))

                axios.get('http://localhost:9001/api/portfolios/worker/'+localStorage.getItem("WorkerID")).then((res) => 
                {
                    this.props.mapDatabaseToLocal(res.data, this.props.data)
                })
            }
            // this.props.addDetails(event.target.value, this.props.data) 


          }
    }


    render(){

        var variable = null

        if(this.props.data === "skills") {
            variable = this.props.skill.map((item, id) => (<CollapsedSkills item={item.item} key={id} id={item.id} data={this.props.data}/>))
        } else {
            variable = this.props.portfolio.map((item, id) => (<CollapsedSkills item={item.item} key={id} id={item.id} data={this.props.data}/>))
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
        token : state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDetails : (fields, data) => dispatch({type : "ADD_DETAILS", val : fields, data : data}),
        mapDatabaseToLocal : (res, name) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name: name, res: res})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPanel2);