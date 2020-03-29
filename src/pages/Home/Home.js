import React from 'react';
import HomeBottom from "./Bottom/Bottom.js"
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

  async function exampleFetch() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
    const json = await response.json() //.json() is a fetch method Takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.
    
    const abil = json.abilities;
    console.log(abil);
}


    return (
      <div className="home">
        <h1 style={ 5 === 5 ? css.h1 : css.red }>Hello, {props.name}</h1>
        <button onClick={alertMe}>Cleek</button>
        <p>{5 === 6 ? "This Home" : "This is the matrix"}</p>
        <input/>
        <HomeBottom/>
      </div>
    )
  }


  export default Home