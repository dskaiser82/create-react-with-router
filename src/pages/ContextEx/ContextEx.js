import React, { useContext } from 'react';
import LowerHalf from './LowerHalf/LowerHalf.js'
import { UserContext } from "../../context/UserContext.js";

//For Dev Tools
UserContext.displayName = 'DennysContext';

const Header = () => {
  const msg = useContext(UserContext);
  return (
    <div>{msg.user}</div>
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
      <UserContext.Provider value={this.state}>
        <div>
          <Header />
          <h2>Context Parent</h2>
          <LowerHalf />
        </div>
      </UserContext.Provider>
    );
  }
}

export default ContextEx 