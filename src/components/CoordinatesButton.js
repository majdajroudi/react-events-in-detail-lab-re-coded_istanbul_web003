// Code CoordinatesButton Component Here

import React, {Component} from "react"

export default class CoordinatesButton extends Component {
    constructor(props){
        super()
    }

    handleButtonClick(e) {
        const coordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return(<button onClick={(e) => this.handleButtonClick(e)}>
            Click me!
        </button>)
    }
}
