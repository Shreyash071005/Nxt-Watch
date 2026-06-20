import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onShubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 7})
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  onChnageUsername = event => {
    this.setState({username: event.target.value})
  }

  onChnagePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const loginContainerTheme = isDarkTheme
            ? 'login-container-dark'
            : 'login-container-light'

          return (
            <div className={`login-container ${loginContainerTheme}`}>
              <div
                className={`login-form-container ${
                  isDarkTheme
                    ? 'login-form-container-dark'
                    : 'login-form-container-light'
                }`}
              >
                <img
                  src={websiteLogo}
                  alt="website logo"
                  className="website-logo"
                />

                <form className="login-form" onSubmit={this.onShubmitForm}>
                  <div className="input-container">
                    <label
                      htmlFor="username"
                      className={`login-label ${
                        isDarkTheme ? 'login-label-dark' : 'login-label-light'
                      }`}
                    >
                      USERNAME
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChnageUsername}
                      className={`login-input ${
                        isDarkTheme ? 'login-input-dark' : 'login-input-light'
                      }`}
                      autoComplete="off"
                    />
                  </div>

                  <div className="input-container">
                    <label
                      htmlFor="password"
                      className={`login-label ${
                        isDarkTheme ? 'login-label-dark' : 'login-label-light'
                      }`}
                    >
                      PASSWORD
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChnagePassword}
                      className={`login-input ${
                        isDarkTheme ? 'login-input-dark' : 'login-input-light'
                      }`}
                    />
                  </div>

                  <div className="show-password-container">
                    <input
                      type="checkbox"
                      id="showPassword"
                      className="checkbox"
                      onChange={this.onChangeShowPassword}
                    />
                    <label
                      htmlFor="showPassword"
                      className={`show-password-label ${
                        isDarkTheme
                          ? 'show-password-label-dark'
                          : 'show-password-label-light'
                      }`}
                    >
                      Show Password
                    </label>
                  </div>

                  <button type="submit" className="login-button">
                    Login
                  </button>

                  {showError && <p className="error-message">* {errorMsg}</p>}
                </form>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
