import React from 'react';
import App from '../App';
import { Route } from 'react-router-dom'

function myRoutes() {
    return( 
     <div>   
        <Route path="/" exact component={App} /> 
        <Route path="/home" exact component={App} />
        <Route path="/denny" exact component={App} />
    </div>
    );
  }


  export default myRoutes