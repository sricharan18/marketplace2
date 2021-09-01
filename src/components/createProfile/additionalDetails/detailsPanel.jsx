import React from 'react';

class DetailsPanel extends React.Component {
    render(){
        return (
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id={this.props.id} >
                    <h4 class="panel-title" href="#collapseThree" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseThree">
                    <a class="collapsed">
                        {this.props.title}
                    </a>
                    </h4>
                    <div class="actionBtns">
                    <a href="#" class="editDetails">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                    </a>
                    
                    <a href="#" class="addDetails" data-toggle="modal" data-target="#enterDetails">
                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                    </a>
                    </div>
                </div>
                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                    
                    </div>
                </div>
            </div>
        )
    }

}

export default DetailsPanel