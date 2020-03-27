import React from 'react';
import App from '../App';
import { Route } from 'react-router-dom'

function myRoutes() {
    return <Route path="/home" exact component={App} />;
  }


  export default myRoutes