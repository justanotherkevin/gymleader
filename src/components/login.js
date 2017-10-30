import React, {Component} from 'react'
import {fire, facebookProvider} from '../config/fireConfig';

import {Redirect} from 'react-router-dom'
import {Button, Position, Toaster, Intent} from "@blueprintjs/core";
// Toaster for warning message
const loginStyle = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
        this.state = {
            redirect: false
        }
    }
    authWithFacebook() {
        console.log("Facebook login")
        fire.auth().signInWithPopup(facebookProvider).then((result, error) => {
            if (error) {
                this.toaster.show({intent: Intent.DANGER, message: "Unable to sign in with Facebook", timeout: 5000})
            } else {
                this.setState({redirect: true})
            }
        })
    }
    authWithEmailPassword(event) {
        event.preventDefault()
        console.log("with email and password")
        console.table({email: this.emailInput.value, password: this.passwordInput.value})
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/'/>
        }

        return (
            <div style={loginStyle}>

                <Toaster position={Position.TOP_RIGHT} ref={(element) => {
                    this.toaster = element
                }}/>
                <button style={{
                    width: "100%"
                }} className="pt-button pt-intent-primary" onClick={() => {
                    this.authWithFacebook()
                }}>
                    Log In with Facebook
                </button>
                <hr style={{
                    marginTop: "12px",
                    marginBottom: "12px"
                }}/>
                <form ref={(form) => {
                    this.loginForm = form
                }} onSubmit={(event) => {
                    this.authWithEmailPassword(event)
                }}>
                    <div style={{
                        marginBottom: "10px"
                    }} className="pt-callout pt-icon-info-sign">
                        <h5>Note</h5>
                        If you don't have an account already, this form will create your account.
                    </div>
                    <label className="pt-label">
                        Email
                        <input style={{
                            width: "100%"
                        }} className="pt-input" name="email" type="email" ref={(input) => {
                            this.emailInput = input
                        }} placeholder="Email"></input>
                    </label>
                    <label className="pt-label">
                        Password
                        <input style={{
                            width: "100%"
                        }} className="pt-input" name="password" type="password" ref={(input) => {
                            this.passwordInput = input
                        }} placeholder="Password"></input>
                    </label>
                    <input style={{
                        width: "100%"
                    }} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
                </form>
            </div>
        )
    }
}
export default Login
