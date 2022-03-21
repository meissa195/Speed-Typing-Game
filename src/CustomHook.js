import { useState, useEffect, useRef } from "react"

export default function CustomHook(gameTime = 10) {

    const inputRef = useRef(null)

    const START_TIME = 5
    // state for textarea
    const [text, setText] = useState("")
  
    // state for time
    const [time, setTime] = useState(gameTime)
  
    // state for game
    const [startClock, setStartClock] =useState(false)
  
    // state for word count
    const [wordCount, setWordCount] = useState(0)
    
    // function for changing textarea
    function handleChange(event) {
      // event to pull out value of textarea
      const {value} = event.target
      // set the text to the current value of the textarea box
      setText(value)
    }
    // function for counting words
    function calculateWordCount (words) {
      // taking the textarea, splitting word by word and removing white space & returning the length
      const wordsArr = words.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
    }
    // function to start clock
    function startGame() {
      setStartClock(true)
      setTime(gameTime)
      setText("")
      inputRef.current.disabled = false
      inputRef.current.focus()
    }
    // function to end game
    function endGame() {
      setStartClock(false)
      setWordCount(calculateWordCount(text))
    }
    // count down for time, every time time changes
    useEffect(() => {
      // stops count down if 0
        if(startClock === true && time > 0) {
          setTimeout(() => {
            setTime(time => time - 1)
          }, 1000)
        } else if(time === 0) {
          endGame()
        }
      }, [time, startClock])
  
      return(
          {time, handleChange, startGame, text, wordCount, startClock, inputRef, calculateWordCount}
      )
}