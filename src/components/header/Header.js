import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    state = {};

    render() {
        return <div className="header">

            <div className="header-block-1"/>
            <div className="header-block-2/"/>

            <div className="header-block-3">
                <div className="header-user-profile"/>

            </div>

            <div className="header-text-block">
                <p className="header-text">News portal</p>

            </div>


        </div>

    }
}


export default Header;