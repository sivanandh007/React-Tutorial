import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }


  render() {

    return this.state.isLoggedIn && <div>Welcome Venkata Jwala</div>

    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Venkata Jwala</div> :
    //     <div>Welcome Guest</div>

    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Jwala</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Venkata Jwla
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    // return (
        
    //   <div>
    //     Welcome Venkata Jwala
    //     <div>
    //         Welcome Guest
    //     </div>
    //   </div>
      
    // )
  }
}

export default UserGreeting