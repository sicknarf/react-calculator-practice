import './App.css';
import { useState } from 'react';
import CalcButtons from './CalcButtons';

function App() {

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const operators = [{name:'clear', function: clear}]

const [screen, setScreen] = useState({
  display: [0],
  memory: null
})

function clear(){
  setScreen({
    display: [0],
    memory: null
  })
}

function handleAddNumber(e){
  console.log(screen.display)
  if(screen.display[0] === 0){
  setScreen({...screen, display:e.target.value})
  } else {
  setScreen({...screen, display: [...screen.display, e.target.value]}) // this adds to the array
  console.log(typeof(parseInt(screen.display.join('')))) // this will be how to join it into mutable numbers. currently in an array so that it displays.
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
