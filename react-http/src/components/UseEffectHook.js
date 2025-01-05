import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('UseEffect - updating document title')
        document.title = `You clicked ${count} times`
    },[count])
  return (
    <div>
        <h1>Count - {count} </h1>
        <input 
        placeholder='Enter a name'
        value={name}
        onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setName(prevName => prevName)}>Ok Change title</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffectHook