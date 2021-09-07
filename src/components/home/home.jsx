import React, {Component} from 'react';
import './home.css';
import Header from "../header/Header";


export const Home = (props) => {
    const orangeBtn = {
        backgroundColor: '#FA852B',
        borderColor: '#FA852B',
        borderRadius: '4px',
        width: '120px',
        height: '45px',
      }
    return(
        <div>
            <Header />
        
        <div>
            <section className="section-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 disTable">
                            <div className="top-section-left">
                                <h1>Join the <span>world’s</span> <br /> best <span>Marketplace</span></h1>
                                <p>Find great talent. Build your business.<br /> Take your career to the next level.</p>
                                <div className="bt-group">
                                    <button className="common-btn commonBlueBtn">I want a Job</button>
                                    <button className="common-btn commonOutlineBtn">I want to Hire</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 disTable">
                            <div className="top-section-right">
                                <div className="form-row">
                                    <div className="form-group">
                                    <label for="validationCustom03">Location</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Select Your City" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label for="validationCustom04">Type</label>
                                    <input type="text" className="form-control" id="validationCustom04" placeholder="What kind of work do you want?" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary orange-btn" style={orangeBtn}>Explore Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}