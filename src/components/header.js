import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <div className="header_wrapper">
                <ul className="right_side">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gym">Gym</Link></li>
                </ul>
                <ul className="left_side">
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

        )
    }
}

export default Header;
