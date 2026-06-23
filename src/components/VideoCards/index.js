import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import './index.css'

const VideoCards = props => {
  const {videoList, isDarkTheme} = props
  return (
    <ul className="videos-cards-container">
      {videoList.map(eachVideo => (
        <li key={eachVideo.id} className="video-card">
          <Link to={`/videos/${eachVideo.id}`} className="link-container">
            <img
              src={eachVideo.thumbnailUrl}
              alt="video thumbnail"
              className="video-thumbnail"
            />
            <div className="video-details">
              <img
                src={eachVideo.channel.profileImageUrl}
                alt="channel logo"
                className="channel-logo"
              />

              <div className="video-card-content">
                <p
                  className={`video-title ${
                    isDarkTheme ? 'video-title-dark' : 'video-title-light'
                  }`}
                >
                  {eachVideo.title}
                </p>

                <div className="channel-details-container">
                  <p className="channel-name">{eachVideo.channel.name}</p>
                  <div className="video-meta-data">
                    <span className="dot">•</span>
                    <p>{eachVideo.viewCount} views</p>
                    <span className="dot">•</span>
                    <p>
                      {formatDistanceToNowStrict(
                        new Date(eachVideo.publishedAt),
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default VideoCards
