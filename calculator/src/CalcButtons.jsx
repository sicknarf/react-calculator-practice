import React from "react";
import { useState } from "react";
import NumberButtons from "./NumberButtons";
import OperatorButtons from "./OperatorButtons";


function CalcButtons({numbers, operators, handleAddNumber, clear}){

    const numberButtons = numbers.map((n, idx)=>
    <NumberButtons
        key={idx}
        number={n}
        handleAddNumber={handleAddNumber}
        />
    )

    const operatorButtons = operators.map((o, idx)=>
    <OperatorButtons 
        key={idx}
        operator={o}
        clear={clear}
    />
    )

    return(
        <div>
            {numberButtons}{operatorButtons}
        </div>
    )
}

export default CalcButtons