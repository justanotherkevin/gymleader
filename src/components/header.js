import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <div className="header_wrapper">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gym">Gym</Link></li>
                </ul>
            </div>

        )
    }
}

export default Header;
