import React, { useContext } from 'react';
import { UserContext } from "../../../context/UserContext.js";


function CButton(props) {
    const msg = useContext(UserContext);
    return (
        <div className="c-button">
            <button>I'm the Inner {msg.user}</button>
        </div>
        )
    }


  export default CButton