import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '' ,lastName:''})
  return (
    
    <div>
        <input type='text'
        value={name.firstName}
        placeholder='Enter Your First Name' 
        onChange={e => setName({...name, firstName: e.target.value})}/>

        <input type='text'
        value={name.lastName}
        placeholder='Enter Your Last Name' 
        onChange={e => setName({...name, lastName: e.target.value})}/>

        <h2>Your firstName is - {name.firstName}</h2>
        <h2>Your lastName is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>


    </div>
  )
}

export default HookCounterThree