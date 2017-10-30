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
                    { this.props.authenticated
                        ? (
                            <li>{this.props.user.displayName} <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout">Logout</Link></li>

                        )
                        : (
                            <li><Link className="pt-button pt-minimal pt-icon-log-in" to="/login">Login</Link></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Header;
