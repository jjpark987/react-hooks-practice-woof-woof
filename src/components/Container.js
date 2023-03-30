import React from "react";

function Container({ currentDog, onDogClick }) {
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={currentDog.image} alt={currentDog.name} />
                <h2>{currentDog.name}</h2>
                {currentDog ? <button onClick={onDogClick}>{currentDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button> : null}
            </div>
        </div>
    )
}

export default Container