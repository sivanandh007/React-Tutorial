import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name:'Jwala',
            age:28,
            relation:'Mother'
        },
        {
            id:2,
            name:'Sivanandh',
            age:28,
            relation:'Father'
        },
        {
            id:1,
            name:'Buddi Siva',
            age:2,
            relation:'Child'
        },

    ]
    const personList = persons.map(person =>(
        <Person key={person.id} person = {person}/>
     ))
  return (
    <div>
    {personList}
    </div>
  )
}

export default NameList