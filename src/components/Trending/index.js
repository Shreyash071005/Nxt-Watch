import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCards from '../VideoCards'
import {
  TrendingContainer,
  TrendingContentContainer,
  TrendingVideosContainer,
  TrendingVideosHeader,
  TrendingIconContainer,
  TrendingHeading,
  TrendingVideosContentContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  TrendingIcon,
} from './styledComponents'

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
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => (
    <FailureContainer>
      <FailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />

      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>

      <FailureDescription isDarkTheme={isDarkTheme}>
        We are having some trouble
      </FailureDescription>

      <RetryButton type="button" onClick={this.fetchTrendingvideoList}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = isDarkTheme => {
    const {trendingVideoList} = this.state
    return (
      <>
        <TrendingVideosHeader isDarkTheme={isDarkTheme}>
          <TrendingIconContainer isDarkTheme={isDarkTheme}>
            <TrendingIcon />
          </TrendingIconContainer>

          <TrendingHeading isDarkTheme={isDarkTheme}>Trending</TrendingHeading>
        </TrendingVideosHeader>

        <TrendingVideosContentContainer isDarkTheme={isDarkTheme}>
          <VideoCards videoList={trendingVideoList} isDarkTheme={isDarkTheme} />
        </TrendingVideosContentContainer>
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
            <TrendingContainer isDarkTheme={isDarkTheme} data-testid="trending">
              <Header />

              <TrendingContentContainer>
                <Sidebar />

                <TrendingVideosContainer>
                  {this.renderTrendingViewContainer(isDarkTheme)}
                </TrendingVideosContainer>
              </TrendingContentContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
