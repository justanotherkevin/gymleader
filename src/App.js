import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { fire } from './config/fireConfig';
import { Spinner } from '@blueprintjs/core';

import Header from './components/header';
import Login from './components/login';
import Logout from './components/logout';
import Home from './pages/Home';
import Gym from './pages/Gym';

import './stylesheets/app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true,
        }
    }
    componentWillMount() {
        this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false,
                })
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false,
                })
            }
        })
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }
    render() {
        if ( this.state.loading === true ) {
            return (
                <div style={{ textAlign: "center", position: "absolute", top: "25%", left:"50%" }}>
                    <h3>Loading</h3>
                    <Spinner />
                </div>
            )
        }
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header authenticated={this.state.authenticated}
                            user={this.state.currentUser}/>
                        <hr/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route path="/gym" component={Gym} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
