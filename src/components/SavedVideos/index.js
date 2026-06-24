import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import SavedVideosContext from '../../Context/SavedVideosContext'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  SavedVideoContainer,
  SavedVideoContentContainer,
  SavedVideosCardContainer,
  NoVideoContainer,
  NoSavedImg,
  NoVideosHeading,
  NoVideosDescription,
  SavedVideosHeader,
  SavedVideosHeaderIconContainer,
  SavedVideosHeaderIcon,
  SavedVideosHeaderHeading,
  SavedVideoCardListContainer,
  SavedVideoCard,
  SavedVideoLink,
  SavedVideoThumbnail,
  SavedVideoDetails,
  SavedChannelLogo,
  SavedVideoContent,
  SavedVideoTitle,
  SavedChannelName,
  SavedVideoMeta,
  Dot,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideosView = isDark => (
    <NoVideoContainer>
      <NoSavedImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHeading isDark={isDark}>No saved videos found</NoVideosHeading>
      <NoVideosDescription isDark={isDark}>
        You can save your videos while watching them
      </NoVideosDescription>
    </NoVideoContainer>
  )

  renderSavedVideosList = (isDark, savedVideosList) => (
    <>
      <SavedVideosHeader isDark={isDark}>
        <SavedVideosHeaderIconContainer isDark={isDark}>
          <SavedVideosHeaderIcon>
            <HiFire />
          </SavedVideosHeaderIcon>
        </SavedVideosHeaderIconContainer>
        <SavedVideosHeaderHeading isDark={isDark}>
          Saved Videos
        </SavedVideosHeaderHeading>
      </SavedVideosHeader>

      <SavedVideoCardListContainer>
        {savedVideosList.map(eachVideo => (
          <SavedVideoCard key={eachVideo.id}>
            <SavedVideoLink to={`/videos/${eachVideo.id}`}>
              <SavedVideoThumbnail
                src={eachVideo.thumbnailUrl}
                alt="video thumbnail"
              />

              <SavedVideoDetails>
                <SavedChannelLogo
                  src={eachVideo.channel.profileImageUrl}
                  alt="channel logo"
                />

                <SavedVideoContent>
                  <SavedVideoTitle isDark={isDark}>
                    {eachVideo.title}
                  </SavedVideoTitle>

                  <SavedVideoMeta>
                    <SavedChannelName>
                      {eachVideo.channel.name}
                    </SavedChannelName>
                    <Dot>•</Dot>
                    <p>{eachVideo.viewCount} views</p>
                    <Dot>•</Dot>
                    <p>{eachVideo.publishedAt}</p>
                  </SavedVideoMeta>
                </SavedVideoContent>
              </SavedVideoDetails>
            </SavedVideoLink>
          </SavedVideoCard>
        ))}
      </SavedVideoCardListContainer>
    </>
  )

  renderSavedVideoContainer = (isDark, savedVideosList) => {
    if (savedVideosList.length === 0) {
      return this.renderNoVideosView(isDark)
    }
    return this.renderSavedVideosList(isDark, savedVideosList)
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {savedValueContext => (
          <ThemeContext.Consumer>
            {themeValue => {
              const {savedVideosList} = savedValueContext
              const {isDarkTheme} = themeValue

              return (
                <SavedVideoContainer
                  isDark={isDarkTheme}
                  data-testid="savedVideos"
                >
                  <Header />
                  <SavedVideoContentContainer>
                    <Sidebar />
                    <SavedVideosCardContainer>
                      {this.renderSavedVideoContainer(
                        isDarkTheme,
                        savedVideosList,
                      )}
                    </SavedVideosCardContainer>
                  </SavedVideoContentContainer>
                </SavedVideoContainer>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}

export default SavedVideos
