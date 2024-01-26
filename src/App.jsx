import React, { useEffect, useState } from 'react'

function App() {
  const [X,setX]=useState(0)
  const [Y,setY]=useState(0)

  const MousePosition= e =>{
    console.log("Mouse event");
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
      console.log("useEffect is called");
      window.addEventListener('mousemove',MousePosition)
  },[])

  return (
    
    <div>
      <div className='bg-slate-900 text-violet-50 h-[658px] flex items-center justify-center'>
      <h1 className='text-4xl'>Hooks x-{X} Y-{Y}</h1>
    </div>
    </div>
  )
}

export default App
