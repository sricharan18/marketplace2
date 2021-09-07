import React from 'react';
import { Route,BrowserRouter,Switch, Redirect} from 'react-router-dom';

import CreateProfile from './createProfile/createProfile';
import AdditionalDetails from './createProfile/additionalDetails/additionalDetails';
import BasicDetails from './createProfile/basicDetails';
import EmploymentQues from './createProfile/employmentQues';
import { Home } from './home/home';
import ViewProfile from './viewProfile/viewProfile';
import viewProfile from './viewProfile/viewProfile';

class Page extends React.Component{
    // constructor(props)
    // {
    //     super(props);

    // }

    // componentWillMount() {
    //     if(localStorage.getItem("token") !== null){

    //     }
    //   }
    
    render(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createProfile/basicDetails" render={() => 
                    ((localStorage.getItem("token") !== null) ? <BasicDetails />: <Redirect to="/" />)}/>
                <Route path="/createProfile/additionalDetails" render={() => 
                    ((localStorage.getItem("token") !== null) ? <AdditionalDetails />: <Redirect to="/" />)}/>
                <Route path="/createProfile/employmentDetails" render={() => 
                    ((localStorage.getItem("token") !== null) ? <EmploymentQues />: <Redirect to="/" />)}/>
                {/* <Route path="/viewProfile" render={() => 
                    ((localStorage.getItem("token") !== null) ? <ViewProfile />: <Redirect to="/" />)}/> */}
                <Route path="/viewProfile" component={ViewProfile}/>
            </Switch>
        </BrowserRouter>
    )
    }
}


export default Page;