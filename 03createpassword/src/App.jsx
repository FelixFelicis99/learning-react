import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numb, setnumb] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  //useCallback(functions, [dependencies])
  const passwordgenerator = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(numb) str+="1234567890"
    if(char) str+="!@#$%^&*(){}:';,./?><";

    for(let i=0;i<length;i++)
    {
      let ind=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(ind)
    }
    setpassword(pass)

  }, [length, numb, char, setpassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
