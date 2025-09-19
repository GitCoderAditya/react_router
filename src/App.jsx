import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import { useRef, useState } from 'react';

function App() {
  

  const [counter, setCounter] = useState(0);
  const timer = useRef();

  function clockStart() {
    let value = setInterval(function(){
      setCounter((c) => c + 1);
    },1000);

    timer.current = value;

  }
    function clockStop() {
      clearInterval(timer.current);
  }
  return (


    <div>
      {counter}
      <br />
      <button onClick={clockStart}>Start</button>
      <button onClick={clockStop}>Stop</button>
     </div>
  )
}




export default App
