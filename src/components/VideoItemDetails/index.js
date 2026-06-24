import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import SavedVideosContext from '../../Context/SavedVideosContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  VideoContainer,
  VideoContentContainer,
  VideoDetailsContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideoPlayerContainer,
  VideoPlayerWrapper,
  VideoPlayerContent,
  VideoTitle,
  VideoStatsContainer,
  VideoViewsDate,
  Dot,
  VideoActionsContainer,
  ActionButton,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscriberCount,
  VideoDescription,
  LikeIcon,
  FilledLikeIcon,
  DislikeIcon,
  FilledDislikeIcon,
  SaveIcon,
} from './styledComponents'

const apiStatusConstantValue = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstantValue.initial,
    videoDetails: {},
    actionBtns: {isLike: false, isDislike: false, isSave: false},
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstantValue.inProgress})
    const {match} = this.props
    const {params} = match

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/${params.id}`,
      options,
    )
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        apiStatus: apiStatusConstantValue.success,
        videoDetails: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantValue.failure})
    }
  }

  onClickLike = () => {
    const {actionBtns} = this.state
    const {isLike} = actionBtns
    if (isLike === true) {
      this.setState(prev => ({
        actionBtns: {...prev.actionBtns, isLike: false},
      }))
    } else {
      this.setState(prev => ({
        actionBtns: {...prev.actionBtns, isLike: true, isDislike: false},
      }))
    }
  }

  onClickDisLike = () => {
    const {actionBtns} = this.state
    const {isDislike} = actionBtns
    if (isDislike === true) {
      this.setState(prev => ({
        actionBtns: {...prev.actionBtns, isDislike: false},
      }))
    } else {
      this.setState(prev => ({
        actionBtns: {...prev.actionBtns, isDislike: true, isLike: false},
      }))
    }
  }

  onClickSave = () => {
    this.setState(prev => ({
      actionBtns: {
        ...prev.actionBtns,
        isSave: !prev.actionBtns.isSave,
      },
    }))
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
        className="video-item-details-failure-image"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDescription isDarkTheme={isDarkTheme}>
        We are having some trouble
      </FailureDescription>
      <RetryButton
        type="button"
        className="retry-button"
        onClick={() => this.fetchVideoDetails()}
      >
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = (isDarkTheme, savedVideosValue) => {
    const {videoDetails, actionBtns} = this.state
    const {isLike, isDislike} = actionBtns

    const {savedVideosList, addSavedVideo, removeSavedVideo} = savedVideosValue

    const isSaved = savedVideosList.some(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    const onClickSaveVideo = () => {
      if (isSaved) {
        removeSavedVideo(videoDetails.id)
      } else {
        addSavedVideo(videoDetails)
      }
    }

    return (
      <VideoPlayerContainer>
        <VideoPlayerWrapper>
          <ReactPlayer
            url={videoDetails.videoUrl}
            controls
            width="100%"
            height="100%"
          />
        </VideoPlayerWrapper>

        <VideoPlayerContent>
          <VideoTitle isDarkTheme={isDarkTheme}>
            {videoDetails.title}
          </VideoTitle>

          <VideoStatsContainer>
            <VideoViewsDate>{videoDetails.viewCount} views</VideoViewsDate>

            <Dot>•</Dot>

            <VideoViewsDate>
              {formatDistanceToNowStrict(new Date(videoDetails.publishedAt))}
            </VideoViewsDate>
          </VideoStatsContainer>

          <VideoActionsContainer>
            <ActionButton
              $isActive={isLike}
              onClick={this.onClickLike}
              type="button"
            >
              {isLike ? <FilledLikeIcon /> : <LikeIcon />}
              Like
            </ActionButton>

            <ActionButton
              $isActive={isDislike}
              onClick={this.onClickDisLike}
              type="button"
            >
              {isDislike ? <FilledDislikeIcon /> : <DislikeIcon />}
              Dislike
            </ActionButton>

            <ActionButton
              $isActive={isSaved}
              onClick={onClickSaveVideo}
              type="button"
            >
              <SaveIcon />
              {isSaved ? 'Saved' : 'Save'}
            </ActionButton>
          </VideoActionsContainer>

          <HorizontalLine />

          <ChannelContainer>
            <ChannelLogo
              src={videoDetails.channel.profileImageUrl}
              alt="channel logo"
            />

            <ChannelDetails>
              <ChannelName isDarkTheme={isDarkTheme}>
                {videoDetails.channel.name}
              </ChannelName>

              <SubscriberCount>
                {videoDetails.channel.subscriberCount} subscribers
              </SubscriberCount>
            </ChannelDetails>
          </ChannelContainer>

          <VideoDescription>{videoDetails.description}</VideoDescription>
        </VideoPlayerContent>
      </VideoPlayerContainer>
    )
  }

  renderPlayerContainer = (isDarkTheme, savedVideosValue) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstantValue.inProgress:
        return this.renderLoaderView()

      case apiStatusConstantValue.failure:
        return this.renderFailureView(isDarkTheme)

      case apiStatusConstantValue.success:
        return this.renderSuccessView(isDarkTheme, savedVideosValue)

      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {savedVideosValue => (
          <ThemeContext.Consumer>
            {themeValue => {
              const {isDarkTheme} = themeValue

              return (
                <VideoContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  <Header />

                  <VideoContentContainer>
                    <Sidebar />

                    <VideoDetailsContainer>
                      {this.renderPlayerContainer(
                        isDarkTheme,
                        savedVideosValue,
                      )}
                    </VideoDetailsContainer>
                  </VideoContentContainer>
                </VideoContainer>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}
export default VideoItemDetails
