import React from "react";

function Filter({ filter, onFilterClick }) {

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilterClick}>{filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"}</button>
        </div>
    )
}

export default Filter