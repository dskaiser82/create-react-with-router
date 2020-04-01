import React, {useContext} from 'react';
import LowerHalf from './LowerHalf/LowerHalf.js'
import { UserContext } from "../../context/UserContext.js";

const Header = () => {
  const msg = useContext(UserContext);
return(
<div>{msg}Header</div>
)

}



class ContextEx extends React.Component {
    constructor() {
      super();
      this.state = {
        user: "dkaiser"
      };

    } //////////////end constructor//////////////////////

    render() {
      


      return ( 
        <UserContext.Provider value="Hello from context">
          <div>
            <Header/>
            <h2>Context Parent</h2>
        </div>  
      </UserContext.Provider>
      );
    }
  }

  export default ContextEx 