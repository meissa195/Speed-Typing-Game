import logo from './logo.svg';
import './App.css';
import React, {useEffect, useRef, useState} from "react"
import CustomHook
  from './CustomHook';
function App() { 
  const {time, handleChange, startGame, text, wordCount, startClock, inputRef, calculateWordCount} = CustomHook()

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea 
        ref={inputRef}
        onChange={handleChange}
        value={text}
        disabled={!startClock}
      />
      <h4>Time Remaining: {time} </h4>
      {/* Why do need to use the onClick like this? Explain event? */}
      <button onClick={startGame} disabled={startClock}>Start</button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  );
}

export default App;
