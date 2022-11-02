import React from "react";
import { useState } from "react";

function OperatorButtons({operator}){
    return(
        <div>
            <button onClick={operator.function}>{operator.name}</button>
        </div>
    )
}

export default OperatorButtons