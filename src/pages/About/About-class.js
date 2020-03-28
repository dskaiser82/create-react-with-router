import React from 'react';

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "red"
      };

      this.logIt = () => {
        alert("You've been logged son")
      }
    } //end constructor

    componentDidMount() {
     alert("I did moiunt")
    }

    render() {
      return (
      <div className="about App">  
        <h2>I am a {this.state.color} Car!</h2>
        <button onClick={this.logIt}>Change Coloe</button>
      </div>  
      );
    }
  }

  export default About  