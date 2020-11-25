// Code DelayedButton Component Here
import React,{Component} from "react"

export default class DelayedButton extends Component{
    // constructor(props){
    //     super(props)
    // }

    handleClick = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                Delay me!
            </button>
        )
    }
}

// import React, { Component } from 'react'
// export class DelayedButton extends Component {
//     handleEvent = (e) => {
//         e.persist();
//         setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleEvent}>DelayedButton</button>
//             </div >
//         )
//     }
// }
// export default DelayedButton