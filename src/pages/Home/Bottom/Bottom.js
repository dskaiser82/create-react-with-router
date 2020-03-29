import React, { useState, useEffect } from 'react';

function HomeBottom(){
    //(default state),  (method to change state)
     const [bottomName, setBottomName] = useState("Im a default bottom name")


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        alert("Effect Ran")
    });

    return(
        <div className="home-bottom">
            <h2>Bottom Page</h2>
            <p>{bottomName}</p>
            <button onClick={() => setBottomName("New Name!!")}>
                PokeMon Click
            </button>
        </div>
    )

}

export default HomeBottom