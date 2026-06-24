import styled from 'styled-components'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 250px;
  margin-bottom: 24px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 24px;
  max-width: 320px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`

export const RetryButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 220px;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`

export const VideoPlayerContent = styled.div`
  padding: 16px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 16px 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const VideoStatsContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const VideoViewsDate = styled.p`
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 14px;
  margin: 0;
`

export const Dot = styled.span`
  margin: 0 8px;
`

export const VideoActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.$isActive ? '#2563eb' : '#64748b')}; /* $isActive */

  span {
    color: inherit;
  }
`

export const LikeIcon = styled(AiOutlineLike)`
  font-size: 18px;
  margin-right: 6px;
`

export const FilledLikeIcon = styled(AiFillLike)`
  font-size: 18px;
  margin-right: 6px;
`

export const DislikeIcon = styled(AiOutlineDislike)`
  font-size: 18px;
  margin-right: 6px;
`

export const FilledDislikeIcon = styled(AiFillDislike)`
  font-size: 18px;
  margin-right: 6px;
`

export const SaveIcon = styled(CgPlayListAdd)`
  font-size: 18px;
  margin-right: 6px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #d7dfe9;
  margin: 16px 0;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const SubscriberCount = styled.p`
  color: #64748b;
  font-size: 12px;
  margin-top: 4px;
`

export const VideoDescription = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
  margin-top: 16px;
`
