import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoSearchOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoCards from '../VideoCards'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  HomeContainer,
  HomeContentContainer,
  BannerContainer,
  BannerCloseContainer,
  CloseBtn,
  CloseIcon,
  BannerContent,
  NxtWatchLogo,
  BannerDescription,
  BannerButton,
  LoaderContainer,
  VideoContent,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  StatusContainer,
  StatusImage,
  StatusHeading,
  StatusDescription,
  RetryButton,
} from './styledComponents'

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
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDark => (
    <StatusContainer>
      <StatusImage
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <StatusHeading isDark={isDark}>Oops! Something Went Wrong</StatusHeading>
      <StatusDescription isDark={isDark}>
        We are having some trouble
      </StatusDescription>
      <RetryButton type="button" onClick={() => this.fetchHomeVideos()}>
        Retry
      </RetryButton>
    </StatusContainer>
  )

  noSearchResultView = isDark => (
    <StatusContainer>
      <StatusImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <StatusHeading isDark={isDark}>No Search results found</StatusHeading>
      <StatusDescription isDark={isDark}>
        Try different key words or remove search filter
      </StatusDescription>
      <RetryButton type="button" onClick={() => this.fetchHomeVideos()}>
        Retry
      </RetryButton>
    </StatusContainer>
  )

  renderSuccessView = isDark => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.noSearchResultView(isDark)
    }

    return <VideoCards videoList={videosList} isDarkTheme={isDark} />
  }

  renderHomeContent = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()

      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)

      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)

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
            <HomeContainer isDark={isDarkTheme} data-testid="home">
              <Header />

              <HomeContentContainer>
                <Sidebar />

                <VideoContent>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerCloseContainer>
                        <CloseBtn
                          type="button"
                          onClick={this.onClickCloseBanner}
                          data-testid="close"
                        >
                          <CloseIcon>
                            <IoMdClose />
                          </CloseIcon>
                        </CloseBtn>
                      </BannerCloseContainer>

                      <BannerContent>
                        <NxtWatchLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerDescription>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerDescription>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerContent>
                    </BannerContainer>
                  )}

                  <HomeVideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isDark={isDarkTheme}
                        value={searchValue}
                        onChange={this.onChangeSearch}
                      />

                      <SearchButton
                        isDark={isDarkTheme}
                        type="button"
                        onClick={this.onClickSearchBtn}
                        data-testid="searchButton"
                      >
                        <SearchIcon>
                          <IoSearchOutline />
                        </SearchIcon>
                      </SearchButton>
                    </SearchContainer>

                    {this.renderHomeContent(isDarkTheme)}
                  </HomeVideosContainer>
                </VideoContent>
              </HomeContentContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
