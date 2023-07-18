import { Component } from "react";
import NavItem, { NavItemDropDown } from "../NavItem/NavItem";
import './Header.css'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">React Website</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <NavItem >
                                <a className="nav-link " href="#">Home</a>
                            </NavItem>
                            <NavItem >
                                <a className="nav-link" href="#">Browse</a>
                            </NavItem>

                            <NavItemDropDown>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Details
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </NavItemDropDown>
                            <NavItem >
                                <a className="nav-link" href="#">Streams</a>
                            </NavItem>
                            <NavItem >
                                <a className="nav-link" href="#">Profile</a>
                            </NavItem>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header