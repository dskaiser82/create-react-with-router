import React from 'react';
import { Redirect } from 'react-router';
import './Home.scss';

function Home(props) {
  const css = {
    h1: {
      color: "cyan",
      fontSize: "70px"
    },
    red: {
      color: "red"
    }
  }

    return (
      <div className="home">
        <h1 style={ 5 === 5 ? css.h1 : css.red }>Hello, {props.name}</h1>
        <input/>
      </div>
    )
  }


  export default Home