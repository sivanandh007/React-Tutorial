import React from 'react'

// function Greet() {
//     return <h1>Hello Venkata Jwala...!</h1>
// }

const Greet = props => {
    console.log(props)
      return <h1>{props.name} is {props.Relation}</h1>
}

export default Greet