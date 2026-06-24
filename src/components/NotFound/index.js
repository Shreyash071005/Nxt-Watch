import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../Context/ThemeContext'
import {
  NotFoundContainer,
  NotFoundMainContent,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundContainer isDark={isDarkTheme}>
          <Header />
          <NotFoundMainContent>
            <Sidebar />
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImg} alt="not found" />
              <NotFoundHeading isDark={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDark={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContentContainer>
          </NotFoundMainContent>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
