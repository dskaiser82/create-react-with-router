import React from 'react';
import App from '../App';
import About from '../pages/About/About-class.js';
import Contact from '../pages/Contact/Contact.js';
import { Route } from 'react-router-dom'

function myRoutes() {
    return( 
     <div>   
        <Route path="/" exact component={App} /> 
        <Route path="/home" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/denny" exact component={App} />
    </div>
    );
  }


  export default myRoutes