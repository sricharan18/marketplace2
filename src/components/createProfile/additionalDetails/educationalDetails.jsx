import React from 'react';

class EducationalDetails extends React.Component {
    render(){
        return(
            <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Educational Details</h5>
                            </div>
                            <div class="modal-body candidate-signup">

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputDegree">Degree</label>
                                <input id="inputDegree" class="form-control" type="text" placeholder="Enter Degree Name" />
                                </div>
                                <div class="col-md-6">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputYear">Passing Year</label>
                                    <input id="inputYear" class="form-control" type="text" placeholder="Enter Passing Year" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <div class="form-check">
                                        <label class="checkBoxContainer">Currently Studying
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputUniversity">University</label>
                                <input id="inputUniversity" class="form-control" type="text" placeholder="Enter University Name" />
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputGrade">Grade</label>
                                <input id="inputGrade" class="form-control" type="text" placeholder="Enter Grade" />
                                </div>
                            </div>
                            
                            </div>
                            <div class="modal-footer">
                            <div class="btn-group NextFormButtons ModalNextFormButtons ">
                                <button class="common-btn commonOutlineBtn">Reset</button>
                                <button class="common-btn commonBlueBtn">Save</button>
                            </div>
                            </div>
                        </div>
        )
    }
}

export default EducationalDetails