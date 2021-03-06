import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FormSingIn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="register-login-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="login-form">
                                    <h2>Login</h2>
                                    <form>
                                        <div className="group-input">
                                            <label for="username">Username or email address *</label>
                                            <input type="text" id="username" />
                                        </div>
                                        <div className="group-input">
                                            <label for="pass">Password *</label>
                                            <input type="text" id="pass" />
                                        </div>
                                        <div className="group-input gi-check">
                                            <div className="gi-more">
                                                <label for="save-pass">
                                                    Save Password
                                        <input type="checkbox" id="save-pass" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <Link className="forget-pass">Forget your Password</Link>
                                            </div>
                                        </div>
                                        <button type="submit" className="site-btn login-btn">Sign In</button>
                                    </form>
                                    <div className="switch-login">
                                        <Link to="/register" className="or-login">Or Create An Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormSingIn
