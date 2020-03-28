import React from 'react';
import { Redirect } from 'react-router';

function Home(props) {
  const css = {
        h1: {
          color: "cyan",
          fontSize: "70px"
        },
        input: {
          height: "50px",
          width: "400px"
        }
       
  }

    return (
      <div className="home">
        <h1 style={css.h1}>Hello, {props.name}</h1>
        <input style={css.input}/>
      </div>
    )
  }


  export default Home