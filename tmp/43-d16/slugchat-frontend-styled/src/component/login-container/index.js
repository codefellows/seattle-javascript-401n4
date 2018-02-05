import React from 'react'
import {connect} from 'react-redux'

import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'

export class LoginContainer extends React.component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      username: '',
      emailError: null,
      usernameError: null,
    }

    this.validate = this.validate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate(e){
  }

  handleChange(e){
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render(){
    return (
      <div className='login-container'>
      <input 
        type='text'
        name='username'
        placeholder='username'
        value={this.state.username}
        onChange={this.handleChange}
        />

      <input 
        type='password'
        name='password'
        placeholder='password'
        value={this.state.password}
        onChange={this.handleChange}
        />

      <button>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
