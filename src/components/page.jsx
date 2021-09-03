import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom';

import CreateProfile from './createProfile/createProfile';
import AdditionalDetails from './createProfile/additionalDetails/additionalDetails';
import BasicDetails from './createProfile/basicDetails';
import EmploymentQues from './createProfile/employmentQues';

class Page extends React.Component{
    // constructor(props)
    // {
    //     super(props);

    // }
    
    render(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/createProfile/basicDetails" component={BasicDetails} />
                <Route path="/createProfile/additionalDetails" exact component={AdditionalDetails} />
                <Route path="/createProfile/employmentDetails" exact component={EmploymentQues} />
            </Switch>
        </BrowserRouter>
    )
    }
}


export default Page;