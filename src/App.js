import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { fire } from './config/fireConfig';

import Header from './components/header';
import Login from './components/login';
import Logout from './components/logout';
import Home from './pages/Home';
import Gym from './pages/Gym';

import './stylesheets/app.css';

class App extends Component {
    constructor() {
        super();
        this.setCurrentUser = this.setCurrentUser.bind(this);
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
    setCurrentUser(user) {
       if (user) {
         this.setState({
           currentUser: user,
           authenticated: true
         })
       } else {
         this.setState({
           currentUser: null,
           authenticated: false
         })
       }
     }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header authenticated={this.state.authenticated}
                            user={this.state.currentUser}
                            loading={this.state.loading} />
                        <hr/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login"
                            render={ (props) => {
                                return <Login setCurrentUser={this.setCurrentUser} {...props} />
                            }}
                        />
                        <Route exact path="/logout" component={Logout} />
                        <Route path="/gym" component={Gym} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
