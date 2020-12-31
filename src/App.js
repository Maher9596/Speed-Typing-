import React,{useState, useEffect, useRef} from "react"
import './App.css';
import useGame from "./hooks/useGame"

function App() {
 const {textBoxRef, type, isStart, handleChange, timeRemaining, startGame, countWords} = useGame()
  
  return (
    <div>
         <div>
            <h1>How fast do you type?</h1>
            <textarea ref= {textBoxRef} value={type} disabled={!isStart} onChange={handleChange} value = {type}/>
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick = {() => startGame()} disabled={isStart === true}>Start</button>
            <h1>Word count: {countWords}</h1>
        </div>
  
    </div>
  )
}

export default App;
