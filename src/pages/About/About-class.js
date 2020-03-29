import React from 'react';
import LowerHalf from './LowerHalf/LowerHalf.js'

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "red",
        isToggleOn: true
      };

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    } //////////////end constructor//////////////////////


    //Methods
    logIt = () => {
      alert("Im using arrow function")
    }
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }


    // componentDidMount() {
    //  alert("I did mount")
    // }

    render() {
      //Per Docs render should not interact with dom
      //If we have function that does an alert each time, 
      //and this never changes,  ok to use method here
      const renderFucntion = () => {alert("I'm a funcion from render")}

      return (
      <div className={this.state.isToggleOn ? 'about app' : 'blue'}>  
        <h2>I am a {this.state.color} Car!</h2>
        {/* using experiemtn tal this to avoid bind */}
        <button onClick={this.logIt}>With Arrow functions</button>

        <button onClick={this.handleClick }>Toogle Parent</button>
       
        {/* Only if its one time thing that fires */}
        <button onClick={renderFucntion}>Click Method from RENDER</button>

        <LowerHalf handleClick={this.handleClick}/>
      </div>  
      );
    }
  }

  export default About  