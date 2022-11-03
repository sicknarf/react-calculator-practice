import './App.css';
import { useState } from 'react';
import CalcButtons from './CalcButtons';

function App() {

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [refreshToggle, setRefreshToggle] = useState(true)
const operators = [
  {name:'=', function: equalsHandler},
  {name:'+', function: additionHandler},
  {name:'AC', function: clear},
  {name:'console log', function: logIt}
]

const [screen, setScreen] = useState({
  display: 0,
  memory: null,
  function: null
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
  console.log('this is screen.display')
  console.log(screen.display)
  setScreen({...screen, memory: screen.display, function: addition})
  setRefreshToggle(true)
  console.log(screen)
}

function addition(a, b){
  return a + b
}

function equalsHandler(){
  console.log(screen.memory)
  setScreen({...screen, display:screen.function(parseInt(screen.memory), parseInt(screen.display))})
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
