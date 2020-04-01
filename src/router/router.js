import React from 'react';
import App from '../App';
import About from '../pages/About/About-class.js';
import Contact from '../pages/Contact/Contact.js';
import AllPoke from '../pages/AllPoke/AllPoke.js';
import ContextEx from '../pages/ContextEx/ContextEx.js';
import { Route } from 'react-router-dom'

function myRoutes() {
    return( 
     <div>   
        <Route path="/" exact component={App} /> 
        <Route path="/home" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/poke" exact component={AllPoke} />
        <Route path="/denny" exact component={App} />
        <Route path="/context" exact component={ContextEx} />
    </div>
    );
  }


  export default myRoutes