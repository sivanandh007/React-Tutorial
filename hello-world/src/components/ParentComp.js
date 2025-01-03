import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Jwala'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Jwala'
            })
        },2000)
    }

  render() {
    console.log('Parent Component Render')
    return (
      <div>
        <MemoComp name={this.state.name}/>
        {/* ParentComp
        <RegComp name = {this.state.name}></RegComp>
        <PureComp name = {this.state.name}></PureComp> */}

      </div>

    )
  }
}

export default ParentComp