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
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
                <div className="container-fluid container"><a className="navbar-brand" href="#">GymLeaders</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav text-uppercase ml-auto">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active nav-link js-scroll-trigger" href="/">Home </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link nav-link js-scroll-trigger" href="/gym">Gym </a>
                            </li>
                            { this.props.authenticated
                                ? (
                                    <li>{this.props.user.displayName} <Link className="nav-link nav-link pt-icon-log-out" to="/logout">Logout</Link></li>
                                )
                                : (
                                    <li><Link className="nav-link nav-link  pt-icon-log-in" to="/login">Login</Link></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                { isLoading() }
            </nav>
        )
    }
}

export default Header;
