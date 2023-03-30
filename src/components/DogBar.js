import React from "react";
import Dog from "./Dog";

function DogBar({ dogs, onSpanClick }) {
    return (
        <div id="dog-bar">
            {dogs.map(dog => <Dog key={dog.id} dog={dog} onSpanClick={onSpanClick} />)}
        </div>
    )
}

export default DogBar