import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {

    

      render() {
        const {count,incrementCount} = this.props
        return <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>
      }
    }


export default UpdatedComponent(HoverCounter)