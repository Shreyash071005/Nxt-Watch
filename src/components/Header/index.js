import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onClickToggleTheme = () => {
            toggleTheme()
          }

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeIcon = isDarkTheme ? (
            <IoSunnyOutline
              className={`icons ${isDarkTheme ? 'dark-icons' : 'light-icons'}`}
            />
          ) : (
            <FaMoon
              className={`icons ${isDarkTheme ? 'dark-icons' : 'light-icons'}`}
            />
          )

          return (
            <div
              className={`header-container ${
                isDarkTheme ? 'dark-header-container' : 'light-header-container'
              }`}
            >
              <div>
                <img
                  src={websiteLogo}
                  alt="website logo"
                  className="website-logo-header"
                />
              </div>

              <div className="control-button-container">
                <button
                  type="button"
                  className="control-btn"
                  onClick={onClickToggleTheme}
                >
                  {themeIcon}
                </button>

                <button type="button" className="control-btn">
                  <GiHamburgerMenu
                    className={`icons ${
                      isDarkTheme ? 'dark-icons' : 'light-icons'
                    }`}
                  />
                </button>

                <Popup
                  modal
                  trigger={
                    <button type="button" className="control-btn">
                      <FiLogOut
                        className={`icons ${
                          isDarkTheme ? 'dark-icons' : 'light-icons'
                        }`}
                      />
                    </button>
                  }
                  className="popup-content"
                >
                  {close => (
                    <div
                      className={`logout-popup-container ${
                        isDarkTheme
                          ? 'logout-popup-container-dark'
                          : 'logout-popup-container-light'
                      }`}
                    >
                      <p
                        className={`logout-description ${
                          isDarkTheme
                            ? 'logout-description-dark'
                            : 'logout-description-light'
                        }`}
                      >
                        Are you sure you want to logout?
                      </p>

                      <div className="logout-button-container">
                        <button
                          type="button"
                          className="logout-button cancel-btn"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          className="logout-button confirm-btn"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
