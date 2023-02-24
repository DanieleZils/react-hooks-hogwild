import React from "react";




function Hog({name, image}) {
    return (
        <div>
            <div className="row">
                <div className="ui eight wide column">
                    <p>Name: {name}</p>
                    <img src={image} alt={name}></img>
                </div>
            </div>
        </div>
    )
}

export default Hog;