import React from 'react';
import { Redirect } from 'react-router';

function Home(props) {
  const css = {
        h1: {
          color: "cyan",
          "font-size": "70px"
        }
       
  }

    return <h1 style={css.h1}>Hello, {props.name}</h1>;
  }


  export default Home