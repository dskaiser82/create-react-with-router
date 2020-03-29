import React from 'react';
import './Contact.scss'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
      // This binding is necessary to make `this` work in the callback
    //   this.handl = this.handleClick.bind(this);
    } //////////////end constructor//////////////////////

    componentDidMount(){
        console.log(this)
    }

    render() {
      //Per Docs render should not interact with dom
      //If we have function that does an alert each time, 
      //and this never changes,  ok to use method here
    
      return (
      <div className="contact">  
        <h1>Contact Page</h1>
      <p>{this.props.location.pathname}</p>
        <input type="email" name="email" />
      </div>  
      );
    }
  }

  export default Contact