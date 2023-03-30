import React from "react";

function Dog({ dog, onSpanClick }) {
    return (
        <span onClick={() => onSpanClick(dog)}>
            {dog.name}
        </span>
    )
}

export default Dog