import React, { useContext } from 'react';
import LowerHalf from './LowerHalf/LowerHalf.js'
import { UserContext } from "../../context/UserContext.js";


//Make a class component called Header

class ContextEx extends React.Component {
  render() {
    return (
        <div>
          <h2>Context Parent</h2>
        </div>
    );
  }
}

export default ContextEx 