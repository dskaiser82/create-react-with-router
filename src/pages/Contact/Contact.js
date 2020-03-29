import React from 'react';
import './Contact.scss'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
      // This binding is necessary to make `this` work in the callback
			this.handleEmail = this.handleEmail.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
    } //////////////end constructor//////////////////////

    componentDidMount(){
        console.log(this)
		}
		//Goes in input
    handleEmail(event){
        this.setState({email: event.target.value})
        console.log(event.target)
    }
    //Goes om Form
    handleSubmit(event) {
        // alert('An essay was submitted: ' + this.state.email);
        event.preventDefault();
      }
    

    render() {
      //Per Docs render should not interact with dom
      //If we have function that does an alert each time, 
      //and this never changes,  ok to use method here
    
      return (
      <div className="contact">  
				<div className="container">
					<h1>Contact Page</h1>
					<p>{this.props.location.pathname}</p>

					<form onSubmit={this.handleSubmit} >
							<input onChange={this.handleEmail} type="email" name="email" className="input-email" />
							<input type="submit" value="Submit" />
					</form >

					<p>{this.state.email}</p>
					</div>
      </div>  
      );
    }
  }

  export default Contact