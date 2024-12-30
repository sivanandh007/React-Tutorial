import React , {Component} from 'react'

class Welcome extends Component {
    render() {
        return <h1>{this.props.name} is {this.props.Relation}</h1>
    }
}
export default Welcome