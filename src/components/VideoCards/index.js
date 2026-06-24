import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideosCardsContainer,
  LinkContainer,
  VideoCard,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoCardContent,
  VideoTitle,
  ChannelDetailsContainer,
  ChannelName,
  VideoMetaData,
  Dot,
} from './styledComponents'

const VideoCards = props => {
  const {videoList, isDarkTheme} = props

  return (
    <VideosCardsContainer>
      {videoList.map(eachVideo => (
        <VideoCard key={eachVideo.id}>
          <LinkContainer to={`/videos/${eachVideo.id}`}>
            <VideoThumbnail
              src={eachVideo.thumbnailUrl}
              alt="video thumbnail"
            />

            <VideoDetails>
              <ChannelLogo
                src={eachVideo.channel.profileImageUrl}
                alt="channel logo"
              />

              <VideoCardContent>
                <VideoTitle isDarkTheme={isDarkTheme}>
                  {eachVideo.title}
                </VideoTitle>

                <ChannelDetailsContainer>
                  <ChannelName>{eachVideo.channel.name}</ChannelName>

                  <VideoMetaData>
                    <Dot>•</Dot>

                    <p>{eachVideo.viewCount} views</p>

                    <Dot>•</Dot>

                    <p>
                      {formatDistanceToNowStrict(
                        new Date(eachVideo.publishedAt),
                      )}
                    </p>
                  </VideoMetaData>
                </ChannelDetailsContainer>
              </VideoCardContent>
            </VideoDetails>
          </LinkContainer>
        </VideoCard>
      ))}
    </VideosCardsContainer>
  )
}

export default VideoCards
