import React, { useState, useEffect } from 'react';

function HomeBottom(){
    //(default state),  (method to change state)
     const [pokeName, setPoke] = useState("Picachu")


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        alert(100)
    });

    return(
        <div className="home-bottom">
            <h2>Bottom Page</h2>
            <p>{pokeName}</p>
            <button onClick={() => setPoke("DennyMonster")}>
                PokeMon Click
            </button>
        </div>
    )

}

export default HomeBottom