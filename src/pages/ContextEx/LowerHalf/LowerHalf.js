import React, {useContext} from 'react';
import CButton from './CButton.js'
import './lower_half.scss';


class LowerHalf extends React.Component {
  
    render() {
        return (
            <div className="lower-about">
                <h2>Lower Part of Page</h2>
                 <CButton/>
            </div>
        )
    }

}

export default LowerHalf