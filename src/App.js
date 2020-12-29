import React,{useState, useEffect, useRef} from "react"
import './App.css';

function App() {
  const [type, setType] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [isStart, setIsStart] = useState(false)
  const [countWords, setCountWords] = useState(0)
  const textBoxRef = useRef(null)

  // To capture the typing
  const handleChange = (event) => {
    const {value} = event.target
    setType(value)
  }

  // To calculate number of words
  const calculateWords = (type) => {
    const wordsArr = type.trim().split(" ")
   return wordsArr.filter(word => word !== "").length
  }

  // To let the count begin and stop when it reaches 0 & run calculateWords when time i 0
  useEffect(() => {
    if (isStart && timeRemaining > 0) {
      setTimeout (() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      setIsStart(false)
      setCountWords(calculateWords(type))
    }
  }, [timeRemaining, isStart])

  // When start is clicked this function will allow us to start again without refreshing the page & Ref is used to focus on textarea when
  // start is clicked without needing to click on the textarea
  const startGame = () => {
    setIsStart(true)
       setTimeRemaining (10)
        setType("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
  }
  
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
