import React from 'react'
import { saveToken } from '../../lib'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    const token = '123456789'
    saveToken(token)
    this.props.history.go("/");
  }

  logout() {
    const token = ''
    saveToken(token)
  }
  
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.login}>
          Primary
        </button>
        <button type="button" className="btn btn-danger" onClick={this.logout}>
          Danger
        </button>
      </div>
    )
  }
}