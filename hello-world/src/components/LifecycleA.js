import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jwaala'
      }
      console.log('LifeCycle A Constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null

    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }



    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    changeState = () => {
        this.setState({
            name:'codeEvolution'
        })
    }

  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <h1>LIfeCycleA</h1>
        <LifecycleB />
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}

export default LifecycleA