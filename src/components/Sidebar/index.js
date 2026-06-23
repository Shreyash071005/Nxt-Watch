import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../Context/ThemeContext'

import './index.css'

const SideBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {location} = props
      const {pathname} = location

      const isHomeActive = pathname === '/'
      const isTrendingActive = pathname === '/trending'
      const isGamingActive = pathname === '/gaming'
      const isSavedVideosActive = pathname === '/saved-videos'

      const getActiveClass = isActive => {
        if (!isActive) {
          return ''
        }

        return isDarkTheme
          ? 'sidebar-active-menu-dark'
          : 'sidebar-active-menu-light'
      }

      return (
        <div
          className={`sidebar-menu-container ${
            isDarkTheme
              ? 'sidebar-menu-container-dark'
              : 'sidebar-menu-container-light'
          }`}
        >
          <ul className="siebar-menu-list">
            <Link to="/" className="sidebar-menu-link">
              <li
                className={`sidebar-menu-item ${getActiveClass(isHomeActive)}`}
              >
                <AiFillHome
                  className={`sidebar-menu-icon ${
                    isHomeActive ? 'sidebar-active-icon' : ''
                  }`}
                />
                <p
                  className={`sidebar-menu-text ${
                    isDarkTheme
                      ? 'sidebar-menu-text-dark'
                      : 'sidebar-menu-text-light'
                  }`}
                >
                  Home
                </p>
              </li>
            </Link>

            <Link to="/trending" className="sidebar-menu-link">
              <li
                className={`sidebar-menu-item ${getActiveClass(
                  isTrendingActive,
                )}`}
              >
                <HiFire
                  className={`sidebar-menu-icon ${
                    isTrendingActive ? 'sidebar-active-icon' : ''
                  }`}
                />
                <p
                  className={`sidebar-menu-text ${
                    isDarkTheme
                      ? 'sidebar-menu-text-dark'
                      : 'sidebar-menu-text-light'
                  }`}
                >
                  Trending
                </p>
              </li>
            </Link>

            <Link to="/gaming" className="sidebar-menu-link">
              <li
                className={`sidebar-menu-item ${getActiveClass(
                  isGamingActive,
                )}`}
              >
                <SiYoutubegaming
                  className={`sidebar-menu-icon ${
                    isGamingActive ? 'sidebar-active-icon' : ''
                  }`}
                />
                <p
                  className={`sidebar-menu-text ${
                    isDarkTheme
                      ? 'sidebar-menu-text-dark'
                      : 'sidebar-menu-text-light'
                  }`}
                >
                  Gaming
                </p>
              </li>
            </Link>

            <Link to="/saved-videos" className="sidebar-menu-link">
              <li
                className={`sidebar-menu-item ${getActiveClass(
                  isSavedVideosActive,
                )}`}
              >
                <CgPlayListAdd
                  className={`sidebar-menu-icon ${
                    isSavedVideosActive ? 'sidebar-active-icon' : ''
                  }`}
                />
                <p
                  className={`sidebar-menu-text ${
                    isDarkTheme
                      ? 'sidebar-menu-text-dark'
                      : 'sidebar-menu-text-light'
                  }`}
                >
                  Saved Videos
                </p>
              </li>
            </Link>
          </ul>

          <div className="contact-container">
            <p
              className={`contact-heading ${
                isDarkTheme ? 'contact-heading-dark' : 'contact-heading-light'
              }`}
            >
              CONTACT US
            </p>
            <div className="social-media-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="social-media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="social-media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="social-media-logo"
              />
            </div>
            <p
              className={`contact-description ${
                isDarkTheme
                  ? 'contact-description-dark'
                  : 'contact-description-light'
              }`}
            >
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
