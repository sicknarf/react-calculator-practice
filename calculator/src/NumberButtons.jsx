import React from "react";
import { useState } from "react";

function NumberButtons({number, handleAddNumber}){
    return(
        <div>
            <button name="display" value={number} onClick={handleAddNumber}>{number}</button>
        </div>
    )
}

export default NumberButtons