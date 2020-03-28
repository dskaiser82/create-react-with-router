import React from 'react';

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "red"
      };

      this.logIt = () => {
        alert("Im a method from the constructor")
      }
    } //end constructor

    // componentDidMount() {
    //  alert("I did mount")
    // }

    render() {

      const renderFucntion = () => {alert("I'm a funcion from render")}
      return (
      <div className="about App">  
        <h2>I am a {this.state.color} Car!</h2>
        <button onClick={this.logIt}>Click Method from contructor</button>
        <br/>
        <br/>
        <br/>
        <br/>

        <button onClick={renderFucntion}>Click Method from RENDER</button>
      </div>  
      );
    }
  }

  export default About  