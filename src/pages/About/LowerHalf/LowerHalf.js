import React from 'react';
import './lower_half.scss'

class LowerHalf extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="lower-about">
                <h2>Lower Part of Page</h2>
                <button>Cleek Me</button>
            </div>
        )
    }

}

export default LowerHalf