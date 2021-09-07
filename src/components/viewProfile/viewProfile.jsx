import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';

import './viewProfile.css';
import Header from '../header/Header';
import Modal from '../createProfile/additionalDetails/modal';

import certification from '../../imgaes/certification.png'
import Workplace from '../../imgaes/Workplace.png'
import template from '../../imgaes/template_3.jpg'
class ViewProfile extends React.Component
{
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.props.token
      }

    componentDidMount(){
        axios.get('http://localhost:9001/api/employments/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            console.log(res.data)
            this.props.mapDatabaseToLocal("workDetails",res.data)
        })
        axios.get('http://localhost:9001/api/educations/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            this.props.mapDatabaseToLocal("educationalDetails",res.data)
        })
        axios.get('http://localhost:9001/api/certificates/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            this.props.mapDatabaseToLocal('certifications',res.data)
        })
        axios.get('http://localhost:9001/api/skills-masters/worker/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
            this.props.mapDatabaseToLocal("skills",res.data)
        })
        axios.get('http://localhost:9001/api/workers/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
          console.log(res)
          this.props.mapDatabaseToLocal("fields",res.data)
        })
        axios.get('http://localhost:9001/api/workers/profile/'+localStorage.getItem("WorkerID"), {headers : this.headers}).then((res) => 
        {
          console.log(res)
          this.props.mapDatabaseToLocal("employmentDetails",res.data)
        })
    }
    render()
    {
        console.log(this.props.basicDetailsFields)
        return (
            <div>
                <Header/>
                <section class="mainbgColor view-profile-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                   <div class="ProfileDetail">
                     <div class="ProfileBasicDetail">
                        <div class="coverPhoto">
                          <div class="uploadCoverPhoto">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                              <path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                            </svg>
                            <input type="file" id="myfile" name="myfile"/>
                          </div>
                        </div>
                        <div class="ViewProfileDetail">
                          <div class="ProfilePicMain">
                            {/* <img src={template} class="profileImg"/> */}
                          </div>
                          <div class="profileActionButtons">

                            <div class="status online"><span class="onlinedot"></span>Active</div>

                            <button type="button" className="commonOutlineBtn EditViewedProfile">
                              <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="13px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                              Edit Profile</button>
                          </div>

                          <h2 class="FontBold">{this.props.basicDetailsFields.Name.Name}</h2>

                          <div class="ProfileBasic">
                            <ul class="ProfileBasicInfo">
                              <li>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#FA852B">
                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                                  </svg>
                                  {this.props.basicDetailsFields.Sub_Category}
                                </span>
                              </li>
                              <li>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15px" viewBox="0 0 24 24" width="15px" fill="#FA852B"><g>
                                    <path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/></g>
                                  </svg>
                                  {this.props.basicDetailsFields.CurrentLocation.CurrentLocation}
                                </span>
                              </li>
                            </ul>
                            <ul class="ProfileBasicInfo">
                              <li>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#FA852B">
                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                  </svg>
                                  +91 {this.props.basicDetailsFields.PhoneNumber.PhoneNumber}
                                </span>
                              </li>
                            
                              <li>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#FA852B">
                                    <path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                  </svg>
                                   {this.props.basicDetailsFields.Email.Email}
                                </span>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail Summary">
                          <h2>Summary</h2>
                          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                      </div>

                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail VieweditableDetails">
                          <div class="ViewProfileDetailHead disF">
                            <h2>Work History</h2>

                            <div class="expand ViewHistory">
                              <a style={{textDecoration:'none'}} role="button" class="collapsed" data-toggle="collapse" href="#ViewAllHistory" aria-expanded="false" aria-controls="ViewAllHistory">View All {'>'}</a>
                            </div>
                            
                          </div>
                           {/* <div class="EmploynmentConditionHead">
                            <h2>Work History</h2>
    
                            <div class="editEmploynmentCondition">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </div>
                          </div>  */}
                          <div id='ViewAllHistory' className='collapse' aria-expanded="false">
                            {this.props.workDetailsFields.map((val,id)=>( 
                          <div class="addedDetail paddX15 disF">
                            <div class="workIconImg">
                              <img src={Workplace} />
                            </div>

                            <div class="addedDetailContent">
                            <p>{val.Designation.Designation}</p>
                            <span>{val.EmployerName.EmployerName}, Full Time, {val.StartDate.StartDate.split("-")[0]} - {val.EndDate.EndDate.split("-")[0]}</span>
                            </div>

                            <div class="actionBtns">
                             <a href="#" class="editDetails" data-toggle="modal" data-target="#enterDetails" onClick={()=>{this.props.editDetails(id,"workDetails");this.props.changeModal("workDetails")}}>
                               <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                 <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                               </svg>
                             </a>
                           </div>

                          </div>
                            ))}
                        </div>
                        </div>
                      </div>



                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail VieweditableDetails">
                        <div class="ViewProfileDetailHead disF">
                          <h2>Educational Details</h2>
                          <div class="expand ViewHistory">
                              <a style={{textDecoration:'none'}} role="button" class="collapsed" data-toggle="collapse" href="#ViewAllEducationalDetails" aria-expanded="false" aria-controls="ViewAllEducationalDetails">View All {'>'}</a>
                            </div>
                            </div>
                          {/* <div class="EmploynmentConditionHead">
                            <h2>Work History</h2>
    
                            <div class="editEmploynmentCondition">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </div>
                          </div>  */}
                            <div id='ViewAllEducationalDetails' className='collapse' aria-expanded="false">
                            {this.props.fields.map((val,id)=>( 
                          <div class="addedDetail paddX15 disF">
                            <div class="addedDetailImg"></div>

                            <div class="addedDetailContent">
                            <p>{val.Degree.Degree}</p>
                            <span>{val.University.University}, CGPA {val.Grade.Grade}, {val.PassingYear.PassingYear}</span>
                            </div>

                            <div class="actionBtns">
                             <a href="#" class="editDetails" data-toggle="modal" data-target="#enterDetails" onClick={()=>{this.props.editDetails(id,"educationalDetails");this.props.changeModal("educationalDetails")}}>
                               <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                 <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                               </svg>
                             </a>
                           </div>

                          </div>))}
                        </div>
                        </div>
                      </div>

                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail VieweditableDetails">
                          <div class="ViewProfileDetailHead disF">
                            <h2>Certifications</h2>

                            <div class="expand ViewHistory">
                              <a style={{textDecoration:'none'}} role="button" class="collapsed" data-toggle="collapse" href="#ViewAllCertifications" aria-expanded="false" aria-controls="ViewAllCertifications">View All {'>'}</a>
                            </div>
                            
                          </div>
                          {/* <div class="EmploynmentConditionHead">
                            <h2>Work History</h2>
    
                            <div class="editEmploynmentCondition">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </div>
                          </div> */}
                          <div id='ViewAllCertifications' className='collapse' aria-expanded="false">
                        {this.props.certificationFields.map((val,id) => (
                          <div class="addedDetail paddX15 disF">
                            <div class="workIconImg">
                              <img src={certification} />
                            </div>

                            <div class="addedDetailContent">
                            <p>{val.Name.Name}</p>
                            <span>{val.Issuer.Issuer}</span>
                            </div>

                            <div class="actionBtns">
                             <a href="#" class="editDetails" data-toggle="modal" data-target="#enterDetails" onClick={()=>{this.props.editDetails(id,"certifications");this.props.changeModal("certifications")}}>
                               <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                 <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                               </svg>
                             </a>
                           </div>

                          </div>))}
                            </div>
                        </div>
                      </div>


                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail">
                          <div class="EmploynmentConditionHead">
                            <h2>Skills</h2>
    
                            <div class="editEmploynmentCondition">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </div>
                          </div>
                          <div class="skills">
                            {this.props.skills.map((val)=>(
                                <span>{val}</span>
                            ))}
                          </div>
                        
                        </div>
                      </div>

                      <div class="ProfileBasicDetail">
                        <div class="ViewProfileDetail">
                          <div class="EmploynmentConditionHead">
                            <h2>Documents</h2>
    
                            <div class="editEmploynmentCondition">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </div>
                          </div>
                         
                          <div class="document">

                          </div>
                        
                        </div>
                      </div>


                   </div>
                </div>

                <div class="col-md-3">
                    <div class="EmploynmentCondition">
                      <div class="EmploynmentConditionHead">
                        <h4>Employment Conditions</h4>

                        <div class="editEmploynmentCondition" data-toggle="modal" data-target="#enterDetails" onClick={()=>{this.props.changeModal("employmentDetails")}}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#007BFF">
                            <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </div>
                      </div>
                      

                      <div class="editEmploynmentConditionInner" class="collapse" id="ConditionShow" aria-expanded="false">
                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FA852B"><rect fill="none" height="24" width="24"/>
                          <path d="M7.76,16.24C6.67,15.16,6,13.66,6,12s0.67-3.16,1.76-4.24l1.42,1.42C8.45,9.9,8,10.9,8,12c0,1.1,0.45,2.1,1.17,2.83 L7.76,16.24z M16.24,16.24C17.33,15.16,18,13.66,18,12s-0.67-3.16-1.76-4.24l-1.42,1.42C15.55,9.9,16,10.9,16,12 c0,1.1-0.45,2.1-1.17,2.83L16.24,16.24z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M20,12 c0,2.21-0.9,4.21-2.35,5.65l1.42,1.42C20.88,17.26,22,14.76,22,12s-1.12-5.26-2.93-7.07l-1.42,1.42C19.1,7.79,20,9.79,20,12z M6.35,6.35L4.93,4.93C3.12,6.74,2,9.24,2,12s1.12,5.26,2.93,7.07l1.42-1.42C4.9,16.21,4,14.21,4,12S4.9,7.79,6.35,6.35z"/>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Availability</h6>
                          <p>{this.props.employmentQues.AvailableFrom.AvailableFrom} to {this.props.employmentQues.AvailableTill.AvailableTill}</p>
                        </div>
                      </div>

                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 0 24 24" width="21px" fill="#FA852B">
                          <path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Work Type</h6>
                          <p>{this.props.employmentQues.WorkType.WorkType}</p>
                        </div>
                      </div>

                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FA852B">
                          <path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Employment Type</h6>
                          <p>{this.props.employmentQues.EmploymentType.EmploymentType}</p>
                        </div>
                      </div>

                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FA852B">
                          <path d="M0 0h24v24H0z" fill="none"/><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Pay Rate</h6>
                          <p>{this.props.employmentQues.Rate.Rate}$ {this.props.employmentQues.RateType.RateType}</p>
                        </div>
                      </div>

                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="22px" viewBox="0 0 24 24" width="22px" fill="#FA852B"><g>
                          <path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/></g>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Work Location</h6>
                          <p>{this.props.employmentQues.WorkLocation.WorkLocation}</p>
                        </div>
                      </div>


                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="22px" viewBox="0 0 24 24" width="22px" fill="#FA852B"><g>
                          <path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/></g>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Location Preference</h6>
                          <p>{this.props.employmentQues.LocationPreference.LocationPreference}</p>
                        </div>
                      </div>

                      <div class="Conditions disF">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="22px" viewBox="0 0 24 24" width="22px" fill="#FA852B"><g>
                          <path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/></g>
                        </svg>

                        <div class="employenmentsec">
                          <h6>Remote Location</h6>
                          <p>Jharkhand</p>
                        </div>
                      </div>
                    </div>

                    <div class="expand Toggle">
                      <a style={{textDecoration:'none'}} role="button" class="collapsed" data-toggle="collapse" href="#ConditionShow" aria-expanded="false" aria-controls="ConditionShow"></a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
                <div class="modal fade" id="enterDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered multistepModal CreateProfileModal" role="document">
                        <Modal />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        fields : state.educationalDetails.educationalDetails,
        workDetailsFields : state.workDetails.workDetails,
        certificationFields : state.certifications.certifications,
        recommendationFields : state.recommendations.recommendations,
        skills : state.skills.skills,
        employmentQues : state.employmentQues.fields,
        token: state.token,
        basicDetailsFields : state.fields.fields,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editDetails : (id,name) => dispatch({type : "EDIT_DETAILS", id : id, name:name}),
        changeModal : (modal)=> dispatch({type:"CHANGE_MODAL", modal : modal}),
        mapDatabaseToLocal : (name,res,res2) => dispatch({type : "MAP_DATABASE_TO_LOCAl", name:name, res: res, res2: res2})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);