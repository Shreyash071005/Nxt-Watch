import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const GamingDetailsContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`

export const GamingFailureImage = styled.img`
  width: 250px;
  margin-bottom: 24px;
`

export const GamingFailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const GamingFailureDescription = styled.p`
  font-family: Roboto;
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
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const GamingVideosHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`

export const GamingIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e1e9f0')};
`

export const GamingHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#20293c')};
`

export const GamingCardsListContainer = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 18px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px 20px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 24px;
  }
`

export const GamingCard = styled.li`
  display: flex;
  flex-direction: column;
`

export const GamingLink = styled(Link)`
  text-decoration: none;
`

export const GamingThumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`

export const GamingTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 6px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const GamingViews = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #64748b;
  margin: 0;
`
