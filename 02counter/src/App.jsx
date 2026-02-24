import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  //let counter = 15;w
  const addvalue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const removevalue=()=>{
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
      <h1>React app 2</h1>
      <h2>current count is {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>decrease value</button>
    </>
  )
}

export default App
