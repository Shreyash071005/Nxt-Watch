import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {
  LoginContainer,
  LoginFormContainer,
  WebsiteLogo,
  LoginForm,
  InputContainer,
  LoginLabel,
  LoginInput,
  ShowPasswordContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

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

          return (
            <LoginContainer isDark={isDarkTheme}>
              <LoginFormContainer isDark={isDarkTheme}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />

                <LoginForm onSubmit={this.onShubmitForm}>
                  <InputContainer>
                    <LoginLabel htmlFor="username" isDark={isDarkTheme}>
                      USERNAME
                    </LoginLabel>
                    <LoginInput
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChnageUsername}
                      isDark={isDarkTheme}
                      autoComplete="off"
                    />
                  </InputContainer>

                  <InputContainer>
                    <LoginLabel htmlFor="password" isDark={isDarkTheme}>
                      PASSWORD
                    </LoginLabel>
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChnagePassword}
                      isDark={isDarkTheme}
                    />
                  </InputContainer>

                  <ShowPasswordContainer>
                    <Checkbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onChangeShowPassword}
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      isDark={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>

                  <LoginButton type="submit">Login</LoginButton>

                  {showError && <ErrorMessage>* {errorMsg}</ErrorMessage>}
                </LoginForm>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
