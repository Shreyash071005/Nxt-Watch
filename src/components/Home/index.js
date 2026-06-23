import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoSearchOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoCards from '../VideoCards'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchHomeVideos()
  }

  fetchHomeVideos = async (searchText = '') => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const resposnce = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchText}`,
      options,
    )
    const data = await resposnce.json()
    if (resposnce.ok === true) {
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearchBtn = () => {
    const {searchValue} = this.state
    this.fetchHomeVideos(searchValue)
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = isDarkTheme => (
    <div className="failure-container">
      <img
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="failure-image"
      />
      <h1
        className={`failure-heading ${
          isDarkTheme ? 'failure-heading-dark' : 'failure-heading-light'
        }`}
      >
        Oops! Something Went Wrong
      </h1>
      <p
        className={`failure-description ${
          isDarkTheme ? 'failure-description-dark' : 'failure-description-light'
        }`}
      >
        We are having some trouble
      </p>
      <button
        type="button"
        className="retry-button"
        onClick={() => this.fetchHomeVideos()}
      >
        Retry
      </button>
    </div>
  )

  noSearchResultView = isDarkTheme => (
    <div className="no-results-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="no-results-image"
      />
      <h1
        className={`no-results-heading ${
          isDarkTheme ? 'no-results-heading-dark' : 'no-results-heading-light'
        }`}
      >
        No Search results found
      </h1>
      <p
        className={`no-results-description ${
          isDarkTheme
            ? 'no-results-description-dark'
            : 'no-results-description-light'
        }`}
      >
        Try different key words or remove search filter
      </p>
      <button
        type="button"
        className="retry-button"
        onClick={() => this.fetchHomeVideos()}
      >
        Retry
      </button>
    </div>
  )

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.noSearchResultView(isDarkTheme)
    }

    return <VideoCards videoList={videosList} isDarkTheme={isDarkTheme} />
  }

  renderHomeContent = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView(isDarkTheme)

      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)

      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)

      default:
        return null
    }
  }

  render() {
    const {showBanner, searchValue} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div className="home-container">
              <Header />

              <div className="home-content-container">
                <Sidebar />

                <div className="video-content">
                  {showBanner && (
                    <div className="banner-container" data-testid="banner">
                      <div className="banner-close-container">
                        <button
                          type="button"
                          className="close-btn"
                          data-testid="close"
                        >
                          <IoMdClose
                            className="close-icon"
                            onClick={this.onClickCloseBanner}
                          />
                        </button>
                      </div>

                      <div className="banner-content">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          className="nxt-watch-logo"
                        />

                        <p className="banner-description">
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </p>

                        <button type="button" className="banner-button">
                          GET IT NOW
                        </button>
                      </div>
                    </div>
                  )}

                  <div
                    className={`home-videos-container ${
                      isDarkTheme
                        ? 'home-videos-container-dark'
                        : 'home-videos-container-light'
                    }`}
                    data-testid="home"
                  >
                    <div className="search-container">
                      <input
                        type="search"
                        placeholder="Search"
                        className={`search-input ${
                          isDarkTheme
                            ? 'search-input-dark'
                            : 'search-input-light'
                        }`}
                        value={searchValue}
                        onChange={this.onChangeSearch}
                        data-testid="searchButton"
                      />

                      <button
                        className={`search-button ${
                          isDarkTheme
                            ? 'search-button-dark'
                            : 'search-button-light'
                        }`}
                        type="button"
                        onClick={this.onClickSearchBtn}
                      >
                        <IoSearchOutline className="search-icon" />
                      </button>
                    </div>

                    {this.renderHomeContent(isDarkTheme)}
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

export default Home
