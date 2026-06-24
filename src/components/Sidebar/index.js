import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../Context/ThemeContext'

import {
  SidebarContainer,
  SidebarMenuList,
  SidebarMenuLink,
  SidebarMenuItem,
  SidebarMenuText,
  ContactContainer,
  ContactHeading,
  SocialMediaContainer,
  SocialMediaLogo,
  ContactDescription,
} from './styledComponents'

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

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <SidebarMenuList>
            <SidebarMenuLink to="/">
              <SidebarMenuItem
                isActive={isHomeActive}
                isDarkTheme={isDarkTheme}
              >
                <AiFillHome
                  className={`sidebar-menu-icon ${
                    isHomeActive ? 'sidebar-active-icon' : ''
                  }`}
                />

                <SidebarMenuText isDarkTheme={isDarkTheme}>
                  Home
                </SidebarMenuText>
              </SidebarMenuItem>
            </SidebarMenuLink>

            <SidebarMenuLink to="/trending">
              <SidebarMenuItem
                isActive={isTrendingActive}
                isDarkTheme={isDarkTheme}
              >
                <HiFire
                  className={`sidebar-menu-icon ${
                    isTrendingActive ? 'sidebar-active-icon' : ''
                  }`}
                />

                <SidebarMenuText isDarkTheme={isDarkTheme}>
                  Trending
                </SidebarMenuText>
              </SidebarMenuItem>
            </SidebarMenuLink>

            <SidebarMenuLink to="/gaming">
              <SidebarMenuItem
                isActive={isGamingActive}
                isDarkTheme={isDarkTheme}
              >
                <SiYoutubegaming
                  className={`sidebar-menu-icon ${
                    isGamingActive ? 'sidebar-active-icon' : ''
                  }`}
                />

                <SidebarMenuText isDarkTheme={isDarkTheme}>
                  Gaming
                </SidebarMenuText>
              </SidebarMenuItem>
            </SidebarMenuLink>

            <SidebarMenuLink to="/saved-videos">
              <SidebarMenuItem
                isActive={isSavedVideosActive}
                isDarkTheme={isDarkTheme}
              >
                <CgPlayListAdd
                  className={`sidebar-menu-icon ${
                    isSavedVideosActive ? 'sidebar-active-icon' : ''
                  }`}
                />

                <SidebarMenuText isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SidebarMenuText>
              </SidebarMenuItem>
            </SidebarMenuLink>
          </SidebarMenuList>

          <ContactContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>

            <SocialMediaContainer>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />

              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>

            <ContactDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
