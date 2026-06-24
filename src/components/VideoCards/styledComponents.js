import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosCardsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`

export const LinkContainer = styled(Link)`
  text-decoration: none;
`

export const VideoCard = styled.li`
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    max-width: 250px;
  }

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  display: block;
`

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 5px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
`

export const VideoCardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  color: #64748b;
  font-size: 10px;
  margin: 0;

  @media screen and (min-width: 576px) {
    font-size: 12px;
    margin: 6px 0;
  }
`

export const VideoMetaData = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 10px;
  margin: 0;
`

export const Dot = styled.span`
  margin: 0 8px;
`
