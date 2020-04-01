import React from 'react';
import './lower_half.scss'

class LowerHalf extends React.Component {
  
    render() {
        return (
            <div className="lower-about">
                <h2>Lower Part of Page</h2>
                <button onClick={this.props.handleClick}>Props Click of parent method</button>
            </div>
        )
    }

}

export default LowerHalf