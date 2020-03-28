import React from 'react';

class About extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {


      return (
      <div className="about">  
        <h2>I am a {this.state.color} Car!</h2>
        <button>Change Coloe</button>
      </div>  
      );
    }
  }

  export default About  