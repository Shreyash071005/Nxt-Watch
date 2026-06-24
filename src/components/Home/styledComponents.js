import styled from 'styled-components'

/* ─── HOME CONTAINER ─── */

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#f9f9f9')};
`

/* ─── HOME CONTENT CONTAINER ─── */

export const HomeContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

/* ─── BANNER CONTAINER ─── */

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const BannerCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const CloseIcon = styled.span`
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 380px;
`

export const NxtWatchLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`

export const BannerDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 24px;
`

export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

/* ─── LOADER CONTAINER ─── */

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

/* ─── VIDEO CONTENT ─── */

export const VideoContent = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
`

/* ─── HOME VIDEOS CONTAINER ─── */

export const HomeVideosContainer = styled.div`
  padding: 20px;
`

/* ─── SEARCH SECTION ─── */

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 24px 0;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const SearchInput = styled.input`
  flex-grow: 1;
  height: 30px;
  padding: 0 16px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  outline: none;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
  border: 1px solid ${({isDark}) => (isDark ? '#475569' : '#cbd5e1')};
  border-right: none;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};

  &::placeholder {
    color: ${({isDark}) => (isDark ? '#64748b' : 'inherit')};
  }
`

export const SearchButton = styled.button`
  width: 70px;
  height: 30px;
  cursor: pointer;
  background-color: ${({isDark}) => (isDark ? '#313131' : '#f4f4f4')};
  border: 1px solid ${({isDark}) => (isDark ? '#475569' : '#cbd5e1')};
`

export const SearchIcon = styled.span`
  font-size: 18px;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
`

/* ─── FAILURE & NO RESULTS ─── */

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`

export const StatusImage = styled.img`
  width: 250px;
  margin-bottom: 24px;
`

export const StatusHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
`

export const StatusDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 24px;
  max-width: 320px;
  color: ${({isDark}) => (isDark ? '#94a3b8' : '#475569')};
`

export const RetryButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
