import { Component } from "react";
import './Container.css'


class Container extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            this.props.children
        )
    }
}

export default Container