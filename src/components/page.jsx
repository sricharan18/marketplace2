import React from 'react';
import { Route } from 'react-router-dom';

import CreateProfile from './createProfile/createProfile';

class Page extends React.Component{
    // constructor(props)
    // {
    //     super(props);

    // }
    
    render(){
    return (
        <div>
            <Route path="/createProfile" exact component={CreateProfile} />
        </div>
    )
    }
}


export default Page;