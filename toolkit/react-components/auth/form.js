import React from 'react'
import {renderIf} from '../../lib/__'

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      error: null,
      action: "login",
    }

    this.handleCreate = this.handleCreate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCreate(e) {
      e.preventDefault();
      this.setState({action:"signup"});
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {

    e.preventDefault()
    let {username, password, email} = this.state

    let handler = this.state.action === "signup" ? this.props.handleCreate : this.props.handleLogin;

    handler({username, password, email})
    .then(() => {
      this.setState({username: '', email: '', password: ''})
    })
    .catch(error => {
      console.error(error)
      this.setState({error})
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="auth-form">

        <div className="error">{this.state.error}</div>

        {

            renderIf(
                this.state.action === "login",
                <div><a href="#" onClick={this.handleCreate}>New User? Create Your Account</a></div>
            )

        }

        {
            renderIf(
                this.state.action === 'signup',
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    required="true"
                    onChange={this.handleChange}/>
            )
        }

        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          required="true"
          onChange={this.handleChange}/>

        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          required="true"
          onChange={this.handleChange}/>

        <button type="submit">{this.state.action}</button>

      </form>
    )
  }
}

export default AuthForm