import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numb, setnumb] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null)
  //useCallback(functions, [dependencies])
  const passwordgenerator = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(numb==true) str+="1234567890"
    if(char==true) str+="!@#$%^&*(){}:';,./?><";

    for(let i=0;i<length;i++)
    {
      let ind=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(ind)
    }
    setpassword(pass)

  }, [length, numb, char, setpassword])

  useEffect(()=>{passwordgenerator()}, [length, numb, char, passwordgenerator])

  const copytoclip = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-wd mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} 
          className='bg-white outline-none w-full py-1 px-3 text-center' placeholder="password"
          readOnly ref={passwordref}/>

          <button onClick={copytoclip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'> 
            <input type='range' min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numb} id="numberinput"
            onChange={()=>{
              setnumb((prev) => !prev);
            }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={char} id="charinput"
            onChange={()=>{
              setchar((prev) => !prev);
            }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
