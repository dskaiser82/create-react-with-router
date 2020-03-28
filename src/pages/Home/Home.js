import React from 'react';
import { Redirect } from 'react-router';
import './Home.scss';

function Home(props) {
  const css = {
        h1: {
          color: "cyan",
          fontSize: "70px"
        },
        
       
  }

    return (
      <div className="home">
        <h1 style={css.h1}>Hello, {props.name}</h1>
        <input/>
      </div>
    )
  }


  export default Home