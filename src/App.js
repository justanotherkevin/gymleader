import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { fire } from './config/fireConfig';

import Header from './components/header';
import Login from './components/login';
import Home from './pages/Home';
import Gym from './pages/Gym';

import './stylesheets/app.css';

class App extends Component {
    constructor() {
        super();
        // this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state = {
            authenticated: false,
            currentUser: null,
        }
    }
    componentWillMount() {
        this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.displayName)
                this.setState({
                    authenticated: true,
                    currentUser: user,
                })
            } else {
                this.setState({
                    authenticated: false,
                })
            }
        })
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header authenticated={this.state.authenticated}
                            user={this.state.currentUser}/>
                        <hr/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/gym" component={Gym} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
