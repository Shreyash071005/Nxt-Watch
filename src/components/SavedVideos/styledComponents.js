import styled from 'styled-components'
import {Link} from 'react-router-dom'

/* ─── SAVED VIDEO CONTAINER ─── */

export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#f9f9f9')};
`

/* ─── SAVED VIDEO CONTENT CONTAINER ─── */

export const SavedVideoContentContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`

/* ─── SAVED VIDEOS CARD CONTAINER ─── */

export const SavedVideosCardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

/* ─── NO VIDEO CONTAINER ─── */

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const NoSavedImg = styled.img`
  width: 100%;
  max-width: 400px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
`

export const NoVideosDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  max-width: 450px;
  color: ${({isDark}) => (isDark ? '#94a3b8' : '#64748b')};
`

/* ─── SAVED VIDEOS HEADER ─── */

export const SavedVideosHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#f1f1f1')};
`

export const SavedVideosHeaderIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#e1e9f0')};
`

export const SavedVideosHeaderIcon = styled.span`
  font-size: 30px;
  color: #ff031c;
  display: flex;
  align-items: center;
`

export const SavedVideosHeaderHeading = styled.h1`
  font-size: 20px;
  margin: 0;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#20293c')};
`

/* ─── SAVED VIDEO CARD LIST ─── */

export const SavedVideoCardListContainer = styled.ul`
  list-style-type: none;
  padding: 15px 0;
  margin: 0;

  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`

export const SavedVideoCard = styled.li`
  margin-bottom: 24px;
  max-width: 600px;
`

export const SavedVideoLink = styled(Link)`
  text-decoration: none;

  @media screen and (min-width: 576px) {
    display: flex;
    gap: 16px;
  }
`

export const SavedVideoThumbnail = styled.img`
  width: 100%;
  display: block;
`

export const SavedVideoDetails = styled.div`
  display: flex;
  padding: 12px;
`

export const SavedChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedVideoContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedVideoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.5;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
`

export const SavedChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #64748b;
  margin: 0;
`

export const SavedVideoMeta = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 12px;

  p {
    margin: 5px 0;
  }
`

export const Dot = styled.span`
  margin: 0 8px;
`
