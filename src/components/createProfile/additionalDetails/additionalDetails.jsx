import React from 'react';
import './additionalDetails.css';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import Modal from './modal';
import DetailsPanel from './detailsPanel';
import SideNav from '../sideNav';
import Header from '../../header/Header';
import DetailsPanel2 from './detailsPanel2'

class AdditionalDetails extends React.Component {

    render(){
        return (
          <div>
        <Header />
        <section className="mainbgColor create-profile-section">
        <div className="container-fluid">
            <div className="row">
            <SideNav page='additionalDetails' additionalPage = {this.props.additionalPage} employmentPage = {this.props.employmentPage}/>
            <div class="col-md-9">
                    <div class="CreateProfileForm">
                        <div class="profileHeadSec">
                            <h4>Create Profile</h4>
                        </div>

                        <div class="FormSec AdditionalDetails">
                            <form>
                                {/* <!-- <div class="container"> --> */}
                                    <div class="row">
                                      <div class="col-md-12">
                                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                          {/* <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingOne"> 
                                              <h4 class="panel-title"  data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  aria-expanded="true" aria-controls="collapseOne">
                                                <a href="#">
                                                    Educational Details
                                                </a>
                                              </h4>

                                              <a href="#" class="addDetails" data-toggle="modal" data-target="#educationalDetails">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                                                  <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                </svg>
                                              </a>
                                              

                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                              <div class="panel-body">
                                               <div class="addedDetail paddX15 disF">
                                                 <div class="addedDetailImg">
                                                    
                                                 </div>

                                                 <div class="addedDetailContent">
                                                   <p>B.Tech (Computer Science)</p>
                                                   <span>SRM University, CGPA 79%, From 2013 - 2017</span>
                                                 </div>

                                                 <div class="actionBtns">
                                                  <a href="#" class="editDetails">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                                      <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                    </svg>
                                                  </a>
                                                  
                                                  <a href="#" class="removeDetail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#f67980">
                                                      <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                    </svg>
                                                  </a>
                                                </div>

                                               </div>


                                               <div class="addedDetail paddX15 disF">
                                                  <div class="addedDetailImg">
                                                    
                                                  </div>

                                                  <div class="addedDetailContent">
                                                    <p>B.Tech (Computer Science)</p>
                                                    <span>SRM University, CGPA 79%, From 2013 - 2017</span>
                                                  </div>

                                                  <div class="actionBtns">
                                                    <a href="#" class="editDetails">
                                                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                                        <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                      </svg>
                                                    </a>
                                                    
                                                    <a href="#" class="removeDetail">
                                                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#f67980">
                                                        <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                      </svg>
                                                    </a>
                                                  </div>
                                                </div>


                                                <div class="addedDetail paddX15 disF">
                                                  <div class="addedDetailImg">
                                                    
                                                  </div>

                                                  <div class="addedDetailContent">
                                                    <p>B.Tech (Computer Science)</p>
                                                    <span>SRM University, CGPA 79%, From 2013 - 2017</span>
                                                  </div>

                                                  <div class="actionBtns">
                                                    <a href="#" class="editDetails">
                                                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                                        <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                      </svg>
                                                    </a>
                                                    
                                                    <a href="#" class="removeDetail">
                                                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#f67980">
                                                        <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                      </svg>
                                                    </a>
                                                  </div>
                                                </div>

                                              
                                              </div>
                                            </div>
                                          </div> */}

                                          <DetailsPanel id="headingOne" title="Educational Details" href="collapseOne" modal="educationalDetails"/>

                                          <DetailsPanel id="headingTwo" title="Certifications" href="collapseTwo" modal="certifications"/>
                                          {/*<div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingTwo" >
                                              <h4 class="panel-title" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <a class="collapsed" href="#">
                                                    Certifications
                                                </a>
                                              </h4>
                                  
                                              <div class="actionBtns">
                                                <a href="#" class="editDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                  </svg>
                                                </a>
                                                
                                                <a href="#" class="addDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                  </svg>
                                                </a>
                                              </div>
                                            </div>
                                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                              <div class="panel-body">
                                                <div class="addedDetail marX15 disF">
                                                  <div class="addedDetailImg">
                                                     
                                                  </div>
 
                                                  <div class="addedDetailContent">
                                                    <p>B.Tech (Computer Science)</p>
                                                    <span>SRM University, CGPA 79%, From 2013 - 2017</span>
                                                  </div>
                                                </div>
                                               </div>
                                            </div>
                                        </div>


                                           <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingThree" >
                                              <h4 class="panel-title" href="#collapseThree" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseThree">
                                                <a class="collapsed">
                                                    Work History
                                                </a>
                                              </h4>
                                              <div class="actionBtns">
                                                <a href="#" class="editDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                  </svg>
                                                </a>
                                                
                                                <a href="#" class="addDetails" data-toggle="modal" data-target="#workDetails">
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
                                        </div> */}

                                          <DetailsPanel id="headingThree" title="WorkHistory" href="collapseThree" modal="workDetails"/>

                                          <DetailsPanel2 id="headingFour" title="Skills" href="collapseFour" data="skills" placeholder="Enter skills"/>
 
                                          <DetailsPanel2 id="headingFive" title="Portfolio" href="collapseFive" data="portfolio" placeholder="Enter URL"/>
                                          {/* <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingFour" >
                                              <h4 class="panel-title" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <a class="collapsed">
                                                    Skills
                                                </a>
                                              </h4>

                                              <div class="actionBtns">
                                                <a href="#" class="editDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                  </svg>
                                                </a>
                                                
                                                <a href="#" class="addDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                  </svg>
                                                </a>
                                              </div>
                                  
                                            </div>
                                            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                              <div class="panel-body">
                                                <div class="skill marX15 disF">
                                                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#525252"><rect fill="none" height="20" width="20"/><g>
                                                    <path d="M17.41,6.59L15,5.5l2.41-1.09L18.5,2l1.09,2.41L22,5.5l-2.41,1.09L18.5,9L17.41,6.59z M21.28,12.72L20.5,11l-0.78,1.72 L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.24,14.37l1.94,1.47l-2.5,4.33l-2.24-0.94 c-0.2,0.13-0.42,0.26-0.64,0.37L12.5,22h-5l-0.3-2.41c-0.22-0.11-0.43-0.23-0.64-0.37l-2.24,0.94l-2.5-4.33l1.94-1.47 C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37l-1.94-1.47l2.5-4.33l2.24,0.94c0.2-0.13,0.42-0.26,0.64-0.37L7.5,6h5l0.3,2.41 c0.22,0.11,0.43,0.23,0.64,0.37l2.24-0.94l2.5,4.33l-1.94,1.47c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14 c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z"/></g>
                                                  </svg>
                                                  <p>Graphic Design</p>
                                                </div>
                                                <div class="skill marX15 disF">
                                                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#525252"><rect fill="none" height="20" width="20"/><g>
                                                    <path d="M17.41,6.59L15,5.5l2.41-1.09L18.5,2l1.09,2.41L22,5.5l-2.41,1.09L18.5,9L17.41,6.59z M21.28,12.72L20.5,11l-0.78,1.72 L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.24,14.37l1.94,1.47l-2.5,4.33l-2.24-0.94 c-0.2,0.13-0.42,0.26-0.64,0.37L12.5,22h-5l-0.3-2.41c-0.22-0.11-0.43-0.23-0.64-0.37l-2.24,0.94l-2.5-4.33l1.94-1.47 C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37l-1.94-1.47l2.5-4.33l2.24,0.94c0.2-0.13,0.42-0.26,0.64-0.37L7.5,6h5l0.3,2.41 c0.22,0.11,0.43,0.23,0.64,0.37l2.24-0.94l2.5,4.33l-1.94,1.47c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14 c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z"/></g>
                                                  </svg>
                                                  <p>Video Editing</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingFive" >
                                              <h4 class="panel-title" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <a class="collapsed" >
                                                    Portfolio
                                                </a>
                                              </h4>
                                              <div class="actionBtns">
                                                <a href="#" class="editDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                  </svg>
                                                </a>
                                                
                                                <a href="#" class="addDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                  </svg>
                                                </a>
                                              </div>
                                  
                                            </div>
                                            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                              <div class="panel-body">

                                              </div>
                                            </div>
                                          </div> */}
                                          <DetailsPanel id="headingSix" title="Recommendations" href="collapseSix" modal="recommendations"/>
                                          {/*<div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingSix" >
                                              <h4 class="panel-title" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <a class="collapsed">
                                                    Recommendations
                                                </a>
                                              </h4>
                                              <div class="actionBtns">
                                                <a href="#" class="editDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                                  </svg>
                                                </a>
                                                
                                                <a href="#" class="addDetails">
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#007BFF">
                                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                  </svg>
                                                </a>
                                              </div>
                                  
                                            </div>
                                            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                              <div class="panel-body">

                                              </div>
                                            </div>
                                      </div>*/}
                                        </div>
                                      </div>
                                    </div>
                                  {/* <!-- </div> --> */}
                            </form>
                        </div>
                      
                    </div>
                    <div className="btn-group NextFormButtons">
                        <button className="common-btn commonOutlineBtn">Draft</button>
                        <Link to="/createProfile/employmentDetails"><button className="common-btn commonBlueBtn" onClick={() => this.props.onFilled()}>Save & Next</button></Link>
                    </div>

                    <div className="modal fade" id="enterDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered multistepModal CreateProfileModal" role="document">
                          <Modal />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
                    
        )
    }

}

const mapDispatchToProps = dispatch => {
  return {
    onFilled : () => dispatch({type: "ON_FILLED", data : 'additional'}),
  }
}
export default connect(null,mapDispatchToProps)(AdditionalDetails);