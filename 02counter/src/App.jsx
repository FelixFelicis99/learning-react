import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState("black");
  // document.getElementById('root').style.backgroundColor = counter

  const changebg = (event)=>{
    const colour = event.currentTarget.dataset.color
    console.log(colour, Math.random());
    counter=colour;
    setCounter(counter);
    // document.getElementById('root').style.backgroundColor = counter
    // counter=colour;
    // setCounter(counter);
    // console.log("red");
  }
  
  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: counter}}>
    <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4">
      {/* document.getElementById('root').style.backgroundColor=counter; */}
      
      <button data-color="red" onClick={changebg} className="bg-red-500 text-white">red</button> 
      <button data-color="blue" onClick={changebg} className="bg-blue-500 text-white rounded">blue</button>
      <button data-color="green" onClick={changebg} className="bg-green-500 text-white rounded">green</button>
      <button data-color="yellow" onClick={changebg} className="bg-yellow-500 text-white rounded">yellow</button>
      <button data-color="orange" onClick={changebg} className="bg-orange-500 text-white rounded">orange</button>
      <button data-color="purple" onClick={changebg} className="bg-purple-500 text-white rounded">lavender</button>
    </div>
    </div>
    
  )
}

export default App
