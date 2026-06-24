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
import {
  GlobalStyle,
  HeaderContainer,
  WebsiteLogo,
  ControlButtonContainer,
  ControlBtn,
  StyledIcon,
  ProfileIcon,
  DesktopLogoutBtn,
  MenuPopupContainer,
  MenuCloseContainer,
  MenuCloseButton,
  MenuList,
  MenuLink,
  MenuItem,
  MenuIconWrapper,
  MenuText,
  LogoutPopupContainer,
  LogoutDescription,
  LogoutButtonContainer,
  CancelBtn,
  ConfirmBtn,
  SmOnly,
  MdOnly,
} from './styledComponents'

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

          const {location} = this.props
          const {pathname} = location

          const isHomeActive = pathname === '/'
          const isTrendingActive = pathname === '/trending'
          const isGamingActive = pathname === '/gaming'
          const isSavedVideosActive = pathname === '/saved-videos'

          const renderLogoutPopup = trigger => (
            <Popup modal trigger={trigger} className="popup-content">
              {close => (
                <LogoutPopupContainer isDark={isDarkTheme}>
                  <LogoutDescription isDark={isDarkTheme}>
                    Are you sure, you want to logout?
                  </LogoutDescription>

                  <LogoutButtonContainer>
                    <CancelBtn
                      type="button"
                      className="logout-button cancel-btn"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelBtn>

                    <ConfirmBtn
                      type="button"
                      className="logout-button confirm-btn"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </ConfirmBtn>
                  </LogoutButtonContainer>
                </LogoutPopupContainer>
              )}
            </Popup>
          )

          return (
            <>
              <GlobalStyle />
              <HeaderContainer isDark={isDarkTheme}>
                <Link to="/">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>

                <ControlButtonContainer>
                  <ControlBtn
                    type="button"
                    onClick={onClickToggleTheme}
                    data-testid="theme"
                  >
                    <StyledIcon isDark={isDarkTheme}>
                      {isDarkTheme ? <IoSunnyOutline /> : <FaMoon />}
                    </StyledIcon>
                  </ControlBtn>

                  {/* Menu Pop Up */}

                  <div>
                    <MdOnly>
                      <ProfileIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </MdOnly>

                    <SmOnly>
                      <Popup
                        modal
                        trigger={
                          <ControlBtn type="button">
                            <StyledIcon isDark={isDarkTheme}>
                              <GiHamburgerMenu />
                            </StyledIcon>
                          </ControlBtn>
                        }
                        className="menu-popup"
                      >
                        {close => (
                          <MenuPopupContainer isDark={isDarkTheme}>
                            <MenuCloseContainer>
                              <MenuCloseButton
                                type="button"
                                isDark={isDarkTheme}
                                onClick={() => close()}
                              >
                                <StyledIcon isDark={isDarkTheme}>
                                  <IoMdClose />
                                </StyledIcon>
                              </MenuCloseButton>
                            </MenuCloseContainer>

                            <MenuList>
                              <MenuLink to="/" onClick={() => close()}>
                                <MenuItem
                                  isActive={isHomeActive}
                                  isDark={isDarkTheme}
                                >
                                  <MenuIconWrapper isActive={isHomeActive}>
                                    <AiFillHome />
                                  </MenuIconWrapper>
                                  <MenuText isDark={isDarkTheme}>Home</MenuText>
                                </MenuItem>
                              </MenuLink>

                              <MenuLink to="/trending" onClick={() => close()}>
                                <MenuItem
                                  isActive={isTrendingActive}
                                  isDark={isDarkTheme}
                                >
                                  <MenuIconWrapper isActive={isTrendingActive}>
                                    <HiFire />
                                  </MenuIconWrapper>
                                  <MenuText isDark={isDarkTheme}>
                                    Trending
                                  </MenuText>
                                </MenuItem>
                              </MenuLink>

                              <MenuLink to="/gaming" onClick={() => close()}>
                                <MenuItem
                                  isActive={isGamingActive}
                                  isDark={isDarkTheme}
                                >
                                  <MenuIconWrapper isActive={isGamingActive}>
                                    <SiYoutubegaming />
                                  </MenuIconWrapper>
                                  <MenuText isDark={isDarkTheme}>
                                    Gaming
                                  </MenuText>
                                </MenuItem>
                              </MenuLink>

                              <MenuLink
                                to="/saved-videos"
                                onClick={() => close()}
                              >
                                <MenuItem
                                  isActive={isSavedVideosActive}
                                  isDark={isDarkTheme}
                                >
                                  <MenuIconWrapper
                                    isActive={isSavedVideosActive}
                                  >
                                    <CgPlayListAdd />
                                  </MenuIconWrapper>
                                  <MenuText isDark={isDarkTheme}>
                                    Saved Videos
                                  </MenuText>
                                </MenuItem>
                              </MenuLink>
                            </MenuList>
                          </MenuPopupContainer>
                        )}
                      </Popup>
                    </SmOnly>
                  </div>

                  {/* Logout Pop Up */}

                  <div>
                    <MdOnly>
                      {renderLogoutPopup(
                        <DesktopLogoutBtn type="button" isDark={isDarkTheme}>
                          Logout
                        </DesktopLogoutBtn>,
                      )}
                    </MdOnly>

                    <SmOnly>
                      {renderLogoutPopup(
                        <ControlBtn type="button">
                          <StyledIcon isDark={isDarkTheme}>
                            <FiLogOut />
                          </StyledIcon>
                        </ControlBtn>,
                      )}
                    </SmOnly>
                  </div>
                </ControlButtonContainer>
              </HeaderContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
