import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCards from '../VideoCards'
import './index.css'

const apiStatusConstantValue = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstantValue.initial, trendingVideoList: []}

  componentDidMount() {
    this.fetchTrendingvideoList()
  }

  fetchTrendingvideoList = async () => {
    this.setState({apiStatus: apiStatusConstantValue.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    const data = await response.json()
    if (response.ok === true) {
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
        apiStatus: apiStatusConstantValue.success,
        trendingVideoList: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantValue.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = isDarkTheme => (
    <div className="trending-failure-container">
      <img
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="trending-failure-image"
      />
      <h1
        className={`failure-heading ${
          isDarkTheme
            ? 'trending-failure-heading-dark'
            : 'trending-failure-heading-light'
        }`}
      >
        Oops! Something Went Wrong
      </h1>
      <p
        className={`failure-description ${
          isDarkTheme
            ? 'trending-failure-description-dark'
            : 'trending-failure-description-light'
        }`}
      >
        We are having some trouble
      </p>
      <button
        type="button"
        className="retry-button"
        onClick={() => this.fetchTrendingvideoList()}
      >
        Retry
      </button>
    </div>
  )

  renderSuccessView = isDarkTheme => {
    const {trendingVideoList} = this.state
    return (
      <>
        <div
          className={`trending-videos-headers ${
            isDarkTheme
              ? 'trending-videos-headers-dark'
              : 'trending-videos-headers-ligth'
          }`}
        >
          <div
            className={`trending-icon-container ${
              isDarkTheme
                ? 'trending-icon-container-dark'
                : 'trending-icon-container-light'
            }`}
          >
            <HiFire className="trending-icon" />
          </div>
          <h1
            className={`trending-heading ${
              isDarkTheme ? 'trending-heading-dark' : 'trending-heading-light'
            }`}
          >
            Trending
          </h1>
        </div>
        <div
          className={`trending-videos-content-container ${
            isDarkTheme
              ? 'trending-videos-content-container-dark'
              : 'trending-videos-content-container-ligth'
          }`}
        >
          <VideoCards videoList={trendingVideoList} isDarkTheme={isDarkTheme} />
        </div>
      </>
    )
  }

  renderTrendingViewContainer = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstantValue.inProgress:
        return this.renderLoaderView()
      case apiStatusConstantValue.failure:
        return this.renderFailureView(isDarkTheme)
      case apiStatusConstantValue.success:
        return this.renderSuccessView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div
              className={`trending-container ${
                isDarkTheme
                  ? 'trending-container-dark'
                  : 'trending-container-ligth'
              }`}
            >
              <Header />

              <div className="trending-content-container">
                <Sidebar />

                <div className="trending-videos-container">
                  {this.renderTrendingViewContainer(isDarkTheme)}
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
