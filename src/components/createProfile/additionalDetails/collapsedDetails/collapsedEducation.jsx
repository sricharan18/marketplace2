import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CollapsedEducation extends React.Component{

    headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer '+ this.props.token
      }

    componentWillMount(){
        axios.get('http://localhost:9001/api/educations/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            this.props.mapDatabaseToLocal(res.data)
        })
    }

    onDelete = async (id) => {
        await axios.delete('http://localhost:9001/api/educations/'+id, {headers : this.headers}).then((res) => console.log(res))


        // console.log()
        await axios.get('http://localhost:9001/api/educations/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            this.props.mapDatabaseToLocal(res.data)
        })
        // this.props.deleteDetails(this.props.id);
    }

    render (){
        return (
            <div class="addedDetail paddX15 disF">
                    <div class="addedDetailImg">
                    
                    </div>

                    <div class="addedDetailContent">
                    <p>{this.props.val.Degree.Degree}</p>
                    <span>{this.props.val.University.University}, CGPA {this.props.val.Grade.Grade}, Passing year {this.props.val.PassingYear.PassingYear}</span>
                    </div>

                    <div class="actionBtns">
                    <a href="#" class="editDetails" data-toggle="modal" data-target="#enterDetails" onClick={() => {this.props.editDetails(this.props.id.id);this.props.changeModal(this.props.modal)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    </a>
                    
                    <a class="removeDetail" onClick={() => this.onDelete(this.props.id.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#f67980">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        workerID: state.workerID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editDetails : (id) => dispatch({type : "EDIT_DETAILS", id : id, name:'educationalDetails'}),
        deleteDetails : (id) => dispatch({type : "DELETE_DETAILS", id : id,name:'educationalDetails'}),
        changeModal : (modal)=> dispatch({type:"CHANGE_MODAL", modal : modal}),
        mapDatabaseToLocal : (res) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:'educationalDetails', res: res})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapsedEducation);