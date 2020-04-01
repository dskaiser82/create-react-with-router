import React from 'react';
import LowerHalf from './LowerHalf/LowerHalf.js'

class ContextEx extends React.Component {
    constructor() {
      super();
      this.state = {
       
      };

    } //////////////end constructor//////////////////////

    render() {
      


      return (
      <div>  
        <h2>Context Parent</h2>
        {/* using experiemtn tal this to avoid bind */}
       
      </div>  
      );
    }
  }

  export default ContextEx 