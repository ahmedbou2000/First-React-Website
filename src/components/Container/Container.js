import { Component } from "react";
import './Container.css'


class Container extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Container