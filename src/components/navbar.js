import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        const isLoading = () => {
            if (this.props.loading) {
                return (
                    <div className="pt-progress-bar pt-intent-primary .modifier">
                        <div className="pt-progress-meter"></div>
                    </div>
                )
            }
        }
        return (
            <div className="header_wrapper">
                <ul className="header_right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gym">Gym</Link></li>
                </ul>
                <ul className="header_left">
                    { this.props.authenticated
                        ? (
                            <li>{this.props.user.displayName} <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout">Logout</Link></li>

                        )
                        : (
                            <li><Link className="pt-button pt-minimal pt-icon-log-in" to="/login">Login</Link></li>
                        )
                    }
                </ul>
                { isLoading() }
            </div>
        )
    }
}

export default Header;
