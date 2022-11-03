import './App.css';
import { useState } from 'react';
import CalcButtons from './CalcButtons';

function App() {

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [refreshToggle, setRefreshToggle] = useState(true)
const operators = [
  {name:'+', function: additionHandler},
  {name:'-', function: subtractionHandler},
  {name:'x', function: multiplicationHandler},
  {name:'AC', function: clear},
  {name:'=', function: equalsHandler},
  {name:'console log', function: logIt}
]

const [screen, setScreen] = useState({
  display: 0,
  memory: null,
  function: null,
  lastNumber: null
})

function logIt(){
  console.log(screen)
}

function clear(){
  setScreen({
    display: [0],
    memory: null,
    function: null
  })
  setRefreshToggle(true)
}

function additionHandler(){
  setScreen({...screen, memory: screen.display, function: addition})
  setRefreshToggle(true)
}

function subtractionHandler(){
  setScreen({...screen, memory: screen.display, function: subtraction})
  setRefreshToggle(true)
}

function multiplicationHandler(){
  setScreen({...screen, memory: screen.display, function: multiplication})
  setRefreshToggle(true)
}

function addition(a, b){
  return a + b
}

function subtraction(a, b){
  return a - b
}

function multiplication(a, b){
  return a * b
}

function equalsHandler(){
  if(screen.lastNumber===null){
    let memory = screen.display
    setScreen({...screen, display:screen.function(parseInt(screen.memory), parseInt(screen.display)), memory: memory})
  } else {
    setScreen({...screen, display:screen.function(parseInt(screen.memory), parseInt(screen.display))})
  }
}

function handleAddNumber(e){
  if(refreshToggle === true){
    setScreen({...screen, display:e.target.value})
    setRefreshToggle(false)
    console.log(refreshToggle)
  } else {
    setScreen({...screen, display: screen.display + e.target.value}) 
  }
}

  return (
    <div className='App'>
      <h1>{screen.display}</h1>
      <CalcButtons
        numbers={numbers}
        operators={operators}
        handleAddNumber={handleAddNumber}
        clear={clear}
        />
    </div>
  );
}

export default App;
