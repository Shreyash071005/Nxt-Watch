import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div
          className={`not-found-container ${
            isDarkTheme
              ? 'not-found-container-dark'
              : 'not-found-container-light'
          }`}
        >
          <Header />
          <div className="not-found-main-content">
            <Sidebar />
            <div className="not-found-content-container">
              <img
                src={notFoundImg}
                alt="not found"
                className="not-found-image"
              />
              <h1
                className={`not-found-heading ${
                  isDarkTheme
                    ? 'not-found-heading-dark'
                    : 'not-found-heading-light'
                }`}
              >
                Page Not Found
              </h1>
              <p
                className={`not-found-description ${
                  isDarkTheme
                    ? 'not-found-description-dark'
                    : 'not-found-description-light'
                }`}
              >
                we are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
