import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  GamingContainer,
  GamingContentContainer,
  GamingDetailsContainer,
  LoaderContainer,
  GamingFailureContainer,
  GamingFailureImage,
  GamingFailureHeading,
  GamingFailureDescription,
  RetryButton,
  GamingVideosHeader,
  GamingIconContainer,
  GamingHeading,
  GamingCardsListContainer,
  GamingCard,
  GamingThumbnail,
  GamingTitle,
  GamingViews,
  GamingLink,
} from './styledComponents'

const apiStatusConstantValue = {
  initial: 'INITAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstantValue.initial,
    gamingVideoList: [],
  }

  componentDidMount() {
    this.fetchGamingDetails()
  }

  fetchGamingDetails = async () => {
    this.setState({apiStatus: apiStatusConstantValue.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)

    const data = await response.json()

    if (response.ok === true) {
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstantValue.success,
        gamingVideoList: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstantValue.failure,
      })
    }
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => (
    <GamingFailureContainer>
      <GamingFailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />

      <GamingFailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </GamingFailureHeading>

      <GamingFailureDescription isDarkTheme={isDarkTheme}>
        We are having some trouble
      </GamingFailureDescription>

      <RetryButton type="button" onClick={this.fetchGamingDetails}>
        Retry
      </RetryButton>
    </GamingFailureContainer>
  )

  renderSuccessView = isDarkTheme => {
    const {gamingVideoList} = this.state

    return (
      <>
        <GamingVideosHeader isDarkTheme={isDarkTheme}>
          <GamingIconContainer isDarkTheme={isDarkTheme}>
            <SiYoutubegaming size={30} color="#ff031c" />
          </GamingIconContainer>

          <GamingHeading isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
        </GamingVideosHeader>

        <GamingCardsListContainer>
          {gamingVideoList.map(eachVideo => (
            <GamingCard key={eachVideo.id}>
              <GamingLink to={`/videos/${eachVideo.id}`}>
                <GamingThumbnail
                  src={eachVideo.thumbnailUrl}
                  alt="video thumbnail"
                />

                <GamingTitle isDarkTheme={isDarkTheme}>
                  {eachVideo.title}
                </GamingTitle>

                <GamingViews>
                  {eachVideo.viewCount} Watching Worldwide
                </GamingViews>
              </GamingLink>
            </GamingCard>
          ))}
        </GamingCardsListContainer>
      </>
    )
  }

  renderGamingContent = isDarkTheme => {
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
            <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
              <Header />

              <GamingContentContainer>
                <Sidebar />

                <GamingDetailsContainer>
                  {this.renderGamingContent(isDarkTheme)}
                </GamingDetailsContainer>
              </GamingContentContainer>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
