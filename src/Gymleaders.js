import React, { Component } from "react";
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from "react-router-dom";
import { fire } from "./config/fireConfig";

import Navbar from "./components/navbar";
import Login from "./components/login";
import Logout from "./components/logout";
import Home from "./pages/Home";
import Gym from "./pages/Gym";
import UserPage from "./pages/User";

// import App from "./components/app";
import store from "./store/store";

import "./stylesheets/app.css";

class Gymleaders extends Component {
    constructor() {
        super();
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true
        };
    }
    componentWillMount() {
        this.removeAuthListener = fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }
    componentWillUnmount() {
        this.removeAuthListener();
    }
    setCurrentUser(user) {
        if (user) {
            this.setState({
                currentUser: user,
                authenticated: true
            });
        } else {
            this.setState({
                currentUser: null,
                authenticated: false
            });
        }
    }

    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className="app">
                        <Navbar
                            authenticated={this.state.authenticated}
                            user={this.state.currentUser}
                            loading={this.state.loading}
                        />
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/login"
                            render={props => {
                                return (
                                    <Login
                                        setCurrentUser={this.setCurrentUser}
                                        {...props}
                                    />
                                );
                            }}
                        />
                        <Route exact path="/logout" component={Logout} />
                        <Route path="/gym" component={ Gym } />
                        <Route path="/user" component={ UserPage } currentUser={this.state.currentUser}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Gymleaders;
