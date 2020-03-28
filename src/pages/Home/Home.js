import React from 'react';
// import { Redirect } from 'react-router';
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

  const alertMe = () => {alert("me")}

    return (
      <div className="home">
        <h1 style={ 5 === 5 ? css.h1 : css.red }>Hello, {props.name}</h1>
        <button onClick={alertMe}>Cleek</button>
        <p>{5 === 6 ? "This Home" : "This is the matrix"}</p>
        <input/>
      </div>
    )
  }


  export default Home