import "./_auth.scss";

import React from 'react';
import {renderIf} from '../../lib/__';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {

    e.preventDefault();
    
    let handler = e.target.dataset.handler === "signup" ? this.props.handleCreate : this.props.handleLogin;
    
    handler(this.state)
    .then()
    .catch(console.error);

  }

  render() {

    let username =
                <label htmlFor="username">
                    <span>Username</span>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        required="true"
                        onChange={this.handleChange}
                    />
                </label>

    let password =
                <label htmlFor="password">
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        required="true"
                        onChange={this.handleChange}
                    />
                </label>

    return (

        <div className="loginFormContainer">

            <form onSubmit={this.handleSubmit} data-handler="login" className="auth-form">

                <h2>Existing Users, Login</h2>

                {username}
                {password}

                <button type="submit">Login</button>

            </form>


            <form onSubmit={this.handleSubmit} data-handler="signup" className="auth-form">

                <h2>New Users, Create an Account</h2>

                <label htmlFor="email">
                    <span>Email Address</span>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        required="true"
                        onChange={this.handleChange}
                    />
                </label>

                {username}

                {password}

                <button type="submit">Create Account</button>

            </form>

        </div>

    )
  }
}

export default AuthForm