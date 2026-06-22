import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
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

          const {location} = this.props
          const {pathname} = location

          const isHomeActive = pathname === '/'
          const isTrendingActive = pathname === '/trending'
          const isGamingActive = pathname === '/gaming'
          const isSavedVideosActive = pathname === '/saved-videos'

          const getActiveClass = isActive => {
            if (!isActive) {
              return ''
            }

            if (isDarkTheme) {
              return 'active-menu-dark'
            }

            return 'active-menu-light'
          }

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

                {/* Menu Pop Up */}

                <div>
                  <div className="md-user-icon-account">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profile-icon"
                    />
                  </div>

                  <div className="sm-menu-icon">
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="control-btn">
                          <GiHamburgerMenu
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
                          className={`menu-popup-container ${
                            isDarkTheme
                              ? 'menu-popup-container-dark'
                              : 'menu-popup-container-light'
                          }`}
                        >
                          <div className="menu-close-container">
                            <button
                              type="button"
                              className={`menu-close-button ${
                                isDarkTheme
                                  ? 'menu-close-button-dark'
                                  : 'menu-close-button-light'
                              }`}
                              onClick={() => close()}
                            >
                              <IoMdClose
                                className={`icons ${
                                  isDarkTheme ? 'dark-icons' : 'light-icons'
                                }`}
                              />
                            </button>
                          </div>

                          <ul className="menu-list">
                            <Link to="/" className="menu-link">
                              <li
                                className={`menu-item ${getActiveClass(
                                  isHomeActive,
                                )}`}
                              >
                                <AiFillHome
                                  className={`menu-icon ${
                                    isHomeActive ? 'active-icon' : ''
                                  }`}
                                />
                                <p
                                  className={`menu-text ${
                                    isDarkTheme
                                      ? 'menu-text-dark'
                                      : 'menu-text-light'
                                  }`}
                                >
                                  Home
                                </p>
                              </li>
                            </Link>

                            <Link to="/trending" className="menu-link">
                              <li
                                className={`menu-item ${getActiveClass(
                                  isTrendingActive,
                                )}`}
                              >
                                <HiFire
                                  className={`menu-icon ${
                                    isTrendingActive ? 'active-icon' : ''
                                  }`}
                                />
                                <p
                                  className={`menu-text ${
                                    isDarkTheme
                                      ? 'menu-text-dark'
                                      : 'menu-text-light'
                                  }`}
                                >
                                  Trending
                                </p>
                              </li>
                            </Link>

                            <Link to="/gaming" className="menu-link">
                              <li
                                className={`menu-item ${getActiveClass(
                                  isGamingActive,
                                )}`}
                              >
                                <SiYoutubegaming
                                  className={`menu-icon ${
                                    isGamingActive ? 'active-icon' : ''
                                  }`}
                                />
                                <p
                                  className={`menu-text ${
                                    isDarkTheme
                                      ? 'menu-text-dark'
                                      : 'menu-text-light'
                                  }`}
                                >
                                  Gaming
                                </p>
                              </li>
                            </Link>

                            <Link to="/saved-videos" className="menu-link">
                              <li
                                className={`menu-item ${getActiveClass(
                                  isSavedVideosActive,
                                )}`}
                              >
                                <CgPlayListAdd
                                  className={`menu-icon ${
                                    isSavedVideosActive ? 'active-icon' : ''
                                  }`}
                                />
                                <p
                                  className={`menu-text ${
                                    isDarkTheme
                                      ? 'menu-text-dark'
                                      : 'menu-text-light'
                                  }`}
                                >
                                  Saved Videos
                                </p>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>

                {/* Logout Pop Up */}

                <div>
                  <div className="md-logout-button">
                    <button
                      type="button"
                      className={`desktop-logout-btn ${
                        isDarkTheme
                          ? 'desktop-logout-btn-dark'
                          : 'desktop-logout-btn-light'
                      }`}
                      onClick={onClickLogout}
                    >
                      Logout
                    </button>
                  </div>

                  <div className="sm-logout-icon">
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
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
