import React, {Component} from 'react'
import './omm-counter.css'
export default class OmmCounter extends Component {
    state = { count: 0 }
    inc = () => { this.setState({count: (this.state.count + 1)}) }
    dec = () => { this.setState({count: (this.state.count - 1)}) }
    render() {
        // In WebComonents, we needs to query button, attach event listeners for
        // input changes, and query the element counter-state to update the UI
        // -> lots of boilerplate code!
        // In React, we just update the state and React propagates the changes to the UI
        return (
            <div className="counter">
                <span className="counter-state">{ this.state.count }</span>
                <div className="buttons">
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}